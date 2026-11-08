"use client";

import { useState, type PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { content, productMeta } from "@/data/content";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ProductsSection";
import { IconArrow, IconCheck, IconLeaf, IconShield, IconSpark } from "@/components/ui/Icons";

export default function ProductDetail({ id }: { id: number }) {
  const { t, locale } = useLang();
  const d = content[locale].detail;
  const product = products.find((p) => p.id === id);
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);

  if (!product) {
    return (
      <>
        <Header />
        <main className="grid min-h-screen place-items-center bg-bg pt-24">
          <div className="text-center">
            <IconLeaf className="mx-auto mb-4 h-12 w-12 text-brand" />
            <p className="mb-4 text-muted">{d.notFound}</p>
            <Link href="/#products" className="font-bold text-brand-600 hover:underline">
              ← {t.products.backToProducts}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const meta = productMeta[product.id];
  const idx = products.findIndex((p) => p.id === product.id);
  const prev = products[(idx - 1 + products.length) % products.length];
  const next = products[(idx + 1) % products.length];
  const related = [
    ...products.filter((p) => p.id !== product.id && productMeta[p.id].category === meta.category),
    ...products.filter((p) => p.id !== product.id && productMeta[p.id].category !== meta.category),
  ].slice(0, 3);
  const benefits = product.benefits[locale];
  const icons = [IconShield, IconLeaf, IconSpark];

  const go = (n: number) => setActiveIdx((activeIdx + n + product.images.length) % product.images.length);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <>
      <Header />
      <main className="relative overflow-x-clip bg-bg pb-10 pt-24 sm:pt-32">
        {/* Ambient tint */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[640px] opacity-70 dark:opacity-25"
          style={{ background: `radial-gradient(60% 60% at 70% 20%, ${meta.tint}, transparent 70%)` }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal variant="down" className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="/#products"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-sm font-bold text-heading shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/50"
            >
              <IconArrow className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              {t.products.backToProducts}
            </Link>
            <nav className="hidden items-center gap-2 text-sm font-semibold text-muted sm:flex">
              <Link href="/" className="transition-colors hover:text-heading">{content[locale].nav.home}</Link>
              <span>/</span>
              <span className="line-clamp-1 text-heading">{product.name[locale]}</span>
            </nav>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            {/* Gallery */}
            <Reveal variant="left" className="lg:sticky lg:top-28 lg:self-start">
              <div
                className="relative aspect-[5/4] cursor-zoom-in overflow-hidden rounded-[2rem] border border-line shadow-pop"
                style={{ background: meta.tint }}
                onPointerMove={onMove}
                onPointerLeave={() => setZoom(null)}
              >
                <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full opacity-30 blur-3xl" style={{ background: meta.accent }} />
                <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full opacity-20 blur-3xl" style={{ background: meta.accent }} />
                <Image
                  key={activeIdx}
                  src={product.images[activeIdx]}
                  alt={product.name[locale]}
                  fill
                  priority={activeIdx === 0}
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-contain mix-blend-multiply transition-transform duration-300 ease-out"
                  style={{
                    animation: "fade-up 0.6s cubic-bezier(.22,1,.36,1) both",
                    transform: zoom ? "scale(1.9)" : "scale(1.12)",
                    transformOrigin: zoom ? `${zoom.x}% ${zoom.y}%` : "50% 50%",
                  }}
                />

                <span className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm" style={{ background: meta.accent }}>
                  {content[locale].categoryNames[meta.category]}
                </span>

                {product.images.length > 1 && (
                  <>
                    <button type="button" onClick={() => go(-1)} aria-label="Previous" className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-card transition-transform hover:scale-110 active:scale-95">
                      <IconArrow className="h-5 w-5 rotate-180" />
                    </button>
                    <button type="button" onClick={() => go(1)} aria-label="Next" className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-card transition-transform hover:scale-110 active:scale-95">
                      <IconArrow className="h-5 w-5" />
                    </button>
                    <span className="absolute bottom-4 right-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                      {activeIdx + 1} / {product.images.length}
                    </span>
                  </>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1">
                  {product.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveIdx(i)}
                      aria-label={`${product.name[locale]} ${i + 1}`}
                      className={`relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl border-2 transition-all duration-300 sm:h-20 sm:w-20 ${
                        i === activeIdx ? "-translate-y-1 shadow-card" : "border-line opacity-70 hover:-translate-y-0.5 hover:opacity-100"
                      }`}
                      style={{ background: meta.tint, borderColor: i === activeIdx ? meta.accent : undefined }}
                    >
                      <Image src={src} alt="" fill sizes="80px" className="scale-125 object-cover mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              )}
            </Reveal>

            {/* Info */}
            <div className="flex flex-col">
              <Reveal>
                <h1 className="font-display text-[clamp(1.7rem,3.6vw,2.7rem)] font-bold leading-[1.15] text-heading">{product.name[locale]}</h1>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-lg leading-relaxed text-muted">{product.shortDesc[locale]}</p>
              </Reveal>

              <Reveal delay={180} className="mt-6 flex flex-wrap gap-2">
                {d.trust.map((x) => (
                  <span key={x} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold text-heading shadow-sm">
                    <IconCheck className="h-3.5 w-3.5 text-brand" />
                    {x}
                  </span>
                ))}
              </Reveal>

              <Reveal delay={240} className="mt-8 rounded-3xl border border-line bg-surface p-6 shadow-card">
                <h2 className="mb-4 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-heading">
                  <span className="h-5 w-1.5 rounded-full" style={{ background: meta.accent }} />
                  {d.highlights}
                </h2>
                <ul className="grid gap-3">
                  {benefits.slice(0, 4).map((b, i) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] font-medium text-ink" style={{ animation: "fade-up .6s both", animationDelay: `${300 + i * 90}ms` }}>
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-white" style={{ background: meta.accent }}>
                        <IconCheck className="h-3.5 w-3.5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                {benefits.length > 4 && (
                  <a href="#benefits" className="mt-4 inline-block text-sm font-bold text-brand-600 hover:underline dark:text-brand">
                    +{benefits.length - 4} {d.more} ↓
                  </a>
                )}
              </Reveal>

              <Reveal delay={320} className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#contact"
                  className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-pop transition-all hover:-translate-y-1 sm:w-auto"
                  style={{ background: meta.accent }}
                >
                  {t.products.contactForOrder}
                  <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            </div>
          </div>

          {/* About + Ingredients */}
          <div className="mt-12 sm:mt-16 grid gap-5 lg:grid-cols-2">
            <Reveal variant="up">
              <section className="h-full rounded-[2rem] border border-line bg-surface p-7 shadow-card sm:p-9">
                <h2 className="font-display text-xl font-bold text-heading">{d.about}</h2>
                <p className="mt-4 leading-relaxed text-muted">{product.fullDesc[locale]}</p>
              </section>
            </Reveal>
            <Reveal variant="up" delay={120}>
              <section className="relative h-full overflow-hidden rounded-[2rem] bg-navy p-7 text-white shadow-pop sm:p-9">
                <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full opacity-40 blur-3xl" style={{ background: meta.accent }} />
                <h2 className="relative flex items-center gap-2 font-display text-xl font-bold">
                  <IconLeaf className="h-6 w-6 text-brand" />
                  {t.products.ingredients}
                </h2>
                <p className="relative mt-4 leading-relaxed text-white/80">{product.ingredients[locale]}</p>
              </section>
            </Reveal>
          </div>

          {/* All benefits */}
          <section id="benefits" className="mt-12 sm:mt-16">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{d.benefits}</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <Reveal key={b} delay={(i % 3) * 90} variant="up">
                    <div className="group flex h-full gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-pop">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" style={{ background: meta.accent }}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="text-[15px] font-semibold leading-snug text-heading">{b}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* Prev / next */}
          <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-2">
            {[{ p: prev, label: d.prev, dir: "left" as const }, { p: next, label: d.next, dir: "right" as const }].map(({ p, label, dir }) => (
              <Reveal key={p.id} variant={dir}>
                <Link href={`/products/${p.id}`} className={`group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition-all hover:-translate-y-1 hover:border-brand/50 ${dir === "right" ? "flex-row-reverse text-right" : ""}`}>
                  <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl" style={{ background: productMeta[p.id].tint }}>
                    <Image src={p.images[0]} alt="" fill sizes="64px" className="scale-150 object-cover mix-blend-multiply" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted">{label}</span>
                    <span className="line-clamp-1 font-display text-sm font-bold text-heading">{p.name[locale]}</span>
                  </span>
                  <IconArrow className={`h-5 w-5 text-brand transition-transform ${dir === "left" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`} />
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Related */}
          <section className="mt-14 sm:mt-20 pb-10">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{d.related}</h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
