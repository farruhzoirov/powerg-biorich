"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { Locale } from "@/data/translations";

function IconSun({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function IconMoon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a6.5 6.5 0 1 0 11.5 11.5z" />
    </svg>
  );
}

function ThemeToggleButton({
  theme,
  onClick,
  className,
}: {
  theme: "light" | "dark";
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
      className={className}
    >
      {theme === "dark" ? (
        <IconSun className="w-[18px] h-[18px]" />
      ) : (
        <IconMoon className="w-[18px] h-[18px]" />
      )}
    </button>
  );
}

const menuLabels: Record<Locale, { language: string; theme: string }> = {
  uz: { language: "Til", theme: "Mavzu" },
  ru: { language: "Язык", theme: "Тема" },
  en: { language: "Language", theme: "Theme" },
};

export default function Header() {
  const { t, locale, setLocale } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const solid = !isHome || scrolled;
  const menuSolid = solid || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.products, href: "/#products" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const langs: Locale[] = ["uz", "ru", "en"];
  const labels = menuLabels[locale];

  const langButtonClass = (active: boolean) =>
    `text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
      active
        ? menuSolid
          ? "bg-green-700 text-white dark:bg-amber-400 dark:text-green-950"
          : "bg-white text-green-700"
        : menuSolid
          ? "text-gray-500 dark:text-gray-300 hover:text-green-700 dark:hover:text-white"
          : "text-white/70 hover:text-white"
    }`;

  const themeButtonClass = menuSolid
    ? "h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-amber-300 hover:bg-gray-200 dark:hover:bg-white/15"
    : "h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-white/15 text-white hover:bg-white/25";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          menuSolid
            ? "bg-white/95 dark:bg-green-950/90 backdrop-blur-xl shadow-sm py-3 border-b border-gray-100 dark:border-green-900/80"
            : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
          <Link href="/#home" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="PowerG Biorich"
              width={280}
              height={140}
              priority
              className={`h-16 md:h-[4.5rem] w-auto transition-all duration-300 ${
                menuSolid ? "brightness-0 dark:invert" : "brightness-0 invert"
              }`}
            />
          </Link>

          <nav className="header-nav items-center gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold relative group transition-colors duration-200 ${
                  menuSolid
                    ? "text-gray-600 dark:text-gray-200 hover:text-green-700 dark:hover:text-amber-300"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 rounded group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className={`header-lang items-center gap-0.5 rounded-full p-1 ${
                menuSolid ? "bg-gray-100 dark:bg-white/10" : "bg-white/15"
              }`}
            >
              {langs.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  className={langButtonClass(locale === l)}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <ThemeToggleButton
              theme={theme}
              onClick={toggleTheme}
              className={themeButtonClass}
            />

            <div className="header-burger">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative flex h-10 w-10 items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-black/5 dark:hover:bg-white/10"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <span
                  className={`absolute block h-0.5 w-5 rounded transition-all duration-300 ${
                    menuSolid ? "bg-gray-800 dark:bg-gray-100" : "bg-white"
                  } ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}`}
                />
                <span
                  className={`absolute block h-0.5 w-5 rounded transition-all duration-300 ${
                    menuSolid ? "bg-gray-800 dark:bg-gray-100" : "bg-white"
                  } ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu — yopish faqat header burger orqali */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-green-950/40 dark:bg-black/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
        />

        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white dark:bg-green-950 shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-center border-b border-gray-100 dark:border-white/10 px-6 pt-24 pb-6">
            <Image
              src="/images/logo.png"
              alt="PowerG Biorich"
              width={200}
              height={100}
              className="h-14 w-auto brightness-0 dark:invert"
            />
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center py-4 text-lg font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-100 dark:border-white/10 last:border-0 hover:text-green-700 dark:hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-gray-100 dark:border-white/10 px-6 py-6 space-y-5">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3">
                {labels.language}
              </p>
              <div className="flex items-center gap-1 rounded-full p-1 bg-gray-100 dark:bg-white/10 w-fit">
                {langs.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLocale(l)}
                    className={`min-w-[3rem] text-sm font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                      locale === l
                        ? "bg-green-700 text-white dark:bg-amber-400 dark:text-green-950 shadow-sm"
                        : "text-gray-500 dark:text-gray-400 hover:text-green-700 dark:hover:text-white"
                    }`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                {labels.theme}
              </p>
              <ThemeToggleButton
                theme={theme}
                onClick={toggleTheme}
                className="h-11 w-11 rounded-full flex items-center justify-center transition-all cursor-pointer bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-amber-300 hover:bg-gray-200 dark:hover:bg-white/15 shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
