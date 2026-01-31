"use client";

import { useCart } from "@/lib/CartContext";
import { useLocale } from "@/lib/LocaleContext";
import Image from "next/image";
import { useEffect } from "react";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const { t } = useLocale();

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[70] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-taupe/10">
            <h2 className="font-[var(--font-playfair)] text-xl tracking-wide">{t("cart.title")}</h2>
            <button onClick={closeCart} className="text-charcoal hover:text-soft-black transition-colors" aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-taupe/40 mb-4">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <p className="text-charcoal font-medium mb-1">{t("cart.empty")}</p>
                <p className="text-sm text-taupe mb-6">{t("cart.emptyText")}</p>
                <button
                  onClick={closeCart}
                  className="text-sm tracking-wider uppercase text-gold hover:text-soft-black transition-colors"
                >
                  {t("cart.browseCta")}
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-20 h-24 bg-warm-white rounded overflow-hidden flex-shrink-0 relative">
                      <Image
                        src={item.product.image}
                        alt={item.product.name.de}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-soft-black truncate">
                        {item.product.name.de}
                      </h3>
                      <p className="text-sm text-taupe mt-0.5">€{item.product.price.toLocaleString()}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 border border-taupe/20 rounded flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        >
                          -
                        </button>
                        <span className="text-sm tabular-nums w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 border border-taupe/20 rounded flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="ml-auto text-xs text-taupe hover:text-red-600 transition-colors"
                        >
                          {t("cart.remove")}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-taupe/10 px-6 py-5">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-taupe">{t("cart.subtotal")}</span>
                <span className="text-soft-black font-medium">€{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span className="text-taupe">{t("cart.shipping")}</span>
                <span className="text-gold">{t("cart.shippingFree")}</span>
              </div>
              <div className="flex justify-between text-base font-medium mb-5 pt-3 border-t border-taupe/10">
                <span>{t("cart.total")}</span>
                <span>€{subtotal.toLocaleString()}</span>
              </div>
              <button className="w-full py-3.5 bg-soft-black text-cream text-sm tracking-[0.15em] uppercase hover:bg-gold transition-colors duration-300">
                {t("cart.checkout")}
              </button>
              <button
                onClick={closeCart}
                className="w-full py-2.5 text-sm text-taupe hover:text-soft-black transition-colors mt-2 text-center"
              >
                {t("cart.continueShopping")}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
