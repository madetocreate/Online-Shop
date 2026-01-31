"use client";

import { useEffect, useRef } from "react";

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll("[data-reveal]").forEach((el, i) => {
            const htmlEl = el as HTMLElement;
            setTimeout(() => htmlEl.classList.add("animate-fade-up"), i * 150);
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
    <section ref={sectionRef} id="über-uns" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div data-reveal className="opacity-0 aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
              alt="Handwerkskunst"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <span
              data-reveal
              className="opacity-0 text-[11px] tracking-[0.3em] uppercase text-taupe mb-4 block"
            >
              Unsere Geschichte
            </span>
            <h2
              data-reveal
              className="opacity-0 font-[var(--font-playfair)] text-4xl md:text-5xl text-soft-black leading-[1.15] mb-6"
            >
              Perfektion im
              <br />
              <span className="italic text-taupe">Detail</span>
            </h2>
            <div data-reveal className="opacity-0 w-12 h-px bg-gold mb-8" />
            <p
              data-reveal
              className="opacity-0 text-base text-taupe leading-relaxed mb-6"
            >
              Seit unserer Gründung verfolgen wir eine einfache Philosophie:
              Nur das Beste ist gut genug. Jedes Produkt in unserer Kollektion
              wird von Hand ausgewählt und auf höchste Qualitätsstandards geprüft.
            </p>
            <p
              data-reveal
              className="opacity-0 text-base text-taupe leading-relaxed mb-10"
            >
              Wir arbeiten ausschließlich mit Manufakturen, die traditionelle
              Handwerkskunst mit zeitgenössischem Design verbinden — für Stücke,
              die nicht nur Trends überdauern, sondern Generationen.
            </p>

            {/* Stats */}
            <div data-reveal className="opacity-0 grid grid-cols-3 gap-8 pt-8 border-t border-taupe/10">
              {[
                { number: "200+", label: "Manufakturen" },
                { number: "15", label: "Länder" },
                { number: "100%", label: "Handgefertigt" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-[var(--font-playfair)] text-2xl md:text-3xl text-soft-black">
                    {stat.number}
                  </span>
                  <span className="block text-[10px] tracking-[0.2em] uppercase text-taupe mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
