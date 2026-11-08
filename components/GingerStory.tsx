"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { content } from "@/data/content";
import Link from "next/link";
import { gingerPage } from "@/data/ginger";
import { IconArrow } from "@/components/ui/Icons";
import { useParallax } from "@/hooks/useParallax";
import Reveal from "@/components/ui/Reveal";
import { IconSpark } from "@/components/ui/Icons";

export default function GingerStory() {
  const { locale } = useLang();
  const c = content[locale].ginger;
  const bg = useParallax<HTMLDivElement>(0.18);
  const fg = useParallax<HTMLDivElement>(-0.06);

  return (
    <section id="ginger" className="relative isolate overflow-hidden bg-navy-deep py-20 text-white sm:py-28">
      {/* Parallax plantation */}
      <div ref={bg} className="absolute inset-x-0 -top-24 -bottom-24 -z-10" style={{ transform: "translateY(calc(var(--py, 0) * 1px))" }}>
        <Image src="/images/brand/plantation.jpg" alt="" fill sizes="100vw" className="object-cover opacity-35" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep via-navy-deep/70 to-navy-deep" />
      <div className="animate-blob absolute -left-20 top-1/3 -z-10 h-96 w-96 bg-[#7b3fe4]/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div ref={fg} style={{ transform: "translateY(calc(var(--py, 0) * 1px))" }}>
          <Reveal variant="left" className="relative mb-10 lg:mb-0">
            <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-brand/60 to-[#7b3fe4]/50 opacity-70 blur-xl" />
            <div className="relative aspect-[4/3.1] overflow-hidden rounded-[2rem] border border-white/20 shadow-pop">
              <Image src="/images/brand/ginger-1.jpg" alt="Qora zanjabil" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1200ms] hover:scale-105" />
            </div>
            <div className="animate-float absolute -bottom-6 -right-2 w-[46%] overflow-hidden rounded-2xl border-4 border-navy-deep shadow-pop sm:-right-6">
              <Image src="/images/brand/ginger-powder.jpg" alt="" width={600} height={346} className="h-auto w-full" />
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand backdrop-blur">
              <IconSpark className="h-4 w-4" />
              {c.badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl">{c.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-white/75">{c.text}</p>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {c.facts.map((f, i) => (
              <Reveal key={f.value} delay={300 + i * 110} variant="up">
                <div className="h-full rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur transition-colors hover:border-brand/60 hover:bg-white/10">
                  <p className="font-display text-xl font-bold text-brand">{f.value}</p>
                  <p className="mt-1.5 text-xs leading-snug text-white/70">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/ginger"
              className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-base font-bold text-[#04210f] shadow-[0_14px_34px_-10px_var(--brand)] transition-all hover:-translate-y-1 hover:bg-brand-600 sm:w-auto"
            >
              {gingerPage[locale].learnMore}
              <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
