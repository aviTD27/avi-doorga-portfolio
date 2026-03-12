"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

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
          alt="Avi Profile Photo"
          fill
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
        className="text-xl md:text-2xl text-slate-300 mb-6"
      >
        Full‑Stack Software Engineer • Java • Angular • Next.js
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-8"
      >
        I build scalable, high‑quality applications with clean architecture,
        modern frameworks, and a strong focus on performance. Currently pursuing
        my MSc in Software Engineering at EPITA, France.
      </motion.p>

      {/* CTA Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        href="#projects"
        className="px-8 py-3 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-lg hover:bg-cyan-500/30 transition-all duration-200 shadow-[0_0_12px_rgba(56,189,248,0.4)] mb-8"
      >
        View My Work
      </motion.a>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex gap-6"
      >
        {/* GitHub */}
        <a
          href="https://github.com/aviTD27"
          target="_blank"
          className="opacity-80 hover:opacity-100 transition"
        >
          <SiGithub size={32} className="text-cyan-300" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/trithikraj-doorga"
          target="_blank"
          className="opacity-80 hover:opacity-100 transition"
        >
          <FaLinkedin size={32} className="text-cyan-300" />
        </a>

        {/* Gmail */}
        <a
          href="mailto:avi.doorga27@gmail.com"
          className="opacity-80 hover:opacity-100 transition"
        >
          <SiGmail size={32} className="text-cyan-300" />
        </a>
      </motion.div>
    </section>
  );
}
