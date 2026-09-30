"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-6"
      >
        {t.projects.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="glass neon-border neon-border-hover p-6 rounded-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

            {project.badge && (
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-md bg-cyan-500/20 border border-cyan-400/50 text-cyan-200">
                {project.badge}
              </span>
            )}

            <p className="text-slate-400 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.features && (
              <div className="mb-4">
                <h4 className="text-cyan-300 font-semibold mb-2">
                  {t.projects.featuresLabel}
                </h4>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.highlights && (
              <div className="mb-4">
                <h4 className="text-cyan-300 font-semibold mb-2">
                  {t.projects.highlightsLabel}
                </h4>
                <ul className="list-disc list-inside text-slate-400 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            )}

            {(project.github || project.demo) && (
              <div className="flex gap-4 pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200"
                  >
                    {t.projects.demoLabel}
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}