"use client";

import { useState } from "react";
import { useLang } from "@/context/LangContext";
import Reveal from "@/components/ui/Reveal";
import { IconCheck, IconClock, IconMail, IconPhone, IconPin } from "@/components/ui/Icons";

export default function ContactSection() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // NOTE: demo submit — no backend yet.
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

  const info = [
    { Icon: IconPhone, label: t.contact.infoPhone, value: "+998 XX XXX XX XX" }, // TODO real phone
    { Icon: IconMail, label: t.contact.infoEmail, value: "info@powerg-biorich.uz" }, // TODO real email
    { Icon: IconPin, label: t.contact.infoLocation, value: t.contact.locationValue },
    { Icon: IconClock, label: t.contact.infoHours, value: t.contact.hoursValue },
  ];

  const field =
    "peer w-full rounded-2xl border border-line bg-surface-2 px-4 pb-2.5 pt-6 text-[15px] font-medium text-ink outline-none transition-all placeholder-transparent focus:border-brand focus:bg-surface focus:ring-4 focus:ring-brand/15";
  const lbl =
    "pointer-events-none absolute left-4 top-4 origin-left text-sm font-semibold text-muted transition-all peer-focus:top-2 peer-focus:scale-[0.8] peer-focus:text-brand-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-[0.8]";

  return (
    <section id="contact" className="relative overflow-hidden bg-bg-alt py-12 sm:py-20 lg:py-28">
      <div className="animate-blob absolute -left-24 bottom-0 h-80 w-80 bg-brand/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="inline-block rounded-full bg-brand/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600 dark:text-brand">
              {t.contact.badge}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-heading sm:text-4xl">{t.contact.title}</h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg text-muted">{t.contact.subtitle}</p>
          </Reveal>

          <ul className="mt-8 grid gap-3">
            {info.map(({ Icon, label, value }, i) => (
              <Reveal as="li" key={label} delay={250 + i * 80} variant="left">
                <div className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/50">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand-600 transition-all duration-300 group-hover:bg-brand group-hover:text-[#04210f] dark:text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">{label}</p>
                    <p className="font-semibold text-heading">{value}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal variant="right" delay={150}>
          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-line bg-surface p-6 shadow-pop sm:p-9">
            <div className="grid gap-4">
              <div className="relative">
                <input id="c-name" required placeholder=" " value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                <label htmlFor="c-name" className={lbl}>{t.contact.labelName}</label>
              </div>
              <div className="relative">
                <input id="c-phone" required type="tel" placeholder=" " value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={field} />
                <label htmlFor="c-phone" className={lbl}>{t.contact.labelPhone}</label>
              </div>
              <div className="relative">
                <textarea id="c-msg" rows={4} placeholder=" " value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} resize-none`} />
                <label htmlFor="c-msg" className={lbl}>{t.contact.labelMessage}</label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-shine mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-bold text-[#04210f] shadow-[0_14px_34px_-10px_var(--brand)] transition-all hover:-translate-y-1 hover:bg-brand-600 disabled:opacity-70"
              >
                {loading ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#04210f]/30 border-t-[#04210f]" />
                ) : (
                  t.contact.submit
                )}
              </button>
              <div
                className={`grid transition-all duration-500 ${success ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                aria-live="polite"
              >
                <div className="overflow-hidden">
                  <p className="flex items-center gap-3 rounded-2xl bg-brand/15 p-4 text-sm font-semibold text-heading">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-[#04210f]">
                      <IconCheck className="h-4 w-4" />
                    </span>
                    {t.contact.successMsg}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
