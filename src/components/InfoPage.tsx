"use client";

import { useLocale } from "@/lib/LocaleContext";
import type { TranslationKey } from "@/lib/i18n";
import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

interface Section {
  titleKey: TranslationKey;
  textKey: TranslationKey;
}

interface InfoPageProps {
  titleKey: TranslationKey;
  subtitleKey?: TranslationKey;
  sections: Section[];
}

export default function InfoPage({ titleKey, subtitleKey, sections }: InfoPageProps) {
  const { t } = useLocale();

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 bg-cream">
          <div className="mx-auto max-w-[800px] px-6 md:px-12">
            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl text-soft-black mb-4">
              {t(titleKey)}
            </h1>
            {subtitleKey && (
              <p className="text-taupe text-lg">{t(subtitleKey)}</p>
            )}
            <div className="w-12 h-px bg-gold mt-6" />
          </div>
        </section>

        <section className="py-16 md:py-24 bg-warm-white">
          <div className="mx-auto max-w-[800px] px-6 md:px-12 space-y-12">
            {sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-[var(--font-playfair)] text-2xl text-soft-black mb-4">
                  {t(s.titleKey)}
                </h2>
                <p className="text-taupe leading-relaxed whitespace-pre-line">
                  {t(s.textKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
