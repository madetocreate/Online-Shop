import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Datenschutz — MAISON", description: "Datenschutzerklärung der MAISON GmbH." };
export default function Page() {
  return <InfoPage titleKey="priv.title" subtitleKey="priv.subtitle" sections={[{ titleKey: "priv.s1.title", textKey: "priv.s1.text" }, { titleKey: "priv.s2.title", textKey: "priv.s2.text" }, { titleKey: "priv.s3.title", textKey: "priv.s3.text" }, { titleKey: "priv.s4.title", textKey: "priv.s4.text" }]} />;
}
