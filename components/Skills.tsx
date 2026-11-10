"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold section-title mb-10"
      >
        {t.skills.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {t.skills.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="card card-hover p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span
                  key={i}
                  className="chip"
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