import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Badge } from "@/components/site/Badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from ElkWalk AI implementations. See how we've helped businesses reduce costs, automate workflows, and generate revenue.",
};

const caseStudies = [
  {
    title: "Healthcare Practice Automation",
    industry: "Healthcare",
    challenge: "A busy medical practice was spending over 20 hours per week on appointment scheduling, patient communication, and after-hours call handling. Staff were overwhelmed, and patients experienced delays in getting responses.",
    solution: "We implemented an AI voice agent that handles after-hours calls, answers common questions, and books appointments. The system integrates with their existing practice management software and provides 24/7 availability.",
    techUsed: ["Twilio", "OpenAI GPT-4", "ElevenLabs", "Practice Management API"],
    results: [
      "70% reduction in call handling time",
      "24/7 patient availability",
      "$15,000 annual savings in staffing costs",
      "Improved patient satisfaction scores",
      "Zero missed appointments due to after-hours calls",
    ],
    metrics: "70% time reduction, $15k annual savings",
  },
  {
    title: "Immigration Law Firm Document Processing",
    industry: "Legal",
    challenge: "An immigration law firm processes hundreds of documents weekly, including visa applications, supporting documents, and compliance forms. Manual processing led to errors, delays, and high labor costs.",
    solution: "We built a custom AI document intelligence system that extracts key information from documents, verifies completeness, flags potential issues, and organizes everything into structured data for case management.",
    techUsed: ["OCR (AWS Textract)", "Custom LLM", "Document Classification", "Case Management Integration"],
    results: [
      "90% accuracy in document extraction",
      "10x faster document processing",
      "Reduced errors by 85%",
      "Faster case preparation time",
      "Improved client satisfaction",
    ],
    metrics: "90% accuracy, 10x speed increase",
  },
  {
    title: "SaaS Customer Support Automation",
    industry: "SaaS",
    challenge: "A growing SaaS company was receiving hundreds of support tickets daily. Response times were slow, and the support team couldn't scale fast enough. Many tickets were repetitive and could be handled automatically.",
    solution: "We developed an AI agent that handles first-line support, routes complex issues to humans, and learns from previous interactions to improve responses over time.",
    techUsed: ["OpenAI GPT-4", "LangChain", "Zendesk API", "Custom Knowledge Base"],
    results: [
      "60% of tickets resolved automatically",
      "Average response time: instant (was 4 hours)",
      "Support team freed up for complex issues",
      "Improved customer satisfaction",
      "Scalable support without hiring",
    ],
    metrics: "60% auto-resolution, instant responses",
  },
  {
    title: "Real Estate Agency Lead Qualification",
    industry: "Real Estate",
    challenge: "A real estate agency receives dozens of inquiries daily but struggles to respond quickly and qualify leads effectively. Many leads go cold due to delayed responses.",
    solution: "We implemented an AI voice agent that answers calls, qualifies leads, schedules property viewings, and follows up automatically. The system integrates with their CRM.",
    techUsed: ["Twilio", "AI Voice Agent", "CRM Integration", "Calendar API"],
    results: [
      "100% of calls answered immediately",
      "40% increase in qualified leads",
      "Automated appointment scheduling",
      "Reduced missed opportunities",
      "Better lead tracking and follow-up",
    ],
    metrics: "100% call answer rate, 40% more qualified leads",
  },
  {
    title: "E-commerce Marketing Automation",
    industry: "E-commerce",
    challenge: "An e-commerce business needed to scale content creation, SEO optimization, and social media marketing but had limited marketing resources.",
    solution: "We built an AI-powered marketing automation system that generates SEO-optimized blog posts, creates social media content, and personalizes email campaigns at scale.",
    techUsed: ["OpenAI GPT-4", "Content APIs", "SEO Tools", "Social Media APIs", "Email Automation"],
    results: [
      "10x increase in content production",
      "Improved SEO rankings",
      "Automated social media posting",
      "Personalized email campaigns",
      "Reduced marketing overhead by 50%",
    ],
    metrics: "10x content production, 50% cost reduction",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Case Studies"
          subtitle="Real results from real clients. See how ElkWalk transforms businesses with AI."
          className="text-center mb-16"
        />

        <div className="space-y-12 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <article
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="outline">{study.industry}</Badge>
                <div className="text-sm font-semibold text-blue-600">{study.metrics}</div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{study.title}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h3>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-700">{study.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Technology Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.techUsed.map((tech, tIndex) => (
                      <Badge key={tIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Results</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
