"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="scroll-mt-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold section-title mb-10"
      >
        {t.education.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {t.education.items.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card card-hover p-6"
          >
            <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
            <p className="text-cyan-300 font-medium mb-2">{edu.school}</p>
            <p className="text-slate-400 text-sm mb-4">
              {edu.period} • {edu.location}
            </p>

            <span className="chip inline-block mb-4">
              {edu.distinction}
            </span>

            {edu.details.length > 0 && (
              <ul className="list-disc pl-5 text-slate-400 space-y-1">
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
        className="card p-6 mt-6"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          {t.education.certificationsTitle}
        </h3>
        <div className="flex flex-wrap gap-2">
          {t.education.certifications.map((c, i) => (
            <span key={i} className="chip">
              {c}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}