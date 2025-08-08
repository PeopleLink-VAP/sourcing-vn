import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Founder from "./pages/Founder";
import NotFound from "./pages/NotFound";
import ProductSourcing from "./pages/ProductSourcing";
import TalentSourcing from "./pages/TalentSourcing";
import News from "./pages/News";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Catalogs from "./pages/Catalogs";
import Partners from "./pages/Partners";
import CaseStudies from "./pages/CaseStudies";
import ReimerJackets from "./pages/case-studies/ReimerJackets";
import NicoleBags from "./pages/case-studies/NicoleBags";
import AndyPlasticHandles from "./pages/case-studies/AndyPlasticHandles";
import VuKohlerEcoProducts from "./pages/case-studies/VuKohlerEcoProducts";
import Team from "./pages/Team";
import AdminPortal from "./pages/AdminPortal";
import MembershipsPage from "./pages/admin/MembershipsPage";
import NewslettersPage from "./pages/admin/NewslettersPage";
import ContentPage from "./pages/admin/ContentPage";
import SettingsPage from "./pages/admin/SettingsPage";
import EditorPortal from "./pages/EditorPortal";
import { LanguageProvider } from "./contexts/LanguageContext";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import AdminLayout from "./components/layout/AdminLayout";
import ScrollToTop from "./components/layout/ScrollToTop";
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
              <Routes>
                {/* Admin Routes - Separate Layout */}
                <Route path="/admin/*" element={
                  <RequireAdmin>
                    <AdminLayout>
                      <Routes>
                        <Route index element={<AdminPortal />} />
                        <Route path="memberships" element={<MembershipsPage />} />
                        <Route path="newsletters" element={<NewslettersPage />} />
                        <Route path="content" element={<ContentPage />} />
                        <Route path="settings" element={<SettingsPage />} />
                        {/* Future admin sub-routes can be added here */}
                      </Routes>
                    </AdminLayout>
                  </RequireAdmin>
                } />
                
                {/* Main Site Routes - Standard Layout */}
                <Route path="*" element={
                  <>
                    <SiteHeader />
                    <ScrollToTop />
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/founder" element={<Founder />} />
                      <Route path="/product-sourcing" element={<ProductSourcing />} />
                      <Route path="/talent-sourcing" element={<TalentSourcing />} />
                      <Route path="/news" element={<News />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/catalogs" element={<Catalogs />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/case-studies/reimer-jackets" element={<ReimerJackets />} />
                      <Route path="/case-studies/nicole-bags" element={<NicoleBags />} />
                      <Route path="/case-studies/andy-plastic-handles" element={<AndyPlasticHandles />} />
                      <Route path="/case-studies/vu-kohler-eco-products" element={<VuKohlerEcoProducts />} />
                      <Route path="/team" element={<Team />} />
                      <Route path="/auth" element={<AuthPage />} />
                      <Route path="/editor" element={<RequireAuth><EditorPortal /></RequireAuth>} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                    <SiteFooter />
                  </>
                } />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
