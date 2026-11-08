"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";
import { content } from "@/data/content";
import type { Locale } from "@/data/translations";
import { IconArrow, IconClose, IconMenu, IconMoon, IconSun } from "@/components/ui/Icons";

const LOCALES: Locale[] = ["uz", "ru", "en"];

export default function Header() {
  const { locale, setLocale } = useLang();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const c = content[locale];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { id: "home", label: c.nav.home },
    { id: "products", label: c.nav.products },
    { id: "about", label: c.nav.about },
    { id: "certs", label: c.nav.certs },
    { id: "contact", label: c.nav.contact },
  ];

  useEffect(() => {
    const bar = document.getElementById("scroll-progress");
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar?.style.setProperty("--p", String(max > 0 ? Math.min(y / max, 1) : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy (home page only)
  useEffect(() => {
    if (pathname !== "/") return;
    const ids = ["home", "why", "categories", "products", "ginger", "about", "certs", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const href = (id: string) => (id === "home" ? "/" : `/#${id}`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled || pathname !== "/"
            ? "border-line bg-[var(--glass)] shadow-card backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-2 px-3 sm:h-[76px] sm:gap-4 sm:px-6">
          {/* Logo */}
          <Link href="/" aria-label="Power-G Bio Rich" className="flex shrink-0 items-center">
            <Logo className="h-14 w-auto sm:h-16" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const isActive = pathname === "/" ? active === l.id : l.id === "products" && pathname.startsWith("/products");
              return (
                <Link
                  key={l.id}
                  href={href(l.id)}
                  className={`relative inline-flex h-10 items-center rounded-full px-4 text-[15px] font-semibold transition-colors ${
                    isActive ? "bg-brand/15 text-heading ring-1 ring-brand/30" : "text-muted hover:text-heading"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls — all 40px tall */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex h-10 items-center rounded-full border border-line bg-surface/80 p-1">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  className={`h-8 rounded-full px-2 text-[11px] font-bold uppercase transition-all sm:px-3 sm:text-xs ${
                    locale === l ? "bg-navy text-white shadow-sm dark:bg-brand dark:text-[#04210f]" : "text-muted hover:text-heading"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-heading transition-transform hover:scale-110 active:scale-95"
            >
              {theme === "dark" ? <IconSun className="h-[18px] w-[18px]" /> : <IconMoon className="h-[18px] w-[18px]" />}
            </button>

            <Link
              href="/#contact"
              className="btn-shine group hidden h-10 items-center gap-1.5 rounded-full bg-brand px-5 text-[15px] font-bold text-[#04210f] shadow-[0_8px_24px_-8px_var(--brand)] transition-all hover:-translate-y-0.5 hover:bg-brand-600 md:inline-flex"
            >
              {c.nav.order}
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/80 text-heading lg:hidden"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroll progress — runs along the bottom edge of the header */}
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px] overflow-hidden">
          <div id="scroll-progress" className="scroll-progress h-full w-full bg-gradient-to-r from-brand to-[#2a6bff]" />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute inset-x-3 top-3 rounded-3xl border border-line bg-surface p-5 shadow-pop transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <Logo className="h-11 w-auto" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="grid h-10 w-10 place-items-center rounded-full bg-surface-2 text-heading"
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-col">
            {links.map((l, i) => (
              <Link
                key={l.id}
                href={href(l.id)}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-bold text-heading transition-all duration-500 hover:bg-brand/10 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
              >
                {l.label}
                <IconArrow className="h-5 w-5 text-brand" />
              </Link>
            ))}
          </nav>

          <div className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4">
            <div className="flex items-center rounded-full border border-line p-0.5">
              {LOCALES.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase ${
                    locale === l ? "bg-navy text-white dark:bg-brand dark:text-[#04210f]" : "text-muted"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-[#04210f]"
            >
              {c.nav.order}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
