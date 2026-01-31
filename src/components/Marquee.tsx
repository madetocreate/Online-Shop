"use client";

import { useLocale } from "@/lib/LocaleContext";

export default function Marquee() {
  const { t } = useLocale();
  const items = [
    t("marquee.handmade"), t("marquee.timeless"), t("marquee.sustainable"),
    t("marquee.exclusive"), t("marquee.premium"), t("marquee.unique"),
  ];

  return (
    <div className="bg-soft-black py-4 overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite]">
        {[...Array(3)].map((_, g) => (
          <div key={g} className="flex shrink-0">
            {items.map((item, i) => (
              <span key={`${g}-${i}`} className="flex items-center mx-6">
                <span className="text-[13px] tracking-[0.2em] uppercase text-white/40">{item}</span>
                <span className="ml-6 w-1 h-1 rounded-full bg-gold/40" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
