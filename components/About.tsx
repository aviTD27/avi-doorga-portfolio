"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

// Turns "text **highlighted** text" into text with cyan highlights
function renderHighlighted(text: string) {
  return text.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-cyan-300">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 pb-10">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-8"
      >
        {t.about.title}
      </motion.h2>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="glass neon-border p-8 rounded-xl max-w-3xl mx-auto"
      >
        {t.about.paragraphs.map((paragraph, i) => {
          const isFirst = i === 0;
          const isLast = i === t.about.paragraphs.length - 1;
          return (
            <p
              key={i}
              className={`leading-relaxed ${
                isFirst ? "text-slate-200 text-xl" : "text-slate-300 text-lg"
              } ${isLast ? "" : "mb-6"}`}
            >
              {renderHighlighted(paragraph)}
            </p>
          );
        })}
      </motion.div>
    </section>
  );
}