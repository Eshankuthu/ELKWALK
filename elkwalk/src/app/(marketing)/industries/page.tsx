import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services } from "@/content/services";
import { Badge } from "@/components/site/Badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description: "AI solutions for healthcare, law firms, real estate, SMBs, and SaaS startups. Industry-specific automation and intelligence.",
};

const industries = [
  {
    name: "Healthcare",
    description: "AI-powered quality assurance, documentation, and patient communication for healthcare organizations.",
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
    problems: [
      "Hundreds of documents to process and verify",
      "High error rates in manual processing",
      "Compliance and accuracy requirements",
      "Time-consuming case preparation",
    ],
    solutions: [
      services.find((s) => s.slug === "ai-data-document-intelligence"),
      services.find((s) => s.slug === "ai-healthcare-enterprise-qa"),
      services.find((s) => s.slug === "ai-automation-agent-development"),
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
    problems: [
      "High volume of inquiries and appointments",
      "Document-heavy transactions",
      "Repetitive administrative tasks",
      "After-hours customer service needs",
    ],
    solutions: [
      services.find((s) => s.slug === "ai-voice-agents"),
      services.find((s) => s.slug === "ai-automation-agent-development"),
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
    problems: [
      "Limited resources for manual work",
      "Need to scale without hiring",
      "Repetitive workflows",
      "Cost constraints",
    ],
    solutions: [
      services.find((s) => s.slug === "ai-automation-agent-development"),
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
    problems: [
      "Need to differentiate with AI features",
      "Building MVP quickly",
      "Scaling customer support",
      "Content and marketing at scale",
    ],
    solutions: [
      services.find((s) => s.slug === "custom-ai-saas-development"),
      services.find((s) => s.slug === "ai-automation-agent-development"),
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
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Tailored AI solutions for your industry's unique challenges"
          className="text-center mb-16"
        />

        <div className="space-y-16 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">{industry.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{industry.description}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Problems</h3>
                  <ul className="space-y-2">
                    {industry.problems.map((problem, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solutions</h3>
                  <div className="space-y-2">
                    {industry.solutions
                      .filter((s): s is NonNullable<typeof s> => s !== undefined)
                      .map((solution, sIndex) => (
                        <Link
                          key={sIndex}
                          href={`/services/${solution.slug}`}
                          className="block text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          → {solution.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Outcomes</h3>
                <div className="flex flex-wrap gap-2">
                  {industry.outcomes.map((outcome, oIndex) => (
                    <Badge key={oIndex} variant="secondary">
                      {outcome}
                    </Badge>
                  ))}
                </div>
              </div>

              {industry.note && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <strong>Note:</strong> {industry.note}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Discuss Your Industry Needs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
