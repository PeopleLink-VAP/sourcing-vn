import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, LogIn, LogOut, Shield, ChevronDown } from "lucide-react";
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
    title: "Services",
    items: [
      { to: "/product-sourcing", key: "nav.product" as const, desc: "Connect with Vietnamese manufacturers and suppliers" },
      { to: "/talent-sourcing", key: "nav.talent" as const, desc: "Find skilled Vietnamese professionals for your team" },
    ]
  },
  {
    title: "Resources", 
    items: [
      { to: "/news", key: "nav.news" as const, desc: "Latest industry updates and announcements" },
      { to: "/blog", key: "nav.blog" as const, desc: "Expert insights and sourcing guides" },
      { to: "/case-studies", key: "nav.cases" as const, desc: "Success stories from our clients" },
      { to: "/catalogs", key: "nav.catalogs" as const, desc: "Browse product and service catalogs" },
    ]
  },
  {
    title: "About",
    items: [
      { to: "/team", key: "nav.team" as const, desc: "Meet our experienced team" },
      { to: "/partners", key: "nav.partners" as const, desc: "Our trusted network of partners" },
    ]
  }
];

export const SiteHeader = () => {
  const { t } = useI18n();
  const { user, isAdmin, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm ${isActive ? "bg-secondary text-primary" : "hover:bg-secondary"}`;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link to="/">
          <img src="/logos/logo_main.png" alt="sourcing.vn logo" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" end className={linkCls}>
            {t("nav.home")}
          </NavLink>
          
          <NavigationMenu>
            <NavigationMenuList>
              {navGroups.map((group) => (
                <NavigationMenuItem key={group.title}>
                  <NavigationMenuTrigger className="px-3 py-2 text-sm">
                    {group.title}
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

          {isAdmin && (
            <NavLink to="/admin" className={linkCls}>
              <span className="inline-flex items-center gap-1"><Shield className="w-4 h-4" /> Admin</span>
            </NavLink>
          )}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <Button variant="outline" size="sm" onClick={() => signOut()} aria-label="Logout">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          ) : (
            <Link to="/auth" aria-label="Login">
              <Button variant="cta" size="sm">
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Login</span>
              </Button>
            </Link>
          )}

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
              <div key={group.title} className="space-y-1">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">{group.title}</div>
                {group.items.map((item) => (
                  <NavLink key={item.to} to={item.to} className={linkCls} onClick={() => setOpen(false)}>
                    <span className="ml-4">{t(item.key)}</span>
                  </NavLink>
                ))}
              </div>
            ))}
            {isAdmin && (
              <NavLink to="/admin" className={linkCls} onClick={() => setOpen(false)}>
                <span className="ml-4">Admin</span>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
