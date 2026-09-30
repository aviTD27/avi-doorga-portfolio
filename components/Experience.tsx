"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Experiences() {
  const { t } = useLanguage();

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
        {t.experience.title}
      </motion.h2>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {t.experience.items.map((exp, index) => (
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
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div>
              <h4 className="text-cyan-300 font-semibold mb-2">
                {t.experience.responsibilitiesLabel}
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