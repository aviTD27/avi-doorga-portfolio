"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiMapPin, FiDownload, FiArrowRight } from "react-icons/fi";
import { useLanguage } from "./LanguageProvider";

const LINKEDIN_URL = "https://www.linkedin.com/in/trithikraj-doorga-331885191/";

const socials = [
  { href: "https://github.com/aviTD27", label: "GitHub", Icon: SiGithub },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: FaLinkedin },
  { href: "mailto:avi.doorga27@gmail.com", label: "Email", Icon: SiGmail },
];

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center py-12"
    >
      {/* Centered title */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold tracking-tight leading-[1.05] mb-4 text-center"
        >
          <span className="block text-2xl md:text-3xl font-medium text-slate-400 mb-2">
            {t.hero.greeting}
          </span>
          <span className="block text-5xl md:text-7xl gradient-text">
            Avi Doorga
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-2xl font-medium text-slate-300 mb-0 text-center"
        >
          {t.hero.subtitle}
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <FiMapPin /> {t.hero.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-slate-400 max-w-xl text-lg leading-relaxed mb-8"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition shadow-[0_8px_30px_-8px_rgba(56,189,248,0.7)]"
            >
              {t.hero.viewWork}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>

            {[
              { href: "/Avi_Doorga_CV_EN.pdf", label: "CV (EN)" },
              { href: "/Avi_Doorga_CV_FR.pdf", label: "CV (FR)" },
            ].map((cv) => (
              <a
                key={cv.href}
                href={cv.href}
                download={cv.href.slice(1)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                <FiDownload /> {cv.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex gap-3"
          >
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/50 transition"
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-400/50 via-sky-500/20 to-violet-500/50 blur-2xl" />
            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 to-violet-500">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                <Image
                  src="/AviPic.jpeg"
                  alt="Avi Doorga"
                  fill
                  priority
                  sizes="(min-width: 768px) 320px, 224px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
