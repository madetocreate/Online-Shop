import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Karriere — MAISON", description: "Werden Sie Teil von MAISON. Offene Stellen und Initiativbewerbungen." };
export default function Page() {
  return <InfoPage titleKey="career.title" subtitleKey="career.subtitle" sections={[{ titleKey: "career.s1.title", textKey: "career.s1.text" }, { titleKey: "career.s2.title", textKey: "career.s2.text" }, { titleKey: "career.s3.title", textKey: "career.s3.text" }]} />;
}
