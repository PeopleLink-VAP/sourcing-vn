import { Link } from "react-router-dom";
import { Mail, Linkedin, Facebook, Briefcase, Users, Lightbulb } from "lucide-react";
import { useI18n } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const SiteFooter = () => {
  const { t, lang, setLang } = useI18n();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <img src="/logos/logo_bw.png" alt="sourcing.vn logo" className="h-8 w-auto" />
              <p className="text-sm text-muted-foreground">
                {t("footer.tagline")}
              </p>
            </div>
            
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>{t("footer.office")}</p>
              <p>{t("footer.email")}</p>
            </div>

            <div className="flex items-center gap-3">
              <a href="mailto:contact@sourcing.vn" className="text-muted-foreground hover:text-foreground">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/sourcing-vn" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/sourcing.vn" className="text-muted-foreground hover:text-foreground">
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{t("footer.language")}</span>
                <div className="flex items-center rounded-md border">
                  <button
                    aria-label="Tiếng Việt"
                    className={`px-2 py-1 text-xs rounded-l-md ${lang === "vi" ? "bg-secondary" : ""}`}
                    onClick={() => setLang("vi")}
                  >
                    VI
                  </button>
                  <button
                    aria-label="English"
                    className={`px-2 py-1 text-xs rounded-r-md ${lang === "en" ? "bg-secondary" : ""}`}
                    onClick={() => setLang("en")}
                  >
                    EN
                  </button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("footer.copyright", { year: new Date().getFullYear() })}
                {/* Subtle Admin login link */}
                <Link to="/auth" className="ml-2 text-xs text-muted-foreground hover:text-foreground opacity-60 hover:opacity-100 transition-opacity duration-200">{t("footer.adminLogin")}</Link>
              </p>
            </div>
          </div>

          {/* Column 2: For Business Owners */}
          <div className="space-y-4">
            <h3 className="font-sentic-medium font-semibold text-sm"><Briefcase className="w-4 h-4 mr-2 inline-block" /> {t("footer.forBusinessOwners")}</h3>
            <div className="space-y-2">
              <Link to="/product-sourcing" className="block text-sm text-muted-foreground hover:text-foreground">
                Product Sourcing
              </Link>
              <Link to="/talent-sourcing" className="block text-sm text-muted-foreground hover:text-foreground">
                Talent Sourcing
              </Link>
              <Link to="/case-studies" className="block text-sm text-muted-foreground hover:text-foreground">
                Case Studies
              </Link>
              <Link to="/catalogs" className="block text-sm text-muted-foreground hover:text-foreground">
                Catalogs
              </Link>
              <Link to="/partners" className="block text-sm text-muted-foreground hover:text-foreground">
                Partners
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
                {t("footer.contactUs")}
              </Link>
            </div>
          </div>

          {/* Column 3: For Vietnamese Talents */}
          <div className="space-y-4">
            <h3 className="font-sentic-medium font-semibold text-sm"><Users className="w-4 h-4 mr-2 inline-block" /> {t("footer.forVietnameseTalents")}</h3>
            <div className="space-y-2">
              <Link to="/talent-sourcing" className="block text-sm text-muted-foreground hover:text-foreground">
                {t("footer.findOpportunities")}
              </Link>
              <Link to="/news" className="block text-sm text-muted-foreground hover:text-foreground">
                {t("footer.industryNews")}
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
                {t("footer.careerResources")}
              </Link>
              <Link to="/team" className="block text-sm text-muted-foreground hover:text-foreground">
                {t("footer.meetOurTeam")}
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
                {t("footer.getInTouch")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
