"use client";

import { useEffect, useRef } from "react";

export default function FeaturedBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll("[data-reveal]").forEach((el, i) => {
            const htmlEl = el as HTMLElement;
            setTimeout(() => {
              htmlEl.classList.add("animate-fade-up");
            }, i * 150);
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-soft-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-2xl">
          <span
            data-reveal
            className="opacity-0 text-[11px] tracking-[0.3em] uppercase text-gold-light mb-4 block"
          >
            Neuheiten Herbst/Winter
          </span>
          <h2
            data-reveal
            className="opacity-0 font-[var(--font-playfair)] text-4xl md:text-6xl text-white leading-[1.15] mb-6"
          >
            Die Kunst des
            <br />
            <span className="italic text-gold-light">Understatements</span>
          </h2>
          <p
            data-reveal
            className="opacity-0 text-base text-white/70 max-w-md mb-8 leading-relaxed"
          >
            Unsere neue Kollektion vereint minimalistische Ästhetik
            mit kompromissloser Qualität. Jedes Stück erzählt eine Geschichte
            von Handwerkskunst und Hingabe.
          </p>
          <a
            data-reveal
            href="#neuheiten"
            className="opacity-0 magnetic-btn inline-flex border border-white/30 text-white px-10 py-4 text-[13px] tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
          >
            <span>Jetzt entdecken</span>
          </a>
        </div>
      </div>
    </section>
  );
}
