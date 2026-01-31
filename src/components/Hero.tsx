"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/LocaleContext";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reveals = el.querySelectorAll("[data-reveal]");
    reveals.forEach((r, i) => {
      setTimeout(() => {
        (r as HTMLElement).style.opacity = "1";
        (r as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-main.png"
          alt="Luxury lifestyle"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-soft-black/60 via-soft-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            data-reveal
            className="inline-flex items-center gap-3 mb-6 opacity-0 translate-y-6 transition-all duration-700"
          >
            <span className="w-8 h-px bg-gold-light" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gold-light">
              {t("hero.badge")}
            </span>
            <span className="w-8 h-px bg-gold-light" />
          </div>

          {/* Heading */}
          <h1
            data-reveal
            className="font-[var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6 opacity-0 translate-y-6 transition-all duration-1000"
          >
            {t("hero.title")}{" "}
            <em className="text-gold-light not-italic">{t("hero.titleAccent")}</em>
          </h1>

          {/* Gold line */}
          <div
            data-reveal
            className="w-16 h-px bg-gold mb-6 opacity-0 translate-y-6 transition-all duration-700"
          />

          {/* Subtitle */}
          <p
            data-reveal
            className="text-base md:text-lg text-white/70 leading-relaxed max-w-lg mb-10 opacity-0 translate-y-6 transition-all duration-700"
          >
            {t("hero.subtitle")}
          </p>

          {/* CTAs */}
          <div
            data-reveal
            className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-6 transition-all duration-700"
          >
            <Link
              href="/kollektion"
              className="magnetic-btn px-8 py-3.5 bg-white text-soft-black text-sm tracking-[0.15em] uppercase hover:bg-gold hover:text-white transition-colors duration-300"
            >
              <span>{t("hero.cta")}</span>
            </Link>
            <Link
              href="/kollektion?filter=new"
              className="px-8 py-3.5 border border-white/30 text-white text-sm tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="w-px h-10 bg-gradient-to-b from-transparent to-gold-light" />
      </div>
    </section>
  );
}
