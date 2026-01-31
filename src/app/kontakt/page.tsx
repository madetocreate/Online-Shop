import InfoPage from "@/components/InfoPage";
export const metadata = { title: "Kontakt — MAISON", description: "Kontaktieren Sie MAISON. Kundenservice, Showroom und Geschäftskunden." };
export default function Page() {
  return <InfoPage titleKey="contact.title" subtitleKey="contact.subtitle" sections={[{ titleKey: "contact.s1.title", textKey: "contact.s1.text" }, { titleKey: "contact.s2.title", textKey: "contact.s2.text" }, { titleKey: "contact.s3.title", textKey: "contact.s3.text" }]} />;
}
