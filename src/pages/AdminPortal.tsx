import { SEO } from "@/components/SEO";

const AdminPortal = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Admin Portal — Content & Members"
        description="Admin CMS skeleton: Notion-style editor, newsletter campaigns, and membership management."
      />
      <h1 className="text-3xl font-bold">Admin Portal (Skeleton)</h1>
      <p className="text-muted-foreground mt-2">Coming soon: CMS, Newsletter, Membership tiers.</p>
    </main>
  );
};

export default AdminPortal;
