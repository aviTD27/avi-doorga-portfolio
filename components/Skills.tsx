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
        "TypeScript",
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
      skills: [
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "SQL Query Optimization",
        "Liquibase",
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        "Git",
        "GitLab CI/CD",
        "GitHub Actions",
        "PowerShell Scripting",
        "GCP (Basics)",
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: [
        "Jira",
        "Confluence",
        "VS Code",
        "IntelliJ IDEA",
        "DBeaver",
        "PgAdmin",
      ],
    },
    {
      title: "Design & Documentation",
      skills: ["Figma", "Mermaid", "Draw.io"],
    },
    {
      title: "Soft Skills",
      skills: [
        "Agile Development",
        "Team Collaboration",
        "Leadership",
        "Time Management",
        "Communication",
        "Problem Solving",
        "Adaptability",
        "Continuous Learning",
        "Documentation",
        "Presentation Skills",
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-6"
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="glass neon-border neon-border-hover p-6 rounded-xl transition-all duration-300"
          >
            {/* Category Title */}
            <h3 className="text-xl font-semibold text-white mb-4">
              {category.title}
            </h3>

            {/* Skill Badges */}
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


