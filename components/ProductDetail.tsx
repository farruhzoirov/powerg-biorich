"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetail({ id }: { id: number }) {
  const { t, locale } = useLang();
  const product = products.find((p) => p.id === id);
  const [activeIdx, setActiveIdx] = useState(0);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#071b14] pt-24">
          <div className="text-center">
            <p className="text-5xl mb-4">🌿</p>
            <p className="text-gray-500 dark:text-gray-300 mb-4">Product not found.</p>
            <Link href="/#products" className="text-green-700 dark:text-amber-300 font-semibold hover:underline">
              ← {t.products.backToProducts}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const hasImages = product.images.length > 0;
  const activeImage = product.images[activeIdx] ?? "";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 dark:bg-[#071b14] pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Back link */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-1.5 text-green-700 dark:text-amber-300 font-medium text-sm hover:text-green-900 dark:hover:text-amber-200 transition-colors mb-5 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200 text-base">←</span>
            {t.products.backToProducts}
          </Link>

          {/* ── TOP CARD: Image (left) + Info (right) ── */}
          <div className="bg-white dark:bg-[#0f2a20] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden mb-5">
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Left — Gallery */}
              <div className="flex flex-col bg-gray-50 dark:bg-[#133226] border-b md:border-b-0 md:border-r border-gray-200 dark:border-white/10">
                {/* Main image */}
                <div className="relative flex-1 min-h-[280px] md:min-h-[380px] bg-white dark:bg-[#0f2a20] p-6">
                  <div className="relative w-full h-full">
                    {hasImages && (
                      <Image
                        src={activeImage}
                        alt={product.name[locale]}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={92}
                        className="object-contain transition-opacity duration-300"
                      />
                    )}
                  </div>
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex gap-2 p-4 border-t border-gray-100 dark:border-white/10 flex-wrap">
                    {product.images.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`relative w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-lg overflow-hidden border-2 transition-all duration-200 shrink-0 bg-white dark:bg-[#0f2a20] ${
                          i === activeIdx
                            ? "border-green-600 dark:border-amber-400 shadow-sm"
                            : "border-gray-200 dark:border-white/15 hover:border-gray-300 dark:hover:border-white/30"
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${product.name[locale]} ${i + 1}`}
                          fill
                          sizes="70px"
                          quality={85}
                          className="object-contain p-1"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right — Info */}
              <div className="flex flex-col gap-5 p-6 md:p-8">
                {/* Name */}
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
                    {product.name[locale]}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                    {product.shortDesc[locale]}
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-100 dark:bg-white/10" />

                {/* Top benefits preview (first 4) */}
                <ul className="flex flex-col gap-2.5">
                  {product.benefits[locale].slice(0, 4).map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-200">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 dark:bg-white/10 flex items-center justify-center">
                        <span className="text-green-600 dark:text-amber-300 text-[10px] font-bold">✓</span>
                      </span>
                      {b}
                    </li>
                  ))}
                  {product.benefits[locale].length > 4 && (
                    <li className="text-xs text-gray-400 dark:text-gray-500 pl-6.5">
                      +{product.benefits[locale].length - 4} {locale === "uz" ? "ta ko'proq" : locale === "ru" ? "ещё" : "more"}
                    </li>
                  )}
                </ul>

                {/* Divider */}
                <div className="h-px bg-gray-100 dark:bg-white/10" />

                {/* CTA */}
                <Link
                  href="/#contact"
                  className="w-full flex items-center justify-center gap-2 bg-green-700 dark:bg-amber-400 hover:bg-green-800 dark:hover:bg-amber-300 active:bg-green-900 text-white dark:text-green-950 font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base"
                >
                  {t.products.contactForOrder}
                  <span className="text-lg leading-none">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── BOTTOM: Full desc + Ingredients + Benefits ── */}

          {/* Full description */}
          <div className="bg-white dark:bg-[#0f2a20] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm p-6 md:p-8 mb-5">
            <h2 className="text-base font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-5 bg-green-600 dark:bg-amber-400 rounded-full inline-block" />
              {locale === "uz" ? "Mahsulot haqida" : locale === "ru" ? "О продукте" : "About the product"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
              {product.fullDesc[locale]}
            </p>
          </div>

          {/* Ingredients + Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* Ingredients */}
            <div className="bg-white dark:bg-[#0f2a20] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden">
              <div className="bg-green-50 dark:bg-[#133226] border-b border-green-100 dark:border-white/10 px-6 py-4 flex items-center gap-2">
                <span className="text-lg">🌿</span>
                <h2 className="font-bold text-green-900 dark:text-amber-300 text-sm md:text-base">{t.products.ingredients}</h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {product.ingredients[locale]}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white dark:bg-[#0f2a20] rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm overflow-hidden">
              <div className="bg-green-50 dark:bg-[#133226] border-b border-green-100 dark:border-white/10 px-6 py-4 flex items-center gap-2">
                <span className="text-lg">💚</span>
                <h2 className="font-bold text-green-900 dark:text-amber-300 text-sm md:text-base">{t.products.benefits}</h2>
              </div>
              <div className="p-6">
                <ul className="flex flex-col gap-3">
                  {product.benefits[locale].map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-200">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-green-100 dark:bg-white/10 flex items-center justify-center">
                        <span className="text-green-600 dark:text-amber-300 text-[10px] font-bold">✓</span>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
