import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Search, 
  Package, 
  Handshake, 
  Shield, 
  Truck,
  Factory,
  Shirt,
  Home,
  Leaf,
  FileText,
  MapPin,
  Star,
  CheckCircle
} from "lucide-react";

const ProductSourcing = () => {
  const processSteps = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description: "Thorough discussions to understand your requirements"
    },
    {
      icon: Search,
      title: "Supplier Selection", 
      description: "Research and shortlist reliable factories with customized supplier lists"
    },
    {
      icon: Package,
      title: "Sample Handling",
      description: "Receiving, checking, and shipping samples for your evaluation"
    },
    {
      icon: Handshake,
      title: "Quotation & Negotiation",
      description: "Representing you to negotiate for the most reasonable prices"
    },
    {
      icon: Shield,
      title: "Inspection & Quality Control",
      description: "Ensuring product quality meets your standards"
    },
    {
      icon: Truck,
      title: "Logistics Support",
      description: "Coordinating shipping and delivery to your destination"
    }
  ];

  const productCategories = [
    {
      icon: Shirt,
      title: "Textiles & Clothing",
      items: ["Bags & Luggage", "Apparel", "Footwear", "Accessories"]
    },
    {
      icon: Home,
      title: "Home Goods",
      items: ["Furniture", "Kitchenware", "Decorative items", "Storage solutions"]
    },
    {
      icon: Factory,
      title: "Components",
      items: ["Plastic parts", "Metal components", "Electronic parts", "Hardware"]
    },
    {
      icon: Leaf,
      title: "Eco-Products",
      items: ["Bamboo products", "Rattan furniture", "Sustainable packaging", "Green alternatives"]
    }
  ];

  const whyVietnam = [
    { title: "The Next Tiger of Asia", description: "Emerging powerhouse in outsourcing and manufacturing" },
    { title: "Favorable Trade Agreements", description: "Easier regulations and beneficial trade policies" },
    { title: "Flexible Suppliers", description: "Smaller, more adaptable manufacturers" },
    { title: "Competitive Pricing", description: "Cost-effective production without compromising quality" },
    { title: "Strategic Location", description: "Proximity to other sourcing destinations in Asia" },
    { title: "Skilled Workforce", description: "Experienced and dedicated manufacturing talent" },
    { title: "Diverse Product Range", description: "Wide variety of products and manufacturing capabilities" }
  ];

  const caseStudies = [
    {
      title: "Reimer (Mexico) - Jacket Manufacturing",
      objective: "Visit potential jacket suppliers and understand market",
      result: "Client connected with experienced partners and gained deep market insights",
      link: "/case-studies/reimer-jackets"
    },
    {
      title: "Nicole (Australia) - Waterproof Bags", 
      objective: "Source skilled bag manufacturers for mothers' products",
      result: "1,000 units ordered after successful quality evaluation",
      link: "/case-studies/nicole-bags"
    },
    {
      title: "Andy (Australia) - Plastic Handles",
      objective: "Find manufacturers for 10,000+ plastic handles, shift from China",
      result: "Successful factory visit and order placement with chosen supplier",
      link: "/case-studies/andy-plastic-handles"
    },
    {
      title: "Vu Kohler (USA) - Eco-Friendly Products",
      objective: "Source bamboo and rattan products for Amazon store",
      result: "Client impressed with factory capacity and placed immediate order",
      link: "/case-studies/vu-kohler-eco-products"
    }
  ];

  return (
    <main className="min-h-screen">
      <SEO
        title="Product Sourcing Vietnam — Your Trusted Partner for Quality Manufacturing"
        description="Source reliable, high-quality, and affordable products from Vietnam. Expert guidance through every step from consultation to delivery."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Your Trusted Source for High-Quality Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Leverage our local expertise and network to source reliable, affordable products from Vietnam. 
            From consultation to delivery, we guide you through every step.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Tell Us What You Want to Source
          </Button>
        </div>
      </section>

      {/* What We Source */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What We Source</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From textiles to eco-products, we connect you with Vietnam's diverse manufacturing capabilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <category.icon className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-accent mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven 6-phase process ensures quality results with constant updates on milestones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <Badge variant="outline" className="mb-2">Phase {index + 1}</Badge>
                  <CardTitle className="text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vietnam */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Vietnam for Product Sourcing?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover why Vietnam is emerging as "The Next Tiger of Asia" in outsourcing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyVietnam.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-secondary/20 transition-colors">
                <Star className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real results from our partnerships in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary text-lg">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Objective:</h4>
                    <p className="text-sm">{study.objective}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-1">Result:</h4>
                    <p className="text-sm">{study.result}</p>
                  </div>
                  <Link to={study.link}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Full Case Study
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              <strong>Other successful projects:</strong> Medical wear (hospital wear, thousands MOQ), 
              Sport shoes (export to Australia), Handicraft (bamboo smoking accessories, MOQ 500)
            </p>
            <Link to="/case-studies">
              <Button variant="outline">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Catalogs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4">Product Catalogs</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Browse sample files and request detailed catalogs for your industry
          </p>
          <div className="flex items-center justify-center space-x-4">
            <FileText className="w-8 h-8 text-accent" />
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Request Sample Catalogs
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Sourcing?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Tell us about the products you need to manufacture from Vietnam. 
            Our expert team will guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Tell Us What You Want to Source
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductSourcing;
