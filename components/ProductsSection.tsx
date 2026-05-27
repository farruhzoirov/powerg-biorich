"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { products } from "@/data/products";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ProductsSection() {
  const { t, locale } = useLang();
  const ref = useScrollReveal();

  return (
    <section id="products" className="py-24 bg-white dark:bg-[#071b14]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className="reveal text-center mb-16">
          <span className="inline-block bg-green-100 dark:bg-white/10 text-green-700 dark:text-amber-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            {t.products.badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-950 dark:text-white mb-4">
            {t.products.title}
          </h2>
          <p className="text-gray-500 dark:text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            {t.products.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white dark:bg-[#0f2a20] rounded-3xl overflow-hidden shadow-sm border border-black/4 dark:border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-white overflow-hidden border-b border-gray-100 dark:border-white/10">
                {product.images[0] && (
                  <div className="absolute inset-0 p-6 sm:p-7">
                    <Image
                      src={product.images[0]}
                      alt={product.name[locale]}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain object-center group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/45 transition-colors duration-300 flex items-end justify-center pb-6">
                  <span className="opacity-0 group-hover:opacity-100 bg-white dark:bg-[#163a2c] text-green-800 dark:text-amber-300 text-sm font-bold px-5 py-2 rounded-full transition-opacity duration-300 shadow-sm">
                    {t.products.viewDetails}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-green-950 dark:text-white mb-2">
                  {product.name[locale]}
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                  {product.shortDesc[locale]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
