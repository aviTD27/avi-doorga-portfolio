"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiMapPin, FiDownload } from "react-icons/fi";

const LINKEDIN_URL = "https://www.linkedin.com/in/trithikraj-doorga-331885191/";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6"
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-40 h-40 rounded-full overflow-hidden neon-border shadow-[0_0_20px_rgba(56,189,248,0.5)] mb-6"
      >
        <Image
          src="/AviPic.jpeg"
          alt="Avi Doorga"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-white mb-4"
      >
        Hi, I’m <span className="text-cyan-300">Avi Doorga</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl md:text-2xl text-slate-300 mb-3"
      >
        Full‑Stack Software Engineer • Java Spring Boot • Angular / React
      </motion.h2>

      {/* Location */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 text-slate-400 mb-6"
      >
        <FiMapPin className="text-cyan-300" />
        Paris area, France
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-8"
      >
        Full‑stack developer with 3+ years of experience building production
        applications with Java Spring Boot, Angular/React, PostgreSQL and CI/CD.
        MSc Software Engineering at EPITA (ranked 3rd in cohort). Available
        immediately for a 6‑month end‑of‑studies internship (stage de fin
        d&apos;études), followed by a full‑time role (CDI).
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-4 mb-8"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#projects"
          className="px-8 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-lg hover:bg-cyan-500/30 transition-all duration-200 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
        >
          View My Work
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/Avi_Doorga_CV_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 text-lg hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
        >
          <FiDownload /> CV (EN)
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/Avi_Doorga_CV_FR.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 text-lg hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
        >
          <FiDownload /> CV (FR)
        </motion.a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-6"
      >
        <a
          href="https://github.com/aviTD27"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="opacity-80 hover:opacity-100 transition"
        >
          <SiGithub size={32} className="text-cyan-300" />
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="opacity-80 hover:opacity-100 transition"
        >
          <FaLinkedin size={32} className="text-cyan-300" />
        </a>

        <a
          href="mailto:avi.doorga27@gmail.com"
          aria-label="Email"
          className="opacity-80 hover:opacity-100 transition"
        >
          <SiGmail size={32} className="text-cyan-300" />
        </a>
      </motion.div>
    </section>
  );
}