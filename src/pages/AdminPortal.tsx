import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { NewsletterForm } from "@/components/admin/NewsletterForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mail, TrendingUp, Calendar } from "lucide-react";

const AdminPortal = () => {
  const tiersQuery = useQuery({
    queryKey: ["membership_tiers"],
    queryFn: async () => {
      const { data, error } = await supabase.from("membership_tiers").select("id, name, price, description, features, updated_at").order("updated_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const campaignsQuery = useQuery({
    queryKey: ["newsletter_campaigns"],
    queryFn: async () => {
      const { data, error } = await supabase.from("newsletter_campaigns").select("id, title, status, scheduled_at, created_at, updated_at").order("updated_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  return (
    <>
      <SEO
        title="Admin Dashboard — Sourcing Vietnam"
        description="Admin dashboard for managing membership tiers and newsletter campaigns."
      />
      
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Membership Tiers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tiersQuery.data?.length || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Newsletter Campaigns</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{campaignsQuery.data?.length || 0}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {campaignsQuery.data?.filter(c => c.status === 'active')?.length || 0}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {campaignsQuery.data?.filter(c => c.status === 'scheduled')?.length || 0}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Membership Tiers Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Membership Tiers
            </CardTitle>
          </CardHeader>
          <CardContent>
            {tiersQuery.isLoading ? (
              <p className="text-muted-foreground">Loading tiers...</p>
            ) : (
              <div className="space-y-4">
                {tiersQuery.data?.map((t: any) => (
                  <div key={t.id} className="rounded-lg border p-4 bg-gray-50">
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.description}</p>
                    <p className="text-sm mt-2 font-medium">Price: ${t.price ?? 0}</p>
                    {t.features && (
                      <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                        {t.features.map((f: string, i: number) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Campaigns Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Recent Campaigns
            </CardTitle>
          </CardHeader>
          <CardContent>
            {campaignsQuery.isLoading ? (
              <p className="text-muted-foreground">Loading campaigns...</p>
            ) : campaignsQuery.data?.length ? (
              <div className="space-y-3">
                {campaignsQuery.data?.slice(0, 5).map((c: any) => (
                  <div key={c.id} className="rounded-lg border p-4 bg-gray-50">
                    <h3 className="font-semibold">{c.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        c.status === 'active' ? 'bg-green-100 text-green-800' :
                        c.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {c.status}
                      </span>
                      {c.scheduled_at && (
                        <span className="text-sm text-muted-foreground">
                          {new Date(c.scheduled_at).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No campaigns yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Quick Actions */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <NewsletterForm onCreated={() => campaignsQuery.refetch()} />
        </CardContent>
      </Card>
    </>
  );
};

export default AdminPortal;
