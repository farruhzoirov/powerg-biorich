"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { content, productMeta, type CategoryKey } from "@/data/content";
import { products, type Product } from "@/data/products";
import { useTilt } from "@/hooks/useTilt";
import Reveal from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/Icons";

type Filter = "all" | CategoryKey;
const FILTERS: Filter[] = ["all", "detox", "kids", "restore", "youth"];

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { locale, t } = useLang();
  const tilt = useTilt(6);
  const meta = productMeta[product.id];
  const names = content[locale].categoryNames;

  return (
    <Link
      href={`/products/${product.id}`}
      {...tilt}
      className="tilt group relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-line bg-surface shadow-card hover:shadow-pop"
      style={{ animation: "fade-up 0.7s cubic-bezier(.22,1,.36,1) both", animationDelay: `${index * 70}ms` }}
    >
      {/* Image stage */}
      <div className="relative aspect-[5/4.4] overflow-hidden" style={{ background: meta.tint }}>
        <div
          className="absolute -right-10 -top-12 h-52 w-52 rounded-full opacity-25 blur-2xl transition-transform duration-700 group-hover:scale-125"
          style={{ background: meta.accent }}
        />
        <span
          className="absolute bottom-[-0.35em] left-3 select-none font-display text-[7.5rem] font-black leading-none opacity-[0.09]"
          style={{ color: meta.accent }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <Image
          src={product.images[0]}
          alt={product.name[locale]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="scale-[1.28] object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-[1.42] group-hover:-rotate-2"
          style={{ objectPosition: "50% 52%" }}
        />
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm"
          style={{ background: meta.accent }}
        >
          {names[meta.category]}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[1.02rem] font-bold leading-snug text-heading">{product.name[locale]}</h3>
        <p className="line-clamp-2 mt-2 flex-1 text-sm leading-relaxed text-muted">{product.shortDesc[locale]}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-bold text-heading">{t.products.viewDetails}</span>
          <span
            className="grid h-10 w-10 place-items-center rounded-full text-white transition-all duration-500 group-hover:-rotate-45 group-hover:scale-110"
            style={{ background: meta.accent }}
          >
            <IconArrow className="h-5 w-5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsSection() {
  const { t, locale } = useLang();
  const c = content[locale];
  const [filter, setFilter] = useState<Filter>("all");

  const list = products.filter((p) => filter === "all" || productMeta[p.id]?.category === filter);

  return (
    <section id="products" className="relative overflow-x-clip py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-brand/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand">
              {t.products.badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-3xl font-bold text-heading sm:text-4xl lg:text-[2.8rem]">{t.products.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg text-muted">{t.products.subtitle}</p>
          </Reveal>
        </div>

        {/* Filters */}
        <Reveal delay={250} className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
          {FILTERS.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  on
                    ? "border-transparent bg-navy text-white shadow-[0_10px_24px_-10px_var(--navy)] dark:bg-brand dark:text-[#04210f]"
                    : "border-line bg-surface text-muted hover:-translate-y-0.5 hover:border-brand/50 hover:text-heading"
                }`}
              >
                {f === "all" ? c.filters.all : c.categoryNames[f]}
              </button>
            );
          })}
        </Reveal>
        <p className="mt-4 text-center text-sm font-semibold text-muted">
          {list.length} {c.filters.count}
        </p>

        {/* Grid */}
        <div key={filter} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
