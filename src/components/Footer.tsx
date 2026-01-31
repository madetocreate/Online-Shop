"use client";

import { useLocale } from "@/lib/LocaleContext";
import Link from "next/link";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-cream border-t border-taupe/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-[var(--font-playfair)] text-2xl tracking-[0.15em] text-soft-black">
              MAISON
            </Link>
            <p className="text-sm text-taupe mt-4 leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-soft-black mb-5">{t("footer.shop")}</h4>
            <ul className="space-y-3">
              {(["women", "men", "accessories", "new", "sale"] as const).map((key) => (
                <li key={key}>
                  <Link href="/kollektion" className="text-sm text-taupe hover:text-soft-black transition-colors">
                    {t(`footer.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-soft-black mb-5">{t("footer.info")}</h4>
            <ul className="space-y-3">
              {(["aboutUs", "sustainability", "manufacturers", "careers", "press"] as const).map((key) => (
                <li key={key}>
                  <Link href={key === "aboutUs" ? "/ueber-uns" : "#"} className="text-sm text-taupe hover:text-soft-black transition-colors">
                    {t(`footer.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-soft-black mb-5">{t("footer.service")}</h4>
            <ul className="space-y-3">
              {(["contact", "shipping", "returns", "giftCards", "faq"] as const).map((key) => (
                <li key={key}>
                  <a href="#" className="text-sm text-taupe hover:text-soft-black transition-colors">
                    {t(`footer.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-taupe/10 gap-4">
          <span className="text-[11px] text-taupe">
            &copy; 2025 MAISON. {t("footer.rights")}
          </span>
          <div className="flex items-center gap-6">
            {(["privacy", "imprint", "terms"] as const).map((key) => (
              <a key={key} href="#" className="text-[11px] text-taupe hover:text-soft-black transition-colors">
                {t(`footer.${key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
