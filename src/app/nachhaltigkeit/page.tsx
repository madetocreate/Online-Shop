import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Nachhaltigkeit — MAISON", description: "Unsere Verantwortung für Mensch und Natur. Nachhaltige Materialien, klimaneutraler Versand und langlebige Produkte." };
export default function Page() {
  return <InfoPage titleKey="sust.title" subtitleKey="sust.subtitle" sections={[{ titleKey: "sust.s1.title", textKey: "sust.s1.text" }, { titleKey: "sust.s2.title", textKey: "sust.s2.text" }, { titleKey: "sust.s3.title", textKey: "sust.s3.text" }, { titleKey: "sust.s4.title", textKey: "sust.s4.text" }]} />;
}
