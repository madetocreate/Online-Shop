import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Retouren — MAISON", description: "30 Tage kostenloses Rückgaberecht bei MAISON." };
export default function Page() {
  return <InfoPage titleKey="ret.title" subtitleKey="ret.subtitle" sections={[{ titleKey: "ret.s1.title", textKey: "ret.s1.text" }, { titleKey: "ret.s2.title", textKey: "ret.s2.text" }, { titleKey: "ret.s3.title", textKey: "ret.s3.text" }]} />;
}
