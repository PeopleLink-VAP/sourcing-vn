import { useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  ShoppingBag, 
  Shirt, 
  Wrench, 
  Users, 
  Leaf,
  CheckCircle,
  Globe,
  Star,
  Upload,
  Send,
  Factory,
  Award,
  Target
} from "lucide-react";

const Catalogs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productCategory: "",
    productDescription: "",
    howHeardAbout: "",
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const productCategories = [
    {
      icon: ShoppingBag,
      title: "Bags & Luggage",
      description: "From fashion accessories to functional travel gear",
      examples: ["Fashion handbags", "Travel luggage", "Backpacks", "Business briefcases", "Laptop bags"]
    },
    {
      icon: Shirt,
      title: "Clothing & Textiles",
      description: "Including medical wear, apparel, and textile goods",
      examples: ["Medical wear", "Jackets for US brands", "Sportswear", "Casual apparel", "Technical textiles"]
    },
    {
      icon: Wrench,
      title: "Plastic & Metal Products",
      description: "Specialized components and fabrication",
      examples: ["Plastic handles", "Metal components", "Injection molding", "CNC parts", "Hardware"]
    },
    {
      icon: Users,
      title: "Footwear",
      description: "From sport shoes to general footwear for export",
      examples: ["Sport shoes", "Casual footwear", "Work boots", "Sandals", "Children's shoes"]
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "Sustainable bamboo, rattan, and green alternatives",
      examples: ["Bamboo furniture", "Rattan products", "Sustainable packaging", "Eco-friendly home goods", "Green alternatives"]
    }
  ];

  const vietnamBenefits = [
    {
      icon: Target,
      title: "Competitive Prices",
      description: "Cost-effective manufacturing without compromising quality"
    },
    {
      icon: Users,
      title: "Skilled Labor",
      description: "Experienced workforce with attention to detail"
    },
    {
      icon: Factory,
      title: "Flexible Suppliers",
      description: "Adaptable manufacturers for various requirements"
    },
    {
      icon: Globe,
      title: "Trade Agreements",
      description: "Favorable export conditions and regulations"
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.consent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and agree to receive communications.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would integrate with Supabase to send the form data
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Request Submitted Successfully!",
        description: "Our team will review your request and be in touch shortly with your tailored product catalog.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        productCategory: "",
        productDescription: "",
        howHeardAbout: "",
        consent: false
      });

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="Product Catalogs | Sourcing.vn — Your Trusted Source for Quality Vietnamese Products"
        description="Discover our diverse product sourcing capabilities from Vietnam. Request custom catalogs for bags, clothing, components, footwear, and eco-friendly products."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Your Gateway to Quality Vietnamese Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            At Sourcing.vn, led by founder Duyen Pham, we specialize in connecting international clients 
            with high-quality, reliable products proudly made in Vietnam. Our extensive network of Vietnamese 
            manufacturers, combined with our founder's 10 years of experience and a 'founder's mindset,' 
            ensures honest, responsible, and efficient sourcing for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Send className="w-5 h-5 mr-2" />
              Request Custom Catalog
            </Button>
            <Button size="lg" variant="outline">
              View Product Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Vietnam Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Source from Vietnam?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Vietnam offers unique advantages for international businesses seeking quality manufacturing partners
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vietnamBenefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <benefit.icon className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Discover Our Diverse Product Sourcing Capabilities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We source a wide variety of products proudly made in Vietnam, meeting your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <category.icon className="w-12 h-12 text-accent mb-4" />
                  <CardTitle className="text-primary text-xl">{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-sm text-primary mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-accent mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Need something specific?</strong> Our flexible network can source almost any product made in Vietnam.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Tell Us What You Need
            </Button>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Need a Specific Product? Request a Detailed Catalog</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                While our website offers a glimpse into our capabilities, we understand your unique needs. 
                Fill out the form below to receive a custom product catalog tailored to your exact specifications.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary text-2xl text-center">Custom Catalog Request Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium">Company Name</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productCategory" className="text-sm font-medium">Product Category of Interest</Label>
                    <Select value={formData.productCategory} onValueChange={(value) => handleInputChange("productCategory", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bags-luggage">Bags & Luggage</SelectItem>
                        <SelectItem value="clothing-textiles">Clothing & Textiles</SelectItem>
                        <SelectItem value="plastic-metal">Plastic & Metal Products</SelectItem>
                        <SelectItem value="footwear">Footwear</SelectItem>
                        <SelectItem value="eco-friendly">Eco-Friendly Products</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productDescription" className="text-sm font-medium">
                      Specific Product Description
                    </Label>
                    <Textarea
                      id="productDescription"
                      value={formData.productDescription}
                      onChange={(e) => handleInputChange("productDescription", e.target.value)}
                      placeholder="Please describe the product(s) you need to source, including materials, desired quantity (MOQ guidance), target price, and any specific requirements."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fileUpload" className="text-sm font-medium">Upload Files (Optional)</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Attach design specifications, reference images, or existing samples
                      </p>
                      <Button type="button" variant="outline" size="sm" className="mt-2">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="howHeardAbout" className="text-sm font-medium">How did you hear about us?</Label>
                    <Select value={formData.howHeardAbout} onValueChange={(value) => handleInputChange("howHeardAbout", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google-search">Google Search</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="trade-show">Trade Show</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                    />
                    <Label htmlFor="consent" className="text-sm">
                      I agree to receive communications from Sourcing.vn regarding my inquiry and services. <span className="text-destructive">*</span>
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending Request..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Sourcing.vn?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-primary">30+ Clients Served</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Successfully assisted brands and individuals across multiple industries
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-primary">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Serving clients from USA, Australia, Mexico, Canada, and Europe
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-accent mx-auto mb-2" />
                <CardTitle className="text-primary">10+ Years Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Proven expertise in Vietnamese manufacturing and international trade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Catalogs;
