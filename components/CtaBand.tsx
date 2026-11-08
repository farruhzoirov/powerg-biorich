"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { content } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import { IconArrow, IconLeaf } from "@/components/ui/Icons";

export default function CtaBand() {
  const { locale } = useLang();
  const c = content[locale].cta;

  return (
    <section className="px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal variant="zoom" className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] bg-gradient-to-br from-brand via-[#12b46b] to-[#0f8f9a] p-8 text-[#04210f] shadow-pop sm:p-14">
        <div className="animate-blob absolute -right-10 -top-16 h-72 w-72 bg-white/25 blur-2xl" />
        <IconLeaf className="animate-float absolute -bottom-6 right-10 hidden h-64 w-64 text-white/20 md:block" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{c.title}</h2>
          <p className="mt-4 text-lg font-medium text-[#04210f]/80">{c.text}</p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap">
            <Link href="/#contact" className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-bold text-white shadow-pop transition-all hover:-translate-y-1 sm:w-auto sm:text-base">
              {c.button}
              <IconArrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/#products" className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#04210f]/40 px-7 py-4 text-sm font-bold transition-all hover:-translate-y-1 hover:bg-white/30 sm:w-auto sm:text-base">
              {c.button2}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
