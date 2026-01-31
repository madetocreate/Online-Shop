"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/lib/LocaleContext";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  const { t } = useLocale();
  const gridRef = useRef<HTMLDivElement>(null);

  const categories = [
    { key: "sunglasses" as const, image: "/images/categories/cat-sunglasses.png", count: 24, href: "/kollektion?filter=sunglasses" },
    { key: "bags" as const, image: "/images/categories/cat-bags.png", count: 18, href: "/kollektion?filter=bags" },
    { key: "new" as const, image: "/images/categories/cat-new.png", count: 12, href: "/kollektion?filter=new" },
    { key: "lifestyle" as const, image: "/images/categories/cat-lifestyle.png", count: 8, href: "/kollektion" },
  ];

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll("[data-card]").forEach((card, i) => {
            setTimeout(() => {
              (card as HTMLElement).style.opacity = "1";
              (card as HTMLElement).style.transform = "translateY(0)";
            }, i * 120);
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
    <section className="py-24 md:py-32 bg-warm-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-soft-black mb-14 text-center">
          {t("categories.title")}
        </h2>
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              data-card
              className="group relative aspect-[3/4] rounded overflow-hidden opacity-0 translate-y-8 transition-all duration-700"
            >
              <Image
                src={cat.image}
                alt={t(`categories.${cat.key}`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-soft-black/70 via-soft-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-[var(--font-playfair)] text-lg text-white mb-1">
                  {t(`categories.${cat.key}`)}
                </h3>
                <p className="text-[11px] text-white/50 tracking-wider uppercase">
                  {cat.count} {t("categories.items")}
                </p>
                <div className="w-8 h-px bg-gold mt-3 transition-transform duration-500 origin-left group-hover:scale-x-[3]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
