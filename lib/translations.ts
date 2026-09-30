export type Lang = "en" | "fr";

export type Project = {
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  features?: string[];
  highlights?: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tech: string[];
  responsibilities: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  location: string;
  distinction: string;
  details: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Translation = {
  nav: {
    about: string;
    education: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    subtitle: string;
    location: string;
    description: string;
    viewWork: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  education: {
    title: string;
    certificationsTitle: string;
    items: EducationItem[];
    certifications: string[];
  };
  projects: {
    title: string;
    featuresLabel: string;
    highlightsLabel: string;
    demoLabel: string;
    items: Project[];
  };
  experience: {
    title: string;
    responsibilitiesLabel: string;
    items: ExperienceItem[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
  contact: {
    title: string;
    intro: string;
    location: string;
  };
  footer: {
    rights: string;
  };
};

// Text wrapped in **double asterisks** in the About paragraphs is highlighted in cyan.

const en: Translation = {
  nav: {
    about: "About",
    education: "Education",
    projects: "Projects",
    experience: "Experience",
    skills: "Skills",
    contact: "Contact",
  },

  hero: {
    greeting: "Hi, I’m",
    subtitle: "Full‑Stack Software Engineer • Java Spring Boot • Angular / React",
    location: "Paris area, France",
    description:
      "Full‑stack developer with 3+ years of experience building production applications with Java Spring Boot, Angular/React, PostgreSQL and CI/CD. MSc Software Engineering coursework completed at EPITA (ranked 3rd in cohort). Available immediately for a 6‑month end‑of‑studies internship (stage de fin d'études) to validate my degree, followed by a CDI.",
    viewWork: "View My Work",
  },

  about: {
    title: "About Me",
    paragraphs: [
      "I am **Trithikraj Doorga (Avi)**, a full-stack developer who has already shipped production code on an enterprise platform, and I am ready to do it again for your team.",
      "I bring **3+ years of experience**, including two years at **Infosys on the Renault platform**, where I built business features in **Java Spring Boot and Angular/React**, ran PostgreSQL and Liquibase data migrations, maintained GitLab CI/CD pipelines, and validated releases across Dev, QA and UAT. I know what it takes to deliver inside a large Agile organisation: clear communication with Product Owners, reliable code, and fixing issues fast when they reach production.",
      "I have completed my **MSc in Computer Science (Software Engineering) at EPITA**, finishing **3rd in my cohort**. My final-year project, **Action Learning Cockpit**, a multi-service Spring Boot and React platform with real-time dashboards, was **ranked 1st**. This follows a **First Class Honours** degree in Applied Computing from the University of Mauritius.",
      "The last step to be awarded my Master's degree is a **6-month end-of-studies internship (stage de fin d'études)**. I am **available immediately**, based in the Paris area, and looking to join a backend or full-stack team where I can contribute from the first week, with the goal of continuing in a **full-time role (CDI)**.",
      "Certified **Scrum Developer (CSD)** and **Scrum Product Owner (CSPO)**, fluent in English and French, I work as comfortably with business teams as with code. If you are hiring, I would be glad to talk.",
    ],
  },

  education: {
    title: "Education",
    certificationsTitle: "Certifications",
    items: [
      {
        degree: "MSc Computer Science — Software Engineering",
        school: "EPITA",
        period: "2025 – 2026",
        location: "France",
        distinction: "Ranked 3rd in cohort",
        details: [
          "Coursework completed; degree awarded upon end-of-studies internship",
          "Final-year project Action Learning Cockpit ranked 1st in cohort",
        ],
      },
      {
        degree: "BSc (Hons) Applied Computing",
        school: "University of Mauritius",
        period: "2020 – 2023",
        location: "Mauritius",
        distinction: "First Class Honours",
        details: [
          "Built web, mobile and systems projects: PHP/MySQL restaurant management system, Android app in Java, and a student management system in C",
          "Completed a software testing internship at Bank One alongside my studies",
        ],
      },
    ],
    certifications: [
      "Certified Scrum Developer (CSD)",
      "Certified Scrum Product Owner (CSPO)",
    ],
  },

  projects: {
    title: "Projects",
    featuresLabel: "Features",
    highlightsLabel: "Highlights",
    demoLabel: "Live Demo",
    items: [
      {
        title: "Action Learning Cockpit — EPITA Final-Year Project (2026)",
        badge: "Ranked 1st in cohort",
        description:
          "A multi-service academic platform that automates Action Learning workflows, analyses student reflections, and gives students and supervisors real-time dashboards across multiple universities.",
        tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "REST APIs"],
        // github: "https://github.com/aviTD27/...",
        // demo: "https://...",
        features: [
          "Automated Action Learning workflows for students and supervisors",
          "Reflection analysis to follow student progress",
          "Real-time dashboards for students and supervisors",
          "Multi-university support",
          "Multi-service backend built with Spring Boot and PostgreSQL",
        ],
        highlights: [
          "Ranked 1st in cohort at EPITA",
          "End-to-end full-stack delivery: backend services, database design and React frontend",
          "Built around real academic users and workflows",
        ],
      },
      {
        title: "TaskFlow — AI-Driven Task Management App",
        description:
          "A collaborative task management web app built end‑to‑end using a spec‑first, AI‑driven development workflow — starting from a written vision document and MoSCoW‑prioritized user stories before writing any code. Features email authentication, real‑time data, and a clean task dashboard.",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Vercel"],
        github: "https://github.com/aviTD27/taskflow-aidd",
        demo: "https://taskflow-aidd-eta.vercel.app",
        features: [
          "Email/password authentication with Firebase Auth",
          "Create tasks with title, description, priority, and due date",
          "Task list with sorting and priority filters",
          "Edit, delete, and mark tasks as completed",
          "Real‑time persistence with Firestore (per‑user task collection)",
          "App Router architecture with Server and Client Components",
        ],
        highlights: [
          "Practiced AI‑assisted, spec‑first development: vision doc + MoSCoW user stories before implementation",
          "Deployed on Vercel with continuous deployment from GitHub",
          "Demonstrates full‑stack skills beyond the Java/Spring stack: Next.js, Firebase, Firestore",
          "Clean architecture separating auth context, data layer, and UI components",
        ],
      },
      {
        title: "Personal Portfolio — Next.js Developer Website (2024–2025)",
        description:
          "A fully custom personal portfolio built with Next.js, Tailwind CSS, and Framer Motion, designed to showcase my experience, projects, and skills with a modern neon‑developer aesthetic.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        github: "https://github.com/aviTD27/avi-doorga-portfolio",
        demo: "https://avidoorga.com",
        features: [
          "Responsive, modern UI with a neon developer theme",
          "Smooth animations using Framer Motion",
          "Reusable components and clean architecture",
          "Bilingual site: English and French",
          "Downloadable CV in English and French",
          "Optimized images, SEO tags, and fast performance",
          "Deployed on Vercel with a custom domain",
        ],
        highlights: [
          "Designed and built from scratch with custom UI/UX",
          "Recruiter-oriented structure: education, projects, experience, skills",
          "Actively maintained and improved over time",
        ],
      },
      {
        title: "AvGeek — Aviation Web Application (2022)",
        description:
          "A full-stack aviation web application for enthusiasts to explore aircraft and airport information, with CRUD features, REST APIs, a designed database schema and a responsive frontend.",
        tech: ["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "REST APIs"],
        github: "https://github.com/aviTD27/AvGeek",
        features: [
          "Browse and search aircraft and airport information",
          "CRUD operations exposed through a Spring Boot REST API",
          "PostgreSQL database with a structured relational schema",
          "Responsive Angular frontend",
          "Error handling and loading states for a smooth UX",
        ],
        highlights: [
          "Full-stack build: backend, database design and frontend",
          "Shows my passion for aviation and clean UI design",
          "Easy to extend with more data sources and features",
        ],
      },
      {
        title: "Advanced C — Student Management System",
        description:
          "A console-based student management system built in C, featuring CRUD operations, file handling, data validation, and structured record management.",
        tech: ["C", "File Handling", "Structs", "Pointers", "GCC"],
        github: "https://github.com/aviTD27/AdvancedC_StudentManagementSystem",
        features: [
          "Add, edit, delete, and search student records",
          "Persistent storage using text file handling",
          "Tabular console output with sorting and filtering",
          "Input validation for clean and consistent data",
          "Modular code structure using functions and structs",
        ],
        highlights: [
          "Strong fundamentals in C programming and low-level logic",
          "Persistent storage implemented with file I/O",
          "Fully functional CRUD system in pure C",
        ],
      },
      {
        title: "Millennium Palace — Restaurant Management System",
        description:
          "A full‑stack restaurant management system built using PHP, HTML, CSS, and MySQL. It handles menu management, order processing, table assignment, billing, and admin operations.",
        tech: ["PHP", "HTML", "CSS", "MySQL", "XAMPP", "phpMyAdmin"],
        github: "https://github.com/aviTD27/2012319_Millenium_Palace",
        features: [
          "Dynamic menu display with categories and pricing",
          "Order placement with automatic total calculation",
          "Table assignment and availability tracking",
          "Admin panel for managing menu items and categories",
          "Billing system with itemized receipts and tax calculation",
        ],
        highlights: [
          "Complete CRUD‑based restaurant workflow",
          "Backend logic implemented with PHP and MySQL",
          "Database schema designed for real‑world restaurant operations",
        ],
      },
      {
        title: "Mobile Application — Android App Development",
        description:
          "A multi-screen Android application built using Java and XML, covering activities, intents, UI layouts, form handling, and navigation.",
        tech: ["Java", "XML", "Android Studio", "Gradle"],
        github: "https://github.com/aviTD27/Mob_App_2012319",
        features: [
          "Multi-screen navigation using explicit and implicit intents",
          "Form handling with input validation",
          "XML-based UI layouts with interactive components",
          "Data passing between activities using Bundles and Extras",
        ],
        highlights: [
          "Applied core Android development principles",
          "Hands-on experience with Java and the Android SDK",
        ],
      },
    ],
  },

  experience: {
    title: "Experience",
    responsibilitiesLabel: "Key Responsibilities",
    items: [
      {
        role: "Associate Full‑Stack Developer",
        company: "Infosys (Renault Project)",
        period: "Jun 2023 – Aug 2025",
        location: "Mauritius",
        description:
          "Full‑stack development and DevOps automation for a large‑scale enterprise automotive platform, working in an Agile Scrum team.",
        tech: [
          "Java",
          "Spring Boot",
          "Angular",
          "React",
          "TypeScript",
          "REST APIs",
          "PostgreSQL",
          "Liquibase",
          "GitLab CI/CD",
          "Docker",
          "PowerShell",
          "Jira",
          "Confluence",
        ],
        responsibilities: [
          "Developed business features with Java Spring Boot, Angular/React (TypeScript) and REST APIs.",
          "Optimised and migrated data with PostgreSQL and Liquibase, improving schema consistency and workflow performance.",
          "Managed GitLab repositories (branching, merge requests, version tagging) and maintained CI/CD pipelines for automated builds, tests and deployments.",
          "Created PowerShell scripts to automate compilation, deployment and environment tasks.",
          "Wrote and optimised SQL queries for reporting and data extraction.",
          "Performed integration testing and validated deployments across Dev, QA and UAT environments.",
          "Resolved defects through log analysis and issue reproduction in staging and production.",
          "Managed development tasks in Jira: picking up user stories and bugs, updating progress and tracking work through the sprint.",
          "Participated in Agile ceremonies: sprint planning, stand‑ups, retrospectives and backlog refinement.",
          "Collaborated with Product Owners and internal teams to gather requirements and deliver functional demos.",
          "Used Confluence to write technical documentation and to consult project specifications, functional details and team knowledge.",
        ],
      },
      {
        role: "Junior Developer",
        company: "Independent Web Development Practice (Freelance)",
        period: "Jan 2021 – Jun 2023",
        location: "Mauritius",
        description:
          "Freelance work alongside university: fixing bugs in existing Angular, React and Java Spring Boot applications and building small web apps, while learning professional Git and task-tracking workflows.",
        tech: ["Angular", "React", "TypeScript", "Java", "Spring Boot", "Git", "Jira", "Figma", "Draw.io"],
        responsibilities: [
          "Diagnosed and fixed bugs in existing Angular/React (TypeScript) and Java Spring Boot applications written by other developers.",
          "Worked with Git on multiple branches: feature and fix branches, clear commits, merges and resolving conflicts.",
          "Used Jira to follow assigned tasks, priorities and bug reports.",
          "Built small web apps with CRUD features using Angular/React frontends and Spring Boot backends.",
          "Created UI mockups, diagrams and technical documentation for planning.",
        ],
      },
      {
        role: "Software Tester (Internship)",
        company: "Bank One",
        period: "Sep 2022 – Dec 2022",
        location: "Mauritius",
        description:
          "10-week testing internship on banking web applications, extended by one month of full-time work to support a delayed project delivery.",
        tech: ["Manual Testing", "Test Cases", "Jira", "Defect Tracking"],
        responsibilities: [
          "Designed and executed test cases for application validation.",
          "Created Jira tickets for defects and requests, assigned them to the relevant developers and team members, and followed them through to resolution.",
          "Cross‑checked client requirements against implemented features.",
          "Gained exposure to financial data validation and risk‑related workflows.",
          "Retained for an additional month full-time after the internship to help the team meet a delayed project deadline.",
        ],
      },
      {
        role: "Software Tester",
        company: "Noorix",
        period: "Jan 2020 – May 2020",
        location: "Sydney, Australia",
        description:
          "Functional testing of mobile applications, identifying UI/UX issues and reporting defects.",
        tech: ["Functional Testing", "Jira", "Bug Tracking"],
        responsibilities: [
          "Performed functional testing of mobile applications.",
          "Identified UI/UX issues and logged defects in Jira for the developers.",
          "Followed up with developers to verify fixes.",
        ],
      },
    ],
  },

  skills: {
    title: "Skills",
    categories: [
      {
        title: "Programming & Frameworks",
        skills: [
          "Java", "Spring Boot", "REST APIs", "Angular", "React", "TypeScript", "Next.js",
          "Tailwind CSS", "Node.js", "HTML5", "CSS", ".NET (WPF, XAML)", "C#", "Python", "Gradle", "Maven",
        ],
      },
      {
        title: "Databases",
        skills: ["PostgreSQL", "MySQL", "Firebase", "SQL Query Optimization", "Liquibase"],
      },
      {
        title: "DevOps & Cloud",
        skills: ["Git", "GitLab CI/CD", "GitHub Actions", "Docker", "PowerShell Scripting", "AWS", "GCP"],
      },
      {
        title: "Methodologies",
        skills: ["Agile (Scrum)", "Sprint Planning", "User Stories", "Retrospectives", "Backlog Refinement", "Requirement Gathering"],
      },
      {
        title: "Testing & Quality",
        skills: ["Integration Testing", "Unit Testing", "Test Case Design", "Defect Tracking", "Log Analysis", "Dev / QA / UAT Validation"],
      },
      {
        title: "Tools & Collaboration",
        skills: ["Jira", "Confluence", "VS Code", "IntelliJ IDEA", "DBeaver", "PgAdmin"],
      },
      {
        title: "Design & Documentation",
        skills: ["Figma", "Mermaid", "Draw.io", "Eraser", "Technical Documentation", "Reporting"],
      },
      {
        title: "Certifications",
        skills: ["Certified Scrum Developer (CSD)", "Certified Scrum Product Owner (CSPO)"],
      },
      {
        title: "Languages",
        skills: ["English (Fluent)", "French (Fluent)", "Mauritian Creole (Native)", "Hindi (Intermediate)", "Bhojpuri (Intermediate)"],
      },
      {
        title: "Soft Skills",
        skills: [
          "Problem Solving & Analytical Thinking",
          "Effective Communication",
          "Team Collaboration & Leadership",
          "Adaptability & Continuous Learning",
          "Time Management & Prioritization",
          "Presentation Skills",
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    intro:
      "Available immediately for an end-of-studies internship, followed by a full-time role (CDI). Whether it is an opportunity, a collaboration or just a hello, I’d love to connect.",
    location: "Paris area, France",
  },

  footer: {
    rights: "All Rights Reserved",
  },
};

const fr: Translation = {
  nav: {
    about: "À propos",
    education: "Formation",
    projects: "Projets",
    experience: "Expérience",
    skills: "Compétences",
    contact: "Contact",
  },

  hero: {
    greeting: "Bonjour, je suis",
    subtitle: "Ingénieur logiciel Full‑Stack • Java Spring Boot • Angular / React",
    location: "Région parisienne, France",
    description:
      "Développeur full‑stack avec plus de 3 ans d’expérience dans la création d’applications en production avec Java Spring Boot, Angular/React, PostgreSQL et CI/CD. Scolarité du MSc Software Engineering validée à l’EPITA (classé 3ᵉ de la promotion). Disponible immédiatement pour un stage de fin d’études de 6 mois afin de valider mon diplôme, suivi d’un CDI.",
    viewWork: "Voir mes projets",
  },

  about: {
    title: "À propos",
    paragraphs: [
      "Je suis **Trithikraj Doorga (Avi)**, développeur full‑stack ayant déjà livré du code en production sur une plateforme grand compte, et prêt à le refaire pour votre équipe.",
      "J’apporte **plus de 3 ans d’expérience**, dont deux ans chez **Infosys sur la plateforme Renault**, où j’ai développé des fonctionnalités métier en **Java Spring Boot et Angular/React**, mené des migrations de données PostgreSQL et Liquibase, maintenu des pipelines CI/CD GitLab et validé les livraisons sur les environnements Dev, QA et UAT. Je sais ce qu’exige la livraison au sein d’une grande organisation Agile : une communication claire avec les Product Owners, un code fiable et une résolution rapide des incidents en production.",
      "J’ai terminé la scolarité de mon **MSc Computer Science (Software Engineering) à l’EPITA**, en me classant **3ᵉ de ma promotion**. Mon projet de fin d’études, **Action Learning Cockpit**, une plateforme multi‑services Spring Boot et React avec tableaux de bord en temps réel, a été **classé 1er**. Ce parcours fait suite à un Bachelor en Applied Computing obtenu avec la **mention Très Bien (First Class Honours)** à l’University of Mauritius.",
      "La dernière étape pour obtenir mon diplôme de Master est un **stage de fin d’études de 6 mois**. Je suis **disponible immédiatement**, basé en région parisienne, et je souhaite rejoindre une équipe backend ou full‑stack où je pourrai contribuer dès la première semaine, avec l’objectif de poursuivre en **CDI**.",
      "Certifié **Scrum Developer (CSD)** et **Scrum Product Owner (CSPO)**, bilingue anglais et français, je suis aussi à l’aise avec les équipes métier qu’avec le code. Si vous recrutez, je serai ravi d’échanger.",
    ],
  },

  education: {
    title: "Formation",
    certificationsTitle: "Certifications",
    items: [
      {
        degree: "MSc Computer Science — Software Engineering",
        school: "EPITA",
        period: "2025 – 2026",
        location: "France",
        distinction: "Classé 3ᵉ de la promotion",
        details: [
          "Scolarité validée ; diplôme délivré à l’issue du stage de fin d’études",
          "Projet de fin d’études Action Learning Cockpit classé 1er de la promotion",
        ],
      },
      {
        degree: "Bachelor (Hons) Applied Computing",
        school: "University of Mauritius",
        period: "2020 – 2023",
        location: "Maurice",
        distinction: "Mention Très Bien (First Class Honours)",
        details: [
          "Réalisation de projets web, mobile et systèmes : système de gestion de restaurant en PHP/MySQL, application Android en Java et système de gestion d’étudiants en C",
          "Stage de testeur logiciel chez Bank One en parallèle des études",
        ],
      },
    ],
    certifications: [
      "Certified Scrum Developer (CSD)",
      "Certified Scrum Product Owner (CSPO)",
    ],
  },

  projects: {
    title: "Projets",
    featuresLabel: "Fonctionnalités",
    highlightsLabel: "Points forts",
    demoLabel: "Démo en ligne",
    items: [
      {
        title: "Action Learning Cockpit — Projet de fin d’études EPITA (2026)",
        badge: "Classé 1er de la promotion",
        description:
          "Plateforme académique multi‑services qui automatise les workflows d’Action Learning, analyse les réflexions des étudiants et fournit aux étudiants et encadrants des tableaux de bord en temps réel, sur plusieurs universités.",
        tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "REST APIs"],
        // github: "https://github.com/aviTD27/...",
        // demo: "https://...",
        features: [
          "Automatisation des workflows d’Action Learning pour étudiants et encadrants",
          "Analyse des réflexions pour suivre la progression des étudiants",
          "Tableaux de bord en temps réel pour étudiants et encadrants",
          "Support multi‑universités",
          "Backend multi‑services en Spring Boot et PostgreSQL",
        ],
        highlights: [
          "Classé 1er de la promotion à l’EPITA",
          "Livraison full‑stack de bout en bout : services backend, conception de la base de données et frontend React",
          "Conçu autour d’utilisateurs et de workflows académiques réels",
        ],
      },
      {
        title: "TaskFlow — Application de gestion de tâches pilotée par l’IA",
        description:
          "Application web collaborative de gestion de tâches développée de bout en bout avec une approche spec‑first assistée par l’IA : document de vision et user stories priorisées MoSCoW avant toute ligne de code. Authentification par e‑mail, données en temps réel et tableau de bord clair.",
        tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Vercel"],
        github: "https://github.com/aviTD27/taskflow-aidd",
        demo: "https://taskflow-aidd-eta.vercel.app",
        features: [
          "Authentification e‑mail/mot de passe avec Firebase Auth",
          "Création de tâches avec titre, description, priorité et échéance",
          "Liste de tâches avec tri et filtres par priorité",
          "Modification, suppression et validation des tâches",
          "Persistance en temps réel avec Firestore (collection de tâches par utilisateur)",
          "Architecture App Router avec Server et Client Components",
        ],
        highlights: [
          "Développement spec‑first assisté par l’IA : document de vision et user stories MoSCoW avant l’implémentation",
          "Déployé sur Vercel avec déploiement continu depuis GitHub",
          "Compétences full‑stack au‑delà de Java/Spring : Next.js, Firebase, Firestore",
          "Architecture claire séparant contexte d’authentification, couche de données et composants UI",
        ],
      },
      {
        title: "Portfolio personnel — Site développeur Next.js (2024–2025)",
        description:
          "Portfolio entièrement sur mesure développé avec Next.js, Tailwind CSS et Framer Motion, pour présenter mon expérience, mes projets et mes compétences avec une esthétique néon moderne.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        github: "https://github.com/aviTD27/avi-doorga-portfolio",
        demo: "https://avidoorga.com",
        features: [
          "Interface moderne et responsive au thème néon",
          "Animations fluides avec Framer Motion",
          "Composants réutilisables et architecture claire",
          "Site bilingue : anglais et français",
          "CV téléchargeable en anglais et en français",
          "Images optimisées, balises SEO et performances rapides",
          "Déployé sur Vercel avec un nom de domaine personnalisé",
        ],
        highlights: [
          "Conçu et développé de zéro avec une UI/UX sur mesure",
          "Structure pensée pour les recruteurs : formation, projets, expérience, compétences",
          "Maintenu et amélioré en continu",
        ],
      },
      {
        title: "AvGeek — Application web aéronautique (2022)",
        description:
          "Application web full‑stack permettant aux passionnés d’aviation d’explorer des informations sur les avions et les aéroports, avec fonctionnalités CRUD, API REST, schéma de base de données conçu sur mesure et frontend responsive.",
        tech: ["Java", "Spring Boot", "Angular", "TypeScript", "PostgreSQL", "REST APIs"],
        github: "https://github.com/aviTD27/AvGeek",
        features: [
          "Consultation et recherche d’informations sur les avions et les aéroports",
          "Opérations CRUD exposées via une API REST Spring Boot",
          "Base PostgreSQL avec un schéma relationnel structuré",
          "Frontend Angular responsive",
          "Gestion des erreurs et états de chargement pour une UX fluide",
        ],
        highlights: [
          "Réalisation full‑stack : backend, conception de base de données et frontend",
          "Reflète ma passion pour l’aviation et les interfaces soignées",
          "Facile à étendre avec de nouvelles sources de données et fonctionnalités",
        ],
      },
      {
        title: "Advanced C — Système de gestion d’étudiants",
        description:
          "Système de gestion d’étudiants en console développé en C, avec opérations CRUD, gestion de fichiers, validation des données et gestion structurée des enregistrements.",
        tech: ["C", "Gestion de fichiers", "Structs", "Pointeurs", "GCC"],
        github: "https://github.com/aviTD27/AdvancedC_StudentManagementSystem",
        features: [
          "Ajout, modification, suppression et recherche d’étudiants",
          "Stockage persistant via fichiers texte",
          "Affichage tabulaire en console avec tri et filtres",
          "Validation des saisies pour des données propres et cohérentes",
          "Code modulaire basé sur des fonctions et des structs",
        ],
        highlights: [
          "Solides bases en programmation C et en logique bas niveau",
          "Stockage persistant implémenté avec des entrées/sorties fichier",
          "Système CRUD complet en C pur",
        ],
      },
      {
        title: "Millennium Palace — Système de gestion de restaurant",
        description:
          "Système de gestion de restaurant full‑stack développé en PHP, HTML, CSS et MySQL : gestion du menu, prise de commandes, attribution des tables, facturation et administration.",
        tech: ["PHP", "HTML", "CSS", "MySQL", "XAMPP", "phpMyAdmin"],
        github: "https://github.com/aviTD27/2012319_Millenium_Palace",
        features: [
          "Affichage dynamique du menu par catégories et prix",
          "Prise de commande avec calcul automatique du total",
          "Attribution et suivi de la disponibilité des tables",
          "Panneau d’administration pour gérer les plats et catégories",
          "Facturation avec reçus détaillés et calcul des taxes",
        ],
        highlights: [
          "Workflow de restaurant complet basé sur le CRUD",
          "Logique backend implémentée en PHP et MySQL",
          "Schéma de base de données conçu pour des opérations réelles de restaurant",
        ],
      },
      {
        title: "Application mobile — Développement Android",
        description:
          "Application Android multi‑écrans développée en Java et XML, couvrant activités, intents, mises en page, gestion de formulaires et navigation.",
        tech: ["Java", "XML", "Android Studio", "Gradle"],
        github: "https://github.com/aviTD27/Mob_App_2012319",
        features: [
          "Navigation multi‑écrans avec intents explicites et implicites",
          "Gestion de formulaires avec validation des saisies",
          "Mises en page XML avec composants interactifs",
          "Transmission de données entre activités via Bundles et Extras",
        ],
        highlights: [
          "Application des principes fondamentaux du développement Android",
          "Expérience pratique avec Java et le SDK Android",
        ],
      },
    ],
  },

  experience: {
    title: "Expérience",
    responsibilitiesLabel: "Missions principales",
    items: [
      {
        role: "Développeur Full‑Stack (Associate)",
        company: "Infosys (Projet Renault)",
        period: "Juin 2023 – Août 2025",
        location: "Maurice",
        description:
          "Développement full‑stack et automatisation DevOps sur une plateforme automobile grand compte, au sein d’une équipe Agile Scrum.",
        tech: [
          "Java",
          "Spring Boot",
          "Angular",
          "React",
          "TypeScript",
          "REST APIs",
          "PostgreSQL",
          "Liquibase",
          "GitLab CI/CD",
          "Docker",
          "PowerShell",
          "Jira",
          "Confluence",
        ],
        responsibilities: [
          "Développement de fonctionnalités métier en Java Spring Boot, Angular/React (TypeScript) et API REST.",
          "Optimisation et migration de données avec PostgreSQL et Liquibase, améliorant la cohérence des schémas et les performances des workflows.",
          "Gestion des dépôts GitLab (branches, merge requests, tags de version) et maintenance des pipelines CI/CD pour les builds, tests et déploiements automatisés.",
          "Création de scripts PowerShell pour automatiser la compilation, le déploiement et les tâches d’environnement.",
          "Écriture et optimisation de requêtes SQL pour le reporting et l’extraction de données.",
          "Tests d’intégration et validation des déploiements sur les environnements Dev, QA et UAT.",
          "Résolution des anomalies par analyse des logs et reproduction des problèmes en staging et en production.",
          "Gestion des tâches de développement sur Jira : prise en charge des user stories et des bugs, mise à jour de l’avancement et suivi tout au long du sprint.",
          "Participation aux cérémonies Agile : sprint planning, daily, rétrospectives et affinage du backlog.",
          "Collaboration avec les Product Owners et les équipes internes pour recueillir les besoins et présenter des démos fonctionnelles.",
          "Utilisation de Confluence pour rédiger la documentation technique et consulter les spécifications, les détails fonctionnels et la base de connaissances de l’équipe.",
        ],
      },
      {
        role: "Développeur junior",
        company: "Développement web indépendant (Freelance)",
        period: "Janv. 2021 – Juin 2023",
        location: "Maurice",
        description:
          "Missions freelance en parallèle des études : correction de bugs sur des applications Angular, React et Java Spring Boot existantes et développement de petites applications web, avec apprentissage des workflows professionnels Git et de suivi des tâches.",
        tech: ["Angular", "React", "TypeScript", "Java", "Spring Boot", "Git", "Jira", "Figma", "Draw.io"],
        responsibilities: [
          "Diagnostic et correction de bugs sur des applications Angular/React (TypeScript) et Java Spring Boot existantes, développées par d’autres développeurs.",
          "Travail avec Git sur plusieurs branches : branches de fonctionnalité et de correction, commits clairs, merges et résolution de conflits.",
          "Utilisation de Jira pour suivre les tâches assignées, les priorités et les bugs signalés.",
          "Développement de petites applications web CRUD avec des frontends Angular/React et des backends Spring Boot.",
          "Création de maquettes UI, de diagrammes et de documentation technique pour la planification.",
        ],
      },
      {
        role: "Testeur logiciel (Stage)",
        company: "Bank One",
        period: "Sept. 2022 – Déc. 2022",
        location: "Maurice",
        description:
          "Stage de test de 10 semaines sur des applications web bancaires, prolongé d’un mois à temps plein pour soutenir une livraison projet retardée.",
        tech: ["Tests manuels", "Cas de test", "Jira", "Suivi des anomalies"],
        responsibilities: [
          "Conception et exécution de cas de test pour la validation applicative.",
          "Création de tickets Jira (anomalies et demandes), assignation aux développeurs et membres de l’équipe concernés, et suivi jusqu’à leur résolution.",
          "Vérification de la conformité des fonctionnalités développées aux exigences client.",
          "Exposition à la validation de données financières et aux workflows liés au risque.",
          "Prolongé d’un mois à temps plein après le stage pour aider l’équipe à tenir une échéance projet retardée.",
        ],
      },
      {
        role: "Testeur logiciel",
        company: "Noorix",
        period: "Janv. 2020 – Mai 2020",
        location: "Sydney, Australie",
        description:
          "Tests fonctionnels d’applications mobiles, identification de problèmes UI/UX et remontée des anomalies.",
        tech: ["Tests fonctionnels", "Jira", "Suivi des bugs"],
        responsibilities: [
          "Réalisation de tests fonctionnels sur des applications mobiles.",
          "Identification de problèmes UI/UX et création d’anomalies dans Jira pour les développeurs.",
          "Suivi avec les développeurs pour vérifier les corrections.",
        ],
      },
    ],
  },

  skills: {
    title: "Compétences",
    categories: [
      {
        title: "Programmation & Frameworks",
        skills: [
          "Java", "Spring Boot", "REST APIs", "Angular", "React", "TypeScript", "Next.js",
          "Tailwind CSS", "Node.js", "HTML5", "CSS", ".NET (WPF, XAML)", "C#", "Python", "Gradle", "Maven",
        ],
      },
      {
        title: "Bases de données",
        skills: ["PostgreSQL", "MySQL", "Firebase", "Optimisation SQL", "Liquibase"],
      },
      {
        title: "DevOps & Cloud",
        skills: ["Git", "GitLab CI/CD", "GitHub Actions", "Docker", "Scripts PowerShell", "AWS", "GCP"],
      },
      {
        title: "Méthodologies",
        skills: ["Agile (Scrum)", "Sprint Planning", "User Stories", "Rétrospectives", "Affinage du backlog", "Recueil des besoins"],
      },
      {
        title: "Tests & Qualité",
        skills: ["Tests d’intégration", "Tests unitaires", "Conception de cas de test", "Suivi des anomalies", "Analyse de logs", "Validation Dev / QA / UAT"],
      },
      {
        title: "Outils & Collaboration",
        skills: ["Jira", "Confluence", "VS Code", "IntelliJ IDEA", "DBeaver", "PgAdmin"],
      },
      {
        title: "Design & Documentation",
        skills: ["Figma", "Mermaid", "Draw.io", "Eraser", "Documentation technique", "Reporting"],
      },
      {
        title: "Certifications",
        skills: ["Certified Scrum Developer (CSD)", "Certified Scrum Product Owner (CSPO)"],
      },
      {
        title: "Langues",
        skills: ["Anglais (Courant)", "Français (Courant)", "Créole mauricien (Langue maternelle)", "Hindi (Intermédiaire)", "Bhojpuri (Intermédiaire)"],
      },
      {
        title: "Soft Skills",
        skills: [
          "Analyse & résolution de problèmes",
          "Communication efficace",
          "Travail en équipe & leadership",
          "Adaptabilité & apprentissage continu",
          "Gestion du temps & priorisation",
          "Prise de parole & présentation",
        ],
      },
    ],
  },

  contact: {
    title: "Contact",
    intro:
      "Disponible immédiatement pour un stage de fin d’études, suivi d’un CDI. Pour une opportunité, une collaboration ou simplement un bonjour, je serai ravi d’échanger.",
    location: "Région parisienne, France",
  },

  footer: {
    rights: "Tous droits réservés",
  },
};

export const translations: Record<Lang, Translation> = { en, fr };