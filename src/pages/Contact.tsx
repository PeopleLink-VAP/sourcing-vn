import { SEO } from "@/components/SEO";
import { useI18n } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Calendar, MessageSquare, Building, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "contact.nameRequired"),
  company: z.string().optional(),
  email: z.string().email("contact.emailRequired"),
  projectType: z.string().min(1, "contact.selectProjectType"),
  message: z.string().min(1, "contact.messageRequired"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const { t } = useI18n();

  const { 
    control, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    alert(t("contact.messageSent"));
    reset();
  };

  const faqs = [
    {
      question: t('faq.whatIsSourcing'),
      answer: t('faq.whatIsSourcingAnswer')
    },
    {
      question: t('faq.isPlatform'),
      answer: t('faq.isPlatformAnswer')
    },
    {
      question: t('faq.relationship'),
      answer: t('faq.relationshipAnswer')
    }
  ];

  return (
    <main className="bg-gray-50">
      <SEO
        title={`${t("contact.title")} - Sourcing.vn`}
        description={t("contact.subtitle")}
      />

      {/* Hero Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto">
          <h1 className="font-sentic text-4xl md:text-5xl font-bold text-blue-900 mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 text-center">
          <a href="mailto:contact@sourcing.vn" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Mail className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-blue-900 mb-2">{t('contact.emailUs')}</h3>
            <p className="text-sm text-gray-500">{t('contact.emailDescription')}</p>
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <MessageSquare className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-blue-900 mb-2">{t('contact.whatsApp')}</h3>
            <p className="text-sm text-gray-500">{t('contact.whatsAppDescription')}</p>
          </a>
          <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="h-10 w-10 text-orange-500 mx-auto mb-4" />
            <h3 className="font-semibold text-blue-900 mb-2">{t('contact.calendly')}</h3>
            <p className="text-sm text-gray-500">{t('contact.scheduleDescription')}</p>
          </a>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 bg-white">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <h2 className="font-sentic text-3xl font-bold text-blue-900 mb-2">{t('contact.contactForm')}</h2>
            <p className="text-gray-600 mb-6">{t('contact.contactFormDescription')}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">{t('contact.name')}</Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input id="name" {...field} placeholder="John Doe" className="mt-1" />}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{t(errors.name.message as any)}</p>}
                </div>
                <div>
                  <Label htmlFor="company">{t('contact.company')}</Label>
                  <Controller
                    name="company"
                    control={control}
                    render={({ field }) => <Input id="company" {...field} placeholder={t('contact.companyOptional')} className="mt-1" />}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">{t('contact.emailAddress')}</Label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => <Input id="email" type="email" {...field} placeholder="you@example.com" className="mt-1" />}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{t(errors.email.message as any)}</p>}
              </div>
              <div>
                <Label htmlFor="projectType">{t('contact.projectType')}</Label>
                <Controller
                  name="projectType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger id="projectType" className="mt-1">
                        <SelectValue placeholder={t('contact.selectProjectType')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">{t('contact.productSourcing')}</SelectItem>
                        <SelectItem value="talent">{t('contact.talentSourcing')}</SelectItem>
                        <SelectItem value="both">{t('contact.both')}</SelectItem>
                        <SelectItem value="consultation">{t('contact.consultation')}</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.projectType && <p className="text-red-500 text-sm mt-1">{t(errors.projectType.message as any)}</p>}
              </div>
              <div>
                <Label htmlFor="message">{t('contact.message')}</Label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => <Textarea id="message" {...field} rows={5} placeholder={t('contact.messageDescription')} className="mt-1" />}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{t(errors.message.message as any)}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-orange-500 text-white hover:bg-orange-600 rounded-lg py-3">
                {isSubmitting ? t('contact.sending') : t('contact.sendMessage')}
              </Button>
            </form>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-sentic text-3xl font-bold text-blue-900 mb-2">{t('contact.faq')}</h2>
            <p className="text-gray-600 mb-6">{t('contact.faqSubtitle')}</p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-semibold text-blue-900">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">{t('faq.ourOffice')}</h3>
              <p className="text-gray-600">{t('contact.office')}</p>
              <h3 className="font-semibold text-blue-900 mt-4 mb-2">{t('faq.email')}</h3>
              <p className="text-gray-600">{t('contact.email')}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
