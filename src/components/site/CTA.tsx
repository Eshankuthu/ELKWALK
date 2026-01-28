import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CTA({ title, description, primaryAction, secondaryAction, className }: CTAProps) {
  return (
    <section className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 ${className || ""}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {description && <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">{description}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryAction.href}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {primaryAction.label}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
