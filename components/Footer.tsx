"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-32 border-t border-slate-800 py-8 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} Avi Doorga — {t.footer.rights}
    </footer>
  );
}
