"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/LocaleContext";
import Navigation from "@/components/Navigation";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-reveal]").forEach((r, i) => {
              setTimeout(() => {
                (r as HTMLElement).style.opacity = "1";
                (r as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    el.querySelectorAll("[data-section]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />
      <main ref={sectionRef}>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/lifestyle/lifestyle-3.png"
              alt="About MAISON"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-soft-black/50" />
          </div>
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 py-24 w-full">
            <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl text-white mb-4">
              {t("about.heroTitle")}{" "}
              <em className="text-gold-light not-italic">{t("about.heroAccent")}</em>
            </h1>
            <p className="text-lg text-white/60 max-w-lg">{t("about.heroText")}</p>
          </div>
        </section>

        {/* Mission */}
        <section data-section className="py-24 md:py-32 bg-cream">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div data-reveal className="relative aspect-[4/5] rounded overflow-hidden opacity-0 translate-y-8 transition-all duration-700">
                <Image
                  src="/images/lifestyle/lifestyle-2.png"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  loading="lazy"
                />
              </div>
              <div>
                <span data-reveal className="text-[11px] tracking-[0.2em] uppercase text-gold block mb-4 opacity-0 translate-y-6 transition-all duration-700">
                  MAISON
                </span>
                <h2 data-reveal className="font-[var(--font-playfair)] text-3xl md:text-4xl text-soft-black mb-6 opacity-0 translate-y-6 transition-all duration-700">
                  {t("about.missionTitle")}
                </h2>
                <div data-reveal className="w-12 h-px bg-gold mb-6 opacity-0 translate-y-6 transition-all duration-700" />
                <p data-reveal className="text-taupe leading-relaxed opacity-0 translate-y-6 transition-all duration-700">
                  {t("about.missionText")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section data-section className="py-24 md:py-32 bg-warm-white">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12">
            <h2 data-reveal className="font-[var(--font-playfair)] text-3xl md:text-4xl text-soft-black mb-16 text-center opacity-0 translate-y-6 transition-all duration-700">
              {t("about.valuesTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {([1, 2, 3] as const).map((n) => (
                <div key={n} data-reveal className="text-center opacity-0 translate-y-6 transition-all duration-700">
                  <div className="w-16 h-px bg-gold mx-auto mb-6" />
                  <h3 className="font-[var(--font-playfair)] text-xl text-soft-black mb-3">
                    {t(`about.value${n}.title`)}
                  </h3>
                  <p className="text-sm text-taupe leading-relaxed">
                    {t(`about.value${n}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
