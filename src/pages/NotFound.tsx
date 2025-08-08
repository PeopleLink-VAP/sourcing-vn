import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("404.title")}</h1>
        <p className="text-xl text-muted-foreground mb-4">{t("404.message")}</p>
        <Link to="/" className="text-primary underline underline-offset-4">
          {t("404.returnHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
