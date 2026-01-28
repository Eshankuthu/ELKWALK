import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, services } from "@/content/services";
import { Badge } from "@/components/site/Badge";
import { CTA } from "@/components/site/CTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
              >
                ← Back to Services
              </Link>
              <Badge variant="outline" className="mb-4">{service.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600">{service.longDescription}</p>
            </div>

            {/* Outcomes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Expected Outcomes</h2>
              <div className="space-y-3">
                {service.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Use Cases</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <p className="text-gray-700">{useCase}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {service.techStack.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Ideal Clients */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ideal For</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.idealClients.map((client, index) => (
                  <li key={index}>{client}</li>
                ))}
              </ul>
            </section>

            {/* Pricing */}
            <section className="mb-12 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing</h2>
              <div className="space-y-2 mb-4">
                {service.pricingRange.setup && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Setup:</span>
                    <span className="font-semibold text-gray-900">{service.pricingRange.setup}</span>
                  </div>
                )}
                {service.pricingRange.monthly && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly:</span>
                    <span className="font-semibold text-gray-900">{service.pricingRange.monthly}</span>
                  </div>
                )}
                {service.pricingRange.hourly && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Hourly:</span>
                    <span className="font-semibold text-gray-900">{service.pricingRange.hourly}</span>
                  </div>
                )}
                {service.pricingRange.engagement && (
                  <div className="flex justify-between">
                    <span className="text-gray-700">Engagement:</span>
                    <span className="font-semibold text-gray-900">{service.pricingRange.engagement}</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-600">
                * Pricing varies by scope and requirements. Contact us for a custom quote.
              </p>
            </section>

            {/* CTA */}
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                Book a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
