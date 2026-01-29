import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/content/services";
import { Badge } from "@/components/site/Badge";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ScrollAnimation } from "@/components/site/ScrollAnimation";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI solutions for healthcare, law firms, real estate, SMBs, and SaaS startups. Industry-specific automation and intelligence.",
};

const industries = [
  {
    name: "Healthcare",
    description: "AI-powered quality assurance, documentation, and patient communication for healthcare organizations.",
    icon: "🏥",
    problems: [
      "Time-consuming documentation and record-keeping",
      "Compliance and quality assurance challenges",
      "After-hours patient communication",
      "Manual data entry and form processing",
    ],
    solutions: [
      services.find((s) => s.slug === "ai-healthcare-enterprise-qa"),
      services.find((s) => s.slug === "ai-voice-agents"),
      services.find((s) => s.slug === "ai-data-document-intelligence"),
      services.find((s) => s.slug === "ai-workflow-automation"),
    ],
    outcomes: [
      "70% reduction in documentation errors",
      "24/7 patient communication",
      "Faster compliance reviews",
      "Reduced administrative burden",
    ],
  },
  {
    name: "Law & Immigration",
    description: "Document intelligence, compliance checking, and automation for legal practices.",
    icon: "⚖️",
    problems: [
      "Hundreds of documents to process and verify",
      "High error rates in manual processing",
      "Compliance and accuracy requirements",
      "Time-consuming case preparation",
    ],
    solutions: [
      services.find((s) => s.slug === "ai-data-document-intelligence"),
      services.find((s) => s.slug === "ai-healthcare-enterprise-qa"),
      services.find((s) => s.slug === "ai-workflow-automation"),
      services.find((s) => s.slug === "ai-voice-agents"),
    ],
    outcomes: [
      "90% accuracy in document processing",
      "10x faster document turnaround",
      "Reduced liability through accuracy",
      "More time for client work",
    ],
    note: "Educational purposes only. Not legal advice.",
  },
  {
    name: "Real Estate",
    description: "AI automation for property management, document processing, and customer communication.",
    icon: "🏠",
    problems: [
      "High volume of inquiries and appointments",
      "Document-heavy transactions",
      "Repetitive administrative tasks",
      "After-hours customer service needs",
    ],
    solutions: [
      services.find((s) => s.slug === "ai-voice-agents"),
      services.find((s) => s.slug === "ai-workflow-automation"),
      services.find((s) => s.slug === "ai-data-document-intelligence"),
    ],
    outcomes: [
      "24/7 lead qualification",
      "Automated appointment scheduling",
      "Faster document processing",
      "Improved customer response times",
    ],
  },
  {
    name: "SMB Operations",
    description: "Cost-effective AI automation for small and medium businesses.",
    icon: "💼",
    problems: [
      "Limited resources for manual work",
      "Need to scale without hiring",
      "Repetitive workflows",
      "Cost constraints",
    ],
    solutions: [
      services.find((s) => s.slug === "ai-workflow-automation"),
      services.find((s) => s.slug === "ai-marketing-seo-automation"),
      services.find((s) => s.slug === "ai-data-document-intelligence"),
    ],
    outcomes: [
      "60-80% reduction in manual work",
      "ROI within 6-12 months",
      "Scalable operations",
      "Competitive advantage",
    ],
  },
  {
    name: "SaaS Startups",
    description: "Custom AI SaaS development and automation for tech companies.",
    icon: "🚀",
    problems: [
      "Need to differentiate with AI features",
      "Building MVP quickly",
      "Scaling customer support",
      "Content and marketing at scale",
    ],
    solutions: [
      services.find((s) => s.slug === "custom-ai-saas-development"),
      services.find((s) => s.slug === "ai-workflow-automation"),
      services.find((s) => s.slug === "ai-marketing-seo-automation"),
    ],
    outcomes: [
      "MVP launch in 8-12 weeks",
      "AI-powered differentiation",
      "Automated customer support",
      "Scalable content production",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Tailored AI solutions for your industry
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <ScrollAnimation key={index} delay={index * 100} direction="up">
                <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-8 md:p-12 hover:border-white/20 transition-all">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl">{industry.icon}</div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {industry.name}
                      </h2>
                      <p className="text-lg text-white/80 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#2196F3] rounded-full"></span>
                        Common Problems
                      </h3>
                      <ul className="space-y-3">
                        {industry.problems.map((problem, pIndex) => (
                          <li key={pIndex} className="flex items-start">
                            <span className="text-red-400 mr-3 mt-1">•</span>
                            <span className="text-white/80 leading-relaxed">{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#2196F3] rounded-full"></span>
                        Our Solutions
                      </h3>
                      <div className="space-y-3">
                        {industry.solutions
                          .filter((s): s is NonNullable<typeof s> => s !== undefined)
                          .map((solution, sIndex) => (
                            <Link
                              key={sIndex}
                              href={`/services/${solution.slug}`}
                              className="group flex items-center text-[#2196F3] hover:text-[#42A5F5] hover:gap-2 transition-all"
                            >
                              <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                              {solution.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-[#2196F3] rounded-full"></span>
                      Example Outcomes
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {industry.outcomes.map((outcome, oIndex) => (
                        <div
                          key={oIndex}
                          className="flex items-center gap-2 px-4 py-2 bg-[#1A1A1A] rounded-lg border border-white/10"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-400" />
                          <span className="text-sm font-medium text-white/90">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {industry.note && (
                    <div className="mt-8 p-4 bg-[#1A1A1A] rounded-xl border border-amber-500/30">
                      <p className="text-sm text-white/70">
                        <strong className="text-white">Note:</strong> {industry.note}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-[#1A1A1A] border border-white text-white font-semibold rounded-full hover:bg-[#2A2A2A] transition-all"
            >
              Discuss Your Industry Needs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
