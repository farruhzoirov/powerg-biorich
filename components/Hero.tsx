"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { content, productMeta } from "@/data/content";
import { products } from "@/data/products";
import { useParallax } from "@/hooks/useParallax";
import Reveal from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/Icons";

const CHIP_LOGOS = ["/images/brand/badge-halal.jpg", "/images/brand/badge-gmp.jpg", "/images/brand/badge-haccp.jpg"];

function packshot(id: number) {
  return products.find((p) => p.id === id)!.images[0];
}

export default function Hero() {
  const { locale } = useLang();
  const c = content[locale].hero;
  const par = useParallax<HTMLDivElement>(0.12);
  const par2 = useParallax<HTMLDivElement>(-0.08);

  return (
    <section id="home" className="relative isolate overflow-hidden pb-10 pt-24 sm:pt-32 lg:pb-24 lg:pt-36">
      {/* Backdrop */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#e9faf1] via-bg to-bg dark:from-[#0a2230] dark:via-bg dark:to-bg" />
      <div className="animate-blob absolute -left-24 top-10 -z-10 h-[420px] w-[420px] bg-brand/25 blur-3xl" />
      <div className="animate-blob absolute -right-20 top-40 -z-10 h-[460px] w-[460px] bg-[#2a6bff]/20 blur-3xl [animation-delay:-6s]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.5] dark:opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(var(--line) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 75%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        {/* Copy */}
        <div className="relative z-10">
          <Reveal variant="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-surface/80 px-4 py-2 text-xs font-bold text-heading shadow-card backdrop-blur sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-brand" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-brand" />
              </span>
              {c.badge}
            </span>
          </Reveal>

          <Reveal variant="blur" delay={120}>
            <h1 className="mt-6 font-display text-[clamp(2.1rem,4.3vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-heading">
              {c.titleA}
              <br />
              <span className="text-gradient">{c.titleB}</span>
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#2f4163] dark:text-muted sm:text-lg">{c.subtitle}</p>
          </Reveal>

          <Reveal delay={380} className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <Link
              href="/#products"
              className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-bold text-[#04210f] shadow-[0_14px_34px_-10px_var(--brand)] transition-all hover:-translate-y-1 hover:bg-brand-600 sm:w-auto sm:text-base"
            >
              {c.cta}
              <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-line bg-surface px-7 py-4 text-sm font-bold text-heading transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-card sm:w-auto sm:text-base"
            >
              {c.ctaSecondary}
            </Link>
          </Reveal>

          <Reveal delay={500} className="mt-8 grid grid-cols-3 gap-2.5 sm:mt-10 sm:flex sm:flex-wrap sm:gap-3">
            {c.chips.map((chip, i) => (
              <span key={chip} className="flex flex-col items-center gap-1.5 rounded-2xl border border-line bg-surface px-2 py-3 text-center text-xs font-bold text-heading shadow-card sm:flex-row sm:gap-2.5 sm:rounded-full sm:py-1.5 sm:pl-1.5 sm:pr-4 sm:text-left sm:text-sm">
                <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-black/5 sm:h-9 sm:w-9">
                  <Image src={CHIP_LOGOS[i]} alt="" fill sizes="36px" className="object-contain p-0.5" />
                </span>
                {chip}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Visual composition */}
        <Reveal variant="zoom" delay={200} className="relative mx-auto aspect-[1/1.02] w-full max-w-[560px]">
          {/* rotating ring */}
          <div className="animate-spin-slow absolute inset-[6%] rounded-full border-2 border-dashed border-brand/40" />
          <div className="absolute inset-[16%] rounded-full bg-gradient-to-br from-brand/30 via-[#2a6bff]/15 to-transparent blur-2xl" />

          {/* main card */}
          <div ref={par} className="absolute inset-x-[14%] top-[8%] bottom-[10%]" style={{ transform: "translateY(calc(var(--py, 0) * 1px))" }}>
            <div
              className="animate-float relative h-full overflow-hidden rounded-[2.2rem] border-4 border-white shadow-pop dark:border-white/10"
              style={{ background: productMeta[4].tint, "--r": "-2deg" } as React.CSSProperties}
            >
              <Image
                src={packshot(4)}
                alt="Power-G Double G"
                fill
                priority
                sizes="(max-width: 1024px) 70vw, 380px"
                className="scale-[1.3] object-cover mix-blend-multiply"
                style={{ objectPosition: "50% 55%" }}
              />
            </div>
          </div>

          {/* left card */}
          <div ref={par2} className="absolute -left-1 bottom-[6%] w-[36%] sm:left-[-2%]" style={{ transform: "translateY(calc(var(--py, 0) * 1px))" }}>
            <div
              className="animate-float-slow relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-pop dark:border-white/10"
              style={{ background: productMeta[8].tint, "--r": "4deg" } as React.CSSProperties}
            >
              <Image
                src={packshot(8)}
                alt="Berry Collagen Plus"
                fill
                sizes="200px"
                className="scale-[1.9] object-cover mix-blend-multiply"
                style={{ objectPosition: "42% 55%" }}
              />
            </div>
          </div>

          {/* right card */}
          <div className="absolute -right-1 top-[2%] w-[34%] sm:right-[-2%]">
            <div
              className="animate-float relative aspect-[4/5] overflow-hidden rounded-3xl border-4 border-white shadow-pop [animation-delay:-3s] dark:border-white/10"
              style={{ background: productMeta[5].tint, "--r": "-5deg" } as React.CSSProperties}
            >
              <Image
                src={packshot(5)}
                alt="Active Mango"
                fill
                sizes="200px"
                className="scale-[2] object-cover mix-blend-multiply"
                style={{ objectPosition: "50% 52%" }}
              />
            </div>
          </div>

          {/* Halal certificate */}
          <div className="animate-float absolute right-[-1%] top-[50%] z-10 [--r:0deg] [animation-delay:-4s]">
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white bg-white shadow-pop dark:border-white/20 sm:h-28 sm:w-28">
              <Image src="/images/brand/badge-halal.jpg" alt="Halal" fill sizes="112px" className="object-contain p-1" />
            </div>
          </div>

          {/* Floating stat badges */}
          <div className="animate-float-slow absolute left-[2%] top-[14%] rounded-2xl border border-line bg-surface/90 px-4 py-3 shadow-card backdrop-blur [--r:0deg]">
            <p className="font-display text-2xl font-bold text-heading">{c.floatA.value}</p>
            <p className="text-xs font-semibold text-muted">{c.floatA.label}</p>
          </div>
          <div className="animate-float absolute bottom-[1%] right-[4%] rounded-2xl bg-navy px-4 py-3 text-white shadow-pop [--r:0deg] [animation-delay:-2s]">
            <p className="font-display text-2xl font-bold text-brand">{c.floatB.value}</p>
            <p className="text-xs font-semibold text-white/80">{c.floatB.label}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
