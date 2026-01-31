import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Impressum — MAISON", description: "Impressum und rechtliche Angaben der MAISON GmbH." };
export default function Page() {
  return <InfoPage titleKey="imp.title" sections={[{ titleKey: "imp.s1.title", textKey: "imp.s1.text" }, { titleKey: "imp.s2.title", textKey: "imp.s2.text" }, { titleKey: "imp.s3.title", textKey: "imp.s3.text" }]} />;
}
