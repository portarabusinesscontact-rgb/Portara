import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Us | Portara",
  description: "Get in touch with Portara for sponsorship, bulk orders, press inquiries, or general questions.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">Get in touch</h1>
          <p className="text-xl text-muted-foreground text-balance">
            Have questions about sponsoring, bulk orders, or partnerships? We'd love to hear from you.
          </p>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-card">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </Section>

      {/* Contact Info */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:portarabusinesscontact@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                portarabusinesscontact@gmail.com
              </a>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Response Time</h3>
              <p className="text-muted-foreground">We typically respond within 24-48 hours</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
