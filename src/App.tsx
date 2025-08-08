import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductSourcing from "./pages/ProductSourcing";
import TalentSourcing from "./pages/TalentSourcing";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Catalogs from "./pages/Catalogs";
import Partners from "./pages/Partners";
import CaseStudies from "./pages/CaseStudies";
import Team from "./pages/Team";
import AdminPortal from "./pages/AdminPortal";
import EditorPortal from "./pages/EditorPortal";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import AuthPage from "./pages/Auth";
import { AuthProvider } from "./contexts/AuthContext";
import { RequireAdmin, RequireAuth } from "./components/auth/guards";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <SiteHeader />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/product-sourcing" element={<ProductSourcing />} />
                <Route path="/talent-sourcing" element={<TalentSourcing />} />
                <Route path="/news" element={<News />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/catalogs" element={<Catalogs />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/team" element={<Team />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/admin" element={<RequireAdmin><AdminPortal /></RequireAdmin>} />
                <Route path="/editor" element={<RequireAuth><EditorPortal /></RequireAuth>} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <SiteFooter />
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
