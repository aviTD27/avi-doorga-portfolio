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

    // 2. Independent Web Development (Freelance)
    {
      role: "Junior Developer",
      company: "Independent Web Development Practice (Freelance)",
      period: "Jan 2021 – Jun 2023",
      location: "Mauritius",
      description:
        "Freelance work alongside university: fixing bugs in existing Angular, React and Java Spring Boot applications and building small web apps, while learning professional Git and task-tracking workflows.",
      tech: [
        "Angular",
        "React",
        "TypeScript",
        "Java",
        "Spring Boot",
        "Git",
        "Jira",
        "Figma",
        "Draw.io",
      ],
      responsibilities: [
        "Diagnosed and fixed bugs in existing Angular/React (TypeScript) and Java Spring Boot applications written by other developers.",
        "Worked with Git on multiple branches: feature and fix branches, clear commits, merges and resolving conflicts.",
        "Used Jira to follow assigned tasks, priorities and bug reports.",
        "Built small web apps with CRUD features using Angular/React frontends and Spring Boot backends.",
        "Created UI mockups, diagrams and technical documentation for planning.",
      ],
    },

    // 3. Bank One
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

    // 4. Noorix
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
            <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
            <p className="text-cyan-300 font-medium mb-2">{exp.company}</p>

            <p className="text-slate-400 text-sm mb-4">
              {exp.period} • {exp.location}
            </p>

            <p className="text-slate-400 mb-4">{exp.description}</p>

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

            <div>
              <h4 className="text-cyan-300 font-semibold mb-2">Key Responsibilities</h4>
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