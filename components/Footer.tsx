"use client";

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
    <footer className="bg-green-950 text-white/70">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-serif text-xl font-bold text-white mb-3">
              <span className="w-9 h-9 bg-green-600 rounded-xl flex items-center justify-center text-lg">
                🌿
              </span>
              PowerG Biorich
            </div>
            <p className="text-sm leading-relaxed max-w-xs">{t.footer.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-white text-lg font-bold mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-amber-300 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
