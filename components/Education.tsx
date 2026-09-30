"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
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
        "Built web, mobile and systems projects: PHP/MySQL restaurant management system and Android app in Java",
        "Completed a software testing internship at Bank One alongside my studies",
      ],
    },
  ];

  const certifications = [
    "Certified Scrum Developer (CSD)",
    "Certified Scrum Product Owner (CSPO)",
  ];

  return (
    <section id="education" className="scroll-mt-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-6"
      >
        Education
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass neon-border p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
            <p className="text-cyan-300 font-medium mb-2">{edu.school}</p>
            <p className="text-slate-400 text-sm mb-4">
              {edu.period} • {edu.location}
            </p>

            <span className="inline-block px-3 py-1 mb-4 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
              {edu.distinction}
            </span>

            {edu.details.length > 0 && (
              <ul className="list-disc list-inside text-slate-400 space-y-1">
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass neon-border p-6 rounded-xl mt-8"
      >
        <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((c, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
            >
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}