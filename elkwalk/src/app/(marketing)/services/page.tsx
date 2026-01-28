import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceFilter } from "@/components/site/ServiceFilter";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive AI services: automation, voice agents, custom SaaS, healthcare QA, document intelligence, marketing automation, and strategy.",
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive AI solutions tailored to your business needs"
          className="text-center mb-12"
        />
        <ServiceFilter />
      </div>
    </div>
  );
}
