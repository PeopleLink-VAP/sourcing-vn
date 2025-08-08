import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useI18n } from "@/contexts/LanguageContext";

const navItems = [
  { to: "/", key: "nav.home" as const },
  { to: "/product-sourcing", key: "nav.product" as const },
  { to: "/talent-sourcing", key: "nav.talent" as const },
  { to: "/news", key: "nav.news" as const },
  { to: "/blog", key: "nav.blog" as const },
  { to: "/catalogs", key: "nav.catalogs" as const },
  { to: "/partners", key: "nav.partners" as const },
  { to: "/case-studies", key: "nav.cases" as const },
  { to: "/team", key: "nav.team" as const },
  { to: "/contact", key: "nav.contact" as const },
];

export const SiteHeader = () => {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const linkCls = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm ${isActive ? "bg-secondary text-primary" : "hover:bg-secondary"}`;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg">
          <span className="text-primary">sourcing</span>
          <span className="text-accent">.vn</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} end className={linkCls}>
              {t(n.key)}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center rounded-md border">
            <button
              aria-label="Tiếng Việt"
              className={`px-2 py-1 text-sm rounded-l-md ${lang === "vi" ? "bg-secondary" : ""}`}
              onClick={() => setLang("vi")}
            >
              VI
            </button>
            <button
              aria-label="English"
              className={`px-2 py-1 text-sm rounded-r-md ${lang === "en" ? "bg-secondary" : ""}`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>

          <div className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <Menu />
            </Button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="container mx-auto py-2 grid grid-cols-2 gap-1">
            {navItems.map((n) => (
              <NavLink key={n.to} to={n.to} end className={linkCls} onClick={() => setOpen(false)}>
                {t(n.key)}
              </NavLink>
            ))}
            <div className="col-span-2 flex items-center gap-2 pt-2">
              <span className="text-sm">Language:</span>
              <Button variant={lang === "vi" ? "secondary" : "outline"} size="sm" onClick={() => setLang("vi")}>
                VI
              </Button>
              <Button variant={lang === "en" ? "secondary" : "outline"} size="sm" onClick={() => setLang("en")}>
                EN
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
