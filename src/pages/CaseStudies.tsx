import { SEO } from "@/components/SEO";

const CaseStudies = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Case Studies & Completed Projects"
        description="Selected sourcing projects: medical wear, sport shoes, and bamboo handicrafts."
      />
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <ul className="mt-4 list-disc pl-5 text-muted-foreground">
        <li>Medical wear: US brand, MOQ thousands, end-to-end export to USA</li>
        <li>Sport shoes: Export to Australia, target 18–30 yrs, made in Vietnam</li>
        <li>Handicraft: Bamboo smoking accessory, export to US, MOQ 500</li>
      </ul>
    </main>
  );
};

export default CaseStudies;
