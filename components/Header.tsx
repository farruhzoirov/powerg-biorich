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
          menuOpen
            ? "bg-transparent py-3"
            : menuSolid
              ? "bg-white/95 dark:bg-green-950/90 backdrop-blur-xl shadow-sm py-3 border-b border-gray-100 dark:border-green-900/80"
              : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
          <div className="shrink-0">
            {!menuOpen && (
              <Link href="/#home" onClick={() => setMenuOpen(false)}>
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
            )}
          </div>

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
            {menuOpen && (
              <div className="lg:hidden flex items-center gap-2">
                <div className="flex items-center gap-1 rounded-full p-1 bg-white/10">
                  {langs.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => setLocale(l)}
                      className={`min-w-[2.5rem] text-xs font-bold px-2.5 py-1.5 rounded-full transition-all cursor-pointer ${
                        locale === l
                          ? "bg-amber-400 text-green-950"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {l.toUpperCase()}
                    </button>
                  ))}
                </div>
                <ThemeToggleButton
                  theme={theme}
                  onClick={toggleTheme}
                  className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-white/10 text-amber-300 hover:bg-white/15"
                />
              </div>
            )}

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

            {/* Mobile menu ochiq bo'lsa headerda faqat X ko'rinsin */}
            {!menuOpen && (
              <ThemeToggleButton
                theme={theme}
                onClick={toggleTheme}
                className={themeButtonClass}
              />
            )}

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
                    menuOpen ? "bg-white" : menuSolid ? "bg-gray-800 dark:bg-gray-100" : "bg-white"
                  } ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}`}
                />
                <span
                  className={`absolute block h-0.5 w-5 rounded transition-all duration-300 ${
                    menuOpen ? "bg-white" : menuSolid ? "bg-gray-800 dark:bg-gray-100" : "bg-white"
                  } ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu — full screen, page ko'rinmaydi */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-green-950 dark:bg-[#030d0a]" />

        <div
          className={`relative h-full w-full pt-20 pb-8 px-6 flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="flex justify-center pb-4">
            <Image
              src="/images/logo.png"
              alt="PowerG Biorich"
              width={270}
              height={135}
              className="h-20 w-auto brightness-0 invert"
            />
          </div>

          <nav className="flex-1 flex items-start pt-3">
            <ul className="w-full flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-serif text-3xl font-bold text-white/95 hover:text-amber-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
