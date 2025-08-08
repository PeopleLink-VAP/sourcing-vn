import { Link } from "react-router-dom";
import { Mail, Linkedin, Facebook } from "lucide-react";
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
                Kết nối doanh nghiệp toàn cầu với nhà máy & tài năng tại Việt Nam.
              </p>
            </div>
            
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>Office: An Khánh, TP Thủ Đức, TP.HCM, Việt Nam</p>
              <p>Email: contact@sourcing.vn</p>
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
                <span className="text-sm text-muted-foreground">Language:</span>
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
                © {new Date().getFullYear()} sourcing.vn · All rights reserved
              </p>
            </div>
          </div>

          {/* Column 2: For Business Owners */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">For Business Owners</h3>
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
                Contact Us
              </Link>
            </div>
          </div>

          {/* Column 3: For Vietnamese Talents */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm">For Vietnamese Talents</h3>
            <div className="space-y-2">
              <Link to="/talent-sourcing" className="block text-sm text-muted-foreground hover:text-foreground">
                Find Opportunities
              </Link>
              <Link to="/news" className="block text-sm text-muted-foreground hover:text-foreground">
                Industry News
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-foreground">
                Career Resources
              </Link>
              <Link to="/team" className="block text-sm text-muted-foreground hover:text-foreground">
                Meet Our Team
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
