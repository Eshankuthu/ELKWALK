import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/content/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{service.shortDescription}</p>
      <div className="flex items-center text-blue-600 font-medium">
        Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
