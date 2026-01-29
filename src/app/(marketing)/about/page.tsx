import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CheckCircle2, Lightbulb, Rocket, RefreshCw, Target, Users, Zap } from "lucide-react";
import { ScrollAnimation } from "@/components/site/ScrollAnimation";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ElkWalk's mission, principles, and how we build AI systems that transform businesses.",
};

const principles = [
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description: "We focus on AI that delivers measurable business value, not just technology for its own sake.",
  },
  {
    icon: Rocket,
    title: "Fast Implementation",
    description: "We move quickly from concept to deployment, getting you results in weeks, not months.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description: "Every project includes clear success metrics and ROI projections.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "We iterate and improve your AI systems over time to maximize value.",
  },
];

const processSteps = [
  {
    phase: "Discovery",
    description: "We understand your workflows, pain points, and goals. We identify automation opportunities and assess ROI.",
    icon: Target,
  },
  {
    phase: "Build",
    description: "We develop your AI solution using modern tools and best practices, with regular updates and feedback loops.",
    icon: Zap,
  },
  {
    phase: "Launch",
    description: "We deploy your system, train your team, and ensure everything works smoothly in production.",
    icon: Rocket,
  },
  {
    phase: "Iterate",
    description: "We monitor performance, gather feedback, and continuously improve your AI system to maximize value.",
    icon: RefreshCw,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              About ElkWalk
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              We build AI systems that reduce cost, replace manual work, and generate revenue.
            </p>
          </div>
        </div>
      </section>

      <div className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission */}
          <section className="max-w-4xl mx-auto mb-20">
            <ScrollAnimation delay={0} direction="up">
              <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A1A1A] border border-white/10 rounded-2xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-lg text-white/80 leading-relaxed mb-4">
                  We build AI systems that reduce cost, replace manual work, and generate revenue. We don't just do AI—we build practical solutions that deliver measurable business value and transform how you operate.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Whether you're automating workflows with n8n, building custom AI SaaS products, implementing voice agents, or deploying document intelligence systems, we work with you to deliver solutions that make a measurable impact on your business.
                </p>
              </div>
            </ScrollAnimation>
          </section>

          {/* Principles */}
          <section className="mb-20">
            <SectionHeading
              title="Our Principles"
              subtitle="The values that guide everything we do"
              className="text-center mb-16"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <ScrollAnimation key={index} delay={index * 100} direction="up">
                    <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-8 text-center transition-all hover:border-white/20">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1A1A1A] border border-white/10 rounded-2xl mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                      <p className="text-white/80 leading-relaxed">{principle.description}</p>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </section>

          {/* How We Work */}
          <section className="max-w-4xl mx-auto">
            <SectionHeading
              title="How We Work"
              subtitle="Our proven process for delivering AI solutions"
              className="text-center mb-16"
            />
            <div className="space-y-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <ScrollAnimation key={index} delay={index * 100} direction="up">
                    <div className="flex items-start bg-[#1A1A1A] rounded-xl border border-white/10 p-8 transition-all hover:border-white/20">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#1A1A1A] border border-white/10 text-white rounded-2xl flex items-center justify-center font-bold text-xl mr-6">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Icon className="h-6 w-6 text-[#2196F3]" />
                          <h3 className="text-2xl font-bold text-white">{step.phase}</h3>
                        </div>
                        <p className="text-white/80 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                );
              })}
            </div>
          </section>

          {/* Compliance Note */}
          <section className="max-w-4xl mx-auto mt-20">
            <ScrollAnimation delay={400} direction="up">
              <div className="bg-[#1A1A1A] rounded-xl border border-amber-500/30 p-8">
                <h3 className="font-semibold text-white mb-3 text-lg">Important Note</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  When referencing immigration or legal use cases, our services are for educational and operational efficiency purposes only. 
                  We do not provide legal advice. Clients should consult with qualified legal professionals for legal matters.
                </p>
              </div>
            </ScrollAnimation>
          </section>
        </div>
      </div>
    </>
  );
}
