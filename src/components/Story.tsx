"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/LocaleContext";
import Image from "next/image";

export default function Story() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div data-reveal className="relative aspect-[4/5] rounded overflow-hidden opacity-0 translate-y-8 transition-all duration-700">
            <Image
              src="/images/lifestyle/lifestyle-2.png"
              alt="Craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <span data-reveal className="text-[11px] tracking-[0.2em] uppercase text-gold block mb-4 opacity-0 translate-y-6 transition-all duration-700">
              {t("story.badge")}
            </span>
            <h2 data-reveal className="font-[var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl text-soft-black leading-[1.15] mb-6 opacity-0 translate-y-6 transition-all duration-700">
              {t("story.title")}{" "}
              <em className="text-taupe not-italic">{t("story.titleAccent")}</em>
            </h2>
            <div data-reveal className="w-12 h-px bg-gold mb-6 opacity-0 translate-y-6 transition-all duration-700" />
            <p data-reveal className="text-taupe leading-relaxed mb-4 opacity-0 translate-y-6 transition-all duration-700">
              {t("story.text1")}
            </p>
            <p data-reveal className="text-taupe leading-relaxed mb-10 opacity-0 translate-y-6 transition-all duration-700">
              {t("story.text2")}
            </p>

            {/* Stats */}
            <div data-reveal className="grid grid-cols-3 gap-6 pt-8 border-t border-taupe/10 opacity-0 translate-y-6 transition-all duration-700">
              {[
                { value: t("story.stat1.value"), label: t("story.stat1.label") },
                { value: t("story.stat2.value"), label: t("story.stat2.label") },
                { value: t("story.stat3.value"), label: t("story.stat3.label") },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-[var(--font-playfair)] text-2xl md:text-3xl text-soft-black">{stat.value}</span>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-taupe mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
