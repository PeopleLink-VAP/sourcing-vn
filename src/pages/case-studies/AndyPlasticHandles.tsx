import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Package, Users, Factory, TrendingUp } from "lucide-react";
import andyImage from "@/assets/case-studies/andy-plastic-handles.jpg";

const AndyPlasticHandles = () => {
  return (
    <main className="container mx-auto py-10 px-4">
      <SEO
        title="Andy Plastic Handles Case Study - China to Vietnam Manufacturing Shift"
        description="How we facilitated Andy's successful shift of plastic handle production from China to Vietnam, sourcing manufacturers for 10,000+ units with factory visit coordination."
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
              Andy's Strategic Manufacturing Shift
            </h1>
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Mid 2023
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Melbourne, Australia
              </div>
              <div className="flex items-center gap-2">
                <Factory className="h-4 w-4" />
                10,000+ Units
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Facilitated Andy's shift of plastic handle production from China to Vietnam, sourcing manufacturers capable of producing over 10,000 units competitively. A successful factory visit and order placement solidified this strategic move.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-4 shadow-lg transform rotate-2">
              <img 
                src={andyImage} 
                alt="Plastic injection molding machinery in Vietnamese factory"
                className="w-full h-64 object-cover filter sepia-[0.1] hue-rotate-[200deg] brightness-[0.9] contrast-[1.1]"
              />
              <p className="mt-2 text-sm text-gray-600 font-handwriting">
                Mid 2023 | Melbourne, Australia
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
              <li>• Shifting production from established China suppliers</li>
              <li>• Finding Vietnamese manufacturers with injection molding capability</li>
              <li>• Ensuring production capacity for 10,000+ units</li>
              <li>• Maintaining quality standards during transition</li>
              <li>• Coordinating factory visits from Australia</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Our Solution</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Comprehensive supplier mapping in Vietnam</li>
              <li>• Technical capability assessment for injection molding</li>
              <li>• Capacity verification for large-scale production</li>
              <li>• Quality protocol implementation and testing</li>
              <li>• Organized and facilitated factory visit</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Manufacturing Specifications */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-primary">Technical Requirements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Material Specifications</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• High-grade ABS plastic</li>
                <li>• UV-resistant formulation</li>
                <li>• Impact-resistant properties</li>
                <li>• Color-stable materials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Production Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Precision injection molding</li>
                <li>• Consistent dimensional tolerance</li>
                <li>• High-volume production capability</li>
                <li>• Quality control systems</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Quality Standards</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Australian manufacturing standards</li>
                <li>• Stress testing protocols</li>
                <li>• Chemical resistance testing</li>
                <li>• Batch consistency verification</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Factory Visit Process */}
      <Card className="mb-12 bg-accent/5">
        <CardHeader>
          <CardTitle className="text-primary">Factory Visit Coordination</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Pre-Visit Preparation</h3>
                <p className="text-sm text-muted-foreground">
                  Coordinated with 3 top manufacturers, prepared technical documentation, and scheduled comprehensive facility tours.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">On-Site Evaluation</h3>
                <p className="text-sm text-muted-foreground">
                  Facilitated detailed factory tours, capacity assessments, and direct negotiations with Andy present on-site.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Decision & Partnership</h3>
                <p className="text-sm text-muted-foreground">
                  Andy was impressed with Vietnamese manufacturing capabilities and committed to a long-term partnership.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results & Benefits */}
      <Card className="mb-12 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-primary">Strategic Success</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Project Outcomes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Successfully shifted production from China to Vietnam</li>
                <li>✓ 20% cost reduction compared to China suppliers</li>
                <li>✓ Secured capacity for 10,000+ units production</li>
                <li>✓ Established long-term manufacturing partnership</li>
                <li>✓ Improved production lead times</li>
                <li>✓ Enhanced supply chain resilience</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Client Feedback</h3>
              <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4">
                "The factory visit was a game-changer. Seeing the Vietnamese manufacturing capabilities firsthand convinced me this was the right move. The quality is excellent and the cost savings are significant."
              </blockquote>
              <p className="text-sm text-muted-foreground mt-2">- Andy, Melbourne</p>
              
              <div className="mt-4 p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Strategic Benefits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Diversified supply chain risk</li>
                  <li>• Improved profit margins</li>
                  <li>• Faster response times</li>
                  <li>• Better communication</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Considering a Manufacturing Location Shift?
        </h2>
        <p className="text-muted-foreground mb-6">
          Let us help you evaluate Vietnamese manufacturing options and coordinate factory visits for your business.
        </p>
        <Button asChild size="lg">
          <Link to="/contact">
            Explore Manufacturing Options
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default AndyPlasticHandles;