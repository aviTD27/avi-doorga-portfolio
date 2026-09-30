"use client";

import { useLanguage } from "./LanguageProvider";
import type { Lang } from "../lib/translations";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#education", label: t.nav.education },
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  const languages: Lang[] = ["en", "fr"];

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 glass backdrop-blur-md border-b border-cyan-400/20 flex items-center justify-between gap-4 px-4 md:px-8">
      {/* Logo */}
      <a
        href="#hero"
        className="text-cyan-300 font-bold text-base md:text-xl tracking-wide whitespace-nowrap"
      >
        DOORGA Trithikraj (Avi)
      </a>

      <div className="flex items-center gap-4 md:gap-8 min-w-0">
        {/* Navbar — scrolls horizontally on small screens */}
        <nav className="flex gap-5 md:gap-8 text-slate-300 font-medium text-sm md:text-base overflow-x-auto whitespace-nowrap">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-300 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language toggle */}
        <div
          role="group"
          aria-label="Language"
          className="flex shrink-0 rounded-lg border border-cyan-400/30 overflow-hidden text-xs md:text-sm font-semibold"
        >
          {languages.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`px-2.5 py-1 transition ${
                lang === l
                  ? "bg-cyan-500/30 text-cyan-200"
                  : "text-slate-400 hover:text-cyan-300"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}