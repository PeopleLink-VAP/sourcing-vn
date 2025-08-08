import { SEO } from "@/components/SEO";
import { useI18n } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare, Phone } from "lucide-react";

const Contact = () => {
  const { t } = useI18n();
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <SEO
        title={`${t("contact.title")} — Vietnam Sourcing Hub`}
        description="Get in touch: An Khanh ward, Thu Duc City, HCMC, Vietnam. contact@sourcing.vn."
      />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">{t("contact.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {t("contact.office")}
          </p>
          <p className="text-lg text-muted-foreground">
            {t("footer.email")}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-primary">{t("contact.emailUs")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">Send us a detailed message about your sourcing needs</p>
                <Button asChild className="w-full">
                  <a href="mailto:contact@sourcing.vn">
                    Email Now
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <MessageSquare className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-primary">{t("contact.whatsApp")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">Quick chat for immediate questions</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://wa.me/" target="_blank" rel="noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <Calendar className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-primary">{t("contact.calendly")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">Schedule a consultation call</p>
                <Button asChild variant="outline" className="w-full">
                  <a href="https://calendly.com/" target="_blank" rel="noreferrer">
                    Book Meeting
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8">
            Whether you need product sourcing or talent sourcing services, we're here to help you succeed in Vietnam's manufacturing and talent markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="mailto:contact@sourcing.vn">
                <Mail className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/case-studies">
                View Our Work
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
