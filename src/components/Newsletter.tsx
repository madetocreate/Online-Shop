"use client";

import { useLocale } from "@/lib/LocaleContext";

export default function Newsletter() {
  const { t } = useLocale();

  return (
    <section className="py-24 md:py-32 bg-soft-black">
      <div className="mx-auto max-w-lg px-6 text-center">
        <span className="text-[11px] tracking-[0.2em] uppercase text-gold-light block mb-4">
          {t("newsletter.badge")}
        </span>
        <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-white mb-4">
          {t("newsletter.title")}
        </h2>
        <p className="text-sm text-white/50 leading-relaxed mb-8">
          {t("newsletter.text")}
        </p>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder={t("newsletter.placeholder")}
            className="flex-1 bg-transparent border-b border-white/20 text-white text-sm py-3 px-1 placeholder:text-white/30 focus:border-gold focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="magnetic-btn bg-gold text-white px-8 py-3 text-[12px] tracking-[0.15em] uppercase hover:bg-gold-light transition-colors"
          >
            <span>{t("newsletter.submit")}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
