import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/contexts/LanguageContext";
import { 
  Award, 
  Briefcase, 
  Users, 
  Globe, 
  Star, 
  CheckCircle, 
  Heart,
  TrendingUp,
  ExternalLink,
  Linkedin,
  Target,
  Shield,
  Handshake
} from "lucide-react";

const Founder = () => {
  const { t } = useI18n();
  const highlights = [
    {
      icon: Users,
      title: "30+ Clients Served",
      description: "Assisted individuals and brands in sourcing products in Vietnam"
    },
    {
      icon: Globe,
      title: "Wide Network",
      description: "Extensive network of Vietnamese manufacturers across industries"
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Experience as BD Manager for foreign-owned company in Vietnam"
    },
    {
      icon: TrendingUp,
      title: "Two Businesses Founded",
      description: "Virtual Assistant Pro & SecondBrains in hospitality and VA industries"
    },
    {
      icon: Award,
      title: "10 Years Experience",
      description: "Proven track record in startups and corporate environments"
    },
    {
      icon: Star,
      title: "Level 2 Fiverr Seller",
      description: "Top-rated freelancer with excellent client satisfaction"
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest communication and clear processes"
    },
    {
      icon: Target,
      title: "Efficiency & Results",
      description: "Delivering solutions that exceed expectations with a founder's mindset"
    },
    {
      icon: Handshake,
      title: "Partnership Approach",
      description: "Understanding business owner needs and solving unexpected problems"
    }
  ];

  const achievements = [
    "Chosen from 1,100+ candidates by Antler Venture Capital",
    "Fluent in English & Vietnamese - perfect cultural bridge",
    "10+ years coaching, freelancing, and client success experience",
    "Founded Virtual Assistant Pro community with 14,000+ members",
    "Specialized in end-to-end sourcing from supplier to export"
  ];

  return (
    <main className="min-h-screen">
      <SEO
        title="About Duyen Pham — Founder of Vietnam Sourcing Hub"
        description="Meet Duyen Pham, founder of sourcing.vn. 30+ clients served, 10 years experience, connecting global businesses with Vietnamese manufacturers and talent."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-primary mb-6">
                {t("founder.title")}
              </h1>
              <h2 className="text-2xl text-muted-foreground mb-6">
                {t("founder.role")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("founder.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Linkedin className="w-5 h-5 mr-2" />
                  {t("founder.connectLinkedIn")}
                </Button>
                <Button size="lg" variant="outline">
                  {t("founder.downloadPortfolio")}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                {/* Placeholder for Duyen's photo */}
                <div className="w-80 h-80 bg-muted rounded-2xl flex items-center justify-center">
                  <span className="text-muted-foreground text-lg">Professional Photo</span>
                </div>
              </div>
              {/* Floating achievement badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg">
                <span className="font-semibold text-sm">30+ Clients Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t("founder.coreValues")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("founder.coreValuesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <CardTitle className="text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">{t("founder.journey")}</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Duyen's journey began with a simple mission: helping foreign clients navigate Vietnam's 
                  manufacturing landscape with the same care and attention she would give her own business. 
                  What started as individual consulting has grown into a comprehensive sourcing platform.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her experience as a Business Development Manager for foreign-owned companies in Vietnam 
                  gave her unique insights into both sides of international business relationships. This 
                  perspective, combined with her entrepreneurial spirit, led to founding two successful 
                  businesses in the hospitality and Virtual Assistant industries.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Today, Duyen treasures client trust above all else, operating with complete honesty 
                  and transparency. Her "founder's mindset" means understanding that unexpected problems 
                  require creative solutions, and every client's success is her success.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-accent/5 to-primary/5">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-accent" />
                    {t("founder.philosophy")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-muted-foreground italic">
                    "{t("founder.philosophyQuote")}"
                  </blockquote>
                  <cite className="text-sm text-primary font-semibold block mt-4">— Duyen Pham</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t("founder.professionalHighlights")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("founder.professionalHighlightsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <highlight.icon className="w-12 h-12 text-accent mx-auto mb-2" />
                  <CardTitle className="text-primary text-lg">{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Achievements */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t("founder.notableAchievements")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("founder.notableAchievementsSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-background/50 transition-colors">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Portfolio Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">{t("founder.certifications")}</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t("founder.certificationsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Award className="w-5 h-5 mr-2 text-accent" />
                  {t("founder.professionalCertifications")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Business Development</span>
                  <Badge variant="secondary">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">International Trade</span>
                  <Badge variant="secondary">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Quality Management</span>
                  <Badge variant="secondary">Certified</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Virtual Assistant Training</span>
                  <Badge variant="secondary">Expert</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-accent" />
                  {t("founder.portfolioHighlights")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm">Medical Wear (USA)</h4>
                  <p className="text-xs text-muted-foreground">Hospital wear, thousands MOQ, end-to-end service</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Sport Shoes (Australia)</h4>
                  <p className="text-xs text-muted-foreground">Youth brand targeting 18-30 age group</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Eco-Friendly Products (USA)</h4>
                  <p className="text-xs text-muted-foreground">Bamboo products for Amazon marketplace</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Virtual Assistant Network</h4>
                  <p className="text-xs text-muted-foreground">14,000+ member community platform</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("founder.readyToWork")}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t("founder.readyToWorkSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Linkedin className="w-5 h-5 mr-2" />
              {t("founder.connectLinkedIn")}
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              {t("founder.scheduleConsultation")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Founder;