import { SEO } from "@/components/SEO";

const News = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Vietnam Trade News — Curated Portal"
        description="Curated updates on import/export policies, outsourcing trends, and Vietnam market developments."
      />
      <h1 className="text-3xl font-bold">News Portal</h1>
      <p className="text-muted-foreground mt-2">Manual reposts for now; AI automation coming soon.</p>
    </main>
  );
};

export default News;
