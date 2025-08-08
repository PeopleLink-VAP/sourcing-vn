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
  "nav.cases": { vi: "Dự án Điển Hình", en: "Case Studies" },
  "nav.team": { vi: "Đội ngũ", en: "Team" },
  "nav.contact": { vi: "Liên hệ", en: "Contact" },
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
  "auth.adminDashboard": { vi: "Bảng điều khiển Admin", en: "Admin Dashboard" },
  "news.category.product_sourcing": { vi: "Dịch vụ tìm nguồn sản phẩm", en: "Product Sourcing Services" },
  "news.category.talent_sourcing": { vi: "Tìm nguồn nhân lực (Trợ lý ảo)", en: "Talent Sourcing (Virtual Assistants)" },
  "news.category.vietnam_market": { vi: "Thông tin thị trường Việt Nam & Tin tức", en: "Vietnam Market Insights & News" },
  "news.category.case_studies": { vi: "Dự án điển hình & Tài nguyên", en: "Case Studies & Resources" },

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
  "nav.resourcesDescription": { vi: "Thông tin chi tiết, dự án điển hình và tài nguyên để giúp bạn thành công.", en: "Insights, case studies, and resources to help you succeed." },
  "nav.casesDescription": { vi: "Các mối quan hệ đối tác của chúng tôi đang hoạt động", en: "Our partnerships in action" },
  "nav.catalogsDescription": { vi: "Danh mục sản phẩm và mẫu", en: "Product catalogs and samples" },
  "nav.partnersDescription": { vi: "Mạng lưới đáng tin cậy của chúng tôi", en: "Our trusted network" },
  "nav.aboutDescription": { vi: "Tìm hiểu thêm về đội ngũ và sứ mệnh của chúng tôi.", en: "Learn more about our team and mission." },
  "nav.founderTitle": { vi: "Về Người Sáng lập", en: "About the Founder" },
  "nav.founderDescription": { vi: "Gặp gỡ Duyên Phạm và câu chuyện của cô ấy", en: "Meet Duyen Pham and her story" },
  "nav.teamDescription": { vi: "Gặp gỡ đội ngũ chuyên gia của chúng tôi", en: "Meet our expert team" },

  // Mobile navigation headers
  "nav.mobile.news": { vi: "Tin tức", en: "News" },
  "nav.mobile.services": { vi: "Dịch vụ", en: "Services" },
  "nav.mobile.resources": { vi: "Tài nguyên", en: "Resources" },
  "nav.mobile.about": { vi: "Về chúng tôi", en: "About" },
  "nav.mobile.language": { vi: "Ngôn ngữ:", en: "Language:" },

  // Header news category bar
  "nav.newsbar.productSourcing": { vi: "Dịch vụ Tìm Nguồn Sản Phẩm", en: "Product Sourcing Services" },
  "nav.newsbar.talentSourcing": { vi: "Tìm Nguồn Nhân Lực (VAs)", en: "Talent Sourcing (VAs)" },
  "nav.newsbar.marketInsights": { vi: "Thông Tin Thị Trường Việt Nam", en: "Vietnam Market Insights" },
  "nav.newsbar.caseStudies": { vi: "Dự án Điển Hình & Tài Nguyên", en: "Case Studies & Resources" },
  "nav.newsbar.aboutNetwork": { vi: "Về Mạng Lưới Của Chúng Tôi", en: "About Our Network" },

  // Footer links - product sourcing
  "footer.productSourcing": { vi: "Tìm Nguồn Sản Phẩm", en: "Product Sourcing" },
  "footer.talentSourcing": { vi: "Tìm Nguồn Nhân Lực", en: "Talent Sourcing" },
  "footer.caseStudies": { vi: "Dự án Điển Hình", en: "Case Studies" },
  "footer.catalogs": { vi: "Danh Mục", en: "Catalogs" },
  "footer.partners": { vi: "Đối Tác", en: "Partners" },

  // Contact Page - Comprehensive
  "contact.title": { vi: "Liên hệ", en: "Contact" },
  "contact.subtitle": { vi: "Kết nối với chúng tôi để bắt đầu hành trình tìm nguồn cung ứng của bạn", en: "Connect with us to start your sourcing journey" },
  "contact.office": { vi: "Văn phòng: Phường An Khánh, Thành phố Thủ Đức, TP.HCM, Việt Nam", en: "Office: An Khanh ward, Thu Duc city, HCMC, Vietnam" },
  "contact.email": { vi: "Email: contact@sourcing.vn", en: "Email: contact@sourcing.vn" },
  "contact.whatsApp": { vi: "WhatsApp", en: "WhatsApp" },
  "contact.calendly": { vi: "Lịch hẹn", en: "Schedule" },
  "contact.emailUs": { vi: "Gửi email cho chúng tôi", en: "Email us" },
  "contact.emailDescription": { vi: "Gửi cho chúng tôi thông điệp chi tiết về nhu cầu tìm nguồn cung ứng của bạn", en: "Send us a detailed message about your sourcing needs" },
  "contact.whatsAppDescription": { vi: "Trò chuyện nhanh cho các câu hỏi cấp bách", en: "Quick chat for immediate questions" },
  "contact.scheduleDescription": { vi: "Lên lịch cuộc gọi tư vấn với đội ngũ chuyên gia", en: "Schedule a consultation call with our experts" },
  "contact.emailNow": { vi: "Gửi Email ngay", en: "Email Now" },
  "contact.chatWhatsApp": { vi: "Trò chuyện trên WhatsApp", en: "Chat on WhatsApp" },
  "contact.bookMeeting": { vi: "Đặt lịch hẹn", en: "Book Meeting" },
  "contact.contactForm": { vi: "Biểu mẫu liên hệ", en: "Contact Form" },
  "contact.contactFormDescription": { vi: "Điền vào biểu mẫu bên dưới và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ", en: "Fill out the form below and we'll get back to you within 24 hours" },
  "contact.name": { vi: "Họ và tên", en: "Full Name" },
  "contact.nameRequired": { vi: "Vui lòng nhập họ và tên", en: "Please enter your full name" },
  "contact.company": { vi: "Công ty", en: "Company" },
  "contact.companyOptional": { vi: "Tên công ty (tùy chọn)", en: "Company name (optional)" },
  "contact.emailAddress": { vi: "Địa chỉ email", en: "Email Address" },
  "contact.emailRequired": { vi: "Vui lòng nhập địa chỉ email hợp lệ", en: "Please enter a valid email address" },
  "contact.projectType": { vi: "Loại dự án", en: "Project Type" },
  "contact.selectProjectType": { vi: "Chọn loại dự án", en: "Select project type" },
  "contact.productSourcing": { vi: "Tìm nguồn sản phẩm", en: "Product Sourcing" },
  "contact.talentSourcing": { vi: "Tìm nguồn nhân lực", en: "Talent Sourcing" },
  "contact.both": { vi: "Cả hai", en: "Both" },
  "contact.consultation": { vi: "Tư vấn", en: "Consultation" },
  "contact.message": { vi: "Tin nhắn", en: "Message" },
  "contact.messageDescription": { vi: "Mô tả chi tiết về dự án và yêu cầu của bạn", en: "Describe your project and requirements in detail" },
  "contact.messageRequired": { vi: "Vui lòng nhập tin nhắn", en: "Please enter your message" },
  "contact.sendMessage": { vi: "Gửi tin nhắn", en: "Send Message" },
  "contact.sending": { vi: "Đang gửi...", en: "Sending..." },
  "contact.messageSent": { vi: "Tin nhắn đã được gửi thành công!", en: "Message sent successfully!" },
  "contact.messageError": { vi: "Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.", en: "There was an error sending your message. Please try again." },
  "contact.faq": { vi: "Câu hỏi thường gặp", en: "Frequently Asked Questions" },
  "contact.faqSubtitle": { vi: "Tìm hiểu thêm về Sourcing.vn và dịch vụ của chúng tôi", en: "Learn more about Sourcing.vn and our services" },
  "contact.readyToStart": { vi: "Sẵn sàng bắt đầu dự án của bạn?", en: "Ready to Start Your Project?" },
  "contact.readyDescription": { vi: "Dù bạn cần dịch vụ tìm nguồn sản phẩm hay tìm nguồn nhân lực, chúng tôi ở đây để giúp bạn thành công trong thị trường sản xuất và nhân lực Việt Nam.", en: "Whether you need product sourcing or talent sourcing services, we're here to help you succeed in Vietnam's manufacturing and talent markets." },
  "contact.getStarted": { vi: "Bắt đầu ngay hôm nay", en: "Get Started Today" },
  "contact.viewWork": { vi: "Xem công việc của chúng tôi", en: "View Our Work" },

  // FAQ Content
  "faq.whatIsSourcing": { vi: "Sourcing.vn là gì?", en: "What is Sourcing.vn?" },
  "faq.whatIsSourcingAnswer": { vi: "Sourcing.vn là dịch vụ kết nối các doanh nghiệp quốc tế với các nhà sản xuất và nhà cung cấp Việt Nam. Chúng tôi cung cấp hỗ trợ toàn diện, bao gồm tìm kiếm nhà máy, kiểm soát chất lượng, logistics, và tìm nguồn nhân tài.", en: "Sourcing.vn is a service that connects international businesses with Vietnamese manufacturers and suppliers. We offer end-to-end support, including factory sourcing, quality control, logistics, and talent sourcing." },
  "faq.isPlatform": { vi: "Sourcing.vn có phải là một nền tảng không?", en: "Is Sourcing.vn a platform?" },
  "faq.isPlatformAnswer": { vi: "Không, Sourcing.vn không phải là một nền tảng. Chúng tôi là một công ty dựa trên dịch vụ. Người sáng lập của chúng tôi, Duyên Phạm, và đội ngũ của cô ấy cung cấp hỗ trợ cá nhân, thực tiễn cho mỗi khách hàng để đảm bảo kết quả tốt nhất có thể.", en: "No, Sourcing.vn is not a platform. We are a service-based company. Our founder, Duyen Pham, and her team provide personalized, hands-on support for every client to ensure the best possible outcomes." },
  "faq.relationship": { vi: "Mối quan hệ giữa Sourcing.vn, Second Brains Co., Ltd, và virtualassistantpro.vn là gì?", en: "What is the relationship between Sourcing.vn, Second Brains Co., Ltd, and virtualassistantpro.vn?" },
  "faq.relationshipAnswer": { vi: "Sourcing.vn là dịch vụ được vận hành bởi Second Brains Co., Ltd. Chuyên môn của chúng tôi trong tìm nguồn nhân tài được hỗ trợ bởi thương hiệu chị em của chúng tôi, virtualassistantpro.vn, chuyên cung cấp trợ lý ảo lành nghề từ Việt Nam.", en: "Sourcing.vn is a service operated by Second Brains Co., Ltd. Our expertise in talent sourcing is powered by our sister brand, virtualassistantpro.vn, which specializes in providing skilled virtual assistants from Vietnam." },
  "faq.ourOffice": { vi: "Văn phòng của chúng tôi", en: "Our Office" },
  "faq.email": { vi: "Email", en: "Email" },

  // Case Studies Page
  "caseStudies.title": { vi: "Dự Án Điển Hình", en: "Our Partnerships in Action" },
  "caseStudies.subtitle": { vi: "Xây dựng niềm tin và uy tín thông qua các dự án tìm nguồn sản phẩm thành công thể hiện cam kết của chúng tôi về niềm tin, minh bạch và chuyên môn Việt Nam.", en: "Building trust and credibility through successful product sourcing projects that demonstrate our commitment to trust, clarity, and Vietnamese expertise." },
  "caseStudies.trustClarity": { vi: "niềm tin, minh bạch và chuyên môn Việt Nam", en: "trust, clarity, and Vietnamese expertise" },
  "caseStudies.learnMore": { vi: "Tìm hiểu thêm về dự án này", en: "Learn More About This Project" },
  "caseStudies.readyTitle": { vi: "Sẵn sàng để bắt đầu câu chuyện thành công của riêng bạn?", en: "Ready to Start Your Own Success Story?" },
  "caseStudies.readySubtitle": { vi: "Hãy để chúng tôi giúp bạn tìm nguồn cung cấp các sản phẩm chất lượng cao từ Việt Nam với cùng sự tận tụy và chuyên môn được thể hiện trong những mối quan hệ đối tác này.", en: "Let us help you source high-quality products from Vietnam with the same dedication and expertise shown in these partnerships." },
  "caseStudies.startProject": { vi: "Bắt đầu dự án của bạn hôm nay", en: "Start Your Project Today" },

  // Individual Case Studies
  "caseStudy.backToCases": { vi: "Quay lại Dự án Điển hình", en: "Back to Case Studies" },
  "caseStudy.challenge": { vi: "Thách thức", en: "The Challenge" },
  "caseStudy.solution": { vi: "Giải pháp của chúng tôi", en: "Our Solution" },
  "caseStudy.process": { vi: "Quy trình của chúng tôi", en: "Our Process" },
  "caseStudy.results": { vi: "Kết quả đạt được", en: "Results Achieved" },
  "caseStudy.outcomes": { vi: "Kết quả thành công", en: "Successful Outcomes" },
  "caseStudy.feedback": { vi: "Phản hồi từ khách hàng", en: "Client Feedback" },
  "caseStudy.readyManufacturing": { vi: "Sẵn sàng bắt đầu hành trình sản xuất của bạn?", en: "Ready to Start Your Manufacturing Journey?" },
  "caseStudy.readyManufacturingSubtitle": { vi: "Hãy để chúng tôi giúp bạn kết nối với các nhà sản xuất Việt Nam phù hợp cho sản phẩm của bạn.", en: "Let us help you connect with the right Vietnamese manufacturers for your products." },
  "caseStudy.startYourProject": { vi: "Bắt đầu dự án của bạn", en: "Start Your Project" },

  // Reimer Case Study Specific
  "reimer.title": { vi: "Reimer (Mexico) - Sản xuất áo khoác", en: "Reimer (Mexico) - Jacket Manufacturing" },
  "reimer.excerpt": { vi: "Hỗ trợ Reimer, một thương hiệu có trụ sở tại Mexico, thành công trong việc xác định và kết nối với các nhà sản xuất áo khoác có kinh nghiệm tại Việt Nam. Sự hỗ trợ tại chỗ của chúng tôi đảm bảo hiểu biết sâu sắc về thị trường và các mối quan hệ đối tác có giá trị.", en: "Assisted Reimer, a Mexico-based brand, in successfully identifying and connecting with experienced jacket manufacturers in Vietnam. Our on-the-ground support ensured deep market understanding and valuable partnerships." },
  "reimer.location": { vi: "Mexico City, Mexico", en: "Mexico City, Mexico" },
  "reimer.date": { vi: "Tháng 5 2023", en: "May 2023" },
  "reimer.industry": { vi: "Thời trang & May mặc", en: "Fashion & Apparel" },

  // Catalogs Page
  "catalogs.title": { vi: "Cổng Chất lượng cho Sản phẩm Việt Nam", en: "Your Gateway to Quality Vietnamese Products" },
  "catalogs.subtitle": { vi: "Tại Sourcing.vn, dưới sự dẫn dắt của nhà sáng lập Duyên Phạm, chúng tôi chuyên kết nối khách hàng quốc tế với các sản phẩm chất lượng cao, đáng tin cậy được sản xuất tự hào tại Việt Nam. Mạng lưới rộng lớn của chúng tôi gồm các nhà sản xuất Việt Nam, kết hợp với 10 năm kinh nghiệm của nhà sáng lập và 'tư duy của nhà sáng lập', đảm bảo việc tìm nguồn cung ứng trung thực, có trách nhiệm và hiệu quả cho doanh nghiệp của bạn.", en: "At Sourcing.vn, led by founder Duyen Pham, we specialize in connecting international clients with high-quality, reliable products proudly made in Vietnam. Our extensive network of Vietnamese manufacturers, combined with our founder's 10 years of experience and a 'founder's mindset,' ensures honest, responsible, and efficient sourcing for your business." },
  "catalogs.requestCatalog": { vi: "Yêu cầu Danh mục Tùy chỉnh", en: "Request Custom Catalog" },
  "catalogs.viewCategories": { vi: "Xem Danh mục Sản phẩm", en: "View Product Categories" },
  "catalogs.whyVietnam": { vi: "Tại sao tìm nguồn cung từ Việt Nam?", en: "Why Source from Vietnam?" },
  "catalogs.whyVietnamSubtitle": { vi: "Việt Nam cung cấp những lợi thế độc đáo cho các doanh nghiệp quốc tế tìm kiếm đối tác sản xuất chất lượng", en: "Vietnam offers unique advantages for international businesses seeking quality manufacturing partners" },
  "catalogs.competitivePrices": { vi: "Giá cạnh tranh", en: "Competitive Prices" },
  "catalogs.competitivePricesDesc": { vi: "Sản xuất hiệu quả về chi phí mà không ảnh hưởng đến chất lượng", en: "Cost-effective manufacturing without compromising quality" },
  "catalogs.skilledLabor": { vi: "Lao động có tay nghề", en: "Skilled Labor" },
  "catalogs.skilledLaborDesc": { vi: "Lực lượng lao động có kinh nghiệm với sự chú ý đến chi tiết", en: "Experienced workforce with attention to detail" },
  "catalogs.flexibleSuppliers": { vi: "Nhà cung cấp linh hoạt", en: "Flexible Suppliers" },
  "catalogs.flexibleSuppliersDesc": { vi: "Nhà sản xuất thích ứng cho các yêu cầu khác nhau", en: "Adaptable manufacturers for various requirements" },
  "catalogs.tradeAgreements": { vi: "Thỏa thuận thương mại", en: "Trade Agreements" },
  "catalogs.tradeAgreementsDesc": { vi: "Điều kiện xuất khẩu và quy định có lợi", en: "Favorable export conditions and regulations" },

  // Product Categories
  "catalogs.categories.bags": { vi: "Túi & Hành lý", en: "Bags & Luggage" },
  "catalogs.categories.bagsDesc": { vi: "Từ phụ kiện thời trang đến đồ du lịch chức năng", en: "From fashion accessories to functional travel gear" },
  "catalogs.categories.clothing": { vi: "Quần áo & Dệt may", en: "Clothing & Textiles" },
  "catalogs.categories.clothingDesc": { vi: "Bao gồm đồ y tế, may mặc và hàng dệt may", en: "Including medical wear, apparel, and textile goods" },
  "catalogs.categories.plastic": { vi: "Sản phẩm Nhựa & Kim loại", en: "Plastic & Metal Products" },
  "catalogs.categories.plasticDesc": { vi: "Linh kiện chuyên dụng và gia công", en: "Specialized components and fabrication" },
  "catalogs.categories.footwear": { vi: "Giày dép", en: "Footwear" },
  "catalogs.categories.footwearDesc": { vi: "Từ giày thể thao đến giày dép xuất khẩu nói chung", en: "From sport shoes to general footwear for export" },
  "catalogs.categories.eco": { vi: "Sản phẩm Thân thiện Môi trường", en: "Eco-Friendly Products" },
  "catalogs.categories.ecoDesc": { vi: "Tre bền vững, mây tre đan và các lựa chọn thay thế xanh", en: "Sustainable bamboo, rattan, and green alternatives" },

  // Team Page
  "team.title": { vi: "Gặp gỡ đội ngũ chuyên gia của chúng tôi", en: "Meet Our Expert Team" },
  "team.subtitle": { vi: "Một đội ngũ dịch vụ tận tâm kết hợp chuyên môn địa phương của Việt Nam với kinh nghiệm kinh doanh quốc tế để mang lại kết quả tìm nguồn cung ứng đặc biệt.", en: "A dedicated service team combining local Vietnamese expertise with international business experience to deliver exceptional sourcing results." },
  "team.learnFounder": { vi: "Tìm hiểu về Người sáng lập của chúng tôi", en: "Learn About Our Founder" },
  "team.values": { vi: "Giá trị của đội ngũ", en: "Our Team Values" },
  "team.valuesSubtitle": { vi: "Những nguyên tắc chung thúc đẩy cam kết của chúng tôi đối với sự xuất sắc trong mọi dự án", en: "Shared principles that drive our commitment to excellence in every project" },
  "team.clientFirst": { vi: "Khách hàng là ưu tiên hàng đầu", en: "Client-First Approach" },
  "team.clientFirstDesc": { vi: "Mọi quyết định đều được đưa ra với mục tiêu thành công của khách hàng", en: "Every decision is made with client success in mind" },
  "team.trustTransparency": { vi: "Tin cậy & Minh bạch", en: "Trust & Transparency" },
  "team.trustTransparencyDesc": { vi: "Xây dựng mối quan hệ lâu dài thông qua giao tiếp trung thực", en: "Building lasting relationships through honest communication" },
  "team.resultsDriven": { vi: "Hướng đến kết quả", en: "Results-Driven" },
  "team.resultsDrivenDesc": { vi: "Tập trung vào việc mang lại kết quả có thể đo lường cho mọi dự án", en: "Focused on delivering measurable outcomes for every project" },
  "team.localExpertise": { vi: "Chuyên môn địa phương", en: "Local Expertise" },
  "team.localExpertiseDesc": { vi: "Hiểu biết sâu sắc về văn hóa và thực tiễn kinh doanh Việt Nam", en: "Deep understanding of Vietnamese business culture and practices" },
  "team.serviceTeam": { vi: "Đội ngũ Dịch vụ", en: "Service Team" },
  "team.serviceTeamSubtitle": { vi: "Gặp gỡ các chuyên gia làm cho các dự án tìm nguồn cung ứng của bạn thành công", en: "Meet the specialists who make your sourcing projects successful" },
  "team.specialties": { vi: "Chuyên môn:", en: "Specialties:" },
  "team.achievements": { vi: "Thành tựu chính:", en: "Key Achievements:" },
  "team.collectiveExpertise": { vi: "Chuyên môn Tập thể", en: "Collective Expertise" },
  "team.collectiveExpertiseSubtitle": { vi: "Khả năng kết hợp đảm bảo hỗ trợ toàn diện cho nhu cầu tìm nguồn cung ứng của bạn", en: "Combined capabilities that ensure comprehensive support for your sourcing needs" },
  "team.productSourcingExcellence": { vi: "Xuất sắc trong Tìm nguồn Sản phẩm", en: "Product Sourcing Excellence" },
  "team.talentSourcingNetwork": { vi: "Mạng lưới Tìm nguồn Nhân lực", en: "Talent Sourcing Network" },
  "team.internationalSupport": { vi: "Hỗ trợ Quốc tế", en: "International Support" },
  "team.readyToWork": { vi: "Sẵn sàng làm việc với đội ngũ của chúng tôi?", en: "Ready to Work with Our Team?" },
  "team.readyToWorkSubtitle": { vi: "Đội ngũ giàu kinh nghiệm của chúng tôi đã sẵn sàng giúp bạn điều hướng các thị trường sản xuất và nhân lực Việt Nam với sự tự tin và thành công.", en: "Our experienced team is ready to help you navigate Vietnamese manufacturing and talent markets with confidence and success." },
  "team.startYourProject": { vi: "Bắt đầu dự án của bạn", en: "Start Your Project" },
  "team.contactTeam": { vi: "Liên hệ với đội ngũ của chúng tôi", en: "Contact Our Team" },

  // SEO - Homepage
  "seo.title": { vi: "Tìm nguồn, Xác minh, Sản xuất tại Việt Nam | Sourcing.vn — Đối tác đáng tin cậy của bạn", en: "Source, Verify, Make in Vietnam | Sourcing.vn — Your Trusted Partner" },
  "seo.description": { vi: "Đối tác đáng tin cậy của bạn cho các sản phẩm chất lượng cao & trợ lý ảo lành nghề từ Việt Nam. Kết nối với các nhà sản xuất và tài năng tốt nhất của Việt Nam.", en: "Your trusted partner for high-quality products & skilled virtual assistants from Vietnam. Connect with Vietnam's finest manufacturers and talent." },

  // Homepage Hero Section
  "hero.title": { vi: "Tìm nguồn, Xác minh, Sản xuất tại Việt Nam", en: "Source, Verify, Make in Vietnam" },
  "hero.description": { vi: "Đối tác đáng tin cậy của bạn cho các sản phẩm chất lượng cao & trợ lý ảo lành nghề từ Việt Nam.", en: "Your Trusted Partner for High-Quality Products & Skilled Virtual Assistants from Vietnam." },
  "hero.sourceProductsButton": { vi: "Tìm nguồn sản phẩm", en: "Source Products" },
  "hero.hireTalentsButton": { vi: "Thuê nhân tài", en: "Hire Talents" },

  // Introduction Section
  "intro.title": { vi: "Kết nối bạn với những gì tốt nhất của Việt Nam", en: "Connecting You to Vietnam's Finest" },
  "intro.description": { vi: "Được dẫn dắt bởi nhà sáng lập Duyên Phạm, Sourcing.vn chuyên kết nối khách hàng quốc tế với các nhà sản xuất và trợ lý ảo lành nghề tốt nhất của Việt Nam. Với hơn 10 năm kinh nghiệm, Duyên đã hỗ trợ hơn 30 cá nhân và thương hiệu, xây dựng một mạng lưới rộng lớn các nhà sản xuất Việt Nam. Các giá trị nền tảng của cô ấy về sự trung thực, trách nhiệm và 'tư duy của người sáng lập' đảm bảo cô ấy hiểu nhu cầu của khách hàng và giải quyết các vấn đề phức tạp một cách hiệu quả.", en: "Led by founder Duyen Pham, Sourcing.vn specializes in connecting international clients with Vietnam's best manufacturers and skilled virtual assistants. With 10+ years of experience, Duyen has assisted 30+ individuals and brands, building an extensive network of Vietnamese manufacturers. Her foundational values of honesty, responsibility, and 'founder's mindset' ensure she understands client needs and solves complex problems efficiently." },
  "intro.button": { vi: "Tìm hiểu thêm về hành trình của Duyên", en: "Learn More About Duyen's Journey" },

  // Why Vietnam Section
  "whyVietnam.title": { vi: "Tại sao là Việt Nam? Trung tâm tìm nguồn toàn cầu tiếp theo", en: "Why Vietnam? The Next Global Sourcing Hub" },
  "whyVietnam.benefits.rapidlyEmerging": { vi: "Nhanh chóng nổi lên như 'con hổ châu Á tiếp theo' trong lĩnh vực thuê ngoài", en: "Rapidly emerging as 'the next Tiger of Asia' in outsourcing" },
  "whyVietnam.benefits.favorableTrade": { vi: "Hiệp định thương mại thuận lợi & điều hướng quy định dễ dàng hơn", en: "Favorable trade agreements & easier regulatory navigation" },
  "whyVietnam.benefits.competitivePricing": { vi: "Giá cả cạnh tranh & lực lượng lao động có tay nghề cao", en: "Competitive pricing & a highly skilled labor force" },
  "whyVietnam.benefits.diverseProductRange": { vi: "Phạm vi sản phẩm đa dạng với sự chú trọng mạnh mẽ vào chất lượng", en: "Diverse product range with a strong emphasis on quality" },
  "whyVietnam.benefits.strategicProximity": { vi: "Vị trí chiến lược gần các điểm đến tìm nguồn quan trọng khác", en: "Strategic proximity to other key sourcing destinations" },

  // Product Sourcing Section
  "productSourcing.title": { vi: "Tìm nguồn sản phẩm đáng tin cậy", en: "Reliable Product Sourcing" },
  "productSourcing.description": { vi: "Từ hàng dệt may và thủ công mỹ nghệ đến giày dép và đồ nội thất thân thiện với môi trường, chúng tôi kết nối bạn với các nhà sản xuất tốt nhất của Việt Nam. Dịch vụ trọn gói của chúng tôi bao gồm yêu cầu, lựa chọn nhà cung cấp, kiểm soát chất lượng và hậu cần.", en: "From textiles and handicrafts to footwear and eco-friendly furniture, we connect you with Vietnam's best manufacturers. Our end-to-end service covers inquiry, supplier selection, quality control, and logistics." },
  "productSourcing.services.customizedFactoryLists": { vi: "Danh sách nhà máy tùy chỉnh", en: "Customized Factory Lists" },
  "productSourcing.services.sampleHandling": { vi: "Xử lý mẫu", en: "Sample Handling" },
  "productSourcing.services.qualityInspection": { vi: "Kiểm tra chất lượng", en: "Quality Inspection" },
  "productSourcing.services.quotationAssistance": { vi: "Hỗ trợ báo giá", en: "Quotation Assistance" },
  "productSourcing.services.logisticSupport": { vi: "Hỗ trợ hậu cần", en: "Logistic Support" },
  "productSourcing.button": { vi: "Khám phá danh mục sản phẩm", en: "Explore Product Categories" },

  // Talent Sourcing Section
  "talentSourcing.title": { vi: "Thuê nhân tài Việt Nam hàng đầu", en: "Hire Top Vietnamese Talent" },
  "talentSourcing.description": { vi: "Từ trợ lý ảo đến các freelancer chuyên biệt, chúng tôi kết nối bạn với các chuyên gia Việt Nam lành nghề sẵn sàng nâng cao hiệu quả kinh doanh của bạn. Quy trình sàng lọc nghiêm ngặt của chúng tôi đảm bảo bạn có được sự phù hợp nhất.", en: "From virtual assistants to specialized freelancers, we connect you with skilled Vietnamese professionals ready to boost your business efficiency. Our rigorous vetting process ensures you get the best fit." },
  "talentSourcing.services.consultationMatching": { vi: "Tư vấn & Kết nối", en: "Consultation & Matching" },
  "talentSourcing.services.trialPeriod": { vi: "Thời gian thử việc", en: "Trial Period" },
  "talentSourcing.services.dedicatedSupport": { vi: "Hỗ trợ tận tình", en: "Dedicated Support" },
  "talentSourcing.button": { vi: "Tìm trợ lý lý tưởng của bạn", en: "Find Your Ideal Assistant" },

  // Testimonials Section
  "testimonials.title": { vi: "Khách hàng của chúng tôi nói gì", en: "What Our Clients Say" },
  "testimonials.testimonial1.content": { vi: "Người bán đáng kinh ngạc. Duyên đã vượt xa mong đợi của tôi. Giao tiếp và giao hàng của cô ấy vượt xa yêu cầu của tôi. Cảm ơn bạn!", en: "Incredible Seller. Duyen far exceeded my expectations. Her communication and delivery went above and beyond my requests. Thank you!" },
  "testimonials.testimonial1.author": { vi: "Ông Awan", en: "Mr. Awan" },
  "testimonials.testimonial1.location": { vi: "Canada", en: "Canada" },
  "testimonials.testimonial2.content": { vi: "Thật vui khi được làm việc với cô ấy. Cô ấy rất nhanh chóng trong việc hoàn thành công việc và cô ấy đã trả lời tất cả các câu hỏi của tôi.", en: "It was a pleasure to work with her. She was very fast in delivering the work and she answered all my questions." },
  "testimonials.testimonial2.author": { vi: "Ông David", en: "Mr. David" },
  "testimonials.testimonial2.location": { vi: "Ý", en: "Italy" },

  // News Section
  "news.title": { vi: "Tin tức & Thông tin chi tiết", en: "News & Insights" },
  "news.item1.headline": { vi: "Chính sách xuất khẩu mới của Việt Nam thúc đẩy ngành sản xuất", en: "Vietnam's New Export Policies to Boost Manufacturing Sector" },
  "news.item1.snippet": { vi: "Các sáng kiến gần đây của chính phủ được thiết lập để tăng cường hơn nữa vị thế của Việt Nam trong chuỗi cung ứng toàn cầu, mang đến những cơ hội mới cho các đối tác quốc tế...", en: "Recent government initiatives are set to further enhance Vietnam's position in the global supply chain, offering new opportunities for international partners..." },
  "news.item1.date": { vi: "Tháng 11 năm 2024", en: "November 2024" },
  "news.item1.source": { vi: "Bộ Công Thương", en: "Ministry of Industry & Trade" },
  "news.item2.headline": { vi: "Nhu cầu ngày càng tăng đối với hàng thủ công mỹ nghệ thân thiện với môi trường từ các nghệ nhân Việt Nam", en: "Growing Demand for Eco-Friendly Handicrafts from Vietnamese Artisans" },
  "news.item2.snippet": { vi: "Sự chuyển dịch toàn cầu sang các sản phẩm bền vững đã chứng kiến sự gia tăng đáng kể về nhu cầu đối với các mặt hàng tre và mây có nguồn gốc từ các nhà cung cấp Việt Nam...", en: "The global shift towards sustainable products has seen a significant surge in demand for bamboo and rattan goods sourced from Vietnamese suppliers..." },
  "news.item2.date": { vi: "Tháng 10 năm 2024", en: "October 2024" },
  "news.item2.source": { vi: "Tạp chí Nghiên cứu Thị trường", en: "Market Research Quarterly" },
  "news.item3.headline": { vi: "Vai trò của Trợ lý ảo trong việc hợp lý hóa chuỗi cung ứng quốc tế", en: "The Role of Virtual Assistants in Streamlining International Supply Chains" },
  "news.item3.snippet": { vi: "Khi các doanh nghiệp tìm kiếm sự linh hoạt, Trợ lý ảo Việt Nam đang đóng một vai trò quan trọng trong việc quản lý hậu cần, truyền thông và điều phối dự án...", en: "As businesses seek agility, Vietnamese Virtual Assistants are playing a crucial role in managing logistics, communications, and project coordination..." },
  "news.item3.date": { vi: "Tháng 10 năm 2024", en: "October 2024" },
  "news.item3.source": { vi: "Outsourcing Today", en: "Outsourcing Today" },

  // Founder Page
  "founder.title": { vi: "Gặp gỡ Duyên Phạm", en: "Meet Duyen Pham" },
  "founder.role": { vi: "Người sáng lập & Giám đốc Tìm nguồn cung ứng", en: "Founder & Chief Sourcing Officer" },
  "founder.subtitle": { vi: "Với hơn 10 năm kinh nghiệm kết nối các doanh nghiệp quốc tế với các nhà sản xuất Việt Nam, Duyên mang đến sự kết hợp độc đáo giữa chuyên môn địa phương, tầm nhìn toàn cầu và cam kết không ngừng nghỉ đối với sự thành công của khách hàng.", en: "With over 10 years of experience bridging international businesses with Vietnamese manufacturers, Duyen brings a unique combination of local expertise, global perspective, and unwavering commitment to client success." },
  "founder.connectLinkedIn": { vi: "Kết nối trên LinkedIn", en: "Connect on LinkedIn" },
  "founder.downloadPortfolio": { vi: "Tải xuống Hồ sơ", en: "Download Portfolio" },
  "founder.coreValues": { vi: "Giá trị cốt lõi & Triết lý", en: "Core Values & Philosophy" },
  "founder.coreValuesSubtitle": { vi: "Được xây dựng trên nền tảng tin cậy, minh bạch và tư duy thực sự của nhà sáng lập để giải quyết các thách thức kinh doanh", en: "Built on a foundation of trust, transparency, and a genuine founder's mindset to solve business challenges" },
  "founder.journey": { vi: "Hành trình", en: "The Journey" },
  "founder.philosophy": { vi: "Triết lý", en: "Philosophy" },
  "founder.philosophyQuote": { vi: "Mọi mối quan hệ khách hàng đều được xây dựng trên niềm tin. Tôi trân trọng niềm tin đó và hoạt động với sự trung thực hoàn toàn, bởi vì thành công của bạn chính là thành công của tôi. Khi những thách thức xuất hiện, tôi tiếp cận chúng với tư duy của một nhà sáng lập - tìm ra giải pháp, không phải lý do.", en: "Every client relationship is built on trust. I treasure that trust and operate with complete honesty, because your success is my success. When challenges arise, I approach them with a founder's mindset - finding solutions, not excuses." },
  "founder.professionalHighlights": { vi: "Nổi bật Chuyên nghiệp", en: "Professional Highlights" },
  "founder.professionalHighlightsSubtitle": { vi: "Một hồ sơ thành tích đã được chứng minh trong việc mang lại kết quả qua nhiều ngành và thị trường khác nhau", en: "A proven track record of delivering results across diverse industries and markets" },
  "founder.notableAchievements": { vi: "Thành tựu Đáng chú ý", en: "Notable Achievements" },
  "founder.notableAchievementsSubtitle": { vi: "Sự công nhận và các cột mốc chứng minh chuyên môn và uy tín", en: "Recognition and milestones that demonstrate expertise and credibility" },
  "founder.certifications": { vi: "Chứng chỉ & Hồ sơ", en: "Certifications & Portfolio" },
  "founder.certificationsSubtitle": { vi: "Thông tin xác thực chuyên nghiệp và các dự án nổi bật đã chọn lọc", en: "Professional credentials and selected project highlights" },
  "founder.professionalCertifications": { vi: "Chứng chỉ Chuyên nghiệp", en: "Professional Certifications" },
  "founder.portfolioHighlights": { vi: "Điểm nổi bật của Hồ sơ", en: "Portfolio Highlights" },
  "founder.readyToWork": { vi: "Sẵn sàng làm việc cùng nhau?", en: "Ready to Work Together?" },
  "founder.readyToWorkSubtitle": { vi: "Hãy thảo luận về nhu cầu tìm nguồn cung ứng của bạn và cách kinh nghiệm của tôi có thể giúp doanh nghiệp của bạn thành công tại Việt Nam.", en: "Let's discuss your sourcing needs and how my experience can help your business succeed in Vietnam." },
  "founder.scheduleConsultation": { vi: "Lên lịch tư vấn", en: "Schedule a Consultation" },

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
