"use client";

import Image from "next/image";
import { useLang } from "@/context/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { t } = useLang();
  const refLeft = useScrollReveal();
  const refRight = useScrollReveal();
  const refBrand = useScrollReveal();
  const refFeatures = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#06160f]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — text */}
          <div ref={refLeft} className="reveal">
            <span className="inline-block bg-green-100 dark:bg-white/10 text-green-700 dark:text-amber-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              {t.about.badge}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-950 dark:text-white mb-6">
              {t.about.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {t.about.story}
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-green-50 dark:bg-[#0f2a20] border-l-4 border-green-500 dark:border-amber-400 rounded-r-xl px-5 py-4">
                <h4 className="font-serif font-bold text-green-900 dark:text-amber-300 mb-1">
                  {t.about.missionTitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
              <div className="bg-green-50 dark:bg-[#0f2a20] border-l-4 border-green-500 dark:border-amber-400 rounded-r-xl px-5 py-4">
                <h4 className="font-serif font-bold text-green-900 dark:text-amber-300 mb-1">
                  {t.about.visionTitle}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {t.about.visionText}
                </p>
              </div>
            </div>
          </div>

          {/* Right — stats card */}
          <div
            ref={refRight}
            className="reveal bg-gradient-to-br from-green-800 to-green-600 rounded-3xl p-10"
          >
            <div className="grid grid-cols-2 gap-8">
              {t.about.stats.map((s, i) => (
                <div key={i} className="text-center">
                  <span className="block font-serif text-4xl font-bold text-amber-300 mb-1 leading-none">
                    {s.value}
                  </span>
                  <span className="text-white/70 text-sm font-medium">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand image block */}
        <div
          ref={refBrand}
          className="reveal relative mb-12 rounded-3xl overflow-hidden border border-green-100 dark:border-white/10"
        >
          <div className="relative w-full h-[230px] md:h-[280px]">
            <Image
              src="/images/products/cafe-7/image-1.jpg"
              alt="Power-G Biorich premium mahsulotlari"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 via-green-900/35 to-transparent" />
            <div className="absolute inset-0 flex items-end md:items-center p-6 md:p-10">
              <p className="text-white text-lg md:text-2xl font-serif font-bold max-w-lg leading-snug">
                Power-G Biorich — sifatli, ishonchli va zamonaviy tabiiy mahsulotlar
              </p>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div
          ref={refFeatures}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {t.about.features.map((f, i) => (
            <div
              key={i}
              className="bg-green-50 dark:bg-[#0f2a20] border border-green-100 dark:border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="block mb-4 text-green-700 dark:text-amber-300">
                {i === 0 && (
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M12 22c5-3 8-6.8 8-11V5l-8-3-8 3v6c0 4.2 3 8 8 11z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                )}
                {i === 1 && (
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M3 12h18" />
                    <path d="M5 12a7 7 0 0 1 14 0" />
                    <path d="M7 12a5 5 0 0 1 10 0" />
                    <path d="M12 12v7" />
                    <path d="M9.5 19H14.5" />
                  </svg>
                )}
                {i === 2 && (
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M8 21h8" />
                    <path d="M12 17v4" />
                    <path d="M6 4h12v3a6 6 0 0 1-12 0V4z" />
                    <path d="M6 6H4a2 2 0 0 0 2 2" />
                    <path d="M18 6h2a2 2 0 0 1-2 2" />
                  </svg>
                )}
                {i === 3 && (
                  <svg className="w-10 h-10 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20.8 8.6c0 5.3-8.8 10.4-8.8 10.4S3.2 13.9 3.2 8.6a4.8 4.8 0 0 1 8.4-3.2 4.8 4.8 0 0 1 8.4 3.2z" />
                  </svg>
                )}
              </span>
              <h4 className="font-serif font-bold text-green-900 dark:text-amber-300 mb-2">{f.title}</h4>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
