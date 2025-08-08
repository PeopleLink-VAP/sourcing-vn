import { SEO } from "@/components/SEO";

const Catalogs = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Product Catalogs — Samples"
        description="Browse sample product catalogs and request PDFs via email."
      />
      <h1 className="text-3xl font-bold">Product Catalogs</h1>
      <p className="text-muted-foreground mt-2">Request sample catalogs by email. Coming soon.</p>
    </main>
  );
};

export default Catalogs;
