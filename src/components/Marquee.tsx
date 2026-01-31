"use client";

export default function Marquee() {
  const items = [
    "Handgefertigt",
    "Zeitlos",
    "Nachhaltig",
    "Exklusiv",
    "Premium",
    "Einzigartig",
  ];

  return (
    <div className="py-6 bg-soft-black overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 flex items-center gap-8">
            <span className="text-[12px] tracking-[0.3em] uppercase text-white/40">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold/40" />
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
