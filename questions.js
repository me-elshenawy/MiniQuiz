// questions.js
// This file contains all unique questions from the original questions.js and the provided PDF,
// including feedback questions and deduplicated exam questions with correct answers.

// Array to store all scorable questions
const scorableQuestions = [
    // ===========================================================================
    // Section 1: Feedback Questions (Not scored, retained from original file)
    // ===========================================================================
   

    // ===========================================================================
    // Section 2: Exam Questions (Combined from original file and PDF, deduplicated)
    // ===========================================================================

    // File System and Permissions (NTFS & Share)
    {
        question: "With NTFS: Full Control and Share: Read Only, can you read the file?",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "With NTFS: Full Control and Share: Read Only, can you delete the file?",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "With NTFS: Full Control and Share: Read Only, can you change the file?",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "When you access a file that is stored in a shared folder, which permissions take precedence?",
        type: "single",
        options: ["Most restrictive", "Least restrictive", "NTFS", "Share"],
        correctAnswerIndex: 0
    },
    {
        question: "Which file system should you use for a 2TB USB storing >5GB files?",
        type: "single",
        options: ["FAT", "FAT32", "ExFAT", "CDFS"],
        correctAnswerIndex: 2
    },

    // User Account Control (UAC)
    {
        question: "Which User Account Control (UAC) setting ensures any application requesting an elevation of privilege performs a public key infrastructure (PKI) check?",
        type: "single",
        options: [
            "Only elevate UIAccess apps installed in secure locations",
            "Switch to secure desktop",
            "Only elevate executables that are signed and validated",
            "Detect installations and prompt"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Which Windows feature displays a consent prompt when a user attempts to install software?",
        type: "single",
        options: [
            "Windows Defender",
            "Active Directory (AD)",
            "Windows Hello",
            "User Account Control (UAC)"
        ],
        correctAnswerIndex: 3
    },

    // Accessibility Settings
    {
        question: "Which Windows Settings category should you customize to configure accessibility features (e.g., Narrator settings)?",
        type: "single",
        options: [
            "System",
            "Devices",
            "Network & Internet",
            "Personalization",
            "Ease of Access"
        ],
        correctAnswerIndex: 4
    },

    // File Permissions
    {
        question: "A file was created by Sam. You are not an Administrator on the computer where the file is stored. You need to grant Read permission to Amir. What should you do?",
        type: "single",
        options: [
            "Have Sam grant you the Modify permission for the file",
            "Change the file permissions by connecting through a shared folder",
            "Have Sam grant you the Take Ownership permission for the file",
            "Turn off User Account Control (UAC)"
        ],
        correctAnswerIndex: 2
    },

    // Cloud Scalability
    {
        question: "Which characteristic of cloud applications allows them to rapidly meet a surge in demand with consistent results?",
        type: "single",
        options: ["Redundancy", "Reliability", "Fault Tolerance", "Scalability"],
        correctAnswerIndex: 3
    },

    // Backup Types
    {
        question: "Match each backup type to its correct description. (Choose all correct statements)",
        type: "multiple",
        options: [
            "Full → A backup of all data on the drive at a given time",
            "Incremental → A backup of all data created or changed since the last backup (any type)",
            "Differential → A backup of all data created or changed since the last full backup",
            "Mirror → A backup that automatically updates as data changes on the drive"
        ],
        correctAnswerIndices: [0, 1, 2, 3]
    },
    {
        question: "Which backup type takes the least amount of time to back up data but the longest amount of time to restore all data?",
        type: "single",
        options: ["Full", "Incremental", "Differential"],
        correctAnswerIndex: 1
    },

    // Group Policy
    {
        question: "In which order are group policies applied in an Active Directory domain?",
        type: "multiple",
        options: [
            "1. Local Group Policy",
            "2. Site Group Policy",
            "3. Domain Group Policy",
            "4. Organizational Unit (OU) Group Policy"
        ],
        correctAnswerIndices: [0, 1, 2, 3]
    },
    {
        question: "A user reports that their Windows 10 is not applying new security settings. To manually refresh the settings on the computer, what should you do?",
        type: "single",
        options: [
            "Open System Information and choose Refresh from the View menu",
            "Run the 'gpupdate /force' command from the command prompt",
            "Open Local Security Policy and choose Reload from the Action menu",
            "Run the 'gpresult /h' command from the command prompt"
        ],
        correctAnswerIndex: 1
    },

    // Microsoft Store
    {
        question: "What is the primary purpose of the Microsoft Store?",
        type: "single",
        options: [
            "It hosts non-Windows apps that users can convert for installation on Windows platform",
            "It provides an online repository from which developers can test and distribute Windows 10 app source code",
            "It allows users to install apps that have been verified to work correctly on Windows (a digital distribution platform for Microsoft approved applications)",
            "It hosts legacy desktop app that users can download for installation on Windows 10 PC"
        ],
        correctAnswerIndex: 2
    },

    // Display Ports and Connectors
    {
        question: "For each port connection type, select the data it transmits. (Choose all correct statements)",
        type: "multiple",
        options: [
            "DisplayPort → Audio & Video",
            "DVI → Video only",
            "HDMI → Audio & Video",
            "USB-C → Audio & Video",
            "VGA → Video only"
        ],
        correctAnswerIndices: [0, 1, 2, 3, 4]
    },
    {
        question: "Users report that the display cable frequently disconnects itself from their monitor. They would like a display cable with a connector that latches in place. Which type of display connector should you recommend?",
        type: "single",
        options: ["HDMI", "USB-C", "DisplayPort", "Thunderbolt"],
        correctAnswerIndex: 2
    },
    {
        question: "Which video cable should you have ready to connect a new gaming console (Xbox Series X or PlayStation 5) to a television without using a converter?",
        type: "single",
        options: ["USB-C", "DVI-DL", "HDMI", "VGA"],
        correctAnswerIndex: 2
    },
    {
        question: "True or False: A DVI cable can be plugged into a VGA port without an adapter.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: A USB-C cable can be plugged into a USB-A port without an adapter.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: A USB 3.0 cable can be plugged into a USB 1.0 port without an adapter.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // Wireless Keyboard Troubleshooting
    {
        question: "Your wireless keyboard is not working. Which two steps should you take to troubleshoot the problem?",
        type: "multiple",
        options: [
            "Disable Windows firewall",
            "Confirm the device driver is installed",
            "Restart the wireless network adapter",
            "Change the keyboard batteries"
        ],
        correctAnswerIndices: [1, 3]
    },

    // Disk Management
    {
        question: "Which three tasks can Disk Management perform?",
        type: "multiple",
        options: [
            "Create volume",
            "Compress files",
            "Format volume",
            "Create restore point",
            "Initialize new disk"
        ],
        correctAnswerIndices: [0, 2, 4]
    },
    {
        question: "True or False: Setting up a new drive is done through Disk Management.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Freeing up disk space for a slow running computer is done through Disk Management.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: Manually updating drivers can be done through Device Manager.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // User Accounts
    {
        question: "True or False: Each user account in Windows 10 must be a Microsoft account.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: Creating a user account does not use any local hard drive space.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: Any standard user account can be promoted to an Administrator account.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "A user wants a recommendation for an account type to easily share files and settings between multiple, personally-owned computers at home. Which account type should you recommend?",
        type: "single",
        options: [
            "Microsoft Account",
            "Guest Account",
            "Local Account",
            "Domain Account"
        ],
        correctAnswerIndex: 0
    },

    // Windows Installation
    {
        question: "True or False: An upgrade is faster but a clean install is healthier for the computer.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: If the installation fails during a clean install, you can revert to a previous operating system automatically.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: If the installation fails during an upgrade, the previous operating system is automatically restored.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "You install a new feature update on Windows 10 machines, then install a new application. The update caused issues. You want to revert to the previous version of Windows but keep your newly installed application. Which feature should you use?",
        type: "single",
        options: [
            "Reset the PC",
            "Go back to the previous build",
            "System image recovery",
            "System restore"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "True or False: You can add a second keyboard layout during Windows installation.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: You need a Microsoft account to join the computer to a domain during Windows installation.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: You can change the advertising ID privacy setting during Windows installation.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "When installing Windows 10 for a customer, True or False: You should change the default time zone to the customer's time zone if they don't have internet access.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "When installing Windows 10 for a customer, True or False: You should configure the computer to use a local account if the customer needs to sign in offline.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: More than one English language option is available during Windows 10 installation.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Windows 10 installation options include USB or network share.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Choosing the Upgrade option overwrites all installed applications and settings.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },

    // Microsoft Intune
    {
        question: "Which device requirement must be met to support communication between the devices and the Microsoft Intune administrative console?",
        type: "single",
        options: [
            "Devices must enroll in the Intune service",
            "All devices must be domain members",
            "All enrolled devices must be in the same device category",
            "Windows computers must run Windows 8.1 or later"
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Which Microsoft service is used to manage laptop computers and mobile devices?",
        type: "single",
        options: ["Intune", "Azure", "Teams", "Yammer"],
        correctAnswerIndex: 0
    },

    // Backup and Restore
    {
        question: "Which type of backup, in combination with a full backup, allows you to restore all data most quickly?",
        type: "single",
        options: ["Copy", "Differential", "Incremental", "Incremental forever"],
        correctAnswerIndex: 1
    },

    // Windows Updates
    {
        question: "Which two types of Windows updates might be included in a Quality update?",
        type: "multiple",
        options: ["Feature updates", "Critical updates", "Security updates", "Microsoft product updates"],
        correctAnswerIndices: [1, 2]
    },

    // Network Segmentation
    {
        question: "Match the user type to the most-privileged network segment they should have access to for maximum security.",
        type: "multiple",
        options: [
            "Guests → Public Network",
            "Employees → Private Network",
            "Business Partners → Extranet"
        ],
        correctAnswerIndices: [0, 1, 2]
    },
    {
        question: "True or False: Network discovery is turned off to prevent other devices on the network from seeing your computer, which is a characteristic of a Public network profile.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: A Private network profile is typically used for home or office networks where you trust the devices connected.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: A Public network profile is used when you connect as a guest to a network where you do not have a user account.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // Microsoft Teams
    {
        question: "In which Microsoft cloud service can you participate in video conferences?",
        type: "single",
        options: ["Teams", "Azure", "OneDrive", "Intune"],
        correctAnswerIndex: 0
    },

    // Disk Error Scanning
    {
        question: "In the disk Properties dialog box (Tools tab is active), where should you go to start the utility that scans your drive for errors?",
        type: "single",
        options: ["Disk Cleanup", "The Hardware tab", "The Security tab", "The Tools tab"],
        correctAnswerIndex: 3
    },

    // Retention Policies
    {
        question: "Your company needs to implement a company-wide solution where email messages remain in the Deleted Items folder no longer than a specified time, and individual users can't change the settings. Which solution meets these requirements?",
        type: "single",
        options: ["Retention Label", "Acceptable Use Policy", "File Plan", "Retention Policy"],
        correctAnswerIndex: 3
    },
    {
        question: "Your company handles sensitive documents that must be saved for a specific period of time and then deleted. You need to ensure employees can classify documents to determine how long they are stored. Which solution meets these conditions?",
        type: "single",
        options: ["User Account Control", "Document Archive Policy", "Acceptable Use Policy", "Retention Labels"],
        correctAnswerIndex: 3
    },

    // Account Types and Permissions
    {
        question: "What is the account type required to turn on built-in Windows features?",
        type: "single",
        options: ["Administrator", "Standard user", "Guest"],
        correctAnswerIndex: 0
    },
    {
        question: "What is the least privileged account type required to install Microsoft Store apps?",
        type: "single",
        options: ["Administrator", "Standard user", "Guest"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the account type required to install applications in the Program Files folder?",
        type: "single",
        options: ["Administrator", "Standard user", "Guest"],
        correctAnswerIndex: 0
    },

    // Device Manager and Hardware Troubleshooting
    {
        question: "You connect a smartphone to a Windows 10 laptop using a USB cable, but the operating system does not recognize the phone. You need to ensure the most recent driver is installed. Which option should you configure?",
        type: "single",
        options: ["Phone and Modem", "Windows Mobility Center", "System Configuration", "Device Manager"],
        correctAnswerIndex: 3
    },
    {
        question: "You connected an external hard drive to your Windows 10 via a USB-C cable, but you cannot find the drive in Windows Explorer. Only the internal drive is visible. Which action should you take in Device Manager?",
        type: "single",
        options: [
            "Update driver",
            "Disable device",
            "Uninstall device",
            "Click 'Scan for hardware changes' from the Action menu"
        ],
        correctAnswerIndex: 3
    },

    // Malware and Security
    {
        question: "How do computer worms differ from other types of malware?",
        type: "single",
        options: [
            "They propagate only when the infected files are copied",
            "They masquerade as valid files or utilities",
            "They are embedded as macros in data files",
            "They can self-replicate across networks"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Match each malware type to its definition. (Choose all correct statements)",
        type: "multiple",
        options: [
            "Self-replicating malware → worm",
            "Malware that is disguised as legitimate software → Trojan horse",
            "An attack that targets websites and servers by distributing network services in an attempt to exhaust application resources → DDOS",
            "An attack that aims to steal or damage sensitive data by deceiving people into revealing personal information like passwords and credit card numbers → Phishing"
        ],
        correctAnswerIndices: [0, 1, 2, 3]
    },
    {
        question: "What are two ways to lower the risk of a virus or other malware infection?",
        type: "multiple",
        options: [
            "Visit only HTTPS sites",
            "Stay current with OS updates",
            "Enable Windows Defender",
            "Install a download manager"
        ],
        correctAnswerIndices: [1, 2]
    },

    // Biometrics
    {
        question: "Which type of information about users do biometrics evaluate?",
        type: "single",
        options: ["The user's location", "Objects a user carries", "Phrases a user has memorized", "The user's physical characteristics"],
        correctAnswerIndex: 3
    },
    {
        question: "Employees currently use smart cards to sign in to the network. You are implementing high-security multifactor authentication. Which second security factor should you use?",
        type: "single",
        options: ["A token", "A mobile phone", "Biometric data", "A magnetic stripe card"],
        correctAnswerIndex: 2
    },

    // Taskbar and Display Customization
    {
        question: "True or False: Users can add custom toolbars to the taskbar in Windows 10.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Users can display the taskbar on any side of the screen in Windows 10.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Users can display a full-screen version of the Start menu in Windows 10.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: The logo on the Start button can be locally configured in Windows 10.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: Taskbar location can be locally configured in Windows 10.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Display resolution and orientation can be locally configured in Windows 10.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Folders that appear in the Start menu can be locally configured in Windows 10.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // Uninstalling Applications
    {
        question: "You need to uninstall a Microsoft Store application. Which two methods can you use?",
        type: "multiple",
        options: [
            "Uninstall the application from the Programs and Features Control Panel applet",
            "Delete the app folder",
            "Right-click the app on the Start menu and click Uninstall",
            "Uninstall the application from Settings > Apps > Apps & Features"
        ],
        correctAnswerIndices: [2, 3]
    },

    // Microsoft Azure
    {
        question: "Which Microsoft product is a collection of integrated services, including virtual machines and remote applications?",
        type: "single",
        options: ["Azure", "Yammer", "Office 365", "SharePoint"],
        correctAnswerIndex: 0
    },

    // Personalization Settings
    {
        question: "Which Windows Setting category customizes personalization (background, lock screen, colors)?",
        type: "single",
        options: [
            "System",
            "Devices",
            "Network",
            "Personalization",
            "Ease of Access",
            "Privacy"
        ],
        correctAnswerIndex: 3
    },

    // Active Directory and Domain
    {
        question: "You manage Windows computers in your university's computer lab. You need to join the computers to a new Active Directory domain. Which Control Panel applet should you use to achieve this goal?",
        type: "single",
        options: ["Network & Internet", "User Accounts", "Administrative Tools", "System"],
        correctAnswerIndex: 3
    },
    {
        question: "Which Windows 10 Professional account type is used to log into an organization network and access the resources and services available on that network?",
        type: "single",
        options: [
            "Domain Account",
            "Local Standard Account",
            "Microsoft account",
            "Local Administrator Account"
        ],
        correctAnswerIndex: 0
    },

    // Microsoft Office Installation
    {
        question: "Which group must you be a member of to install Microsoft Office on a computer?",
        type: "single",
        options: [
            "Network Configuration Operators",
            "Administrators",
            "Backup Operators",
            "Device Owners"
        ],
        correctAnswerIndex: 1
    },

    // Uninstalling Windows Updates
    {
        question: "You need to uninstall a Windows update from a computer. Where should you perform this task?",
        type: "single",
        options: ["Update history", "Advanced Options", "Action Center", "Windows Security"],
        correctAnswerIndex: 0
    },

    // USB Peripherals
    {
        question: "You have a laptop with one USB-A and two USB-C ports. You need to connect: USB-C power adapter, HDMI-supported video monitor, USB-A wireless mouse dongle, USB-A wireless headphone dongle, USB-A graphics tablet. Which two items should you purchase to support this configuration?",
        type: "multiple",
        options: [
            "USB-A hub",
            "USB-A to wireless converter",
            "USB-C to HDMI converter",
            "USB-A power adapter"
        ],
        correctAnswerIndices: [0, 2]
    },

    // Microsoft Cloud Services
    {
        question: "Match each Microsoft cloud service to the feature it provides. (Choose all correct statements)",
        type: "multiple",
        options: [
            "A collection of cloud-based productivity apps → Microsoft 365 (Office 365)",
            "Works like a binder with tabs separating sections and pages → OneNote",
            "Used for storing documentation for collaboration across an organization → SharePoint",
            "Can be used to run an operating system and is accessible from Windows, macOS, or ChromeOS → Windows 365 Cloud PC"
        ],
        correctAnswerIndices: [0, 1, 2, 3]
    },

    // Network Types
    {
        question: "You are helping a small business set up its network. It has twelve desktop computers and two servers on the same switch. Servers host a web-based inventory application for company employees only. A firewall protects from external threats. Which type of network are you configuring?",
        type: "single",
        options: ["Virtual private network (VPN)", "Intranet", "Wide area network (WAN)", "Extranet"],
        correctAnswerIndex: 1
    },

    // File Permissions
    {
        question: "You copy a file from one NTFS drive to another. What are the file permissions of the file copy (not the original file)?",
        type: "single",
        options: [
            "The same as the destination folder.",
            "The combined permissions of the original file and destination folder.",
            "The most restrictive permissions of the original file and destination folder.",
            "The same as the original file."
        ],
        correctAnswerIndex: 0
    },

    // Public Documents Folder
    {
        question: "You have a 3D printer. You store draft files on a Windows computer connected to the printer but not the internet. You need to ensure the files are available to any employee who logs on to the device with their local account. What should you do?",
        type: "single",
        options: [
            "Grant the System account Full Control permissions to the folder containing the files.",
            "Store the files in the Public Documents folder.",
            "Enable the Guest account on the computer.",
            "Store the files in your OneDrive folder."
        ],
        correctAnswerIndex: 1
    },

    // Display Settings
    {
        question: "A laptop is running Windows 10 with an external monitor. You configure for a panoramic display. You need to move the system tray from the laptop screen (Screen 1) to the external monitor (Screen 2). Both screens must continue to display data. Which display setting should you select for the external monitor?",
        type: "single",
        options: ["Show only on 2", "Extend desktop to this display", "Make this my main display", "Custom scaling"],
        correctAnswerIndex: 2
    },
    {
        question: "You connect a Windows 10 laptop to a 50\" FHD television wirelessly to cast a 4K video. You want only media content on the TV, other Desktop menus/icons on the laptop, system tray not visible on the TV, and best clarity/detail. You open display settings and choose the TV. Which settings should you select?",
        type: "multiple",
        options: [
            "Display orientation: Landscape",
            "Display resolution: 1920x1080 (Recommended)",
            "Multiple displays: Extend these displays",
            "Change the size of text, apps, and other items: 100% (Recommended)"
        ],
        correctAnswerIndices: [0, 1, 2, 3]
    },

    // Advanced Startup Options
    {
        question: "Match the troubleshooting scenario with the correct advanced startup option. (Choose all correct statements)",
        type: "multiple",
        options: [
            "To load only the drives required for connecting to other computers → Safe mode with network",
            "To load the most recent drives and registry settings that worked successfully → Last know good configuration",
            "To create a file that contains a list of the drives installed during setup → Enable boot logging"
        ],
        correctAnswerIndices: [0, 1, 2]
    },

    // Acceptable Use Policy (AUP)
    {
        question: "True or False: 'Unacceptable use of the company network' should be part of an Acceptable Use Policy (AUP).",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: 'Possible consequences for violating the AUP' should be part of an Acceptable Use Policy (AUP).",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: 'Acceptable and expected use of the company network' should be part of an Acceptable Use Policy (AUP).",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // Cloud Storage
    {
        question: "What are two advantages of using a cloud storage provider instead of an intranet file server?",
        type: "multiple",
        options: [
            "You maintain complete control of your cloud servers.",
            "Files are available from any location that has internet access.",
            "Cloud storage offers less latency.",
            "Cloud storage supports many different client devices and operating systems."
        ],
        correctAnswerIndices: [1, 3]
    },

    // Task Manager
    {
        question: "You have determined that a non-responsive application is causing your Windows 10 machine to perform poorly. Which Task Manager tab and action should you use to resolve this issue?",
        type: "single",
        options: [
            "Performance → Monitor Resource usage",
            "Services → Stop service",
            "Startup apps → Disable",
            "Processes → End task"
        ],
        correctAnswerIndex: 3
    },
    {
        question: "In Task Manager, which tab should you use to end a program that is not responding?",
        type: "single",
        options: ["Performance", "Startup apps", "Processes", "App history"],
        correctAnswerIndex: 2
    },

    // Microsoft Authenticator
    {
        question: "True or False: The Microsoft Authenticator app can send push notifications to approve sign-in attempts for both local and Microsoft accounts.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: You can use the Microsoft Authenticator app to log in if you forget your password.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: The Microsoft Authenticator app generates time-based one-time passwords as part of multi-factor authentication.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // Network Troubleshooting
    {
        question: "A user cannot connect to the network. You need to determine their IP address and default gateway. Which command should you enter at the command line?",
        type: "single",
        options: ["Ping 0.0.0.0", "Ping 127.0.0.1", "Ipconfig", "Ipconfig /release"],
        correctAnswerIndex: 2
    },
    {
        question: "You need to assign a new IP address to all network adapters on a computer. Which command should you enter at the command prompt?",
        type: "single",
        options: ["Ipconfig /all", "Ipconfig /release", "Ipconfig /renew", "Ipconfig"],
        correctAnswerIndex: 2
    },
    {
        question: "You have lost connection to the Internet and suspect the Wi-Fi connection to your router. What are some troubleshooting steps you can take? (Choose all correct actions)",
        type: "multiple",
        options: [
            "Go to command prompt and run 'ipconfig /renew' (or ping the router).",
            "If the 'No internet' icon is visible, verify Wi-Fi is turned on (or airplane mode is off).",
            "Try restarting the router.",
            "Try forgetting and reconnecting to the network."
        ],
        correctAnswerIndices: [0, 1, 2, 3]
    },

    // Hardware and Storage
    {
        question: "True or False: RAM is non-volatile.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: A low latency HDD is faster than an SSD.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: Physical storage includes SSD, HDD, and flash drives.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // Windows Registry
    {
        question: "What is the primary function of the Windows Registry?",
        type: "single",
        options: [
            "Verifies the integrity of files on the hard drive",
            "Provides protection from malicious software and related threats",
            "Stores data for profiles, applications, and hardware drivers",
            "Indexes data in the file system to improve searching"
        ],
        correctAnswerIndex: 2
    },
    {
        question: "True or False: Registry settings are persistent across system restarts.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Application installers can modify the registry.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Changes to registry settings are immediately backed up to OneDrive.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },

    // Shared Folder Access
    {
        question: "You have access to a shared folder (Share Permissions: Everyone - Full Control) and Remote Desktop to FS1. True or False: You can open a file at \\\\FS1\\\\Training?",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "You have access to a shared folder (Share Permissions: Everyone - Full Control) and Remote Desktop to FS1. True or False: You can create a file at \\\\FS1\\\\Training?",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "You have access to a shared folder (Share Permissions: Everyone - Full Control) and Remote Desktop to FS1. True or False: You can edit a file D:\\projects\\Training if you remote into FS1?",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },

    // Driver Rollback
    {
        question: "A touchpad stopped working after a driver update. You need to make it work again by rolling back the driver. In the Device Manager properties dialog for the touchpad, which button should you click?",
        type: "single",
        options: ["Update Driver", "Disable Device", "Uninstall Device", "Roll Back Driver"],
        correctAnswerIndex: 3
    },

    // File History
    {
        question: "You want to ensure that a Windows 10 computer backs up all files in the D:\\Books folder, even when connected to the Internet. No other folders or files should be backed up. The backup should accrue automatically every 10 minutes and allow restoring previous versions. What should you do?",
        type: "single",
        options: [
            "Configure OneDrive to sync user files",
            "Use Backup and Restore to create a system image",
            "Enable File History to save copies of files to a network drive",
            "Configure System Restore to create restore points on a schedule"
        ],
        correctAnswerIndex: 2
    },

    // Technical Support
    {
        question: "You are a Tier 1 technical support technician. An employee is experiencing an issue that requires specialized knowledge about hardware you are not trained on. How should you assist the user?",
        type: "single",
        options: [
            "Submit a request to be trained in the unique hardware and software to support the employee",
            "Escalate the employee's issue to a Tier 2 technical support technician",
            "Provide the employee with phone numbers for the hardware vendor to receive support",
            "Can the hardware to receive training to help support the employee."
        ],
        correctAnswerIndex: 1
    },

    // Malware Quarantine
    {
        question: "You just ran a malware scan, and Windows Defender quarantined a program. Your IT department confirms it's a false positive. Which action should you take?",
        type: "single",
        options: [
            "Recover the file from quarantine.",
            "Run the scan again",
            "Find and delete the file in Windows Explorer",
            "Reinstall the program"
        ],
        correctAnswerIndex: 0
    },

    // Windows Update Settings
    {
        question: "True or False: Optional updates are accessible directly from Windows Update Advanced Options.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Uninstalling recently installed updates can be accessed under update history.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Required updates that are pending installation will only install when active hours are set.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },

    // Active Directory
    {
        question: "True or False: Active Directory allows users to use their credentials throughout the network.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: Active Directory allows efficient searching of files on your local computer.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: Active Directory allows all users to configure their own rights.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },

    // Monitor Settings
    {
        question: "In which settings can you find monitor resolution and refresh rate?",
        type: "single",
        options: ["Advanced display", "Gaming", "Accessibility", "Device Manager"],
        correctAnswerIndex: 0
    },

    // Windows Hello (Facial Recognition)
    {
        question: "True or False: A Microsoft account is necessary to configure facial recognition (Windows Hello) for sign-in.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: A compatible infrared (IR) camera is needed to set up facial recognition.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: If facial recognition setup fails, the user will be automatically logged in with the saved password.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },

    // Folder Permissions
    {
        question: "Match the permission with its function. (Choose all correct statements)",
        type: "multiple",
        options: [
            "The permission that allows you to create a subfolder is: Write",
            "The permission that allows you to delete a subfolder is: Modify",
            "The permission that allows you to run an application is: Read & Execute"
        ],
        correctAnswerIndices: [0, 1, 2]
    },

    // Application Installation
    {
        question: "True or False: 64-bit applications are installed in the 'C:\\Program Files (x86)' folder.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: Deleting an application's folder and its associated files uninstalls it from the computer and removes the associated registry settings.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: A User Account Control (UAC) prompt displays when Standard Users install applications in the 'Program Files' or 'Program Files (x86)' folders.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // Motherboards
    {
        question: "True or False: A computer's maximum supported RAM capacity and speed are determined by the motherboard.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },
    {
        question: "True or False: You can upgrade an Intel processor to an AMD processor without changing the motherboard.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: BIOS settings are stored on the motherboard.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    },

    // File Systems
    {
        question: "True or False: NTFS supports a maximum file size of 4GB.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: FAT32 supports partitions up to 32TB.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 1
    },
    {
        question: "True or False: ExFAT is ideal for flash drives and supports storage media up to 256TB.",
        type: "single",
        options: ["True", "False"],
        correctAnswerIndex: 0
    }
];

// Export the questions array for use in other modules (if needed)
// export default scorableQuestions;
