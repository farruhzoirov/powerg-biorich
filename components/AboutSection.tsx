"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { content } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import { IconCheck, IconLeaf } from "@/components/ui/Icons";

export default function AboutSection() {
  const { locale } = useLang();
  const c = content[locale];
  const a = c.about;

  return (
    <section id="about" className="relative overflow-hidden bg-bg-alt py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-navy px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white dark:bg-brand/20 dark:text-brand">
              {a.badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-[2.8rem]">{a.title}</h2>
          </Reveal>
        </div>

        {/* Founders */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal variant="left" className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-brand/40 via-transparent to-[#2a6bff]/30 blur-2xl" />
            <div className="relative aspect-[1134/1343] overflow-hidden rounded-t-[999px] rounded-b-[2rem] border-4 border-white shadow-pop dark:border-white/10">
              <Image src="/images/brand/founders.jpg" alt={a.names.join(", ")} fill sizes="(max-width: 1024px) 90vw, 440px" className="object-cover transition-transform duration-[1200ms] hover:scale-105" />
            </div>
            <div className="animate-float absolute -right-3 bottom-8 rounded-2xl bg-navy px-5 py-3 text-white shadow-pop sm:-right-8">
              <p className="font-display text-3xl font-bold text-brand">18+</p>
              <p className="text-xs font-semibold text-white/80">{c.hero.floatB.label}</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand">{a.founders}</p>
            </Reveal>
            <Reveal delay={100}>
              <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-heading sm:text-3xl">
                {a.names[0]}
                <span className="mx-2 text-brand">&</span>
                {a.names[1]}
              </h3>
            </Reveal>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {a.achievements.map((t, i) => (
                <Reveal as="li" key={t} delay={150 + i * 70} variant="up">
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/50">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-[#04210f]">
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-semibold leading-snug text-heading">{t}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={600} className="relative mt-8 overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-pop">
              <IconLeaf className="absolute -bottom-8 -right-4 h-36 w-36 text-white/10" />
              <span className="font-display text-5xl leading-none text-brand">“</span>
              <p className="-mt-3 text-xs font-bold uppercase tracking-widest text-brand">{a.missionLabel}</p>
              <p className="relative mt-2 text-lg font-semibold leading-snug sm:text-xl">{a.mission}</p>
            </Reveal>
          </div>
        </div>

        {/* Factory + lab */}
        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          <Reveal variant="left">
            <figure className="group relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] rounded-[2rem] border border-line shadow-card">
              <Image src="/images/brand/factory.jpg" alt={a.factoryTitle} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/55 to-navy-deep/10" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <h4 className="font-display text-xl font-bold sm:text-2xl">{a.factoryTitle}</h4>
                <p className="mt-2 max-w-md text-sm text-white/80">{a.factoryText}</p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal variant="right" delay={120}>
            <figure className="group relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] rounded-[2rem] border border-line shadow-card">
              <Image src="/images/brand/lab.jpg" alt={a.labTitle} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/55 to-navy-deep/10" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <h4 className="font-display text-xl font-bold sm:text-2xl">{a.labTitle}</h4>
                <p className="mt-2 max-w-md text-sm text-white/80">{a.labText}</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {c.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} variant="zoom">
              <div className="rounded-3xl border border-line bg-surface p-6 text-center shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                <p className="text-gradient font-display text-4xl font-bold sm:text-5xl">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-semibold text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
