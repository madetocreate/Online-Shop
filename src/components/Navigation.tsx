"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { useLocale } from "@/lib/LocaleContext";
import { locales, localeNames } from "@/lib/i18n";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { openCart, itemCount } = useCart();
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t("nav.collection"), href: "/kollektion" },
    { label: t("nav.sunglasses"), href: "/kollektion?filter=sunglasses" },
    { label: t("nav.bags"), href: "/kollektion?filter=bags" },
    { label: t("nav.about"), href: "/ueber-uns" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(140,126,106,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-[var(--font-playfair)] text-2xl tracking-[0.15em] text-soft-black">
            MAISON
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-[13px] tracking-[0.12em] uppercase text-charcoal hover:text-soft-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="text-[11px] tracking-[0.1em] uppercase text-charcoal hover:text-soft-black transition-colors"
              >
                {locale.toUpperCase()}
              </button>
              {langOpen && (
                <div className="absolute top-8 right-0 bg-cream border border-taupe/10 shadow-lg rounded-sm py-1 min-w-[100px]">
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLocale(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-1.5 text-xs transition-colors ${
                        l === locale ? "text-gold" : "text-charcoal hover:text-soft-black"
                      }`}
                    >
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <button className="text-charcoal hover:text-soft-black transition-colors" aria-label={t("nav.search")}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Cart */}
            <button onClick={openCart} className="relative text-charcoal hover:text-soft-black transition-colors" aria-label={t("nav.cart")}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[9px] rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu */}
            <button
              className="lg:hidden flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t("nav.menu")}
            >
              <span className={`w-6 h-px bg-soft-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`w-6 h-px bg-soft-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-cream/98 backdrop-blur-lg z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-[var(--font-playfair)] text-3xl tracking-[0.1em] text-soft-black animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Language in mobile */}
            <div className="flex items-center gap-4 mt-4">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => { setLocale(l); setMenuOpen(false); }}
                  className={`text-sm tracking-wider ${l === locale ? "text-gold" : "text-taupe"}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
