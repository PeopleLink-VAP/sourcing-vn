import { SEO } from "@/components/SEO";

const ProductSourcing = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Product Sourcing Vietnam — How It Works"
        description="What we source, how it works, and why Vietnam. Explore past projects and sample catalogs."
      />
      <h1 className="text-3xl font-bold">Product Sourcing</h1>
      <section className="mt-6 grid gap-6">
        <article>
          <h2 className="text-xl font-semibold">What We Source</h2>
          <p className="text-muted-foreground">Textiles, handicrafts, footwear, packaging, and more.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Quy trình</h2>
          <p className="text-muted-foreground">Inquiry → Sourcing → Samples → Quality Check → Shipping</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Why Vietnam?</h2>
          <p className="text-muted-foreground">Supply chain strength, competitive costs, and quality manufacturing.</p>
        </article>
      </section>
    </main>
  );
};

export default ProductSourcing;
