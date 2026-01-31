"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/LocaleContext";
import { useCart } from "@/lib/CartContext";
import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductGrid() {
  const { t, locale } = useLocale();
  const { addItem } = useCart();
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const cards = grid.querySelectorAll("[data-card]");
          cards.forEach((card, i) => {
            setTimeout(() => {
              (card as HTMLElement).style.opacity = "1";
              (card as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="kollektion" className="py-24 md:py-32 bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-[11px] tracking-[0.2em] uppercase text-gold block mb-3">
              {t("products.filter.all")}
            </span>
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-soft-black">
              {t("products.title")}
            </h2>
          </div>
          <Link href="/kollektion" className="hidden md:inline-flex text-[13px] tracking-[0.1em] uppercase text-taupe hover:text-gold transition-colors">
            {t("products.viewAll")} →
          </Link>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.slice(0, 8).map((product) => (
            <div key={product.id} data-card className="product-card group opacity-0 translate-y-8 transition-all duration-[600ms]">
              <Link href={`/produkt/${product.slug}`} className="block">
                <div className="relative aspect-[3/4] bg-warm-white rounded overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={product.name[locale]}
                    fill
                    className="product-image object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold text-white text-[10px] tracking-[0.15em] uppercase">
                      {t("products.new")}
                    </span>
                  )}
                  <div className="product-cta absolute bottom-3 left-3 right-3">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product); }}
                      className="w-full py-2.5 bg-soft-black/90 text-cream text-[11px] tracking-[0.15em] uppercase backdrop-blur-sm hover:bg-gold transition-colors"
                    >
                      {t("products.addToCart")}
                    </button>
                  </div>
                </div>
              </Link>
              <span className="text-[10px] tracking-[0.15em] uppercase text-taupe">
                {product.category === "sunglasses" ? t("products.filter.sunglasses") : t("products.filter.bags")}
              </span>
              <h3 className="font-[var(--font-playfair)] text-base text-soft-black mt-1">{product.name[locale]}</h3>
              <p className="text-sm text-taupe mt-0.5">€{product.price.toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link href="/kollektion" className="text-[13px] tracking-[0.1em] uppercase text-taupe hover:text-gold transition-colors">
            {t("products.viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
