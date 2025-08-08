import { SEO } from "@/components/SEO";
import { useI18n } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useI18n();
  return (
    <main className="container mx-auto py-10">
      <SEO
        title={`${t("contact.title")} — Vietnam Sourcing Hub`}
        description="Get in touch: An Khanh ward, Thu Duc City, HCMC, Vietnam. contact@sourcing.vn."
      />
      <h1 className="text-3xl font-bold">{t("contact.title")}</h1>
      <p className="text-muted-foreground mt-2">{t("contact.office")}</p>
      <p className="text-muted-foreground">{t("footer.email")}</p>
      <div className="mt-4 flex gap-3">
        <a className="underline" href="mailto:contact@sourcing.vn">{t("contact.emailUs")}</a>
        <a className="underline" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
        <a className="underline" href="https://calendly.com/" target="_blank" rel="noreferrer">Calendly</a>
      </div>
    </main>
  );
};

export default Contact;
