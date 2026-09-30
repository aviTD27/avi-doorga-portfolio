"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  ReactNode,
} from "react";
import { translations, Lang, Translation } from "../lib/translations";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";
const listeners = new Set<() => void>();
let memoryLang: Lang | null = null; // fallback if localStorage is blocked

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

// Browser: saved choice first, otherwise the browser language
function getSnapshot(): Lang {
  if (memoryLang) return memoryLang;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    // storage unavailable
  }
  return navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
}

// Server render always uses English (avoids hydration mismatch)
function getServerSnapshot(): Lang {
  return "en";
}

function setLang(newLang: Lang) {
  memoryLang = newLang;
  try {
    localStorage.setItem(STORAGE_KEY, newLang);
  } catch {
    // ignore storage errors
  }
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Keep <html lang="..."> in sync for accessibility and SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}