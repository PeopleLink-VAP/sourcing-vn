import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Star, 
  CheckCircle, 
  MapPin,
  Clock,
  Globe,
  Heart,
  Shield,
  Target,
  ExternalLink
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Duyen Pham",
      role: "Founder & Chief Sourcing Officer",
      experience: "10+ Years",
      location: "Ho Chi Minh City, Vietnam",
      specialties: ["Product Sourcing", "Talent Sourcing", "Business Development", "International Trade"],
      bio: "Leading sourcing expert with 30+ clients served and extensive network of Vietnamese manufacturers.",
      achievements: ["30+ Clients Served", "Level 2 Fiverr Seller", "Antler VC Alumni"],
      image: "/placeholder.svg"
    },
    {
      name: "Quality Assurance Team",
      role: "Inspection & Quality Control",
      experience: "5+ Years",
      location: "Multiple Locations, Vietnam",
      specialties: ["Product Inspection", "Quality Standards", "Compliance", "Reporting"],
      bio: "Dedicated team ensuring every product meets international quality standards before shipment.",
      achievements: ["100+ Inspections", "Zero Quality Issues", "ISO Certified"],
      image: "/placeholder.svg"
    },
    {
      name: "Logistics Coordination",
      role: "Shipping & Export Support",
      experience: "8+ Years",
      location: "Ho Chi Minh City & Hanoi",
      specialties: ["Export Documentation", "Shipping Coordination", "Customs", "Delivery Tracking"],
      bio: "Expert logistics team handling end-to-end shipping from Vietnamese factories to global destinations.",
      achievements: ["500+ Shipments", "On-time Delivery", "Global Coverage"],
      image: "/placeholder.svg"
    },
    {
      name: "Virtual Assistant Network",
      role: "Talent Sourcing Division",
      experience: "7+ Years",
      location: "Vietnam & Remote",
      specialties: ["VA Recruitment", "Skills Assessment", "Training", "Client Matching"],
      bio: "Specialized team managing our Virtual Assistant Pro community and talent sourcing services.",
      achievements: ["14,000+ VA Community", "200+ Placements", "98% Satisfaction"],
      image: "/placeholder.svg"
    }
  ];

  const teamValues = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Every decision is made with client success in mind"
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable outcomes for every project"
    },
    {
      icon: Globe,
      title: "Local Expertise",
      description: "Deep understanding of Vietnamese business culture and practices"
    }
  ];

  return (
    <main className="min-h-screen">
      <SEO
        title="Our Expert Team — Vietnam Sourcing Specialists"
        description="Meet the sourcing.vn team of experts specializing in Vietnamese manufacturing, quality control, logistics, and talent sourcing services."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Meet Our Expert Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A dedicated service team combining local Vietnamese expertise with international business experience 
            to deliver exceptional sourcing results.
          </p>
          <Link to="/founder">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Learn About Our Founder
            </Button>
          </Link>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Team Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Shared principles that drive our commitment to excellence in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Service Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the specialists who make your sourcing projects successful
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-primary text-xl">{member.name}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {member.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {member.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-2">Key Achievements:</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-accent mr-2" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Capabilities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Collective Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Combined capabilities that ensure comprehensive support for your sourcing needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Product Sourcing Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Factory identification & verification</li>
                  <li>• Quality control & inspection</li>
                  <li>• Price negotiation & contracts</li>
                  <li>• End-to-end project management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-primary">Talent Sourcing Network</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Virtual Assistant recruitment</li>
                  <li>• Skills assessment & training</li>
                  <li>• Client-VA matching process</li>
                  <li>• Ongoing support & coaching</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-primary">International Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Cross-cultural communication</li>
                  <li>• Export documentation support</li>
                  <li>• Shipping & logistics coordination</li>
                  <li>• Regulatory compliance guidance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Our Team?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our experienced team is ready to help you navigate Vietnamese manufacturing and talent markets 
            with confidence and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Your Project
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;