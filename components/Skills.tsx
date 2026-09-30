"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "Angular",
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "HTML5",
        "CSS",
        ".NET (WPF, XAML)",
        "C#",
        "Python",
        "Gradle",
        "Maven",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Firebase", "SQL Query Optimization", "Liquibase"],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Git",
        "GitLab CI/CD",
        "GitHub Actions",
        "Docker",
        "PowerShell Scripting",
        "AWS",
        "GCP",
      ],
    },
    {
      title: "Methodologies",
      skills: [
        "Agile (Scrum)",
        "Sprint Planning",
        "User Stories",
        "Retrospectives",
        "Backlog Refinement",
        "Requirement Gathering",
      ],
    },
    {
      title: "Testing & Quality",
      skills: [
        "Integration Testing",
        "Unit Testing",
        "Test Case Design",
        "Defect Tracking",
        "Log Analysis",
        "Dev / QA / UAT Validation",
      ],
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
      skills: [
        "English (Fluent)",
        "French (Fluent)",
        "Mauritian Creole (Native)",
        "Hindi (Intermediate)",
        "Bhojpuri (Intermediate)",
      ],
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
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-6"
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="glass neon-border neon-border-hover p-6 rounded-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}