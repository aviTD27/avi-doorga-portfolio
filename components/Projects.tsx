"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    // Project 1 — Portfolio Website 
    {
      title: "Personal Portfolio — Next.js Developer Website",
      description:
        "A fully custom personal portfolio built with Next.js, Tailwind CSS, and Framer Motion. Designed to showcase my experience, projects, and skills with a modern neon‑developer aesthetic and smooth animations.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      github: "https://github.com/aviTD27/your-portfolio-repo", // update if needed
      features: [
        "Responsive, modern UI with a neon developer theme",
        "Smooth animations using Framer Motion",
        "Reusable components and clean architecture",
        "Projects, experience, skills, and contact sections",
        "Optimized images, SEO tags, and fast performance",
        "Deployed on Vercel with continuous updates"
      ],
      highlights: [
        "Designed and built from scratch with custom UI/UX",
        "Showcases full-stack and frontend engineering skills",
        "Demonstrates mastery of Next.js and Tailwind CSS",
        "Actively maintained and improved over time"
      ]
    },

    // Project 2 — AvGeek Website
    {
      title: "AvGeek — Aviation Information App",
      description:
        "A React-based aviation information app that fetches real-time aircraft and airport data using public aviation APIs. Designed for aviation enthusiasts to explore aircraft details, flight information, and airport insights through a clean and interactive UI.",
      tech: ["React", "JavaScript", "REST APIs", "CSS", "Fetch API"],
      github: "https://github.com/aviTD27/AvGeek",
      features: [
        "Search aircraft by model, registration, or airline",
        "Fetch real-time aviation data using public APIs",
        "Display aircraft specifications and details",
        "Airport lookup with location and operational info",
        "Clean and responsive UI for aviation enthusiasts",
        "Error handling and loading states for smooth UX"
      ],
      highlights: [
        "Built from scratch using React and API integrations",
        "Demonstrates strong frontend and API consumption skills",
        "Shows personal passion for aviation and clean UI design",
        "Lightweight, fast, and easy to extend with more features"
      ]
    },

    // Project 3 — Advanced C Student Management System
    {
      title: "Advanced C — Student Management System",
      description:
        "A console-based student management system built in C, featuring CRUD operations, file handling, data validation, and structured record management. Demonstrates strong fundamentals in C programming and low-level logic.",
      tech: ["C", "File Handling", "Structs", "Pointers", "GCC"],
      github: "https://github.com/aviTD27/AdvancedC_StudentManagementSystem",
      features: [
        "Add, edit, delete, and search student records",
        "Persistent storage using text file handling",
        "Tabular console output with sorting and filtering",
        "Input validation for clean and consistent data",
        "Modular code structure using functions and structs"
      ],
      highlights: [
        "Demonstrates strong fundamentals in C programming",
        "Implemented persistent storage using file I/O",
        "Designed structured data models using structs",
        "Built a fully functional CRUD system in pure C"
      ]
    },


    // Project 4 — Millennium Palace (Restaurant Management System)
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
        "MySQL‑based storage for orders, menu items, and transactions",
      ],
      highlights: [
        "Built a complete CRUD‑based restaurant workflow",
        "Designed a clean UI using pure HTML/CSS",
        "Implemented backend logic using PHP and MySQL",
        "Structured database schema for real‑world restaurant operations",
      ],
    },

    // Project 5 — Mobile Application (Android App Development)
    {
      title: "Mobile Application — Android App Development",
      description:
        "A multi-screen Android application built using Java and XML. Demonstrates core Android concepts such as activities, intents, UI layouts, form handling, and navigation.",
      tech: ["Java", "XML", "Android Studio", "Gradle"],
      github: "https://github.com/aviTD27/Mob_App_2012319",
      features: [
        "Multi-screen navigation using explicit and implicit intents",
        "Form handling with input validation",
        "XML-based UI layouts with interactive components",
        "Use of Android activity lifecycle and event listeners",
        "Data passing between activities using Bundles and Extras",
      ],
      highlights: [
        "Built a functional mobile app with clean UI",
        "Applied core Android development principles",
        "Structured activities and navigation flow",
        "Hands-on experience with Java and Android SDK",
      ],
    },

    // {
    //   title: "Project Four",
    //   description:
    //     "A backend service with REST APIs, authentication, and scalable architecture.",
    //   tech: ["Express", "JWT", "Cloud"],
    //   github: "#",
    // },
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-6"
      >
        Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="glass neon-border neon-border-hover p-6 rounded-xl transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 mb-4">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Features */}
            {project.features && (
              <div className="mb-4">
                <h4 className="text-cyan-300 font-semibold mb-2">Features</h4>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights */}
            {project.highlights && (
              <div className="mb-4">
                <h4 className="text-cyan-300 font-semibold mb-2">Highlights</h4>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* GitHub Button Only */}
            <div className="flex gap-4 pt-2">
              <a
                href={project.github}
                className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
