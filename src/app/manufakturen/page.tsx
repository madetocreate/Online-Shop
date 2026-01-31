import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Manufakturen — MAISON", description: "Die Meister hinter unseren Produkten. Familiengeführte Manufakturen in Italien, Frankreich und Spanien." };
export default function Page() {
  return <InfoPage titleKey="manuf.title" subtitleKey="manuf.subtitle" sections={[{ titleKey: "manuf.s1.title", textKey: "manuf.s1.text" }, { titleKey: "manuf.s2.title", textKey: "manuf.s2.text" }, { titleKey: "manuf.s3.title", textKey: "manuf.s3.text" }, { titleKey: "manuf.s4.title", textKey: "manuf.s4.text" }]} />;
}
