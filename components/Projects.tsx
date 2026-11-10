"use client";

import { motion } from "framer-motion";
import { FiChevronDown, FiExternalLink, FiGithub } from "react-icons/fi";
import { useLanguage } from "./LanguageProvider";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold section-title mb-10"
      >
        {t.projects.title}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {t.projects.items.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: (index % 2) * 0.1 }}
            viewport={{ once: true }}
            className="card card-hover p-6 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              {project.badge && (
                <span className="shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-400/10 border border-violet-400/30 text-violet-300">
                  {project.badge}
                </span>
              )}
            </div>

            <p className="text-slate-400 leading-relaxed mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="chip">
                  {tech}
                </span>
              ))}
            </div>

            {(project.features || project.highlights) && (
              <div className="space-y-2 mb-4">
                {project.features && (
                  <details className="group rounded-lg border border-slate-800 px-4 py-3">
                    <summary className="flex items-center justify-between text-sm font-medium text-slate-200">
                      {t.projects.featuresLabel}
                      <FiChevronDown className="chevron transition-transform text-cyan-300" />
                    </summary>
                    <ul className="mt-3 list-disc pl-5 text-sm text-slate-400 space-y-1">
                      {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </details>
                )}
                {project.highlights && (
                  <details className="group rounded-lg border border-slate-800 px-4 py-3">
                    <summary className="flex items-center justify-between text-sm font-medium text-slate-200">
                      {t.projects.highlightsLabel}
                      <FiChevronDown className="chevron transition-transform text-cyan-300" />
                    </summary>
                    <ul className="mt-3 list-disc pl-5 text-sm text-slate-400 space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            )}

            {(project.github || project.githubBackend || project.demo) && (
              <div className="flex flex-wrap gap-3 mt-auto pt-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    <FiGithub /> {project.githubBackend ? "GitHub Frontend" : "GitHub"}
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition"
                  >
                    <FiGithub /> GitHub Backend
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-medium hover:bg-cyan-300 transition"
                  >
                    {t.projects.demoLabel} <FiExternalLink />
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
