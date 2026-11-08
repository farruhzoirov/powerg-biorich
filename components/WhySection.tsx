"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { content, toxinImages } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import { IconLeaf } from "@/components/ui/Icons";

export default function WhySection() {
  const { locale } = useLang();
  const c = content[locale].why;

  return (
    <section id="why" className="relative overflow-hidden py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-brand/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand">
              {c.badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-[2.8rem]">
              {c.title} <span className="text-gradient">{c.titleAccent}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-lg text-muted">{c.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-8 grid sm:mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {c.toxins.map((label, i) => (
            <Reveal key={label} variant="zoom" delay={i * 80}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-line shadow-card sm:aspect-[4/3]">
                <Image
                  src={toxinImages[i]}
                  alt={label}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <span className="mb-2.5 block h-1 w-10 rounded-full bg-brand transition-all duration-500 group-hover:w-16" />
                  <p className="text-base font-bold leading-snug text-white sm:text-xl">{label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Answer */}
        <Reveal className="relative mt-14 overflow-hidden rounded-[2rem] bg-navy p-8 text-white shadow-pop sm:p-12">
          <Image
            src="/images/brand/hands.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-right opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/20" />
          <div className="relative grid items-center gap-6 lg:grid-cols-[auto_1fr]">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand text-[#04210f] shadow-[0_10px_30px_-8px_var(--brand)]">
              <IconLeaf className="h-8 w-8" />
            </span>
            <div className="max-w-3xl">
              <h3 className="font-display text-2xl font-bold sm:text-3xl">{c.answerTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80 sm:text-lg">{c.answerText}</p>
              <p className="mt-5 border-l-2 border-brand pl-4 text-xs leading-relaxed text-white/55 sm:text-sm">{c.law}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
