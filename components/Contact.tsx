"use client";

import { motion } from "framer-motion";
// import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";


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
        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
          Whether you want to collaborate, discuss an opportunity, or just say
          hello — I’d love to connect.
        </p>

        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:avi.doorga27@gmail.com"
          className="inline-block px-6 py-3 mb-6 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/30 transition-all duration-200 shadow-[0_0_12px_rgba(56,189,248,0.4)]"
        >
          avi.doorga27@gmail.com
        </motion.a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/aviTD27"
            target="_blank"
            className="text-slate-300 hover:text-cyan-400 transition-all"
          >
            <SiGithub size={32} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/trithikraj-doorga-331885191/"
            target="_blank"
            className="text-slate-300 hover:text-cyan-400 transition-all"
          >
            {/* <SiLinkedin size={32} /> */}
            <FaLinkedin size={32} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="mailto:avi.doorga27@gmail.com"
            className="text-slate-300 hover:text-cyan-400 transition-all"
          >
            <SiGmail size={32} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
