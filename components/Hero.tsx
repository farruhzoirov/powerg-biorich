"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative w-full flex items-center overflow-hidden"
      style={{ height: "100svh", minHeight: 600, maxHeight: 900 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-800 to-green-600 z-0" />

      {/*
        Hero image — replace /images/hero.jpg with your own photo.
        Recommended: 1920 × 900 px (landscape JPG/WebP).
        The image fills the full section height.
      */}
      <Image
        src="/images/hero.jpg"
        alt="PowerG Biorich hero"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center z-10 opacity-35"
        onError={() => {}}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 to-green-900/75 z-20" />

      {/* Content */}
      <div className="relative z-30 w-full max-w-3xl mx-auto px-6 text-center text-white">
        <span className="inline-block bg-white/15 border border-white/30 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-6">
          {t.hero.badge}
        </span>

        <h1 className="font-serif font-bold leading-[1.05] mb-5"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
          {t.hero.title}
        </h1>

        <p className="text-white/85 leading-relaxed mb-10 mx-auto"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", maxWidth: 540 }}>
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/#products"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-500/40"
          >
            {t.hero.cta}
          </a>
          <a
            href="/#about"
            className="inline-block border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-5 h-5 border-r-2 border-b-2 border-white/50 rotate-45" />
      </div>
    </section>
  );
}
