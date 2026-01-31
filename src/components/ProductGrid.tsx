"use client";

import { useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Cashmere Mantel",
    price: "2.490",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
  },
  {
    id: 2,
    name: "Seidenschal Ivory",
    price: "389",
    category: "Accessoires",
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80",
  },
  {
    id: 3,
    name: "Leder Weekender",
    price: "1.290",
    category: "Taschen",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
  },
  {
    id: 4,
    name: "Merino Pullover",
    price: "490",
    category: "Strickwaren",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?w=800&q=80",
  },
  {
    id: 5,
    name: "Chronograph Rosé",
    price: "4.890",
    category: "Uhren",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
  },
  {
    id: 6,
    name: "Parfum Noir",
    price: "245",
    category: "Düfte",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
  },
];

export default function ProductGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = grid.querySelectorAll(".product-card");
            items.forEach((item, i) => {
              const el = item as HTMLElement;
              el.style.opacity = "0";
              el.style.transform = "translateY(30px)";
              setTimeout(() => {
                el.style.transition = "all 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="kollektion" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="text-[11px] tracking-[0.3em] uppercase text-taupe mb-3 block">
              Unsere Auswahl
            </span>
            <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl text-soft-black">
              Kollektion
            </h2>
          </div>
          <a
            href="#"
            className="nav-link text-[13px] tracking-[0.12em] uppercase text-taupe mt-4 md:mt-0"
          >
            Alle Produkte ansehen
          </a>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <article key={product.id} className="product-card group cursor-pointer bg-warm-white">
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-warm-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-taupe">
                  {product.category}
                </span>
                <h3 className="font-[var(--font-playfair)] text-lg text-soft-black mt-1">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-charcoal">{product.price} &euro;</span>
                  <button className="product-cta text-[11px] tracking-[0.15em] uppercase text-gold hover:text-soft-black transition-colors">
                    Ansehen
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
