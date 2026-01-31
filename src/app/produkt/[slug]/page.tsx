"use client";

import { useParams } from "next/navigation";
import { useLocale } from "@/lib/LocaleContext";
import { useCart } from "@/lib/CartContext";
import { getProductBySlug, products } from "@/lib/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const { t, locale } = useLocale();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const product = getProductBySlug(params.slug as string);

  if (!product) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <p className="text-taupe">Product not found</p>
        </div>
        <Footer />
      </>
    );
  }

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6">
          <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase text-taupe">
            <Link href="/" className="hover:text-soft-black transition-colors">MAISON</Link>
            <span>/</span>
            <Link href="/kollektion" className="hover:text-soft-black transition-colors">{t("nav.collection")}</Link>
            <span>/</span>
            <span className="text-soft-black">{product.name[locale]}</span>
          </div>
        </div>

        {/* Product */}
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 pb-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Image */}
            <div className="relative aspect-[3/4] bg-warm-white rounded overflow-hidden">
              <Image
                src={product.image}
                alt={product.name[locale]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {product.isNew && (
                <span className="absolute top-4 left-4 px-3 py-1.5 bg-gold text-white text-[10px] tracking-[0.15em] uppercase">
                  {t("products.new")}
                </span>
              )}
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="text-[10px] tracking-[0.15em] uppercase text-taupe mb-2">
                {product.category === "sunglasses" ? t("products.filter.sunglasses") : t("products.filter.bags")}
              </span>
              <h1 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-soft-black mb-4">
                {product.name[locale]}
              </h1>
              <p className="font-[var(--font-playfair)] text-2xl text-gold mb-8">
                €{product.price.toLocaleString()}
              </p>

              <div className="w-10 h-px bg-gold/30 mb-8" />

              <p className="text-taupe leading-relaxed mb-8">
                {product.description[locale]}
              </p>

              {/* Details */}
              <div className="mb-8">
                <h3 className="text-[11px] tracking-[0.15em] uppercase text-soft-black mb-3">
                  {t("detail.details")}
                </h3>
                <ul className="space-y-2">
                  {product.details[locale].map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-taupe">
                      <span className="w-1 h-1 rounded-full bg-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping info */}
              <p className="text-xs text-taupe/70 mb-8">
                {t("detail.shippingText")}
              </p>

              {/* Add to cart */}
              <button
                onClick={handleAdd}
                className={`w-full md:w-auto px-12 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  added
                    ? "bg-green-700 text-white"
                    : "bg-soft-black text-cream hover:bg-gold"
                }`}
              >
                {added ? t("detail.added") : t("detail.addToCart")}
              </button>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="py-20 bg-warm-white">
            <div className="mx-auto max-w-[1400px] px-6 md:px-12">
              <h2 className="font-[var(--font-playfair)] text-2xl text-soft-black mb-10">
                {t("detail.related")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {related.map((p) => (
                  <Link key={p.id} href={`/produkt/${p.slug}`} className="product-card group">
                    <div className="relative aspect-[3/4] bg-warm-white rounded overflow-hidden mb-4">
                      <Image
                        src={p.image}
                        alt={p.name[locale]}
                        fill
                        className="product-image object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-[var(--font-playfair)] text-base text-soft-black">{p.name[locale]}</h3>
                    <p className="text-sm text-taupe mt-0.5">€{p.price.toLocaleString()}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
