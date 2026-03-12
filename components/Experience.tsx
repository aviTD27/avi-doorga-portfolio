"use client";

import { motion } from "framer-motion";

export default function Experiences() {
  const experiences = [
    // 1. Infosys
    {
      role: "Associate Full‑Stack Developer",
      company: "Infosys (Renault Project)",
      period: "Jun 2023 – Aug 2025",
      location: "Mauritius",
      description:
        "Full‑stack development and DevOps automation for enterprise‑level automotive applications, working in Agile Scrum teams.",
      tech: [
        "Angular",
        "TypeScript",
        "Java",
        "Spring Boot",
        "REST APIs",
        "PostgreSQL",
        "Liquibase",
        "GitLab CI/CD",
        "PowerShell",
      ],
      responsibilities: [
        "Developed enterprise web features using Angular, Java Spring Boot, HTML5, and REST APIs.",
        "Participated in Agile ceremonies including sprint planning, stand‑ups, retrospectives, and backlog refinement.",
        "Managed GitLab repositories with branching, merge requests, and version tagging.",
        "Built and maintained CI/CD pipelines for automated builds, tests, and deployments.",
        "Created PowerShell scripts to automate compilation, deployment, and environment tasks.",
        "Wrote and optimized SQL queries for reporting and data extraction using PostgreSQL.",
        "Created and maintained Liquibase scripts for database versioning and migrations.",
        "Performed unit and integration testing across multiple environments.",
        "Collaborated with Product Owners and Team Leads, delivering demos and requirement clarifications.",
        "Produced clear documentation for internal teams using Confluence.",
      ],
    },

    // 2. Independent Web Development
    {
      role: "Junior Developer",
      company: "Independent Web Development Practice",
      period: "Jan 2021 – Jun 2023",
      location: "Mauritius",
      description:
        "Built small‑scale web applications during university, focusing on CRUD features, responsive layouts, and version control.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "Git", "Figma", "Draw.io"],
      responsibilities: [
        "Developed small web apps with basic CRUD functionality.",
        "Designed responsive UI layouts using HTML, CSS, and simple JavaScript.",
        "Created mockups and diagrams using Figma, Mermaid, and Draw.io.",
        "Used Git for version control and collaborative workflows.",
        "Practiced clean coding, documentation, and iterative improvements.",
      ],
    },

    // 3. Bank One
    {
      role: "Manual Testing Intern",
      company: "Bank One",
      period: "Sep 2022 – Dec 2022",
      location: "Mauritius",
      description:
        "Manual testing of banking web applications, ensuring alignment with client requirements.",
      tech: ["Manual Testing", "Test Cases", "Bug Reporting"],
      responsibilities: [
        "Created detailed test cases for banking web applications.",
        "Executed manual tests and logged issues for developers.",
        "Cross‑checked client requirements against implemented features.",
        "Reported findings to team leaders and contributed to QA documentation.",
      ],
    },

    // 4. Noorix
    {
      role: "QA Tester (Manual Testing)",
      company: "Noorix",
      period: "Jan 2020 – May 2020",
      location: "Sydney, Australia",
      description:
        "Manual testing of mobile applications, identifying UI/UX issues and logging defects.",
      tech: ["Manual Testing", "Bug Tracking"],
      responsibilities: [
        "Performed manual testing on mobile applications.",
        "Identified UI/UX issues and logged defects.",
        "Collaborated with developers to ensure accurate fixes.",
        "Contributed to improving app stability and user experience.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-6"
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="glass neon-border neon-border-hover p-6 rounded-xl transition-all duration-300"
          >
            {/* Role + Company */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {exp.role}
            </h3>
            <p className="text-cyan-300 font-medium mb-2">{exp.company}</p>

            {/* Period + Location */}
            <p className="text-slate-400 text-sm mb-4">
              {exp.period} • {exp.location}
            </p>

            {/* Description */}
            <p className="text-slate-400 mb-4">{exp.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-cyan-300 font-semibold mb-2">
                Key Responsibilities
              </h4>
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
