document.addEventListener('DOMContentLoaded', () => {
    // State variables
    let shuffledQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let answeredThisQuestion = false;

    // DOM Elements
    const screens = {
        welcome: document.getElementById('welcome-screen'),
        quiz: document.getElementById('quiz-screen'),
        results: document.getElementById('results-screen')
    };

    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackMessage = document.getElementById('feedback-message');
    
    const startButton = document.getElementById('start-button');
    const nextButton = document.getElementById('next-button');
    const restartButton = document.getElementById('restart-button');
    const themeToggleButton = document.getElementById('theme-toggle');

    // Score and Question Counters
    const scoreValueSpan = document.getElementById('score-value');
    const totalScoreSpan = document.getElementById('total-score');
    const scorePercentageSpan = document.getElementById('score-percentage');
    const scoreRing = document.getElementById('score-ring-fg');
    const currentQuestionNumSpan = document.getElementById('current-question-num');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const progressBar = document.getElementById('progress-bar');
    
    // --- THEME TOGGLE ---
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggleButton.addEventListener('click', () => {
        let newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- HELPER FUNCTIONS ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function switchScreen(screenName) {
        Object.values(screens).forEach(screen => screen.classList.remove('active'));
        if (screens[screenName]) {
            screens[screenName].classList.add('active');
        }
    }

    // --- QUIZ LOGIC ---
    function initQuiz() {
        shuffledQuestions = shuffleArray([...scorableQuestions]);
        currentQuestionIndex = 0;
        score = 0;
        answeredThisQuestion = false;

        totalQuestionsSpan.textContent = shuffledQuestions.length;
        totalScoreSpan.textContent = shuffledQuestions.length;
        
        nextButton.textContent = 'Check Answer';
        updateProgressBar();
        displayQuestion();
        switchScreen('quiz');
    }

    function displayQuestion() {
        answeredThisQuestion = false;
        feedbackMessage.textContent = '';
        optionsContainer.innerHTML = '';
        nextButton.disabled = true;

        if (currentQuestionIndex < shuffledQuestions.length) {
            const question = shuffledQuestions[currentQuestionIndex];
            currentQuestionNumSpan.textContent = currentQuestionIndex + 1;
            questionTextElement.textContent = question.question;

            question.options.forEach((option, index) => {
                const optionItem = document.createElement('div');
                optionItem.classList.add('option-item');

                const input = document.createElement('input');
                input.id = `option-${index}`;
                input.value = index;
                input.type = question.type === 'multiple' ? 'checkbox' : 'radio';
                input.name = `question-${currentQuestionIndex}`;
                
                input.addEventListener('change', () => {
                    const anySelected = optionsContainer.querySelector('input:checked');
                    nextButton.disabled = !anySelected;
                });

                const label = document.createElement('label');
                label.htmlFor = `option-${index}`;
                label.classList.add('option-text');
                label.textContent = option;

                // We no longer need the extra event listener on the div
                // The CSS and the label's "for" attribute now handle this correctly.

                optionItem.appendChild(input);
                optionItem.appendChild(label);
                optionsContainer.appendChild(optionItem);
            });
        } else {
            showResults();
        }
    }

    function checkAnswer() {
        if (answeredThisQuestion) return;

        const question = shuffledQuestions[currentQuestionIndex];
        let isCorrect = false;

        if (question.type === 'single') {
            const selectedOption = optionsContainer.querySelector(`input[type="radio"]:checked`);
            if (selectedOption) {
                const selectedIndex = parseInt(selectedOption.value);
                isCorrect = (selectedIndex === question.correctAnswerIndex);
                selectedOption.parentElement.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
        } else if (question.type === 'multiple') {
            const selectedCheckboxes = Array.from(optionsContainer.querySelectorAll(`input[type="checkbox"]:checked`));
            const selectedIndices = selectedCheckboxes.map(cb => parseInt(cb.value)).sort();
            const correctIndices = [...question.correctAnswerIndices].sort();
            
            isCorrect = selectedIndices.length === correctIndices.length && selectedIndices.every((val, index) => val === correctIndices[index]);

            Array.from(optionsContainer.querySelectorAll('input[type="checkbox"]')).forEach(input => {
                const index = parseInt(input.value);
                const wasSelected = selectedIndices.includes(index);
                const isActuallyCorrect = correctIndices.includes(index);

                if(wasSelected && isActuallyCorrect) input.parentElement.classList.add('correct');
                else if (wasSelected && !isActuallyCorrect) input.parentElement.classList.add('incorrect');
                else if (!wasSelected && isActuallyCorrect) input.parentElement.classList.add('correct');
            });
        }

        if (isCorrect) {
            score++;
            feedbackMessage.textContent = 'Correct!';
            feedbackMessage.className = 'feedback-message correct';
        } else {
            feedbackMessage.textContent = 'Incorrect.';
            feedbackMessage.className = 'feedback-message incorrect';
            if (question.type === 'single') {
                 optionsContainer.querySelector(`#option-${question.correctAnswerIndex}`).parentElement.classList.add('correct');
            }
        }
        
        answeredThisQuestion = true;
        optionsContainer.querySelectorAll('input').forEach(input => input.disabled = true);
        optionsContainer.querySelectorAll('.option-item').forEach(item => item.style.cursor = 'default'); 
        
        nextButton.textContent = (currentQuestionIndex === shuffledQuestions.length - 1) ? 'Show Results' : 'Next Question';
    }

    function showResults() {
        scoreValueSpan.textContent = score;
        const percentage = Math.round((score / shuffledQuestions.length) * 100);
        scorePercentageSpan.textContent = `${percentage}%`;
        
        const radius = scoreRing.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;
        
        scoreRing.style.strokeDasharray = `${circumference} ${circumference}`;
        scoreRing.style.strokeDashoffset = offset;

        switchScreen('results');
    }
    
    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // --- EVENT LISTENERS ---
    startButton.addEventListener('click', initQuiz);
    
    restartButton.addEventListener('click', () => {
        switchScreen('welcome');
    });

    nextButton.addEventListener('click', () => {
        if (!answeredThisQuestion) {
            checkAnswer();
        } else {
            currentQuestionIndex++;
            updateProgressBar();
            if (currentQuestionIndex < shuffledQuestions.length) {
                displayQuestion();
                nextButton.textContent = 'Check Answer';
            } else {
                progressBar.style.width = '100%';
                showResults();
            }
        }
    });

    // Initial state
    switchScreen('welcome');
});