import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Package, Users, ShoppingBag } from "lucide-react";
import nicoleImage from "@/assets/case-studies/nicole-bags.jpg";

const NicoleBags = () => {
  return (
    <main className="container mx-auto py-10 px-4">
      <SEO
        title="Nicole Waterproof Bags Case Study - Australia to Vietnam Success"
        description="How we helped Nicole from Australia source 1,000 high-quality waterproof bags for mothers through expert negotiation and sample handling."
      />
      
      {/* Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link to="/case-studies" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Nicole's Waterproof Bags Success Story
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                June 2023
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Sydney, Australia
              </div>
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                1,000 Units Ordered
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Partnered with Nicole from Australia to source high-quality, waterproof bags tailored for mothers. Our negotiation and sample handling led to a satisfied client placing a significant order for 1,000 units.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-4 shadow-lg transform -rotate-1">
              <img 
                src={nicoleImage} 
                alt="High-quality waterproof bags in Vietnamese factory production"
                className="w-full h-64 object-cover filter sepia-[0.1] hue-rotate-[200deg] brightness-[0.9] contrast-[1.1]"
              />
              <p className="mt-2 text-sm text-gray-600 font-handwriting">
                June 2023 | Sydney, Australia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">The Challenge</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Finding manufacturers specializing in waterproof bags</li>
              <li>• Ensuring products meet specific requirements for mothers</li>
              <li>• Managing sample development and testing</li>
              <li>• Negotiating competitive pricing for 1,000 units</li>
              <li>• Coordinating international shipping to Australia</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Our Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Identified specialized waterproof bag manufacturers</li>
              <li>• Coordinated custom design for mother-specific features</li>
              <li>• Managed comprehensive sampling process</li>
              <li>• Negotiated favorable terms and pricing</li>
              <li>• Handled end-to-end logistics coordination</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Product Specifications */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-primary">Product Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Material Features</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Waterproof PVC coating</li>
                <li>• Durable canvas base material</li>
                <li>• Reinforced stitching</li>
                <li>• Easy-clean surfaces</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Design Elements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Multiple compartments</li>
                <li>• Insulated bottle holders</li>
                <li>• Diaper-changing mat pocket</li>
                <li>• Stylish, modern appearance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quality Standards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Australian safety compliance</li>
                <li>• Waterproof testing protocols</li>
                <li>• Durability stress testing</li>
                <li>• Color-fastness verification</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Process Timeline */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-primary">Project Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Week 1-2: Requirements & Sourcing</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed requirements gathering and identification of suitable manufacturers specializing in waterproof bags.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Week 3-4: Sample Development</h3>
                <p className="text-sm text-muted-foreground">
                  Coordinated sample production with multiple manufacturers, managing revisions and quality testing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Week 5-6: Negotiation & Order</h3>
                <p className="text-sm text-muted-foreground">
                  Successful price negotiation and placement of 1,000-unit order with agreed specifications.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="mb-12 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Outstanding Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Project Achievements</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Successfully delivered 1,000 waterproof bags</li>
                <li>✓ 25% cost savings compared to alternative suppliers</li>
                <li>✓ 100% quality compliance with Australian standards</li>
                <li>✓ On-time delivery within agreed timeframe</li>
                <li>✓ Client extremely satisfied with product quality</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Client Testimonial</h3>
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "The team at Sourcing.vn exceeded my expectations. The bags are perfect for mothers - waterproof, stylish, and functional. Their attention to detail during sampling and negotiation made this project a huge success."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Nicole, Sydney</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Need Custom Product Sourcing?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let us help you source high-quality products tailored to your specific requirements.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">
            Start Your Project
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default NicoleBags;