import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Lang = "vi" | "en";

type Dictionary = Record<string, Record<Lang, string>>;

const dict: Dictionary = {
  "site.title": { vi: "Sourcing Việt Nam", en: "Vietnam Sourcing Hub" },
  "nav.home": { vi: "Trang chủ", en: "Home" },
  "nav.product": { vi: "Tìm Nguồn Sản Phẩm", en: "Product Sourcing" },
  "nav.talent": { vi: "Tìm Nguồn Nhân Lực", en: "Talent Sourcing" },

  "nav.blog": { vi: "Blog/Tài nguyên", en: "Blog/Resources" },
  "nav.catalogs": { vi: "Danh Mục", en: "Catalogs" },
  "nav.partners": { vi: "Đối tác", en: "Partners" },
  "nav.cases": { vi: "Nghiên Cứu Điển Hình", en: "Case Studies" },
  "nav.team": { vi: "Đội ngũ", en: "Team" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
  "hero.title": { vi: "Kết nối nhà cung cấp từ Việt Nam", en: "Source, Verify, Make in Vietnam" },
  "hero.subtitle": {
    vi: "Kết nối doanh nghiệp toàn cầu với nhà máy & tài năng tại Việt Nam.",
    en: "Connecting global businesses with Vietnam factories and talents.",
  },
  "cta.sourceProducts": { vi: "Tìm Nguồn Sản Phẩm", en: "Source Products" },
  "cta.hireTalents": { vi: "Thuê Tài Năng", en: "Hire Talents" },
  "footer.tagline": { vi: "Kết nối doanh nghiệp toàn cầu với nhà máy & tài năng tại Việt Nam.", en: "Connecting global businesses with Vietnam factories and talents." },
  "footer.office": { vi: "Văn phòng: An Khánh, TP Thủ Đức, TP.HCM, Việt Nam", en: "Office: An Khanh, Thu Duc City, HCMC, Vietnam" },
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

  // Homepage content
  "home.servicesTitle": { vi: "Giới thiệu dịch vụ", en: "Introduction to Services" },
  "home.servicesDescription": { vi: "Tư vấn nhập khẩu/xuất khẩu, tìm nhà máy, kiểm hàng, logistics, và quản lý dự án. Talent sourcing cung cấp Virtual Assistants (VA) theo yêu cầu.", en: "Import/export consulting, factory sourcing, quality inspection, logistics, and project management. Talent sourcing provides Virtual Assistants (VAs) on demand." },

  // Authentication page
  "auth.title": { vi: "Đăng nhập / Đăng ký", en: "Login / Sign up" },
  "auth.login": { vi: "Đăng nhập", en: "Login" },
  "auth.signup": { vi: "Đăng ký", en: "Sign up" },
  "auth.email": { vi: "Email", en: "Email" },
  "auth.password": { vi: "Mật khẩu", en: "Password" },
  "auth.emailPlaceholder": { vi: "you@email.com", en: "you@email.com" },
  "auth.passwordPlaceholder": { vi: "••••••••", en: "••••••••" },
  "auth.passwordHint": { vi: "Ít nhất 6 ký tự", en: "At least 6 characters" },
  "auth.pleaseWait": { vi: "Vui lòng đợi...", en: "Please wait..." },
  "auth.createAccount": { vi: "Tạo tài khoản", en: "Create account" },
  "auth.continueGoogle": { vi: "Tiếp tục với Google", en: "Continue with Google" },
  "auth.emailConfirmation": { vi: "Chúng tôi sẽ gửi email xác nhận cho bạn.", en: "We will email you a confirmation link." },
  "auth.loginFailed": { vi: "Đăng nhập thất bại", en: "Login failed" },
  "auth.signupFailed": { vi: "Đăng ký thất bại", en: "Sign up failed" },
  "auth.googleSigninFailed": { vi: "Đăng nhập Google thất bại", en: "Google sign-in failed" },
  "auth.welcomeBack": { vi: "Chào mừng bạn trở lại", en: "Welcome back" },
  "auth.checkEmail": { vi: "Kiểm tra email để xác nhận", en: "Check your email to confirm" },

  // Contact page
  "contact.title": { vi: "Liên hệ", en: "Contact" },
  "contact.office": { vi: "Văn phòng: An Khánh, TP Thủ Đức, TP.HCM, Việt Nam", en: "Office: An Khanh, Thu Duc City, HCMC, Vietnam" },
  "contact.emailUs": { vi: "Gửi email cho chúng tôi", en: "Email us" },

  // 404 page
  "404.title": { vi: "404", en: "404" },
  "404.message": { vi: "Oops! Không tìm thấy trang", en: "Oops! Page not found" },
  "404.returnHome": { vi: "Trở về Trang chủ", en: "Return to Home" },

  // Blog page
  "blog.title": { vi: "Blog / Tài nguyên", en: "Blog / Resources" },
  "blog.comingSoon": { vi: "Sắp ra mắt: nội dung biên tập, hướng dẫn, và bài viết khách mời.", en: "Coming soon: editorial content, guides, and guest posts." },

  // News page
  "news.title": { vi: "Tin tức Thương mại Việt Nam", en: "Vietnam Trade News" },
  "news.categories": { vi: "Danh mục", en: "Categories" },
  "news.allNews": { vi: "Tất cả tin tức", en: "All News" },
  "news.todayHeadlines": { vi: "Tin tức hôm nay", en: "Today's Headlines" },
  "news.featuredNews": { vi: "Tin nổi bật", en: "Featured News" },
  "news.marketInsights": { vi: "Thông tin thị trường", en: "Market Insights" },
  "news.seeAll": { vi: "Xem tất cả", en: "See all" },
  "news.stayUpdated": { vi: "Luôn cập nhật", en: "Stay Updated" },
  "news.subscribeDescription": { vi: "Nhận tin tức thương mại Việt Nam mới nhất vào hộp thư của bạn.", en: "Get the latest Vietnam trade news delivered to your inbox." },
  "news.subscribeNow": { vi: "Đăng ký ngay", en: "Subscribe Now" },

  // Header navigation
  "nav.ourServices": { vi: "Dịch vụ của chúng tôi", en: "Our Services" },
  "nav.servicesDescription": { vi: "Các giải pháp tìm nguồn chuyên nghiệp kết nối bạn với sự xuất sắc trong sản xuất của Việt Nam.", en: "Professional sourcing solutions connecting you with Vietnam's manufacturing excellence." },
  "nav.productDescription": { vi: "Kết nối với các nhà máy đáng tin cậy để sản xuất chất lượng", en: "Connect with reliable factories for quality manufacturing" },
  "nav.talentDescription": { vi: "Thuê Trợ lý Ảo có kỹ năng từ Việt Nam", en: "Hire skilled Virtual Assistants from Vietnam" },
  "nav.resourcesDescription": { vi: "Thông tin chi tiết, nghiên cứu điển hình và tài nguyên để giúp bạn thành công.", en: "Insights, case studies, and resources to help you succeed." },
  "nav.casesDescription": { vi: "Các mối quan hệ đối tác của chúng tôi đang hoạt động", en: "Our partnerships in action" },
  "nav.catalogsDescription": { vi: "Danh mục sản phẩm và mẫu", en: "Product catalogs and samples" },
  "nav.partnersDescription": { vi: "Mạng lưới đáng tin cậy của chúng tôi", en: "Our trusted network" },
  "nav.aboutDescription": { vi: "Tìm hiểu thêm về đội ngũ và sứ mệnh của chúng tôi.", en: "Learn more about our team and mission." },
  "nav.founderTitle": { vi: "Về Người Sáng lập", en: "About the Founder" },
  "nav.founderDescription": { vi: "Gặp gỡ Duyên Phạm và câu chuyện của cô ấy", en: "Meet Duyen Pham and her story" },
  "nav.teamDescription": { vi: "Gặp gỡ đội ngũ chuyên gia của chúng tôi", en: "Meet our expert team" },

  // Mobile navigation headers
  "nav.mobile.services": { vi: "Dịch vụ", en: "Services" },
  "nav.mobile.resources": { vi: "Tài nguyên", en: "Resources" },
  "nav.mobile.about": { vi: "Về chúng tôi", en: "About" },

  // Header news category bar
  "nav.newsbar.productSourcing": { vi: "Dịch vụ Tìm Nguồn Sản Phẩm", en: "Product Sourcing Services" },
  "nav.newsbar.talentSourcing": { vi: "Tìm Nguồn Nhân Lực (VAs)", en: "Talent Sourcing (VAs)" },
  "nav.newsbar.marketInsights": { vi: "Thông Tin Thị Trường Việt Nam", en: "Vietnam Market Insights" },
  "nav.newsbar.caseStudies": { vi: "Nghiên Cứu Điển Hình & Tài Nguyên", en: "Case Studies & Resources" },
  "nav.newsbar.aboutNetwork": { vi: "Về Mạng Lưới Của Chúng Tôi", en: "About Our Network" },

  // Footer links - product sourcing
  "footer.productSourcing": { vi: "Tìm Nguồn Sản Phẩm", en: "Product Sourcing" },
  "footer.talentSourcing": { vi: "Tìm Nguồn Nhân Lực", en: "Talent Sourcing" },
  "footer.caseStudies": { vi: "Nghiên Cứu Điển Hình", en: "Case Studies" },
  "footer.catalogs": { vi: "Danh Mục", en: "Catalogs" },
  "footer.partners": { vi: "Đối Tác", en: "Partners" },

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
