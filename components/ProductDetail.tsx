"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProductDetail({ id }: { id: number }) {
  const { t, locale } = useLang();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-green-50 pt-24">
          <div className="text-center">
            <p className="text-5xl mb-4">🌿</p>
            <p className="text-gray-500">Product not found.</p>
            <Link
              href="/#products"
              className="mt-4 inline-block text-green-700 font-semibold hover:underline"
            >
              ← {t.products.backToProducts}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-green-50 pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-green-700 font-semibold text-sm hover:text-green-900 transition-colors mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            {t.products.backToProducts}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image */}
            <div
              className="relative rounded-3xl overflow-hidden bg-green-100 shadow-xl product-placeholder"
              style={{ aspectRatio: "5/4" }}
            >
              <Image
                src={product.image}
                alt={product.name[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Info card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-green-950 mb-3">
                {product.name[locale]}
              </h1>
              <p className="text-gray-500 text-lg mb-5">
                {product.shortDesc[locale]}
              </p>

              {/* Accent divider */}
              <div className="w-14 h-1 bg-gradient-to-r from-green-500 to-amber-400 rounded-full mb-6" />

              <p className="text-gray-700 leading-relaxed mb-7">
                {product.fullDesc[locale]}
              </p>

              {/* Ingredients */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-4">
                <h3 className="flex items-center gap-2 font-serif font-bold text-green-900 mb-2">
                  <span>🌿</span> {t.products.ingredients}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.ingredients[locale]}
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-6">
                <h3 className="flex items-center gap-2 font-serif font-bold text-green-900 mb-3">
                  <span>💚</span> {t.products.benefits}
                </h3>
                <ul className="flex flex-col gap-2">
                  {product.benefits[locale].map((b, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="text-green-500 font-bold shrink-0">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Link
                href="/#contact"
                className="block text-center w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.products.contactForOrder}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
