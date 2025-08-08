import { SEO } from "@/components/SEO";

const EditorPortal = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Editor Portal — Ghostwriters"
        description="Editor workspace for guest writers and editors."
      />
      <h1 className="text-3xl font-bold">Editor Portal</h1>
      <p className="text-muted-foreground mt-2">Drafting, review, and publishing workflows (coming soon).</p>
    </main>
  );
};

export default EditorPortal;
