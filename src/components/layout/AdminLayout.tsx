import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useI18n } from "@/contexts/LanguageContext";
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Mail, 
  Settings, 
  FileText, 
  BarChart3, 
  Shield,
  LogOut,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const { t } = useI18n();
  const location = useLocation();

  const navigationItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: BarChart3,
      exact: true
    },
    {
      title: "Membership Tiers",
      href: "/admin/memberships",
      icon: Users,
      exact: false
    },
    {
      title: "Newsletter Campaigns",
      href: "/admin/newsletters",
      icon: Mail,
      exact: false
    },
    {
      title: "Content Management",
      href: "/admin/content",
      icon: FileText,
      exact: false
    },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: Settings,
      exact: false
    }
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return location.pathname === href;
    }
    return location.pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 z-50 h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "w-16" : "w-64"
      )}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!sidebarCollapsed && (
            <Link to="/admin" className="flex items-center space-x-2">
              <img 
                src="/logos/logo_main.png" 
                alt="Sourcing Vietnam Admin" 
                className="h-8"
              />
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="h-8 w-8"
          >
            {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-2 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href, item.exact);
            
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
                  sidebarCollapsed && "justify-center px-2"
                )}
                title={sidebarCollapsed ? item.title : undefined}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                {!sidebarCollapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-200">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className={cn(
              "w-full justify-start gap-3",
              sidebarCollapsed && "justify-center px-2"
            )}
            title={sidebarCollapsed ? "Back to Main Site" : undefined}
          >
            <Link to="/">
              <Home className="h-4 w-4 flex-shrink-0" />
              {!sidebarCollapsed && <span>Back to Site</span>}
            </Link>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={signOut}
            className={cn(
              "w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50",
              sidebarCollapsed && "justify-center px-2"
            )}
            title={sidebarCollapsed ? "Logout" : undefined}
          >
            <LogOut className="h-4 w-4 flex-shrink-0" />
            {!sidebarCollapsed && <span>Logout</span>}
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "transition-all duration-300 ease-in-out",
        sidebarCollapsed ? "ml-16" : "ml-64"
      )}>
        {/* Top Header Bar */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Admin Portal</h1>
              <p className="text-sm text-gray-500 mt-1">
                Welcome back, {user?.email}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Shield className="h-4 w-4" />
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
