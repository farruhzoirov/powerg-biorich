"use client";

import { useLang } from "@/context/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const { t } = useLang();
  const refLeft = useScrollReveal();
  const refRight = useScrollReveal();
  const refFeatures = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — text */}
          <div ref={refLeft} className="reveal">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              {t.about.badge}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-950 mb-6">
              {t.about.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t.about.story}
            </p>

            <div className="flex flex-col gap-4">
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl px-5 py-4">
                <h4 className="font-serif font-bold text-green-900 mb-1">
                  {t.about.missionTitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.about.missionText}
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl px-5 py-4">
                <h4 className="font-serif font-bold text-green-900 mb-1">
                  {t.about.visionTitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
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

        {/* Feature cards */}
        <div
          ref={refFeatures}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {t.about.features.map((f, i) => (
            <div
              key={i}
              className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl block mb-4">{f.icon}</span>
              <h4 className="font-serif font-bold text-green-900 mb-2">{f.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
