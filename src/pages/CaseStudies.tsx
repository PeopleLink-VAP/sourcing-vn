import { SEO } from "@/components/SEO";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import reimerImage from "@/assets/case-studies/reimer-jackets.jpg";
import nicoleImage from "@/assets/case-studies/nicole-bags.jpg";
import andyImage from "@/assets/case-studies/andy-plastic-handles.jpg";
import vuKohlerImage from "@/assets/case-studies/vu-kohler-eco-products.jpg";

const caseStudies = [
  {
    id: "reimer-jackets",
    title: "Reimer (Mexico) - Jacket Manufacturing",
    image: reimerImage,
    date: "May 2023",
    location: "Mexico City, Mexico",
    excerpt: "Assisted Reimer, a Mexico-based brand, in successfully identifying and connecting with experienced jacket manufacturers in Vietnam. Our on-the-ground support ensured deep market understanding and valuable partnerships.",
    link: "/case-studies/reimer-jackets"
  },
  {
    id: "nicole-bags",
    title: "Nicole (Australia) - Waterproof Bags",
    image: nicoleImage,
    date: "June 2023",
    location: "Sydney, Australia",
    excerpt: "Partnered with Nicole from Australia to source high-quality, waterproof bags tailored for mothers. Our negotiation and sample handling led to a satisfied client placing a significant order for 1,000 units.",
    link: "/case-studies/nicole-bags"
  },
  {
    id: "andy-plastic-handles",
    title: "Andy (Australia) - Plastic Handles",
    image: andyImage,
    date: "Mid 2023",
    location: "Melbourne, Australia",
    excerpt: "Facilitated Andy's shift of plastic handle production from China to Vietnam, sourcing manufacturers capable of producing over 10,000 units competitively. A successful factory visit and order placement solidified this strategic move.",
    link: "/case-studies/andy-plastic-handles"
  },
  {
    id: "vu-kohler-eco-products",
    title: "Vu Kohler (U.S.A) - Eco-Friendly Products",
    image: vuKohlerImage,
    date: "Late 2023",
    location: "Colorado, USA",
    excerpt: "Sourced a diverse range of eco-friendly bamboo and rattan products for Vu Kohler's Amazon store in the USA. Client was highly impressed with Vietnamese factory capacity, leading to immediate order placement.",
    link: "/case-studies/vu-kohler-eco-products"
  }
];

const CaseStudies = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20 relative overflow-hidden">
      <SEO
        title="Our Partnerships in Action - Case Studies | Sourcing.vn"
        description="Discover successful product sourcing projects with international clients. See how we deliver trust, clarity, and Vietnamese expertise in sourcing."
      />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Our Partnerships in Action
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building trust and credibility through successful product sourcing projects that demonstrate our commitment to <span className="text-primary font-semibold">trust, clarity, and Vietnamese expertise</span>.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className="group relative"
                style={{
                  transform: `translateY(${scrollY * 0.1 * (index % 2 === 0 ? 1 : -1)}px)`,
                  transition: 'var(--transition-parallax)'
                }}
              >
                {/* Polaroid Container */}
                <div className="bg-white p-4 pb-16 shadow-[var(--shadow-polaroid)] rotate-1 group-hover:rotate-0 transition-transform duration-500 hover:scale-105">
                  {/* Image with cool tone filter */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 md:h-80 object-cover filter sepia-[0.1] hue-rotate-[200deg] brightness-[0.9] contrast-[1.1]"
                    />
                    <div className="absolute inset-0 bg-blue-500/10"></div>
                  </div>
                  
                  {/* Handwritten style text on polaroid */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-handwriting text-sm text-gray-600 transform -rotate-1">
                      {study.date} | {study.location}
                    </p>
                  </div>
                </div>

                {/* Content below polaroid */}
                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {study.excerpt}
                  </p>
                  <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Link to={study.link}>
                      Learn More About This Project
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Your Own Success Story?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you source high-quality products from Vietnam with the same dedication and expertise shown in these partnerships.
          </p>
          <Button asChild size="lg" className="px-8">
            <Link to="/contact">
              Start Your Project Today
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;