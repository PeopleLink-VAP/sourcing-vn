import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero.jpg";
import { useI18n } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { 
  Factory, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  CheckCircle,
  Star,
  ArrowRight,
  Package,
  HeadphonesIcon,
  FileText,
  Calendar
} from "lucide-react";

const Index = () => {
  const { t } = useI18n();
  
  const benefits = [
    {
      icon: TrendingUp,
      title: t('whyVietnam.benefits.rapidlyEmerging'),
    },
    {
      icon: FileText,
      title: t('whyVietnam.benefits.favorableTrade'),
    },
    {
      icon: Globe,
      title: t('whyVietnam.benefits.competitivePricing'),
    },
    {
      icon: ShieldCheck,
      title: t('whyVietnam.benefits.diverseProductRange'),
    },
    {
      icon: Factory,
      title: t('whyVietnam.benefits.strategicProximity'),
    },
  ];

  const productServices = [
    { icon: Package, title: t('productSourcing.services.customizedFactoryLists') },
    { icon: ShieldCheck, title: t('productSourcing.services.sampleHandling') },
    { icon: CheckCircle, title: t('productSourcing.services.qualityInspection') },
    { icon: FileText, title: t('productSourcing.services.quotationAssistance') },
    { icon: Globe, title: t('productSourcing.services.logisticSupport') },
  ];

  const talentServices = [
    { icon: Users, title: t('talentSourcing.services.consultationMatching') },
    { icon: Calendar, title: t('talentSourcing.services.trialPeriod') },
    { icon: HeadphonesIcon, title: t('talentSourcing.services.dedicatedSupport') },
  ];

  const testimonials = [
    {
      content: t('testimonials.testimonial1.content'),
      author: t('testimonials.testimonial1.author'),
      location: t('testimonials.testimonial1.location')
    },
    {
      content: t('testimonials.testimonial2.content'),
      author: t('testimonials.testimonial2.author'),
      location: t('testimonials.testimonial2.location')
    }
  ];

  const newsItems = [
    {
      headline: t('news.item1.headline'),
      snippet: t('news.item1.snippet'),
      date: t('news.item1.date'),
      source: t('news.item1.source')
    },
    {
      headline: t('news.item2.headline'),
      snippet: t('news.item2.snippet'),
      date: t('news.item2.date'),
      source: t('news.item2.source')
    },
    {
      headline: t('news.item3.headline'),
      snippet: t('news.item3.snippet'),
      date: t('news.item3.date'),
      source: t('news.item3.source')
    }
  ];

  return (
    <main>
      <SEO
        title={t('seo.title')}
        description={t('seo.description')}
        image={heroImage}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto py-16 md:py-24 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="font-sentic text-4xl md:text-5xl font-bold leading-tight text-primary-foreground">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90 max-w-prose">
              {t('hero.description')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/product-sourcing">
                <Button variant="cta" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('hero.sourceProductsButton')}
                </Button>
              </Link>
              <Link to="/talent-sourcing">
                <Button variant="hero" size="lg" className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
                  {t('hero.hireTalentsButton')}
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={heroImage} alt="Vietnam sourcing and talent hub - connecting businesses with quality manufacturers" loading="eager" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Introduction to Sourcing.vn & Founder */}
      <section className="container mx-auto py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-sentic text-3xl font-bold text-primary mb-6">
            {t('intro.title')}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            {t('intro.description')}
          </p>
          <Link to="/founder">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              {t('intro.button')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Vietnam Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sentic text-3xl font-bold text-primary mb-4">
              {t('whyVietnam.title')}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <benefit.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">{benefit.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="container mx-auto py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Product Sourcing */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-sentic text-2xl text-primary">
                {t('productSourcing.title')}
              </CardTitle>
              <CardDescription className="text-base">
                {t('productSourcing.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {productServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <service.icon className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{service.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/product-sourcing">
                <Button variant="cta" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('productSourcing.button')}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Talent Sourcing */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-sentic text-2xl text-primary">
                {t('talentSourcing.title')}
              </CardTitle>
              <CardDescription className="text-base">
                {t('talentSourcing.description')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 mb-6">
                {talentServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <service.icon className="h-4 w-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{service.title}</span>
                  </div>
                ))}
              </div>
              <Link to="/talent-sourcing">
                <Button variant="cta" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  {t('talentSourcing.button')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto">
          <h2 className="font-sentic text-3xl font-bold text-primary mb-12 text-center">
            {t('testimonials.title')}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="text-sm">
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* News & Market Insights */}
      <section className="container mx-auto py-16">
        <div className="text-center mb-12">
          <h2 className="font-sentic text-3xl font-bold text-primary mb-12 text-center">
            {t('news.title')}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {newsItems.map((item, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-primary line-clamp-2">
                  {item.headline}
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {item.date} • {item.source}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {item.snippet}
                </p>
                <Link to="/news">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary p-0">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Link to="/news">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View All News & Market Insights
            </Button>
          </Link>
        </div>
      </section>

      {/* Resources & Blog Teaser */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto text-center">
          <h3 className="font-sentic text-2xl font-semibold text-primary mb-4">
            Valuable Insights & Guides
          </h3>
          <div className="max-w-3xl mx-auto mb-8">
            <ul className="text-muted-foreground space-y-2">
              <li>• Practical tips for successful collaboration with Vietnamese teams.</li>
              <li>• In-depth case studies and project breakdowns.</li>
              <li>• Frequently Asked Questions (FAQ) about Sourcing.vn's services and its connection to Second Brains and VirtualAssistantPro.vn.</li>
            </ul>
          </div>
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Visit Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Final Contact CTA */}
      <section className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="font-sentic text-3xl font-bold text-primary mb-4">
            Ready to Transform Your Sourcing Strategy?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Connect with us today to discover how Sourcing.vn can help you access Vietnam's finest products and talent.
          </p>
          <div className="space-y-4">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contact Us Now
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Or reach us via: contact@sourcing.vn | WhatsApp | Schedule a Call via Calendly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
