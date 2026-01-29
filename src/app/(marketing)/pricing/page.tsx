import { Metadata } from "next";
import { PricingCards } from "@/components/site/PricingCards";
import { CTA } from "@/components/site/CTA";
import { AlertCircle } from "lucide-react";
import { ScrollAnimation } from "@/components/site/ScrollAnimation";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for AI automation, voice agents, custom SaaS, healthcare QA, document intelligence, and more. Custom quotes available.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Pricing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Transparent pricing for all our AI services. Custom quotes available based on your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <PricingCards />
        </div>
      </section>

      {/* Pricing Disclaimer */}
      <section className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation delay={0} direction="up">
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 flex items-start">
                <AlertCircle className="h-6 w-6 text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-white mb-2">Pricing Disclaimer</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    All pricing is approximate and varies based on project scope, complexity, and specific requirements. 
                    We provide custom quotes after understanding your needs. Contact us for a detailed proposal tailored to your business.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Need a Custom Quote?"
        description="Tell us about your project and we'll provide a detailed proposal"
        primaryAction={{ label: "Get a Quote", href: "/contact" }}
        secondaryAction={{ label: "Book a Call", href: "/contact" }}
      />
    </>
  );
}
