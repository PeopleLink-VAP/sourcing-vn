import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";
import { useI18n } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useI18n();
  return (
    <main>
      <SEO
        title="Vietnam Sourcing Hub — Outsourcing Without Borders"
        description="Connect with Vietnam factories and virtual assistants. Product sourcing, talent sourcing, and market insights."
        image={heroImage}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-foreground">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-prose">
              {t("hero.subtitle")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/product-sourcing">
                <Button variant="cta" size="lg">{t("cta.sourceProducts")}</Button>
              </Link>
              <Link to="/talent-sourcing">
                <Button variant="hero" size="lg">{t("cta.hireTalents")}</Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={heroImage} alt="Vietnam sourcing and talent hub hero" loading="eager" className="w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 md:py-16">
        <h2 className="text-2xl font-semibold">Giới thiệu dịch vụ</h2>
        <p className="text-muted-foreground mt-2 max-w-3xl">
          Tư vấn nhập khẩu/xuất khẩu, tìm nhà máy, kiểm hàng, logistics, và quản lý dự án. Talent sourcing cung cấp Virtual Assistants (VA) theo yêu cầu.
        </p>
      </section>
    </main>
  );
};

export default Index;
