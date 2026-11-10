"use client";

import { motion } from "framer-motion";
import { FaFutbol, FaDumbbell, FaPlane } from "react-icons/fa";
import { useLanguage } from "./LanguageProvider";

const icons = {
  powerlifting: FaDumbbell,
  football: FaFutbol,
  aviation: FaPlane,
};

export default function Interests() {
  const { t } = useLanguage();

  return (
    <section id="interests" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold section-title mb-10"
      >
        {t.interests.title}
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {t.interests.items.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <motion.div
              key={item.icon}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card card-hover p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
              {item.stat && <p className="chip inline-block mb-3">{item.stat}</p>}
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
