"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="fixed bottom-0 left-0 w-full h-14 z-50 glass backdrop-blur-md border-t border-cyan-400/20 flex items-center justify-center text-slate-400 text-sm">
      © {new Date().getFullYear()} Avi Doorga — {t.footer.rights}
    </footer>
  );
}