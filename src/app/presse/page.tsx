import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Presse — MAISON", description: "Pressekontakt und Informationen über MAISON." };
export default function Page() {
  return <InfoPage titleKey="press.title" subtitleKey="press.subtitle" sections={[{ titleKey: "press.s1.title", textKey: "press.s1.text" }, { titleKey: "press.s2.title", textKey: "press.s2.text" }, { titleKey: "press.s3.title", textKey: "press.s3.text" }]} />;
}
