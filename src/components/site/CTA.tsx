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
    <section className={`text-white py-16 sm:py-20 md:py-24 ${className || ""}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{title}</h2>
        {description && (
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-cyan-100/80 max-w-2xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Link
            href={primaryAction.href}
            className="group inline-flex items-center justify-center px-6 sm:px-8 py-3.5 min-h-[48px] glass-strong text-white font-semibold rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all text-sm sm:text-base border-glow-cyan"
          >
            {primaryAction.label}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 min-h-[48px] glass text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent transition-all text-sm sm:text-base"
            >
              {secondaryAction.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
