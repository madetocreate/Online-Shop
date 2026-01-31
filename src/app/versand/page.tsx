import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Versand — MAISON", description: "Versandkosten, Lieferzeiten und nachhaltige Verpackung bei MAISON." };
export default function Page() {
  return <InfoPage titleKey="ship.title" subtitleKey="ship.subtitle" sections={[{ titleKey: "ship.s1.title", textKey: "ship.s1.text" }, { titleKey: "ship.s2.title", textKey: "ship.s2.text" }, { titleKey: "ship.s3.title", textKey: "ship.s3.text" }]} />;
}
