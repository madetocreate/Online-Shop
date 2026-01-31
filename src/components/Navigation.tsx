"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          <a href="#" className="font-[var(--font-playfair)] text-2xl tracking-[0.15em] text-soft-black">
            MAISON
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {["Kollektion", "Neuheiten", "Accessoires", "Über uns"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="nav-link text-[13px] tracking-[0.12em] uppercase text-charcoal hover:text-soft-black transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            {/* Search */}
            <button className="text-charcoal hover:text-soft-black transition-colors" aria-label="Suche">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Cart */}
            <button className="relative text-charcoal hover:text-soft-black transition-colors" aria-label="Warenkorb">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-white text-[9px] rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden flex flex-col gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menü"
            >
              <span className={`w-6 h-px bg-soft-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
              <span className={`w-6 h-px bg-soft-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-cream/98 backdrop-blur-lg z-40 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-10">
            {["Kollektion", "Neuheiten", "Accessoires", "Über uns"].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="font-[var(--font-playfair)] text-3xl tracking-[0.1em] text-soft-black animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
