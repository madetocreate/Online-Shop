import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MAISON — Luxury Sunglasses & Handbags",
    template: "%s | MAISON",
  },
  description: "Curated luxury sunglasses and handbags for the modern lifestyle. Timeless elegance, exceptional craftsmanship from Europe's finest manufacturers.",
  metadataBase: new URL("https://shop.studiomeyer.io"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "MAISON",
    title: "MAISON — Luxury Sunglasses & Handbags",
    description: "Handverlesene Luxus-Sonnenbrillen & Handtaschen für den modernen Lebensstil.",
    images: [{ url: "/images/hero/hero-main.png", width: 1792, height: 1024, alt: "MAISON — Luxury Accessories" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAISON — Luxury Sunglasses & Handbags",
    description: "Handverlesene Luxus-Sonnenbrillen & Handtaschen für den modernen Lebensstil.",
    images: ["/images/hero/hero-main.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://shop.studiomeyer.io" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
