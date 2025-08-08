import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, LogIn, LogOut, Shield, ChevronDown, Home, Briefcase, BookOpen, Info, Newspaper } from "lucide-react";
import { useI18n } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navGroups = [
  {
    titleKey: "nav.services" as const,
    items: [
      { to: "/product-sourcing", key: "nav.product" as const, desc: "Connect with Vietnamese manufacturers and suppliers" },
      { to: "/talent-sourcing", key: "nav.talent" as const, desc: "Find skilled Vietnamese professionals for your team" },
    ]
  },
  {
    titleKey: "nav.resources" as const, 
    items: [
      { to: "/blog", key: "nav.blog" as const, desc: "Expert insights and sourcing guides" },
      { to: "/case-studies", key: "nav.cases" as const, desc: "Success stories from our clients" },
      { to: "/catalogs", key: "nav.catalogs" as const, desc: "Browse product and service catalogs" },
    ]
  },
  {
    titleKey: "nav.about" as const,
    items: [
      { to: "/team", key: "nav.team" as const, desc: "Meet our experienced team" },
      { to: "/partners", key: "nav.partners" as const, desc: "Our trusted network of partners" },
    ]
  }
];

const newsCategories = [
  "news.category.product_sourcing",
  "news.category.talent_sourcing", 
  "news.category.vietnam_market",
  "news.category.case_studies",
];

export const SiteHeader = () => {
  const { t } = useI18n();
  const { user, isAdmin, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [isNewsMode, setIsNewsMode] = useState(false);

  useEffect(() => {
    const newsMode = location.pathname === '/news';
    if (newsMode !== isNewsMode) {
      setIsNewsMode(newsMode);
    }
  }, [location.pathname, isNewsMode]);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm ${isActive ? "bg-secondary text-primary" : "hover:bg-secondary"} ${isNewsMode ? 'text-[hsl(var(--news-text))]' : ''}`;

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        isNewsMode 
          ? 'bg-[hsl(var(--news-bg-alpha))] backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--news-bg-alpha))]' 
          : 'bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      }`}>
        <div className="container mx-auto flex h-14 items-center justify-between">
          <Link to="/">
            <img 
              key={isNewsMode ? 'black' : 'main'}
              src={isNewsMode ? "/logos/logo_bw.png" : "/logos/logo_main.png"} 
              alt="sourcing.vn logo" 
              className={`h-8 w-auto transition-opacity duration-300 ${isNewsMode ? 'animate-fade-logo' : ''}`} 
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={linkCls}>
              <Home className="w-4 h-4 mr-1" /> {t("nav.home")}
            </NavLink>
            

            
            <NavigationMenu>
              <NavigationMenuList>
                {navGroups.map((group) => (
                  <NavigationMenuItem key={group.titleKey}>
                    <NavigationMenuTrigger className={`px-3 py-2 text-sm ${isNewsMode ? 'text-[hsl(var(--news-text))]' : ''}`}>
                      {group.titleKey === "nav.services" && <Briefcase className="w-4 h-4 mr-1" />}
                      {group.titleKey === "nav.resources" && <BookOpen className="w-4 h-4 mr-1" />}
                      {group.titleKey === "nav.about" && <Info className="w-4 h-4 mr-1" />}
                      {t(group.titleKey)}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid gap-3">
                          {group.items.map((item) => (
                            <Link key={item.to} to={item.to}>
                              <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                <div className="text-sm font-medium leading-none">{t(item.key)}</div>
                                <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                  {item.desc}
                                </p>
                              </NavigationMenuLink>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink to="/news" className={`${linkCls} text-orange-500 px-2`}>
              <Newspaper className="w-4 h-4 mr-1" /> {t("nav.news")}
            </NavLink>


          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <>
                <Button variant="ghost" size="icon" onClick={() => signOut()} aria-label="Logout">
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : null}

            <div className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
                <Menu />
              </Button>
            </div>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t">
            <div className="container mx-auto py-2 space-y-1">
              <NavLink to="/" end className={linkCls} onClick={() => setOpen(false)}>
                {t("nav.home")}
              </NavLink>

              {navGroups.map((group) => (
                <div key={group.titleKey} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-medium text-muted-foreground">{t(group.titleKey)}</div>
                  {group.items.map((item) => (
                    <NavLink key={item.to} to={item.to} className={linkCls} onClick={() => setOpen(false)}>
                      <span className="ml-4">{t(item.key)}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
              {isAdmin && (
                <NavLink to="/admin" className={linkCls} onClick={() => setOpen(false)}>
                  <Shield className="w-4 h-4 mr-1" /> <span className="ml-4 text-orange-500">Admin</span>
                </NavLink>
              )}
              <NavLink to="/news" className={`${linkCls} text-orange-500`} onClick={() => setOpen(false)}>
                {t("nav.news")}
              </NavLink>
            </div>
          </div>
        )}
      </header>
      
      {/* News Categories Bar */}
      {isNewsMode && (
        <div className="bg-[hsl(var(--news-bg))] border-b animate-slide-down sticky top-14 z-40">
          <div className="container mx-auto">
            <div className="flex gap-6 py-3 overflow-x-auto">
              {newsCategories.map((categoryKey) => (
                <button
                  key={categoryKey}
                  className="text-[hsl(var(--news-text))] hover:text-[hsl(var(--news-text))]/80 whitespace-nowrap text-sm font-medium transition-colors"
                >
                  {t(categoryKey)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};