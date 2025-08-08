import { SEO } from "@/components/SEO";

const Contact = () => {
  return (
    <main className="container mx-auto py-10">
      <SEO
        title="Contact — Vietnam Sourcing Hub"
        description="Get in touch: An Khanh ward, Thu Duc City, HCMC, Vietnam. contact@sourcing.vn."
      />
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground mt-2">Office: An Khanh, Thu Duc City, HCMC, Vietnam</p>
      <p className="text-muted-foreground">Email: contact@sourcing.vn</p>
      <div className="mt-4 flex gap-3">
        <a className="underline" href="mailto:contact@sourcing.vn">Email us</a>
        <a className="underline" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a>
        <a className="underline" href="https://calendly.com/" target="_blank" rel="noreferrer">Calendly</a>
      </div>
    </main>
  );
};

export default Contact;
