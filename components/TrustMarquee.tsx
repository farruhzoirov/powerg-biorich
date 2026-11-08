"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { productMeta } from "@/data/content";
import { products } from "@/data/products";

/** Auto-scrolling product showcase: clean rectangular cards, whole packshot visible. */
export default function TrustMarquee() {
  const { locale, t } = useLang();

  return (
    <section aria-label={t.products.title} className="relative overflow-hidden border-y border-line bg-surface py-6">
      <div className="flex w-max animate-marquee [animation-duration:60s] hover:[animation-play-state:paused]">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0 gap-4 pr-4" aria-hidden={dup === 1}>
            {products.map((p) => {
              const meta = productMeta[p.id];
              return (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  tabIndex={dup === 1 ? -1 : 0}
                  className="group w-[220px] shrink-0 overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-pop sm:w-[250px]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden" style={{ background: meta.tint }}>
                    <Image
                      src={p.images[0]}
                      alt=""
                      fill
                      sizes="250px"
                      className="scale-[1.12] object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.22]"
                      style={{ objectPosition: "50% 52%" }}
                    />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3">
                    <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: meta.accent }} />
                    <span className="line-clamp-1 text-sm font-bold text-heading">{p.name[locale].replace(/^Power-G\s*/i, "")}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />
    </section>
  );
}
