"use client";

import { motion } from "framer-motion";

export default function About() {
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
        About Me
      </motion.h2>

      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="glass neon-border p-8 rounded-xl max-w-3xl mx-auto"
      >
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          I’m <span className="text-cyan-300 font-semibold">Trithikraj Doorga (Avi)</span>, 
          a full‑stack software engineer with over 4 years of experience building 
          scalable, production‑ready applications. I specialize in 
          <span className="text-cyan-300"> Java (Spring Boot)</span>, 
          <span className="text-cyan-300"> Angular</span>, and modern web technologies — 
          with a strong focus on clean architecture, performance, and maintainability.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          I’m currently pursuing an 
          <span className="text-cyan-300"> MSc in Computer Science (Software Engineering)</span> 
          at EPITA, France, after graduating with a 
          <span className="text-cyan-300"> First Class Honors</span> degree in Applied Computing. 
          My professional journey includes working at 
          <span className="text-cyan-300"> Infosys</span> on the Renault project, where I contributed 
          to enterprise‑level systems, CI/CD pipelines, database migrations, and Agile delivery.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Beyond development, I enjoy collaborating with cross‑functional teams, simplifying 
          complex problems, and delivering solutions that balance technical quality with 
          business value. I’m also certified as a 
          <span className="text-cyan-300"> Scrum Developer (CSD)</span> and 
          <span className="text-cyan-300"> Scrum Product Owner (CSPO)</span>, which strengthens 
          my ability to work in fast‑paced Agile environments.
        </p>

        <p className="text-slate-300 text-lg leading-relaxed">
          I’m always open to new opportunities, collaborations, and meaningful conversations — 
          whether it’s about software engineering, product thinking, or building impactful 
          digital experiences.
        </p>
      </motion.div>
    </section>
  );
}
