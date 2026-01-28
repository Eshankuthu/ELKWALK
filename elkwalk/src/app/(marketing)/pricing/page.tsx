import { Metadata } from "next";
import { PricingCards } from "@/components/site/PricingCards";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for AI automation, voice agents, custom SaaS, healthcare QA, document intelligence, and more. Custom quotes available.",
};

export default function PricingPage() {
  return (
    <>
      <div className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Pricing"
            subtitle="Transparent pricing for all our AI services. Custom quotes available based on your specific needs."
            className="text-center mb-12"
          />

          <PricingCards />

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-900 mb-2">Pricing Disclaimer</h3>
                <p className="text-sm text-yellow-800">
                  All pricing is approximate and varies based on project scope, complexity, and specific requirements. 
                  We provide custom quotes after understanding your needs. Contact us for a detailed proposal tailored to your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA
        title="Need a Custom Quote?"
        description="Tell us about your project and we'll provide a detailed proposal"
        primaryAction={{ label: "Get a Quote", href: "/contact" }}
        secondaryAction={{ label: "Book a Call", href: "/contact" }}
      />
    </>
  );
}
