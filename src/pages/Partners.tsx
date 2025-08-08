import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Shield, 
  Star, 
  CheckCircle, 
  MapPin,
  Users,
  Truck,
  Award,
  Globe,
  Target,
  Search,
  FileCheck
} from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      icon: Factory,
      title: "Textile & Apparel",
      count: "15+ Partners",
      specialties: ["Clothing", "Bags & Luggage", "Footwear", "Accessories"],
      description: "Experienced manufacturers with international quality standards and export capabilities"
    },
    {
      icon: Factory,
      title: "Home & Furniture",
      count: "12+ Partners", 
      specialties: ["Furniture", "Home Decor", "Kitchenware", "Storage Solutions"],
      description: "Skilled craftsmen specializing in both modern and traditional Vietnamese designs"
    },
    {
      icon: Factory,
      title: "Eco-Friendly Products",
      count: "8+ Partners",
      specialties: ["Bamboo Products", "Rattan Furniture", "Sustainable Packaging", "Organic Materials"],
      description: "Sustainable manufacturers leading Vietnam's green production movement"
    },
    {
      icon: Factory,
      title: "Industrial Components", 
      count: "10+ Partners",
      specialties: ["Plastic Parts", "Metal Components", "Electronic Parts", "Precision Manufacturing"],
      description: "Advanced manufacturing facilities with modern equipment and quality certifications"
    },
    {
      icon: Factory,
      title: "Healthcare & Medical",
      count: "6+ Partners",
      specialties: ["Medical Wear", "Healthcare Products", "Safety Equipment", "Disposables"],
      description: "Certified medical manufacturers meeting international healthcare standards"
    },
    {
      icon: Factory,
      title: "Handicrafts & Art",
      count: "20+ Partners",
      specialties: ["Traditional Crafts", "Art Pieces", "Decorative Items", "Cultural Products"],
      description: "Artisan workshops preserving Vietnamese cultural heritage through quality craftsmanship"
    }
  ];

  const networkStrengths = [
    {
      icon: Shield,
      title: "Verified & Vetted",
      description: "Every partner undergoes rigorous inspection and verification process"
    },
    {
      icon: Star,
      title: "Quality Assured",
      description: "All partners maintain international quality standards and certifications"
    },
    {
      icon: Globe,
      title: "Export Ready",
      description: "Experienced in international shipping and export documentation"
    },
    {
      icon: Users,
      title: "Reliable Partnerships",
      description: "Long-term relationships built on trust and consistent performance"
    }
  ];

  const inspectionProcess = [
    {
      icon: Search,
      title: "Factory Assessment",
      description: "Comprehensive evaluation of facilities, equipment, and capabilities"
    },
    {
      icon: FileCheck,
      title: "Documentation Review",
      description: "Verification of certifications, licenses, and quality management systems"
    },
    {
      icon: Star,
      title: "Sample Testing",
      description: "Product quality testing and compliance with international standards"
    },
    {
      icon: Truck,
      title: "Logistics Capability",
      description: "Assessment of shipping capacity and export experience"
    }
  ];

  const featuredPartners = [
    {
      name: "Saigon Textile Manufacturing",
      location: "Ho Chi Minh City",
      specialties: ["Premium Apparel", "Technical Textiles"],
      certifications: ["OEKO-TEX", "GOTS", "ISO 9001"],
      capacity: "50,000 pcs/month",
      experience: "15+ years export"
    },
    {
      name: "Mekong Delta Furniture Co.",
      location: "Can Tho",
      specialties: ["Rattan Furniture", "Bamboo Products"],
      certifications: ["FSC", "ISO 14001", "CE"],
      capacity: "1,000 sets/month", 
      experience: "20+ years craftsmanship"
    },
    {
      name: "Hanoi Precision Components",
      location: "Hanoi",
      specialties: ["Plastic Injection", "Metal Fabrication"],
      certifications: ["ISO 9001", "RoHS", "REACH"],
      capacity: "100,000 pcs/month",
      experience: "12+ years precision manufacturing"
    }
  ];

  return (
    <main className="min-h-screen">
      <SEO
        title="Our Partner Network — Trusted Vietnamese Manufacturers"
        description="Explore our verified network of Vietnamese manufacturers across textiles, furniture, components, and eco-products. Rigorous partner selection ensures quality."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Our Trusted Partner Network
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Duyen Pham's extensive network of verified Vietnamese manufacturers across diverse industries, 
            each rigorously inspected to ensure quality, reliability, and export readiness.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Request Partner Recommendations
          </Button>
        </div>
      </section>

      {/* Network Strengths */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Network Strengths</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Why our partner network delivers consistent, high-quality results for international clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {networkStrengths.map((strength, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <strength.icon className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary text-lg">{strength.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Partner Categories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Diverse manufacturing capabilities across Vietnam's key industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <category.icon className="w-12 h-12 text-accent" />
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                  <CardTitle className="text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Inspection Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Inspection Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Rigorous partner evaluation ensures only qualified manufacturers join our network
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {inspectionProcess.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <Badge variant="outline" className="mb-2">Step {index + 1}</Badge>
                  <CardTitle className="text-primary text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Partners</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Sample profiles from our verified manufacturing network
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPartners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-primary text-xl">{partner.name}</CardTitle>
                      <p className="text-muted-foreground text-sm flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {partner.location}
                      </p>
                    </div>
                    <Award className="w-8 h-8 text-accent" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                    <div>
                      <span className="font-semibold">Capacity:</span>
                      <br />
                      {partner.capacity}
                    </div>
                    <div>
                      <span className="font-semibold">Experience:</span>
                      <br />
                      {partner.experience}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diverse Product Range */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Products Proudly Made in Vietnam</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our partner network covers a comprehensive range of products across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Factory className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Textiles & Fashion</h3>
                <p className="text-sm text-muted-foreground">Bags, Luggage, Clothing, Footwear</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Factory className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Components</h3>
                <p className="text-sm text-muted-foreground">Plastic, Metal, Electronic Parts</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Factory className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">Bamboo, Rattan, Sustainable Materials</p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Factory className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">Specialized</h3>
                <p className="text-sm text-muted-foreground">Medical Wear, Sports Equipment, Handicrafts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Access Our Partner Network?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get customized supplier lists based on your specific product requirements and quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Request Supplier List
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Partners;