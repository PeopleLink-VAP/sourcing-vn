import { SEO } from "@/components/SEO";
import { useI18n } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t } = useI18n();
  return (
    <main className="container mx-auto py-10">
      <SEO
        title={`${t("blog.title")} — Vietnam Sourcing`}
        description="Tips for working with Vietnamese teams, case studies, and FAQs about the sourcing.vn platform."
      />
      <h1 className="text-3xl font-bold">{t("blog.title")}</h1>
      <p className="text-muted-foreground mt-2">{t("blog.comingSoon")}</p>
    </main>
  );
};

export default Blog;
