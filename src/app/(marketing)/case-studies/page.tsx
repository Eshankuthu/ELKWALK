import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Badge } from "@/components/site/Badge";
import { ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { ScrollAnimation } from "@/components/site/ScrollAnimation";

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
    icon: "🏥",
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
    icon: "⚖️",
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
    icon: "🚀",
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
    icon: "🏠",
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
    icon: "🛒",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Real results from real clients
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <ScrollAnimation key={index} delay={index * 100} direction="up">
                <article className="bg-[#1A1A1A] rounded-xl border border-white/10 p-8 md:p-12 hover:border-white/20 transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{study.icon}</div>
                      <div>
                        <Badge variant="outline" className="mb-2 border-[#2196F3]/30 text-[#2196F3]">
                          {study.industry}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm font-semibold text-[#2196F3]">
                          <TrendingUp className="h-4 w-4" />
                          {study.metrics}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{study.title}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#2196F3] rounded-full"></span>
                        Challenge
                      </h3>
                      <p className="text-white/80 leading-relaxed">{study.challenge}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#2196F3] rounded-full"></span>
                        Solution
                      </h3>
                      <p className="text-white/80 leading-relaxed">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#2196F3] rounded-full"></span>
                        Technology Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {study.techUsed.map((tech, tIndex) => (
                          <Badge key={tIndex} variant="secondary" className="text-sm px-4 py-2 bg-[#1A1A1A] border border-white/10 text-white/90">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-[#2196F3] rounded-full"></span>
                        Results
                      </h3>
                      <ul className="space-y-3">
                        {study.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-white/80 leading-relaxed">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-[#1A1A1A] border border-white text-white font-semibold rounded-full hover:bg-[#2A2A2A] transition-all"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
