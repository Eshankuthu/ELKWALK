import { Metadata } from "next";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Badge } from "@/components/site/Badge";
import { CheckCircle2, Lightbulb, Rocket, RefreshCw } from "lucide-react";

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
  },
  {
    phase: "Build",
    description: "We develop your AI solution using modern tools and best practices, with regular updates and feedback loops.",
  },
  {
    phase: "Launch",
    description: "We deploy your system, train your team, and ensure everything works smoothly in production.",
  },
  {
    phase: "Iterate",
    description: "We monitor performance, gather feedback, and continuously improve your AI system to maximize value.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About ElkWalk"
          subtitle="We build AI systems that reduce cost, replace manual work, and generate revenue."
          className="text-center mb-16"
        />

        {/* Mission */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At ElkWalk, we believe AI should be practical, accessible, and transformative. We don't build AI for the sake of technology—we build AI systems that solve real business problems, reduce costs, and generate revenue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you're automating workflows, building custom SaaS products, or implementing AI-powered quality assurance, we work with you to deliver solutions that make a measurable impact on your business.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* How We Work */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How We Work</h2>
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.phase}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Note */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
            <p className="text-sm text-gray-600">
              When referencing immigration or legal use cases, our services are for educational and operational efficiency purposes only. 
              We do not provide legal advice. Clients should consult with qualified legal professionals for legal matters.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
