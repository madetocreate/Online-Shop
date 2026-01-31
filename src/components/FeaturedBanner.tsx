"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/LocaleContext";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedBanner() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll("[data-reveal]").forEach((r, i) => {
            setTimeout(() => {
              (r as HTMLElement).style.opacity = "1";
              (r as HTMLElement).style.transform = "translateY(0)";
            }, i * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/lifestyle/lifestyle-1.png"
          alt="Featured collection"
          fill
          className="object-cover"
          sizes="100vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-soft-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 py-24 w-full">
        <div className="max-w-xl">
          <span data-reveal className="text-[11px] tracking-[0.2em] uppercase text-gold-light block mb-4 opacity-0 translate-y-6 transition-all duration-700">
            {t("featured.badge")}
          </span>
          <h2 data-reveal className="font-[var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 opacity-0 translate-y-6 transition-all duration-700">
            {t("featured.title")}{" "}
            <em className="text-gold-light not-italic">{t("featured.titleAccent")}</em>
          </h2>
          <p data-reveal className="text-base text-white/60 leading-relaxed mb-8 opacity-0 translate-y-6 transition-all duration-700">
            {t("featured.text")}
          </p>
          <Link
            href="/kollektion"
            data-reveal
            className="inline-block px-8 py-3.5 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300 opacity-0 translate-y-6"
            style={{ transitionDuration: "700ms" }}
          >
            {t("featured.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
