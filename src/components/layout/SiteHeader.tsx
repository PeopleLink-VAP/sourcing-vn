import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useI18n } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, Newspaper, LogOut, Factory, Users, FileText, Phone, Briefcase, HeadphonesIcon, Globe, ChevronDown } from "lucide-react";

export const SiteHeader = () => {
  const { t, lang, setLang } = useI18n();
  const { user, signOut } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [isNewsMode, setIsNewsMode] = useState(false);

  useEffect(() => {
    setIsNewsMode(location.pathname.startsWith('/news'));
  }, [location]);

  const navItemClass = `font-sentic-medium text-sm transition-all duration-300 hover:text-accent ${
    isNewsMode ? 'text-black hover:text-black/80' : 'text-foreground'
  }`;

  const triggerClass = `${navItemClass} px-4 py-2 rounded-lg hover:bg-accent/10 data-[state=open]:bg-accent/10`;

  const mobileNavItemClass = "flex items-center px-4 py-3 rounded-lg text-sm font-sentic-medium transition-colors hover:bg-accent hover:text-accent-foreground border-b border-border/10 last:border-0";

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        isNewsMode 
          ? 'bg-orange-500/90 backdrop-blur-md border-orange-400/20 shadow-lg' 
          : 'bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm'
      }`}>
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-10">
            <img 
              src={isNewsMode ? "/logos/logo_bw.png" : "/logos/logo_main.png"} 
              alt="Sourcing Vietnam" 
              className="h-8 transition-all duration-500"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    <Users className="w-4 h-4 mr-2" />
                    {t("nav.about")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[380px] lg:w-[450px] lg:grid-cols-[.75fr_1fr] bg-background/95 backdrop-blur-md border shadow-lg rounded-lg">
                      <div className="row-span-3">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-accent/10 to-primary/5 p-6 no-underline outline-none focus:shadow-md">
                          <Users className="h-8 w-8 text-primary mb-3" />
                          <div className="mb-2 text-lg font-sentic font-semibold text-primary">
                            {t("nav.about")}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t("nav.aboutDescription")}
                          </p>
                        </div>
                      </div>
                      <NavLink 
                        to="/founder" 
                        className="group block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                      >
                        <div className="text-sm font-sentic-medium leading-none group-hover:text-primary">{t("nav.founderTitle")}</div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {t("nav.founderDescription")}
                        </p>
                      </NavLink>
                      <NavLink 
                        to="/team" 
                        className="group block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                      >
                        <div className="text-sm font-sentic-medium leading-none group-hover:text-primary">{t("nav.team")}
                        </div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {t("nav.teamDescription")}
                        </p>
                      </NavLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    <Factory className="w-4 h-4 mr-2" />
                    {t("nav.services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[420px] lg:w-[520px] lg:grid-cols-[.75fr_1fr] bg-background/95 backdrop-blur-md border shadow-lg rounded-lg">
                      <div className="row-span-3">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-primary/10 to-accent/10 p-6 no-underline outline-none focus:shadow-md">
                          <Factory className="h-8 w-8 text-primary mb-3" />
                          <div className="mb-2 text-lg font-sentic font-semibold text-primary">
                            {t("nav.ourServices")}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t("nav.servicesDescription")}
                          </p>
                        </div>
                      </div>
                      <NavLink 
                        to="/product-sourcing" 
                        className="group block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                      >
                        <div className="text-sm font-sentic-medium leading-none group-hover:text-primary">{t("nav.product")}</div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {t("nav.productDescription")}
                        </p>
                      </NavLink>
                      <NavLink 
                        to="/talent-sourcing" 
                        className="group block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                      >
                        <div className="text-sm font-sentic-medium leading-none group-hover:text-primary">{t("nav.talent")}</div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {t("nav.talentDescription")}
                        </p>
                      </NavLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className={triggerClass}>
                    <FileText className="w-4 h-4 mr-2" />
                    {t("nav.resources")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[420px] lg:w-[520px] lg:grid-cols-[.75fr_1fr] bg-background/95 backdrop-blur-md border shadow-lg rounded-lg">
                      <div className="row-span-4">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-br from-secondary/20 to-muted/20 p-6 no-underline outline-none focus:shadow-md">
                          <FileText className="h-8 w-8 text-primary mb-3" />
                          <div className="mb-2 text-lg font-sentic font-semibold text-primary">
                            {t("nav.resources")}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {t("nav.resourcesDescription")}
                          </p>
                        </div>
                      </div>
                      <NavLink 
                        to="/case-studies" 
                        className="group block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                      >
                        <div className="text-sm font-sentic-medium leading-none group-hover:text-primary">{t("nav.cases")}</div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {t("nav.casesDescription")}
                        </p>
                      </NavLink>
                      <NavLink 
                        to="/catalogs" 
                        className="group block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                      >
                        <div className="text-sm font-sentic-medium leading-none group-hover:text-primary">{t("nav.catalogs")}</div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {t("nav.catalogsDescription")}
                        </p>
                      </NavLink>
                      <NavLink 
                        to="/partners" 
                        className="group block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                      >
                        <div className="text-sm font-sentic-medium leading-none group-hover:text-primary">{t("nav.partners")}</div>
                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                          {t("nav.partnersDescription")}
                        </p>
                      </NavLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink to="/news" className={`${navItemClass} px-4 py-2 rounded-lg hover:bg-accent/10 ml-4 border-l border-border/20 pl-6 flex items-center`}>
              <Newspaper className="w-4 h-4 mr-2" />
              {t("nav.news")}
            </NavLink>
          </div>

          {/* Desktop Auth & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <button
                className={`px-1 text-sm ${lang === "vi" ? "text-accent" : "text-muted-foreground"}`}
                onClick={() => setLang("vi")}
              >
                VI
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                className={`px-1 text-sm ${lang === "en" ? "text-accent" : "text-muted-foreground"}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              {user && (
                <Button variant="ghost" size="icon" onClick={() => signOut()} aria-label="Logout">
                  <LogOut className="w-4 h-4" />
                </Button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="flex flex-col h-full bg-background/95 backdrop-blur-md">
                  {/* Mobile Header */}
                  <div className="p-6 border-b border-border/10">
                    <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                      <img src="/logos/logo_main.png" alt="Sourcing Vietnam" className="h-8" />
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 p-4 space-y-2">
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-3">{t("nav.mobile.services")}</h4>
                      <NavLink to="/product-sourcing" className={mobileNavItemClass} onClick={() => setOpen(false)}>
                        <Factory className="w-5 h-5 mr-3 text-primary" />
                        <span>{t("nav.product")}</span>
                      </NavLink>
                      <NavLink to="/talent-sourcing" className={mobileNavItemClass} onClick={() => setOpen(false)}>
                        <HeadphonesIcon className="w-5 h-5 mr-3 text-primary" />
                        <span>{t("nav.talent")}</span>
                      </NavLink>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-3 mt-6">{t("nav.mobile.resources")}</h4>
                      <NavLink to="/news" className={mobileNavItemClass} onClick={() => setOpen(false)}>
                        <Newspaper className="w-5 h-5 mr-3 text-accent" />
                        <span>{t("nav.news")}</span>
                      </NavLink>
                      <NavLink to="/case-studies" className={mobileNavItemClass} onClick={() => setOpen(false)}>
                        <Briefcase className="w-5 h-5 mr-3 text-primary" />
                        <span>{t("nav.cases")}</span>
                      </NavLink>
                      <NavLink to="/catalogs" className={mobileNavItemClass} onClick={() => setOpen(false)}>
                        <FileText className="w-5 h-5 mr-3 text-primary" />
                        <span>{t("nav.catalogs")}</span>
                      </NavLink>
                      <NavLink to="/partners" className={mobileNavItemClass} onClick={() => setOpen(false)}>
                        <Globe className="w-5 h-5 mr-3 text-primary" />
                        <span>{t("nav.partners")}</span>
                      </NavLink>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-4 mb-3 mt-6">{t("nav.mobile.about")}</h4>
                      <NavLink to="/team" className={mobileNavItemClass} onClick={() => setOpen(false)}>
                        <Users className="w-5 h-5 mr-3 text-primary" />
                        <span>{t("nav.team")}</span>
                      </NavLink>
                    </div>
                  </nav>

                  {/* Mobile Footer */}
                  {user && (
                    <div className="p-4 border-t border-border/10">
                      <Button variant="ghost" size="sm" onClick={() => { signOut(); setOpen(false); }} className="w-full justify-start font-sentic-medium">
                        <LogOut className="w-4 h-4 mr-2" />
                        {t("auth.logout")}
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* News Category Bar */}
      {isNewsMode && (
        <div className="sticky top-16 z-40 bg-orange-400/90 backdrop-blur-sm border-b border-orange-300/20 animate-slide-down shadow-sm">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-8 py-3 overflow-x-auto">
              <a href="#product-sourcing" className="text-white hover:text-orange-100 whitespace-nowrap text-sm font-sentic-medium transition-colors hover:underline underline-offset-4">
                {t("nav.newsbar.productSourcing")}
              </a>
              <a href="#talent-sourcing" className="text-white hover:text-orange-100 whitespace-nowrap text-sm font-sentic-medium transition-colors hover:underline underline-offset-4">
                {t("nav.newsbar.talentSourcing")}
              </a>
              <a href="#market-insights" className="text-white hover:text-orange-100 whitespace-nowrap text-sm font-sentic-medium transition-colors hover:underline underline-offset-4">
                {t("nav.newsbar.marketInsights")}
              </a>
              <a href="#case-studies" className="text-white hover:text-orange-100 whitespace-nowrap text-sm font-sentic-medium transition-colors hover:underline underline-offset-4">
                {t("nav.newsbar.caseStudies")}
              </a>
              <a href="#about-network" className="text-white hover:text-orange-100 whitespace-nowrap text-sm font-sentic-medium transition-colors hover:underline underline-offset-4">
                {t("nav.newsbar.aboutNetwork")}
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};