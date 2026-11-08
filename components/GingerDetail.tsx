"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { gingerPage } from "@/data/ginger";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ProductsSection";
import { IconSpark } from "@/components/ui/Icons";

export default function GingerDetail() {
  const { locale } = useLang();
  const g = gingerPage[locale];
  const list = products.filter((p) => p.ingredients.uz.toLowerCase().includes("zanjabil"));

  return (
    <>
      <Header />
      <main className="bg-bg">
        {/* Banner */}
        <section className="relative isolate overflow-hidden bg-navy-deep pt-[76px] text-white">
          <Image src="/images/brand/plantation.jpg" alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 sm:py-20 lg:grid-cols-2">
            <div>
              <Reveal variant="down">
                <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur transition-colors hover:bg-white/20">
                  ← {g.back}
                </Link>
              </Reveal>
              <Reveal delay={80}>
                <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#04210f]">
                  <IconSpark className="h-4 w-4" />
                  {g.badge}
                </span>
              </Reveal>
              <Reveal delay={160} variant="blur">
                <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08]">{g.title}</h1>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{g.lead}</p>
              </Reveal>
            </div>
            <Reveal variant="zoom" delay={200}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/20 shadow-pop">
                <Image src="/images/brand/ginger-1.jpg" alt={g.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Story blocks */}
        <section className="mx-auto max-w-7xl space-y-16 px-4 py-10 sm:px-6 sm:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="left">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-line shadow-card">
                <Image src="/images/brand/ginger-2.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal variant="right">
              <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{g.historyTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{g.historyText}</p>
            </Reveal>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="left" className="order-2 lg:order-1">
              <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{g.habitatTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{g.habitatText}</p>
            </Reveal>
            <Reveal variant="right" className="order-1 lg:order-2">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-line shadow-card">
                <Image src="/images/brand/plantation.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <Reveal variant="left">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-line shadow-card">
                <Image src="/images/brand/ginger-powder.jpg" alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal variant="right">
              <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{g.qualityTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{g.qualityText}</p>
            </Reveal>
          </div>

          {/* Facts */}
          <div>
            <Reveal>
              <h2 className="text-center font-display text-2xl font-bold text-heading sm:text-3xl">{g.factsTitle}</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {g.facts.map((f, i) => (
                <Reveal key={f.value} delay={i * 100} variant="zoom">
                  <div className="h-full rounded-3xl bg-navy p-7 text-center text-white shadow-pop">
                    <p className="font-display text-3xl font-bold text-brand">{f.value}</p>
                    <p className="mt-3 text-sm leading-snug text-white/75">{f.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">{g.productsTitle}</h2>
              <p className="mt-3 text-lg text-muted">{g.productsText}</p>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {list.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
