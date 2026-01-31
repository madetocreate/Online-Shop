"use client";

import { useLocale } from "@/lib/LocaleContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-soft-black">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-[var(--font-playfair)] text-2xl tracking-[0.15em] text-white">
              MAISON
            </Link>
            <p className="text-sm text-white/50 mt-4 leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold-light mb-5">{t("footer.shop")}</h4>
            <ul className="space-y-3">
              {(["women", "men", "accessories", "new", "sale"] as const).map((key) => (
                <li key={key}>
                  <Link href="/kollektion" className="text-sm text-white/60 hover:text-gold-light transition-colors">
                    {t(`footer.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold-light mb-5">{t("footer.info")}</h4>
            <ul className="space-y-3">
              {(["aboutUs", "sustainability", "manufacturers", "careers", "press"] as const).map((key) => {
                const hrefs: Record<string, string> = {
                  aboutUs: "/ueber-uns",
                  sustainability: "/nachhaltigkeit",
                  manufacturers: "/manufakturen",
                  careers: "/karriere",
                  press: "/presse",
                };
                return (
                  <li key={key}>
                    <Link href={hrefs[key]} className="text-sm text-white/60 hover:text-gold-light transition-colors">
                      {t(`footer.${key}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gold-light mb-5">{t("footer.service")}</h4>
            <ul className="space-y-3">
              {(["contact", "shipping", "returns", "giftCards", "faq"] as const).map((key) => {
                const hrefs: Record<string, string> = {
                  contact: "/kontakt",
                  shipping: "/versand",
                  returns: "/retouren",
                  giftCards: "/geschenkgutscheine",
                  faq: "/faq",
                };
                return (
                  <li key={key}>
                    <Link href={hrefs[key]} className="text-sm text-white/60 hover:text-gold-light transition-colors">
                      {t(`footer.${key}`)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <span className="text-[11px] text-white/40">
            &copy; 2025 MAISON. {t("footer.rights")}
          </span>
          <div className="flex items-center gap-6">
            {(["privacy", "imprint", "terms"] as const).map((key) => {
              const hrefs: Record<string, string> = {
                privacy: "/datenschutz",
                imprint: "/impressum",
                terms: "/agb",
              };
              return (
                <Link key={key} href={hrefs[key]} className="text-[11px] text-white/40 hover:text-gold-light transition-colors">
                  {t(`footer.${key}`)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
