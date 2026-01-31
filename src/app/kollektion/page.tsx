"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale } from "@/lib/LocaleContext";
import { useCart } from "@/lib/CartContext";
import { products } from "@/lib/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function CollectionPage() {
  return (
    <Suspense>
      <CollectionContent />
    </Suspense>
  );
}

function CollectionContent() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "all";
  const [filter, setFilter] = useState(initialFilter);
  const { t, locale } = useLocale();
  const { addItem } = useCart();

  const filtered = filter === "all"
    ? products
    : filter === "new"
      ? products.filter((p) => p.isNew)
      : products.filter((p) => p.category === filter);

  const filters = [
    { key: "all", label: t("products.filter.all") },
    { key: "sunglasses", label: t("products.filter.sunglasses") },
    { key: "bags", label: t("products.filter.bags") },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-20 min-h-screen bg-cream">
        {/* Header */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pt-12 pb-10">
          <span className="text-[11px] tracking-[0.2em] uppercase text-gold block mb-3">
            {t("products.viewAll")}
          </span>
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl text-soft-black mb-8">
            {t("products.title")}
          </h1>

          {/* Filters */}
          <div className="flex items-center gap-6 border-b border-taupe/10 pb-4">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`text-[12px] tracking-[0.12em] uppercase transition-colors pb-2 border-b-2 ${
                  filter === f.key
                    ? "text-soft-black border-gold"
                    : "text-taupe border-transparent hover:text-soft-black"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((product) => (
              <div key={product.id} className="product-card group">
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

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-taupe">No products found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
