import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { Calendar, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ElkWalk. Book a call, request a quote, or ask questions about our AI services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Let's discuss how AI can transform your operations. We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">Other ways to reach us</h2>
                <div className="space-y-6">
                  <div className="flex items-start p-6 bg-[#1A1A1A] rounded-xl border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center mr-4">
                      <Calendar className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 text-lg">Book a Call</h3>
                      <p className="text-white/80 mb-3 leading-relaxed">
                        Schedule a free consultation to discuss your AI needs.
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center text-[#2196F3] hover:text-[#42A5F5] font-medium transition-colors"
                      >
                        Calendly link here →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start p-6 bg-[#1A1A1A] rounded-xl border border-white/10 hover:border-white/20 transition-all">
                    <div className="flex-shrink-0 w-14 h-14 bg-[#1A1A1A] border border-white/10 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1 text-lg">Location</h3>
                      <p className="text-white/80 leading-relaxed">
                        Remote-first team serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-[#1A1A1A] rounded-xl border border-white/10">
                  <h3 className="font-semibold text-white mb-2 text-lg">Response Time</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    We typically respond to inquiries within 24 hours. For urgent matters, please mention it in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
