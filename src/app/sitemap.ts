import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shop.studiomeyer.io";
  const now = new Date();

  const staticPages = [
    "", "/kollektion", "/ueber-uns",
    "/nachhaltigkeit", "/manufakturen", "/karriere", "/presse",
    "/kontakt", "/versand", "/retouren", "/geschenkgutscheine", "/faq",
    "/datenschutz", "/impressum", "/agb",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/kollektion" ? 0.9 : 0.6,
    })),
    ...products.map((p) => ({
      url: `${base}/produkt/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
