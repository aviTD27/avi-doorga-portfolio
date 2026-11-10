"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Experiences() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold section-title mb-10"
      >
        {t.experience.title}
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-slate-800 ml-2 space-y-8">
        {t.experience.items.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative pl-8"
          >
            <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-cyan-400 ring-4 ring-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />

            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-cyan-300 font-medium">{exp.company}</p>
                </div>
                <p className="text-slate-500 text-sm">
                  {exp.period} • {exp.location}
                </p>
              </div>

              <p className="text-slate-400 leading-relaxed mb-4">{exp.description}</p>

              <ul className="list-disc pl-5 text-slate-400 space-y-1 mb-4">
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span key={i} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
