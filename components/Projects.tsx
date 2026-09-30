"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  features?: string[];
  highlights?: string[];
};

export default function Projects() {
  const projects: Project[] = [
    // Project 1 — Action Learning Cockpit (EPITA final-year project)
    {
      title: "Action Learning Cockpit — EPITA Final-Year Project (2026)",
      badge: "Ranked 1st in cohort",
      description:
        "A multi-service academic platform that automates Action Learning workflows, analyses student reflections, and gives students and supervisors real-time dashboards across multiple universities.",
      tech: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "REST APIs"],
      // github: "https://github.com/aviTD27/...",   // add if the repo is public
      // demo: "https://...",                        // add if there is a live demo
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

    // Project 2 — TaskFlow (AI-driven development)
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

    // Project 3 — Portfolio Website
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

    // Project 4 — AvGeek (aligned with CV: Spring Boot / Angular / PostgreSQL)
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

    // Project 5 — Advanced C Student Management System
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

    // Project 6 — Millennium Palace
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

    // Project 7 — Android App
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
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

            {project.badge && (
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-md bg-cyan-500/20 border border-cyan-400/50 text-cyan-200">
                {project.badge}
              </span>
            )}

            <p className="text-slate-400 mb-4">{project.description}</p>

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

            {(project.github || project.demo) && (
              <div className="flex gap-4 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}