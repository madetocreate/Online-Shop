"use client";

export default function Newsletter() {
  return (
    <section className="py-24 md:py-32 bg-soft-black">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 text-center">
        <span className="text-[11px] tracking-[0.3em] uppercase text-gold-light mb-4 block">
          Exklusiv
        </span>
        <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl text-white mb-4">
          Immer informiert
        </h2>
        <p className="text-sm text-white/50 max-w-md mx-auto mb-10">
          Erhalten Sie als Erste Zugang zu neuen Kollektionen,
          exklusiven Events und besonderen Angeboten.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            className="w-full sm:flex-1 bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
          />
          <button
            type="submit"
            className="magnetic-btn bg-gold text-soft-black px-8 py-3 text-[12px] tracking-[0.15em] uppercase hover:bg-gold-light transition-colors whitespace-nowrap"
          >
            <span>Anmelden</span>
          </button>
        </form>
      </div>
    </section>
  );
}
