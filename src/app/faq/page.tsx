import InfoPage from "@/components/InfoPage";
export const metadata = { title: "FAQ — MAISON", description: "Häufig gestellte Fragen zu Bestellung, Versand und Produkten bei MAISON." };
export default function Page() {
  return <InfoPage titleKey="faq.title" subtitleKey="faq.subtitle" sections={[{ titleKey: "faq.s1.title", textKey: "faq.s1.text" }, { titleKey: "faq.s2.title", textKey: "faq.s2.text" }, { titleKey: "faq.s3.title", textKey: "faq.s3.text" }, { titleKey: "faq.s4.title", textKey: "faq.s4.text" }]} />;
}
