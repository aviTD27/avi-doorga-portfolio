"use client";

import { motion } from "framer-motion";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiMapPin, FiDownload } from "react-icons/fi";

const LINKEDIN_URL = "https://www.linkedin.com/in/trithikraj-doorga-331885191/";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-10">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold section-title mb-10"
      >
        Contact
      </motion.h2>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="glass neon-border p-8 rounded-xl max-w-xl mx-auto text-center"
      >
        <p className="text-slate-300 text-lg mb-4 leading-relaxed">
          Available immediately for an end-of-studies internship, followed by a
          full-time role (CDI). Whether it is an opportunity, a collaboration or
          just a hello, I’d love to connect.
        </p>

        <p className="flex items-center justify-center gap-2 text-slate-400 mb-6">
          <FiMapPin className="text-cyan-300" />
          Paris area, France
        </p>

        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:avi.doorga27@gmail.com"
          className="inline-block px-6 py-3 mb-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
        >
          avi.doorga27@gmail.com
        </motion.a>

        {/* CV Downloads */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="/Avi_Doorga_CV_EN.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
          >
            <FiDownload /> CV (EN)
          </a>
          <a
            href="/Avi_Doorga_CV_FR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-200"
          >
            <FiDownload /> CV (FR)
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/aviTD27"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-300 hover:text-cyan-400 transition-all"
          >
            <SiGithub size={32} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-300 hover:text-cyan-400 transition-all"
          >
            <FaLinkedin size={32} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="mailto:avi.doorga27@gmail.com"
            aria-label="Email"
            className="text-slate-300 hover:text-cyan-400 transition-all"
          >
            <SiGmail size={32} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}