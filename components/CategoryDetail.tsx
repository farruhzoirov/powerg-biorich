"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { categoryImages, content, productMeta, type CategoryKey } from "@/data/content";
import { directions } from "@/data/directions";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ProductsSection";
import { IconArrow, IconCheck } from "@/components/ui/Icons";

const KEYS: CategoryKey[] = ["detox", "kids", "restore", "youth"];

export default function CategoryDetail({ categoryKey }: { categoryKey: CategoryKey }) {
  const { locale } = useLang();
  const c = content[locale];
  const d = directions[locale];
  const info = d.items[categoryKey];
  const list = products.filter((p) => productMeta[p.id].category === categoryKey);
  const accent = list[0] ? productMeta[list[0].id].accent : "var(--brand)";
  const others = KEYS.filter((k) => k !== categoryKey);

  return (
    <>
      <Header />
      <main className="bg-bg">
        {/* Banner */}
        <section className="relative isolate overflow-hidden pt-[76px]">
          <Image src={categoryImages[categoryKey]} alt="" fill priority sizes="100vw" className="-z-10 scale-110 object-cover" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/30" />
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-24">
            <Reveal variant="down">
              <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-white/70">
                <Link href="/" className="hover:text-white">{c.nav.home}</Link>
                <span>/</span>
                <Link href="/#categories" className="hover:text-white">{c.categories.badge}</Link>
                <span>/</span>
                <span className="text-white">{c.categoryNames[categoryKey]}</span>
              </nav>
            </Reveal>
            <Reveal delay={80}>
              <span className="inline-block rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#04210f]">
                {d.badge}
              </span>
            </Reveal>
            <Reveal delay={160} variant="blur">
              <h1 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.1] text-white">
                {c.categories.items[categoryKey].title}
                <span className="mt-2 block text-[0.55em] font-semibold text-brand">{info.headline}</span>
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{info.intro}</p>
            </Reveal>
          </div>
        </section>

        {/* Points */}
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:pt-16 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{d.pointsTitle}</h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {info.points.map((p, i) => (
              <Reveal as="li" key={p} delay={(i % 3) * 90}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white" style={{ background: accent }}>
                    <IconCheck className="h-5 w-5" />
                  </span>
                  <p className="text-[15px] font-semibold leading-snug text-heading">{p}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Products */}
        <section className="mx-auto max-w-7xl px-4 pt-14 sm:pt-20 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">
              {d.productsTitle} <span className="text-brand">({list.length})</span>
            </h2>
            <Link href="/#products" className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:underline dark:text-brand">
              {d.all}
              <IconArrow className="h-4 w-4" />
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {list.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>

        {/* Other directions */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{d.otherTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((k, i) => (
              <Reveal key={k} delay={i * 100}>
                <Link href={`/categories/${k}`} className="group relative block aspect-[16/9] overflow-hidden rounded-3xl border border-line shadow-card">
                  <Image src={categoryImages[k]} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
                    <span className="font-display text-lg font-bold">{c.categoryNames[k]}</span>
                    <IconArrow className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
