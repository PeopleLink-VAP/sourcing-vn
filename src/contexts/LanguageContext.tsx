import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "vi" | "en";

type Dictionary = Record<string, Record<Lang, string>>;

const dict: Dictionary = {
  "site.title": { vi: "Sourcing Việt Nam", en: "Vietnam Sourcing Hub" },
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.product": { vi: "Product Sourcing", en: "Product Sourcing" },
  "nav.talent": { vi: "Talent Sourcing", en: "Talent Sourcing" },
  "nav.news": { vi: "Tin tức", en: "News" },
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
};

interface ILangContext {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
}

const LangContext = createContext<ILangContext | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "vi");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = useMemo(
    () => (key: keyof typeof dict) => {
      const entry = dict[key];
      return entry ? entry[lang] : String(key);
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
