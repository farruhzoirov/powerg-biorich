"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { categoryImages, content, type CategoryKey } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/Icons";

const KEYS: CategoryKey[] = ["detox", "kids", "restore", "youth"];

export default function CategoriesSection() {
  const { locale } = useLang();
  const c = content[locale].categories;

  return (
    <section id="categories" className="bg-bg-alt py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-block rounded-full bg-navy px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white dark:bg-brand/20 dark:text-brand">
                {c.badge}
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-heading sm:text-4xl">{c.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="max-w-sm text-lg text-muted">{c.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-8 grid sm:mt-12 grid gap-5 sm:grid-cols-2">
          {KEYS.map((k, i) => (
            <Reveal key={k} delay={i * 90} variant={i % 2 ? "right" : "left"}>
              <Link
                href={`/categories/${k}`}
                className="group relative block aspect-[16/8] overflow-hidden rounded-[1.8rem] border border-line shadow-card"
              >
                <Image
                  src={categoryImages[k]}
                  alt={c.items[k].title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/55 to-navy-deep/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
                  <span className="mb-2 font-display text-xs font-bold text-brand">0{i + 1}</span>
                  <h3 className="font-display text-2xl font-bold text-white sm:text-[1.7rem]">{c.items[k].title}</h3>
                  <p className="mt-1.5 max-w-xs text-sm text-white/80">{c.items[k].text}</p>
                </div>
                <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-navy transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-brand">
                  <IconArrow className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
