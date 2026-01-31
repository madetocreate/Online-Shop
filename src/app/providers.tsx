"use client";

import { CartProvider } from "@/lib/CartContext";
import { LocaleProvider } from "@/lib/LocaleContext";
import CartDrawer from "@/components/CartDrawer";
import SmoothScroll from "@/components/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <CartProvider>
        <SmoothScroll />
        {children}
        <CartDrawer />
      </CartProvider>
    </LocaleProvider>
  );
}
