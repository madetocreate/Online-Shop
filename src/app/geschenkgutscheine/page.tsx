import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Geschenkgutscheine — MAISON", description: "MAISON Geschenkgutscheine — das perfekte Geschenk für jeden Anlass." };
export default function Page() {
  return <InfoPage titleKey="gift.title" subtitleKey="gift.subtitle" sections={[{ titleKey: "gift.s1.title", textKey: "gift.s1.text" }, { titleKey: "gift.s2.title", textKey: "gift.s2.text" }, { titleKey: "gift.s3.title", textKey: "gift.s3.text" }]} />;
}
