"use client";

import { useEffect, useRef } from "react";

const categories = [
  {
    name: "Damen",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80",
    count: 128,
  },
  {
    name: "Herren",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    count: 96,
  },
  {
    name: "Accessoires",
    image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
    count: 64,
  },
  {
    name: "Maison",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
    count: 42,
  },
];

export default function Categories() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll(".category-card").forEach((el, i) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = "0";
            htmlEl.style.transform = "translateY(20px)";
            setTimeout(() => {
              htmlEl.style.transition = "all 0.7s cubic-bezier(0.23, 1, 0.32, 1)";
              htmlEl.style.opacity = "1";
              htmlEl.style.transform = "translateY(0)";
            }, i * 120);
          });
          observer.unobserve(grid);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 md:py-32 bg-warm-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-taupe mb-3 block">
            Entdecken
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl text-soft-black">
            Kategorien
          </h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="category-card group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-[var(--font-playfair)] text-2xl text-white mb-1">
                  {cat.name}
                </h3>
                <span className="text-[11px] tracking-[0.15em] uppercase text-white/60">
                  {cat.count} Artikel
                </span>
                <div className="mt-3 w-8 h-px bg-gold transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
