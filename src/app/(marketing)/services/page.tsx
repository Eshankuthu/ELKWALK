import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceFilter } from "@/components/site/ServiceFilter";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive AI services: automation, voice agents, custom SaaS, healthcare QA, document intelligence, marketing automation, and strategy.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              We build AI systems that reduce cost, replace manual work, and generate revenue
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive AI solutions tailored to your business needs"
            className="text-center mb-12"
          />
          <ServiceFilter />
        </div>
      </div>
    </>
  );
}
