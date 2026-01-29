import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/content/services";
import { Badge } from "@/components/site/Badge";
import { ArrowRight, CheckCircle2, ArrowLeft, Clock, Users, Shield, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ServiceSummary } from "@/components/site/ServiceSummary";
import { ServiceFAQ } from "@/components/site/ServiceFAQ";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
    openGraph: {
      title: service.title,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      name: "ElkWalk",
    },
    areaServed: "Worldwide",
    serviceType: service.category,
  };

  const isImmigrationRelated = service.slug.includes("healthcare") || service.category === "Healthcare QA";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1059D2] rounded-md px-2 py-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="outline" className="text-xs border-white/30 text-white">
                  {service.category}
                </Badge>
                <Badge variant="secondary" className="text-xs bg-[#1A1A1A] text-green-400 border-green-400/30">
                  Free Consultation
                </Badge>
                {isImmigrationRelated && (
                  <Badge variant="secondary" className="text-xs bg-[#1A1A1A] text-[#2196F3] border-[#2196F3]/30">
                    Educational Only
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl">
                {service.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#1A1A1A] border border-white text-white font-semibold rounded-full hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1059D2] transition-colors text-sm sm:text-base min-h-[44px]"
                >
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-full border border-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1059D2] transition-colors text-sm sm:text-base min-h-[44px]"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sticky Summary */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {/* Expected Outcomes */}
              <section id="outcomes" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-[#2196F3]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Expected Outcomes</h2>
                </div>
                <div className="space-y-3">
                  {service.outcomes.map((outcome, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[#1A1A1A] rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-white/80 leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Works */}
              <section id="how-it-works" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg">
                    <Clock className="h-5 w-5 text-[#2196F3]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">How It Works</h2>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 text-white font-semibold flex items-center justify-center text-sm">
                        1
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Discovery & Planning</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          We analyze your workflows, identify automation opportunities, and create a detailed implementation plan with ROI projections.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 text-white font-semibold flex items-center justify-center text-sm">
                        2
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Development & Integration</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          Our team builds and integrates your AI solution with regular updates and feedback loops to ensure alignment.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 text-white font-semibold flex items-center justify-center text-sm">
                        3
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Launch & Training</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          We deploy your system, train your team, and provide documentation for smooth adoption.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A1A] border border-white/10 text-white font-semibold flex items-center justify-center text-sm">
                        4
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Ongoing Support</h3>
                        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                          Continuous monitoring, optimization, and support to ensure your AI system delivers maximum value.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Use Cases */}
              <section id="use-cases" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg">
                    <FileText className="h-5 w-5 text-green-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Common Use Cases</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="p-5 bg-[#1A1A1A] rounded-xl border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <p className="text-white/80 leading-relaxed text-sm sm:text-base">{useCase}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* What You'll Need */}
              <section id="requirements" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg">
                    <Shield className="h-5 w-5 text-amber-400" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">What You'll Need</h2>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 leading-relaxed">Access to relevant systems and data sources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 leading-relaxed">Key stakeholder availability for discovery sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 leading-relaxed">Clear definition of success metrics and goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-2 flex-shrink-0"></div>
                      <span className="text-white/80 leading-relaxed">Budget approval for implementation and ongoing support</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Ideal Clients / Criteria */}
              <section id="criteria" className="scroll-mt-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-[#1A1A1A] border border-white/10 rounded-lg">
                    <Users className="h-5 w-5 text-[#2196F3]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Ideal For</h2>
                </div>
                <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8">
                  <ul className="space-y-3">
                    {service.idealClients.map((client, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#2196F3] flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 leading-relaxed">{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Technology Stack */}
              <section id="tech-stack" className="scroll-mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs sm:text-sm px-3 py-1.5 bg-[#1A1A1A] border border-white/10 text-white/90">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              {/* Educational Disclaimer */}
              {isImmigrationRelated && (
                <section className="scroll-mt-8">
                  <div className="bg-[#1A1A1A] border border-amber-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">Educational Disclaimer</h3>
                        <p className="text-sm text-white/80 leading-relaxed">
                          Our services are designed for educational and operational efficiency purposes only. We do not provide legal advice. For legal matters related to immigration or compliance, please consult with qualified legal professionals.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* FAQ */}
              <ServiceFAQ service={service} />

              {/* Related Tools / Services */}
              <section id="related" className="scroll-mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Related Services</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services
                    .filter((s) => s.slug !== service.slug && s.category === service.category)
                    .slice(0, 2)
                    .map((relatedService) => (
                      <Link
                        key={relatedService.slug}
                        href={`/services/${relatedService.slug}`}
                        className="group p-5 bg-[#1A1A1A] rounded-xl border border-white/10 hover:border-[#2196F3]/50 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#2196F3] focus:ring-offset-2 focus:ring-offset-black"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-white mb-2 group-hover:text-[#2196F3] transition-colors">
                              {relatedService.title}
                            </h3>
                            <p className="text-sm text-white/70 line-clamp-2">
                              {relatedService.shortDescription}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-white/60 group-hover:text-[#2196F3] transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </Link>
                    ))}
                </div>
              </section>
            </div>

            {/* Sticky Summary Card - Desktop */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-8">
                <ServiceSummary service={service} />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
