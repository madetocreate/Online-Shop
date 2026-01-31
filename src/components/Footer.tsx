export default function Footer() {
  return (
    <footer className="bg-cream border-t border-taupe/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-[var(--font-playfair)] text-2xl tracking-[0.15em] text-soft-black">
              MAISON
            </span>
            <p className="text-sm text-taupe mt-4 leading-relaxed max-w-xs">
              Zeitlose Eleganz, handverlesen für den modernen Kenner.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-soft-black mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {["Damen", "Herren", "Accessoires", "Neuheiten", "Sale"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-taupe hover:text-soft-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-soft-black mb-5">
              Information
            </h4>
            <ul className="space-y-3">
              {["Über uns", "Nachhaltigkeit", "Manufakturen", "Karriere", "Presse"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-taupe hover:text-soft-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-soft-black mb-5">
              Service
            </h4>
            <ul className="space-y-3">
              {["Kontakt", "Versand", "Retouren", "Geschenkgutscheine", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-taupe hover:text-soft-black transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-taupe/10 gap-4">
          <span className="text-[11px] text-taupe">
            &copy; 2025 MAISON. Alle Rechte vorbehalten.
          </span>
          <div className="flex items-center gap-6">
            {["Datenschutz", "Impressum", "AGB"].map((item) => (
              <a key={item} href="#" className="text-[11px] text-taupe hover:text-soft-black transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
