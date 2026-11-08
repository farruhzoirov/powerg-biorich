"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { content } from "@/data/content";
import { products } from "@/data/products";

export default function Footer() {
  const { t, locale } = useLang();
  const n = content[locale].nav;

  const navLinks = [
    { label: n.home, href: "/" },
    { label: n.products, href: "/#products" },
    { label: n.ginger, href: "/ginger" },
    { label: n.about, href: "/#about" },
    { label: n.certs, href: "/#certs" },
    { label: n.contact, href: "/#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white/70">
      <div className="animate-blob absolute -right-24 -top-24 h-72 w-72 bg-brand/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1.2fr]">
          <div>
            <Image src="/images/logo-tight.png" alt="Power-G Bio Rich" width={272} height={230} className="mb-4 h-20 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {content[locale].hero.chips.map((c, i) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 py-1 pl-1 pr-3.5 text-xs font-bold text-white/90">
                  <span className="relative block h-8 w-8 overflow-hidden rounded-full bg-white">
                    <Image src={["/images/brand/badge-halal.jpg", "/images/brand/badge-gmp.jpg", "/images/brand/badge-haccp.jpg"][i]} alt="" fill sizes="32px" className="object-contain p-0.5" />
                  </span>
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">{t.footer.quickLinks}</h4>
            <ul className="grid gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-all duration-200 hover:translate-x-1 hover:text-brand">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">{t.nav.products}</h4>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-1">
              {products.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.id}`} className="line-clamp-1 text-sm transition-all duration-200 hover:translate-x-1 hover:text-brand">{p.name[locale]}</Link>
                </li>
              ))}
              {products.length > 6 && (
                <li>
                  <Link href="/#products" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand transition-all duration-200 hover:translate-x-1">
                    {{ uz: `Yana ${products.length - 6} ta mahsulot`, ru: `Ещё ${products.length - 6} продукта`, en: `${products.length - 6} more products` }[locale]}
                    <span aria-hidden>…</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <span>{t.footer.rights}</span>
          <span className="font-bold tracking-wider text-brand">HALOLLIK · SIFAT · NATIJA</span>
        </div>
      </div>
    </footer>
  );
}
