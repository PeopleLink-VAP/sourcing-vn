import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "vi" | "en";

type Dictionary = Record<string, Record<Lang, string>>;

const dict: Dictionary = {
  "site.title": { vi: "Sourcing Việt Nam", en: "Vietnam Sourcing Hub" },
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.product": { vi: "Product Sourcing", en: "Product Sourcing" },
  "nav.talent": { vi: "Talent Sourcing", en: "Talent Sourcing" },

  "nav.blog": { vi: "Blog/Tài nguyên", en: "Blog/Resources" },
  "nav.catalogs": { vi: "Catalogs", en: "Catalogs" },
  "nav.partners": { vi: "Đối tác", en: "Partners" },
  "nav.cases": { vi: "Case Studies", en: "Case Studies" },
  "nav.team": { vi: "Đội ngũ", en: "Team" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
  "hero.title": { vi: "Kết nối nhà cung cấp từ Việt Nam", en: "Source, Verify, Make in Vietnam" },
  "hero.subtitle": {
    vi: "Kết nối doanh nghiệp toàn cầu với nhà máy & tài năng tại Việt Nam.",
    en: "Connecting global businesses with Vietnam factories and talents.",
  },
  "cta.sourceProducts": { vi: "Source Sản Phẩm", en: "Source Products" },
  "cta.hireTalents": { vi: "Thuê Tài Năng", en: "Hire Talents" },
  "footer.tagline": { vi: "Kết nối doanh nghiệp toàn cầu với nhà máy & tài năng tại Việt Nam.", en: "Connecting global businesses with Vietnam factories and talents." },
  "footer.office": { vi: "Office: An Khánh, TP Thủ Đức, TP.HCM, Việt Nam", en: "Office: An Khanh, Thu Duc City, HCMC, Vietnam" },
  "footer.email": { vi: "Email: contact@sourcing.vn", en: "Email: contact@sourcing.vn" },
  "footer.language": { vi: "Ngôn ngữ:", en: "Language:" },
  "footer.copyright": { vi: "© {year} sourcing.vn · Đã đăng ký bản quyền", en: "© {year} sourcing.vn · All rights reserved" },
  "footer.adminLogin": { vi: "Đăng nhập Admin", en: "Admin Login" },
  "footer.forBusinessOwners": { vi: "Dành cho Chủ doanh nghiệp", en: "For Business Owners" },
  "footer.contactUs": { vi: "Liên hệ chúng tôi", en: "Contact Us" },
  "footer.forVietnameseTalents": { vi: "Dành cho Tài năng Việt Nam", en: "For Vietnamese Talents" },
  "footer.findOpportunities": { vi: "Tìm kiếm cơ hội", en: "Find Opportunities" },
  "footer.industryNews": { vi: "Tin tức ngành", en: "Industry News" },
  "footer.careerResources": { vi: "Tài nguyên nghề nghiệp", en: "Career Resources" },
  "footer.meetOurTeam": { vi: "Gặp gỡ đội ngũ của chúng tôi", en: "Meet Our Team" },
  "footer.getInTouch": { vi: "Liên hệ", en: "Get In Touch" },
  "nav.services": { vi: "Dịch vụ", en: "Services" },
  "nav.resources": { vi: "Tài nguyên", en: "Resources" },
  "nav.about": { vi: "Về chúng tôi", en: "About" },
  "nav.news": { vi: "Tin tức", en: "News" },
  "auth.admin": { vi: "Quản trị", en: "Admin" },
  "auth.logout": { vi: "Đăng xuất", en: "Logout" },
  "news.category.product_sourcing": { vi: "Dịch vụ tìm nguồn sản phẩm", en: "Product Sourcing Services" },
  "news.category.talent_sourcing": { vi: "Tìm nguồn nhân lực (Trợ lý ảo)", en: "Talent Sourcing (Virtual Assistants)" },
  "news.category.vietnam_market": { vi: "Thông tin thị trường Việt Nam & Tin tức", en: "Vietnam Market Insights & News" },
  "news.category.case_studies": { vi: "Nghiên cứu điển hình & Tài nguyên", en: "Case Studies & Resources" },
};

interface ILangContext {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict, replacements?: Record<string, string | number>) => string;
}

const LangContext = createContext<ILangContext | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "vi");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(
    () => (key: keyof typeof dict, replacements?: Record<string, string | number>) => {
      const entry = dict[key];
      let translated = entry ? entry[lang] : String(key);

      if (replacements) {
        for (const [placeholder, value] of Object.entries(replacements)) {
          translated = translated.replace(`{${placeholder}}`, String(value));
        }
      }
      return translated;
    },
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
};
