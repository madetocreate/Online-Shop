"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const line = lineRef.current;
    if (heading) {
      heading.style.opacity = "0";
      heading.style.transform = "translateY(40px)";
      requestAnimationFrame(() => {
        heading.style.transition = "all 1s cubic-bezier(0.23, 1, 0.32, 1)";
        heading.style.opacity = "1";
        heading.style.transform = "translateY(0)";
      });
    }
    if (line) {
      line.style.transform = "scaleX(0)";
      setTimeout(() => {
        line.classList.add("animate-line-expand");
      }, 600);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-white/60 via-warm-white/30 to-warm-white" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Subtle top accent */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="w-8 h-px bg-gold" />
          <span className="text-[11px] tracking-[0.3em] uppercase text-taupe">Seit 2024</span>
          <span className="w-8 h-px bg-gold" />
        </div>

        <h1
          ref={headingRef}
          className="font-[var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-soft-black mb-6"
        >
          Zeitlose
          <br />
          <span className="italic text-taupe">Eleganz</span>
        </h1>

        <p
          className="text-base md:text-lg text-taupe max-w-lg mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Kuratierte Luxusgüter für den modernen Kenner.
          Handwerkskunst, die Generationen überdauert.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#kollektion"
            className="magnetic-btn bg-soft-black text-cream px-10 py-4 text-[13px] tracking-[0.15em] uppercase hover:text-white transition-colors"
          >
            <span>Kollektion entdecken</span>
          </a>
          <a
            href="#neuheiten"
            className="magnetic-btn border border-taupe/30 text-charcoal px-10 py-4 text-[13px] tracking-[0.15em] uppercase hover:border-gold hover:text-soft-black transition-colors"
          >
            <span>Neuheiten</span>
          </a>
        </div>

        {/* Gold line */}
        <div ref={lineRef} className="scroll-line w-24 mx-auto mt-16" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.2s" }}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-taupe">Scroll</span>
        <div className="w-px h-8 bg-taupe/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  );
}
