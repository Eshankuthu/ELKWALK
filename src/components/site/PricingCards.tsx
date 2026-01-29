import { services } from "@/content/services";
import { Badge } from "./Badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

const categoryIcons: Record<string, string> = {
  "Automation": "⚙️",
  "Voice": "📞",
  "SaaS": "🚀",
  "Healthcare QA": "🏥",
  "Doc Intelligence": "📄",
  "Marketing SEO": "📈",
  "Advisory": "💡",
};

const categoryLabels: Record<string, string> = {
  "AI Automation & Agent Development": "Automation",
  "AI Voice Agents": "Voice",
  "Custom AI SaaS Development": "SaaS",
  "AI for Healthcare & Enterprise QA": "Healthcare QA",
  "AI Data & Document Intelligence": "Doc Intelligence",
  "AI Marketing & SEO Automation": "Marketing SEO",
  "AI Strategy & Advisory": "Advisory",
};

export function PricingCards() {
  const pricingData = services.map((service) => ({
    title: service.title,
    slug: service.slug,
    pricingRange: service.pricingRange,
    category: service.category,
    categoryLabel: categoryLabels[service.title] || service.category,
    icon: categoryIcons[categoryLabels[service.title] || service.category] || "✨",
  }));

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {pricingData.map((item, index) => (
        <ScrollAnimation key={index} delay={index * 100} direction="up">
          <div className="bg-[#1A1A1A] rounded-xl border border-white/10 p-6 sm:p-8 hover:border-white/20 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{item.icon}</span>
              <Badge
                variant="outline"
                className="border-[#2196F3]/30 text-[#2196F3] text-xs"
              >
                {item.categoryLabel}
              </Badge>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-6">
              {item.title}
            </h3>
            
            <div className="space-y-3 mb-6">
              {item.pricingRange.setup && (
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">Setup:</span>
                  <span className="font-semibold text-white text-sm">
                    {item.pricingRange.setup}
                  </span>
                </div>
              )}
              {item.pricingRange.monthly && (
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">Monthly:</span>
                  <span className="font-semibold text-white text-sm">
                    {item.pricingRange.monthly}
                  </span>
                </div>
              )}
              {item.pricingRange.hourly && (
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">Hourly:</span>
                  <span className="font-semibold text-white text-sm">
                    {item.pricingRange.hourly}
                  </span>
                </div>
              )}
              {item.pricingRange.engagement && (
                <div className="flex justify-between items-center pb-3 border-b border-white/10">
                  <span className="text-white/70 text-sm">Engagement:</span>
                  <span className="font-semibold text-white text-sm">
                    {item.pricingRange.engagement}
                  </span>
                </div>
              )}
            </div>
            
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 bg-[#1A1A1A] border border-white text-white font-medium hover:bg-[#2A2A2A] transition-all text-sm"
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  );
}
