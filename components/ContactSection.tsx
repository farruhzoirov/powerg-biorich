"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { t } = useLang();
  const refInfo = useScrollReveal();
  const refForm = useScrollReveal();

  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    }, 800);
  }

  const infoItems = [
    {
      icon: "📞",
      label: t.contact.infoPhone,
      // Replace with your real phone number
      value: "+998 XX XXX XX XX",
    },
    {
      icon: "✉️",
      label: t.contact.infoEmail,
      // Replace with your real email
      value: "info@powerg-biorich.uz",
    },
    {
      icon: "📍",
      label: t.contact.infoLocation,
      value: t.contact.locationValue,
    },
    {
      icon: "🕐",
      label: t.contact.infoHours,
      value: t.contact.hoursValue,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Info side */}
          <div ref={refInfo} className="reveal pt-2">
            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              {t.contact.badge}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-green-950 mb-3">
              {t.contact.title}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              {t.contact.subtitle}
            </p>

            <div className="flex flex-col gap-5">
              {infoItems.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-gray-700 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div ref={refForm} className="reveal bg-white rounded-3xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t.contact.labelName}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.contact.placeholderName}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t.contact.labelPhone}
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder={t.contact.placeholderPhone}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  {t.contact.labelMessage}
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.contact.placeholderMessage}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-700 hover:bg-green-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                {loading ? "..." : t.contact.submit}
              </button>

              {success && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-xl text-sm font-medium">
                  {t.contact.successMsg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
