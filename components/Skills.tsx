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
        className="text-3xl font-bold section-title mb-6"
      >
        {t.skills.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {t.skills.categories.map((category, index) => (
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