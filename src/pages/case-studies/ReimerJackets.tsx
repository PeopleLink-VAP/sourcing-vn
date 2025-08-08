import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Package, Users } from "lucide-react";
import reimerImage from "@/assets/case-studies/reimer-jackets.jpg";

const ReimerJackets = () => {
  return (
    <main className="container mx-auto py-10 px-4">
      <SEO
        title="Reimer Jackets Case Study - Mexico to Vietnam Manufacturing Success"
        description="How we helped Reimer, a Mexico-based brand, successfully connect with experienced jacket manufacturers in Vietnam through our on-the-ground support and market expertise."
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
              Reimer Jackets Manufacturing Success
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                May 2023
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Mexico City, Mexico
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Fashion & Apparel
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assisted Reimer, a Mexico-based brand, in successfully identifying and connecting with experienced jacket manufacturers in Vietnam. Our on-the-ground support ensured deep market understanding and valuable partnerships.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-4 shadow-lg transform rotate-1">
              <img 
                src={reimerImage} 
                alt="Vietnamese textile factory floor with workers inspecting jacket fabric"
                className="w-full h-64 object-cover filter sepia-[0.1] hue-rotate-[200deg] brightness-[0.9] contrast-[1.1]"
              />
              <p className="mt-2 text-sm text-gray-600 font-handwriting">
                May 2023 | Mexico City, Mexico
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
              <li>• Finding reliable jacket manufacturers in Vietnam</li>
              <li>• Understanding Vietnamese manufacturing capabilities</li>
              <li>• Navigating language and cultural barriers</li>
              <li>• Ensuring quality standards for their brand</li>
              <li>• Establishing long-term partnerships</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Our Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Comprehensive factory vetting and selection</li>
              <li>• On-the-ground support and market insights</li>
              <li>• Translation and cultural bridge services</li>
              <li>• Quality assurance protocols implementation</li>
              <li>• Long-term relationship facilitation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Process */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-primary">Our Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">1. Requirements Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Detailed discussion of jacket specifications, quality requirements, and production volumes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">2. Factory Matching</h3>
              <p className="text-sm text-muted-foreground">
                Identified and vetted suitable manufacturers with proven jacket production capabilities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">3. On-Ground Support</h3>
              <p className="text-sm text-muted-foreground">
                Facilitated meetings, negotiations, and provided continuous support throughout the process.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="mb-12 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Results Achieved</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Successful Outcomes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Connected with 3 qualified jacket manufacturers</li>
                <li>✓ Established clear communication channels</li>
                <li>✓ Secured competitive pricing for initial orders</li>
                <li>✓ Built foundation for long-term partnerships</li>
                <li>✓ Gained deep understanding of Vietnamese market</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Client Feedback</h3>
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "Sourcing.vn's on-the-ground support was invaluable. They not only found us great manufacturers but helped us understand the Vietnamese market dynamics. The cultural bridge they provided made all the difference."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Reimer Team, Mexico</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Ready to Start Your Manufacturing Journey?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let us help you connect with the right Vietnamese manufacturers for your products.
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

export default ReimerJackets;