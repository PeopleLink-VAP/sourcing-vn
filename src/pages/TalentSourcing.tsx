import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Users, 
  Clock, 
  UserCheck,
  Briefcase,
  Settings,
  Headphones,
  Palette,
  Search,
  Star,
  CheckCircle,
  Globe,
  Heart,
  DollarSign,
  ExternalLink
} from "lucide-react";

const TalentSourcing = () => {
  const processSteps = [
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Understanding your specific needs and requirements"
    },
    {
      icon: Users,
      title: "Profile Matching", 
      description: "Connecting you with suitable VA profiles from our network"
    },
    {
      icon: Clock,
      title: "Trial Period",
      description: "Opportunity to evaluate the VA's performance and fit"
    },
    {
      icon: UserCheck,
      title: "Onboarding",
      description: "Seamless integration into your workflow and processes"
    }
  ];

  const vaRoles = [
    {
      icon: Briefcase,
      title: "General VA",
      description: "Administrative tasks, email management, scheduling, research",
      skills: ["Email Management", "Calendar Scheduling", "Data Entry", "Research"]
    },
    {
      icon: Settings,
      title: "Project Management VA",
      description: "Project coordination, team management, workflow optimization",
      skills: ["Project Planning", "Team Coordination", "Process Optimization", "Reporting"]
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Customer service, live chat, help desk, client communication",
      skills: ["Live Chat Support", "Ticket Management", "Client Communication", "Problem Solving"]
    },
    {
      icon: Palette,
      title: "Social Media & Design",
      description: "Content creation, social media management, basic design work",
      skills: ["Content Creation", "Social Media", "Basic Design", "Brand Management"]
    },
    {
      icon: Search,
      title: "Sourcing Assistant",
      description: "Product research, supplier identification, market analysis",
      skills: ["Product Research", "Supplier Outreach", "Market Analysis", "Data Collection"]
    }
  ];

  const whyVietnameseVAs = [
    {
      icon: Heart,
      title: "Strong Work Ethic",
      description: "Dedicated, reliable, and committed to excellence in every task"
    },
    {
      icon: DollarSign,
      title: "Affordability",
      description: "Competitive rates without compromising on quality and skill level"
    },
    {
      icon: Globe,
      title: "Cultural Fit",
      description: "Easy communication, adaptability, and understanding of global business"
    },
    {
      icon: Star,
      title: "Skilled Labor Force",
      description: "Access to educated, English-speaking professionals with diverse expertise"
    }
  ];

  const sampleVAProfiles = [
    {
      name: "Linh Nguyen",
      role: "General VA",
      experience: "3+ years",
      skills: ["Email Management", "Research", "Data Entry", "Customer Service"],
      rating: 4.9,
      avatar: "/placeholder.svg"
    },
    {
      name: "Minh Tran",
      role: "Project Management VA", 
      experience: "5+ years",
      skills: ["Project Planning", "Team Leadership", "Process Optimization", "Reporting"],
      rating: 5.0,
      avatar: "/placeholder.svg"
    },
    {
      name: "Hoa Le",
      role: "Social Media Specialist",
      experience: "4+ years", 
      skills: ["Content Creation", "Social Media Strategy", "Design", "Analytics"],
      rating: 4.8,
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <main className="min-h-screen">
      <SEO
        title="Vietnam Virtual Assistants — Find Your Strategic Partner"
        description="Connect with skilled, English-speaking Virtual Assistants from Vietnam. Proven work ethic, affordability, and 10+ years of training expertise."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Find Your Strategic Partner: Skilled Virtual Assistants from Vietnam
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Connect with dedicated, English-speaking VAs backed by 10+ years of training expertise. 
            From general admin to specialized roles, find your perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Find Your VA Today
            </Button>
            <a href="https://virtualassistantpro.vn/" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" variant="outline">
                Visit Virtual Assistant Pro <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* VA Roles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">What Kind of Talents We Offer</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Diverse VA roles backed by Duyen Pham's 10+ years of experience in VA training & coaching
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaRoles.map((role, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="text-center">
                  <role.icon className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
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

      {/* How It Works */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">The Process: How It Works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our streamlined 4-step process ensures you find the perfect VA match
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  <Badge variant="outline" className="mb-2">Step {index + 1}</Badge>
                  <CardTitle className="text-primary">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vietnamese VAs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Vietnamese VAs?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the advantages of partnering with skilled Vietnamese virtual assistants
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVietnameseVAs.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <advantage.icon className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample VA Profiles */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Sample VA Profiles</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet some of our talented virtual assistants ready to join your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sampleVAProfiles.map((va, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={va.avatar} alt={va.name} />
                    <AvatarFallback>{va.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-primary">{va.name}</CardTitle>
                  <CardDescription>{va.role} • {va.experience}</CardDescription>
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-semibold">{va.rating}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {va.skills.map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              <strong>Virtual Assistant Pro Community:</strong> 14,000+ members on Facebook - 
              a testament to our training and talent pool
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Find Your Perfect VA?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have found their strategic partners through our platform. 
            Start your journey to better productivity today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Find Your VA Today
            </Button>
            <a href="https://virtualassistantpro.vn/" target="_blank" rel="noopener noreferrer" className="inline-flex">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Explore VA Community <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TalentSourcing;
