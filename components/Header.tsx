"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { Locale } from "@/data/translations";

export default function Header() {
  const { t, locale, setLocale } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.products, href: "/#products" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const langs: Locale[] = ["uz", "ru", "en"];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-2"
            : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/#home" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="PowerG Biorich"
              width={220}
              height={110}
              priority
              className={`h-16 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium relative group transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-600 hover:text-green-700"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-500 rounded group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <div
              className={`flex items-center gap-0.5 rounded-full p-1 ${
                scrolled ? "bg-green-100" : "bg-white/15"
              }`}
            >
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`text-xs font-bold px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    locale === l
                      ? scrolled
                        ? "bg-green-700 text-white"
                        : "bg-white text-green-700"
                      : scrolled
                      ? "text-gray-500 hover:text-green-700"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-0.5 rounded transition-all duration-300 ${
                  scrolled ? "bg-gray-700" : "bg-white"
                } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 rounded transition-all duration-300 ${
                  scrolled ? "bg-gray-700" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 rounded transition-all duration-300 ${
                  scrolled ? "bg-gray-700" : "bg-white"
                } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Image
          src="/images/logo.png"
          alt="PowerG Biorich"
          width={260}
          height={130}
          className="h-24 w-auto mb-4 brightness-0"
        />
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="font-serif text-3xl font-bold text-green-900 hover:text-green-700 transition-colors"
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-2 mt-4">
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setMenuOpen(false); }}
              className={`text-sm font-bold px-4 py-2 rounded-full transition-all cursor-pointer ${
                locale === l
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-500 hover:text-green-700"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
