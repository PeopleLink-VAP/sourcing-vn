import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Package, Users, Leaf, ShoppingCart } from "lucide-react";
import vuKohlerImage from "@/assets/case-studies/vu-kohler-eco-products.jpg";

const VuKohlerEcoProducts = () => {
  return (
    <main className="container mx-auto py-10 px-4">
      <SEO
        title="Vu Kohler Eco-Friendly Products Case Study - USA Amazon Success"
        description="How we sourced diverse eco-friendly bamboo and rattan products for Vu Kohler's Amazon store, impressing clients with Vietnamese factory capacity and craftsmanship."
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
              Vu Kohler's Eco-Friendly Success
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Late 2023
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Colorado, USA
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                Eco-Friendly Products
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sourced a diverse range of eco-friendly bamboo and rattan products for Vu Kohler's Amazon store in the USA. Client was highly impressed with Vietnamese factory capacity, leading to immediate order placement.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-4 shadow-lg transform -rotate-2">
              <img 
                src={vuKohlerImage} 
                alt="Vietnamese artisans crafting bamboo and rattan eco-friendly products"
                className="w-full h-64 object-cover filter sepia-[0.1] hue-rotate-[200deg] brightness-[0.9] contrast-[1.1]"
              />
              <p className="mt-2 text-sm text-gray-600 font-handwriting">
                Late 2023 | Colorado, USA
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
              <li>• Sourcing diverse eco-friendly product range</li>
              <li>• Finding authentic bamboo and rattan craftsmen</li>
              <li>• Ensuring US market quality standards</li>
              <li>• Meeting Amazon's packaging requirements</li>
              <li>• Coordinating multiple product categories</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Our Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Comprehensive eco-product manufacturer network</li>
              <li>• Connected with traditional Vietnamese artisans</li>
              <li>• Implemented US-compliant quality protocols</li>
              <li>• Coordinated Amazon-ready packaging solutions</li>
              <li>• Managed multi-category product sourcing</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Product Portfolio */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-primary">Eco-Friendly Product Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Bamboo Kitchen Items</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Cutting boards</li>
                <li>• Utensil sets</li>
                <li>• Storage containers</li>
                <li>• Serving trays</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Rattan Accessories</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Decorative baskets</li>
                <li>• Plant holders</li>
                <li>• Storage solutions</li>
                <li>• Wall organizers</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Lifestyle Products</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Yoga accessories</li>
                <li>• Natural fiber mats</li>
                <li>• Meditation cushions</li>
                <li>• Eco-friendly gifts</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Custom Solutions</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personalized items</li>
                <li>• Branded products</li>
                <li>• Special packaging</li>
                <li>• Custom designs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sustainability Focus */}
      <Card className="mb-12 bg-green-50">
        <CardHeader>
          <CardTitle className="text-primary">Sustainability & Craftsmanship</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-700">Environmental Impact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ 100% sustainably sourced bamboo and rattan</li>
                <li>✓ Zero chemical treatment processes</li>
                <li>✓ Biodegradable packaging materials</li>
                <li>✓ Carbon-neutral shipping options</li>
                <li>✓ Supporting local artisan communities</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3 text-green-700">Vietnamese Craftsmanship</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Traditional weaving techniques</li>
                <li>✓ Multi-generational artisan families</li>
                <li>✓ Hand-finished quality details</li>
                <li>✓ Cultural authenticity in designs</li>
                <li>✓ Fair trade practices</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Amazon Success Metrics */}
      <Card className="mb-12 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Amazon Store Success</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Immediate Results</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Immediate order placement upon sample approval</li>
                <li>✓ 15+ product lines successfully launched</li>
                <li>✓ High customer satisfaction ratings (4.8/5)</li>
                <li>✓ Strong sales velocity from launch</li>
                <li>✓ Repeat orders within first quarter</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Client Testimonial</h3>
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "I was blown away by the quality and authenticity of Vietnamese bamboo craftsmanship. The factory capacity and attention to detail exceeded my expectations. This partnership has transformed my Amazon business."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Vu Kohler, Colorado</p>
              
              <div className="mt-4 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Partnership Benefits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Exclusive product designs</li>
                  <li>• Competitive wholesale pricing</li>
                  <li>• Scalable production capacity</li>
                  <li>• Quality consistency</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Future Expansion */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-primary">Ongoing Partnership</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Following the initial success, Vu Kohler has established a long-term partnership with Vietnamese manufacturers, with plans for:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Product Expansion</h4>
                <p className="text-sm text-muted-foreground">Adding new eco-friendly categories and seasonal collections</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Market Growth</h4>
                <p className="text-sm text-muted-foreground">Expanding to European markets with proven product lines</p>
              </div>
              <div className="p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold mb-2">Custom Development</h4>
                <p className="text-sm text-muted-foreground">Co-developing unique products exclusive to the US market</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Ready to Build Your Eco-Friendly Product Line?
        </h2>
        <p className="text-muted-foreground mb-6">
          Discover the quality and sustainability of Vietnamese bamboo and rattan craftsmanship for your business.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">
            Explore Eco-Friendly Options
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default VuKohlerEcoProducts;