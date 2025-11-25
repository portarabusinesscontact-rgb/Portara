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
      <section id="contact" className="bg-[#F5F5F4] py-24">
  <div className="mx-auto max-w-4xl px-6">
    <div className="text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-[#0B3A67]">
        Get in touch
      </h2>
      <p className="mt-3 text-sm text-[#4B5563]">
        Have questions about sponsoring, bulk orders, or partnerships? We&apos;d
        love to hear from you.
      </p>
    </div>

    <div className="mt-10 flex justify-center">
      <ContactForm />
    </div>
  </div>
</section>


    </>
  )
}
