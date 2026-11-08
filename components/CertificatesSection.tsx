"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { content } from "@/data/content";
import { useTilt } from "@/hooks/useTilt";
import Reveal from "@/components/ui/Reveal";

const BADGES = ["/images/brand/badge-halal.jpg", "/images/brand/badge-gmp.jpg", "/images/brand/badge-haccp.jpg"];

function Badge({ src, name, text }: { src: string; name: string; text: string }) {
  const tilt = useTilt(10);
  return (
    <div {...tilt} className="tilt group flex items-center gap-5 rounded-[1.8rem] border border-line bg-surface p-5 text-left shadow-card hover:shadow-pop sm:block sm:p-6 sm:text-center">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden sm:mx-auto sm:h-36 sm:w-36 rounded-full bg-white p-1 ring-4 ring-brand/20 transition-all duration-500 group-hover:ring-brand/60">
        <Image src={src} alt={name} fill sizes="144px" className="object-contain p-1 transition-transform duration-700 group-hover:rotate-[8deg] group-hover:scale-110" />
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-heading sm:mt-5">{name}</h3>
        <p className="mt-1 text-sm text-muted">{text}</p>
      </div>
    </div>
  );
}

export default function CertificatesSection() {
  const { locale } = useLang();
  const c = content[locale].certs;

  return (
    <section id="certs" className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-brand/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand">
              {c.badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-heading sm:text-4xl">{c.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg text-muted">{c.subtitle}</p>
          </Reveal>
        </div>
        <div className="mt-8 grid sm:mt-12 grid gap-5 sm:grid-cols-3">
          {c.items.map((it, i) => (
            <Reveal key={it.name} delay={i * 120} variant="up">
              <Badge src={BADGES[i]} name={it.name} text={it.text} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
