import { Metadata } from "next";
import { services } from "@/content/services";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/CTA";
import { FAQ } from "@/components/site/FAQ";
import { ContactForm } from "@/components/site/ContactForm";
import { ScrollAnimation } from "@/components/site/ScrollAnimation";
import { Testimonials } from "@/components/site/Testimonials";
import { ArrowRight, TrendingDown, Users, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "We build AI systems that reduce cost, replace manual work, and generate revenue. AI workflow automation, voice agents, custom SaaS, and more.",
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

const testimonials = [
  {
    name: "Mandy Andress",
    role: "CISO",
    company: "Elastic",
    content: "We have tried many different solutions to help us in this area and did not find any that could help us and maintain both quality and velocity. ElkWalk is by far the best for us.",
  },
  {
    name: "Dev Akhawe",
    role: "Head of Security",
    company: "Figma",
    content: "ElkWalk is easily one of the best investments we have made. Their turnaround time, due diligence and customer service is second to none.",
  },
  {
    name: "David Hwang",
    role: "Chief Customer Officer",
    company: "Grammarly",
    content: "ElkWalk offers the speed of AI and the precision of certified human analysts. They're more than just tech — they're accountable for outcomes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              We build AI systems that reduce cost, replace manual work, and generate revenue
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Custom AI automation, voice agents, and SaaS solutions for modern businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] bg-[#1A1A1A] border border-white text-white font-semibold rounded-full hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1059D2] transition-all text-sm sm:text-base"
              >
                Book a Call
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] bg-white text-black font-semibold rounded-full border border-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1059D2] transition-all text-sm sm:text-base"
              >
                View Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation direction="up" delay={0}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A1A1A] rounded-xl mb-6 border border-white/10">
                  <TrendingDown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Reduce Cost</h3>
                <p className="text-white/80 leading-relaxed">
                  Automate repetitive tasks and reduce operational expenses by 40-60%
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={100}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A1A1A] rounded-xl mb-6 border border-white/10">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Replace Manual Work</h3>
                <p className="text-white/80 leading-relaxed">
                  Free your team from repetitive work and focus on high-value activities
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={200}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A1A1A] rounded-xl mb-6 border border-white/10">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Generate Revenue</h3>
                <p className="text-white/80 leading-relaxed">
                  Build AI-powered products and services that create new revenue streams
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive AI solutions for every business need"
            className="text-center mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ScrollAnimation key={service.slug} delay={index * 100} direction="up">
                <ServiceCard service={service} />
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-[#2196F3] font-semibold hover:text-[#42A5F5] hover:gap-2 transition-all text-sm sm:text-base"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Tailored AI solutions for your industry"
            className="text-center mb-12"
          />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {["SMBs", "Healthcare", "Law Firms", "SaaS Startups", "Real Estate"].map((industry, index) => (
              <ScrollAnimation key={industry} delay={index * 50} direction="up">
                <div className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8 text-center border border-white/10 hover:border-white/20 transition-all">
                  <h3 className="text-base sm:text-lg font-semibold text-white">{industry}</h3>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center text-[#2196F3] font-semibold hover:text-[#42A5F5] hover:gap-2 transition-all text-sm sm:text-base"
            >
              Learn More About Industries
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Case Studies"
            subtitle="Real results from real clients"
            className="text-center mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ScrollAnimation delay={0} direction="up">
              <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#2196F3] bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#2196F3]/30">
                    Healthcare
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Healthcare Practice Automation
                </h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-1">Challenge</p>
                    <p className="text-sm text-white/80 leading-relaxed">Medical practice spending 20+ hours/week on appointment scheduling and patient communication</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-1">Solution</p>
                    <p className="text-sm text-white/80 leading-relaxed">AI voice agent for after-hours calls and appointment booking</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-medium text-white/60 mb-2">Results</p>
                  <p className="text-sm text-white/80 mb-2 leading-relaxed">Reduced call handling time by 70%, improved patient satisfaction, 24/7 availability</p>
                  <p className="text-sm font-bold text-[#2196F3]">70% time reduction, $15k annual savings</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={150} direction="up">
              <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#2196F3] bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#2196F3]/30">
                    Law Firm
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Legal Document Processing
                </h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-1">Challenge</p>
                    <p className="text-sm text-white/80 leading-relaxed">Immigration law firm processing hundreds of documents manually, high error rate</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-1">Solution</p>
                    <p className="text-sm text-white/80 leading-relaxed">AI document intelligence system for extraction and verification</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-medium text-white/60 mb-2">Results</p>
                  <p className="text-sm text-white/80 mb-2 leading-relaxed">90% accuracy in document processing, 10x faster turnaround, reduced errors</p>
                  <p className="text-sm font-bold text-[#2196F3]">90% accuracy, 10x speed increase</p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300} direction="up">
              <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8">
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#2196F3] bg-[#1A1A1A] px-3 py-1 rounded-full border border-[#2196F3]/30">
                    SaaS
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  SaaS Customer Support Automation
                </h3>
                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-1">Challenge</p>
                    <p className="text-sm text-white/80 leading-relaxed">Growing SaaS company overwhelmed by support tickets, slow response times</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/60 mb-1">Solution</p>
                    <p className="text-sm text-white/80 leading-relaxed">AI agent for ticket routing and first-line response</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-medium text-white/60 mb-2">Results</p>
                  <p className="text-sm text-white/80 mb-2 leading-relaxed">60% of tickets resolved automatically, 4-hour average response time reduced to instant</p>
                  <p className="text-sm font-bold text-[#2196F3]">60% auto-resolution, instant responses</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-[#2196F3] font-semibold hover:text-[#42A5F5] hover:gap-2 transition-all text-sm sm:text-base"
            >
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} className="bg-black" />

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Get Started Today"
              subtitle="Tell us about your project and we'll get back to you within 24 hours"
              className="text-center mb-12"
            />
            <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8">
              <ContactForm />
            </div>
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
