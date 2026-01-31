import InfoPage from "@/components/InfoPage";
export const metadata = { title: "AGB — MAISON", description: "Allgemeine Geschäftsbedingungen der MAISON GmbH." };
export default function Page() {
  return <InfoPage titleKey="agb.title" subtitleKey="agb.subtitle" sections={[{ titleKey: "agb.s1.title", textKey: "agb.s1.text" }, { titleKey: "agb.s2.title", textKey: "agb.s2.text" }, { titleKey: "agb.s3.title", textKey: "agb.s3.text" }, { titleKey: "agb.s4.title", textKey: "agb.s4.text" }]} />;
}
