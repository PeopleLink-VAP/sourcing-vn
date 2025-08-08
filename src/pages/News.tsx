import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Eye, MessageSquare, Bookmark, Clock, User } from "lucide-react";
import { useI18n } from "@/contexts/LanguageContext";

const categories = [
  "Product Sourcing Services",
  "Talent Sourcing (Virtual Assistants)", 
  "Vietnam Market Insights & News",
  "Case Studies & Resources"
];

const todaysHeadlines = [
  {
    id: 1,
    category: "Vietnam Market Insights & News",
    title: "Vietnam exports surge 15% in Q4 2024, led by textile and electronics sectors",
    image: "/lovable-uploads/90518705-15c9-475a-b132-3fe2bc894247.png",
    author: "Mai Nguyen",
    views: "2.4k",
    comments: "89",
    time: "2 hours ago",
    excerpt: "Vietnamese manufacturers are experiencing unprecedented demand from international buyers as global supply chains continue to diversify..."
  },
  {
    id: 2, 
    category: "Product Sourcing Services",
    title: "New textile manufacturing hub opens in Dong Nai province",
    author: "David Chen",
    views: "1.8k", 
    comments: "45",
    time: "4 hours ago",
    excerpt: "A state-of-the-art facility capable of producing 50,000 units monthly has begun operations, focusing on sustainable fashion brands..."
  }
];

const featuredNews = [
  {
    id: 3,
    category: "Talent Sourcing (Virtual Assistants)",
    title: "Vietnamese VAs leading global remote work trends with 95% client satisfaction rate",
    author: "Sarah Wilson",
    views: "3.1k",
    comments: "127", 
    time: "6 hours ago"
  },
  {
    id: 4,
    category: "Case Studies & Resources", 
    title: "How a US startup scaled 300% by partnering with Vietnamese manufacturers",
    author: "Michael Rodriguez",
    views: "2.7k",
    comments: "98",
    time: "8 hours ago"
  }
];

const marketInsights = [
  {
    id: 6,
    category: "Vietnam Market Insights & News",
    title: "Vietnam's GDP growth hits 7.2% as manufacturing sector booms",
    author: "John Pham",
    time: "1 day ago"
  },
  {
    id: 7,
    category: "Vietnam Market Insights & News", 
    title: "New trade agreements boost Vietnam-EU business partnerships",
    author: "Anna Schmidt",
    time: "2 days ago"
  }
];

const News = () => {
  const { t } = useI18n();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedArticles, setSavedArticles] = useState<number[]>([]);

  const toggleSaved = (articleId: number) => {
    setSavedArticles(prev => 
      prev.includes(articleId) 
        ? prev.filter(id => id !== articleId)
        : [...prev, articleId]
    );
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <SEO
        title={`${t("news.title")} — Curated Portal`}
        description="Curated updates on import/export policies, outsourcing trends, and Vietnam market developments."
      />
      
      <div className="container mx-auto py-4 px-4 sm:py-6">
        {/* Mobile Category Filter */}
        <div className="lg:hidden mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3">{t("news.categories")}</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-3 py-2 rounded text-sm transition-colors ${
                  selectedCategory === "All" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t("news.allNews")}
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded text-xs sm:text-sm transition-colors ${
                    selectedCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.length > 20 ? category.substring(0, 20) + '...' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">{t("news.categories")}</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                    selectedCategory === "All" 
                      ? "bg-primary text-primary-foreground" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {t("news.allNews")}
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                      selectedCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Today's Headlines */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{t("news.todayHeadlines")}</h2>
              <div className="space-y-4 sm:space-y-6">
                {todaysHeadlines.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="flex flex-col sm:flex-row gap-4 p-4 sm:p-6">
                      {article.image && (
                        <div className="w-full sm:w-48 h-48 sm:h-32 flex-shrink-0">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                            {article.category.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        {article.excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base">{article.excerpt}</p>
                        )}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span className="hidden sm:inline">{article.author}</span>
                              <span className="sm:hidden">{article.author.split(' ')[0]}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {article.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              {article.views}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {article.comments}
                            </div>
                          </div>
                          <button
                            onClick={() => toggleSaved(article.id)}
                            className={`self-start sm:self-center p-2 rounded-full transition-colors ${
                              savedArticles.includes(article.id)
                                ? "text-accent bg-accent/10"
                                : "text-gray-400 hover:text-gray-600"
                            }`}
                          >
                            <Bookmark className="w-4 h-4" fill={savedArticles.includes(article.id) ? "currentColor" : "none"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Featured News */}
            <section>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t("news.featuredNews")}</h2>
                <button className="text-primary hover:text-primary/80 font-medium text-sm sm:text-base">{t("news.seeAll")}</button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
                {featuredNews.map((article) => (
                  <article key={article.id} className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                    <div className="mb-3">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                        {article.category.split(' ')[0].toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 line-clamp-3">
                      {article.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span className="hidden sm:inline">{article.author}</span>
                          <span className="sm:hidden">{article.author.split(' ')[0]}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </div>
                        <button
                          onClick={() => toggleSaved(article.id)}
                          className={`p-1 rounded transition-colors ${
                            savedArticles.includes(article.id)
                              ? "text-accent"
                              : "text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          <Bookmark className="w-4 h-4" fill={savedArticles.includes(article.id) ? "currentColor" : "none"} />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar - Desktop Only */}
          <aside className="hidden xl:block w-80 space-y-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">{t("news.marketInsights")}</h3>
                <button className="text-primary hover:text-primary/80 text-sm font-medium">{t("news.seeAll")}</button>
              </div>
              <div className="space-y-4">
                {marketInsights.map((article) => (
                  <div key={article.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                    <h4 className="text-sm font-medium text-gray-900 mb-2 line-clamp-3">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white">
              <h3 className="font-semibold mb-2">{t("news.stayUpdated")}</h3>
              <p className="text-sm opacity-90 mb-4">
                {t("news.subscribeDescription")}
              </p>
              <button className="w-full bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors">
                {t("news.subscribeNow")}
              </button>
            </div>
          </aside>
        </div>

        {/* Mobile Market Insights Section */}
        <div className="xl:hidden mt-8">
          <section className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{t("news.marketInsights")}</h3>
              <button className="text-primary hover:text-primary/80 text-sm font-medium">{t("news.seeAll")}</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {marketInsights.map((article) => (
                <div key={article.id} className="border-b border-gray-100 pb-4 last:border-b-0 sm:border-b sm:last:border-b-0">
                  <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2 line-clamp-3">
                    {article.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mobile Subscribe Section */}
          <section className="mt-6 bg-gradient-to-br from-primary to-primary-600 rounded-lg p-6 text-white">
            <h3 className="font-semibold mb-2">{t("news.stayUpdated")}</h3>
            <p className="text-sm opacity-90 mb-4">
              {t("news.subscribeDescription")}
            </p>
            <button className="w-full bg-white text-primary font-medium py-2 px-4 rounded hover:bg-gray-100 transition-colors">
              {t("news.subscribeNow")}
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

export default News;