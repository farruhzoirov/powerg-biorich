"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Locale, translations } from "@/data/translations";

type T = (typeof translations)[Locale];

interface LangContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: T;
}

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uz");

  useEffect(() => {
    const saved = localStorage.getItem("pg_lang") as Locale | null;
    if (saved && ["uz", "ru", "en"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("pg_lang", l);
  }

  return (
    <LangContext.Provider value={{ locale, setLocale, t: translations[locale] as T }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
