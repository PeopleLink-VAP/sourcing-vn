import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { NewsletterForm } from "@/components/admin/NewsletterForm";

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
    <main className="container mx-auto py-10">
      <SEO
        title="Admin Portal — Content & Members"
        description="Manage membership tiers and newsletter campaigns."
      />
      <h1 className="text-3xl font-bold">Admin Portal</h1>
      <p className="text-muted-foreground mt-2">Membership tiers and newsletter campaigns management.</p>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3">Membership Tiers</h2>
        {tiersQuery.isLoading ? (
          <p className="text-muted-foreground">Loading tiers...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {tiersQuery.data?.map((t: any) => (
              <article key={t.id} className="rounded-md border p-4">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.description}</p>
                <p className="text-sm mt-2">Price: {t.price ?? 0}</p>
                {t.features && (
                  <ul className="list-disc list-inside text-sm mt-2">
                    {t.features.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Create Newsletter Campaign</h2>
        <NewsletterForm onCreated={() => campaignsQuery.refetch()} />
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Recent Campaigns</h2>
        {campaignsQuery.isLoading ? (
          <p className="text-muted-foreground">Loading campaigns...</p>
        ) : campaignsQuery.data?.length ? (
          <div className="space-y-3">
            {campaignsQuery.data?.map((c: any) => (
              <article key={c.id} className="rounded-md border p-4">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">Status: {c.status}</p>
                {c.scheduled_at && (
                  <p className="text-sm">Scheduled: {new Date(c.scheduled_at).toLocaleString()}</p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No campaigns yet.</p>
        )}
      </section>
    </main>
  );
};

export default AdminPortal;
