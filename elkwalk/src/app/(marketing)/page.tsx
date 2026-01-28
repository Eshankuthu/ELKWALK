import { Metadata } from "next";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { ArrowRight, TrendingDown, Users, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "ElkWalk builds AI systems that reduce cost, replace manual work, and generate revenue. AI automation, voice agents, custom SaaS, and more.",
};

const faqItems = [
  {
    question: "How quickly can you implement an AI automation solution?",
    answer: "Most automation projects can be implemented in 4-8 weeks, depending on complexity. We start with a discovery phase to understand your workflows, then build and deploy iteratively.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work with SMBs, healthcare organizations, law firms, SaaS startups, real estate agencies, and other businesses looking to automate operations and reduce costs.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer monthly maintenance and support packages. Many clients choose ongoing support to ensure their AI systems continue performing optimally and to add new capabilities over time.",
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "We follow industry best practices for data security and can work with HIPAA-compliant infrastructure when needed. All data handling is documented and we can assist with compliance requirements.",
  },
  {
    question: "Can you integrate with our existing software?",
    answer: "Yes, we specialize in integrating AI solutions with existing tech stacks. We work with popular tools like Zapier, Make, and custom APIs to connect with your current systems.",
  },
  {
    question: "What's the typical ROI for AI automation projects?",
    answer: "Most clients see ROI within 6-12 months through reduced labor costs, increased efficiency, and error reduction. We provide ROI projections during the discovery phase.",
  },
  {
    question: "Do you offer AI strategy consulting?",
    answer: "Yes, we offer AI strategy and advisory services to help you identify opportunities, plan implementations, and assess ROI before committing to development.",
  },
  {
    question: "What makes ElkWalk different from other AI agencies?",
    answer: "We focus on practical, revenue-generating AI solutions with measurable outcomes. Our approach combines technical expertise with business understanding to deliver systems that truly transform operations.",
  },
];

const caseStudies = [
  {
    title: "Healthcare Practice Automation",
    industry: "Healthcare",
    challenge: "Medical practice spending 20+ hours/week on appointment scheduling and patient communication",
    solution: "AI voice agent for after-hours calls and appointment booking",
    result: "Reduced call handling time by 70%, improved patient satisfaction, 24/7 availability",
    metrics: "70% time reduction, $15k annual savings",
  },
  {
    title: "Legal Document Processing",
    industry: "Law Firm",
    challenge: "Immigration law firm processing hundreds of documents manually, high error rate",
    solution: "AI document intelligence system for extraction and verification",
    result: "90% accuracy in document processing, 10x faster turnaround, reduced errors",
    metrics: "90% accuracy, 10x speed increase",
  },
  {
    title: "SaaS Customer Support Automation",
    industry: "SaaS",
    challenge: "Growing SaaS company overwhelmed by support tickets, slow response times",
    solution: "AI agent for ticket routing and first-line response",
    result: "60% of tickets resolved automatically, 4-hour average response time reduced to instant",
    metrics: "60% auto-resolution, instant responses",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We build AI systems that{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                reduce cost, replace manual work, and generate revenue
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Custom AI automation, voice agents, and SaaS solutions for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingDown className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduce Cost</h3>
              <p className="text-gray-600">
                Automate repetitive tasks and reduce operational expenses by 40-60%
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Replace Manual Work</h3>
              <p className="text-gray-600">
                Free your team from repetitive work and focus on high-value activities
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate Revenue</h3>
              <p className="text-gray-600">
                Build AI-powered products and services that create new revenue streams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive AI solutions for every business need"
            className="text-center mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Tailored AI solutions for your industry"
            className="text-center mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {["SMBs", "Healthcare", "Law Firms", "SaaS Startups", "Real Estate"].map((industry) => (
              <div
                key={industry}
                className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              Learn More About Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Case Studies"
            subtitle="Real results from real clients"
            className="text-center mb-12"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Challenge:</strong> {study.challenge}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Solution:</strong> {study.solution}
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-1">Results:</div>
                  <div className="text-sm text-gray-600 mb-2">{study.result}</div>
                  <div className="text-sm font-semibold text-blue-600">{study.metrics}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Get Started Today"
              subtitle="Tell us about your project and we'll get back to you within 24 hours"
              className="text-center mb-12"
            />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Transform Your Business with AI?"
        description="Book a free consultation to discuss your AI automation needs"
        primaryAction={{ label: "Book a Call", href: "/contact" }}
        secondaryAction={{ label: "View Pricing", href: "/pricing" }}
      />
    </>
  );
}
