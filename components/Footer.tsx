"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { label: t.nav.home, href: "/#home" },
    { label: t.nav.products, href: "/#products" },
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  return (
    <footer className="bg-green-950 dark:bg-[#030d0a] text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="PowerG Biorich"
              width={280}
              height={140}
              className="h-16 md:h-[4.5rem] w-auto mb-3 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed max-w-xs text-white/70 dark:text-gray-300">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-white dark:text-amber-300 text-lg font-bold mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 dark:text-gray-300 hover:text-amber-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40 dark:text-gray-500">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
