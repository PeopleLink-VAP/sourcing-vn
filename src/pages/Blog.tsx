import { SEO } from "@/components/SEO";

const Blog = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Blog & Resources — Vietnam Sourcing"
        description="Tips for working with Vietnamese teams, case studies, and FAQs about the sourcing.vn platform."
      />
      <h1 className="text-3xl font-bold">Blog / Resources</h1>
      <p className="text-muted-foreground mt-2">Coming soon: editorial content, guides, and guest posts.</p>
    </main>
  );
};

export default Blog;
