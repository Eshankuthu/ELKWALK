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
      className="group block glass-card rounded-2xl p-6 sm:p-8 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent"
    >
      <div className="mb-4">
        <span className="inline-block rounded-md glass px-2.5 py-1 text-xs font-medium text-cyan-300 border-cyan-400/20">
          {service.category}
        </span>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-cyan-50/80 mb-6 line-clamp-2 text-sm sm:text-base leading-relaxed">
        {service.shortDescription}
      </p>
      <div className="flex items-center text-cyan-400 font-medium text-sm group-hover:gap-2 transition-all">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
