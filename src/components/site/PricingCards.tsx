import { services } from "@/content/services";
import { Badge } from "./Badge";

export function PricingCards() {
  const pricingData = services.map((service) => ({
    title: service.title,
    slug: service.slug,
    pricingRange: service.pricingRange,
    category: service.category,
  }));

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pricingData.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          <Badge variant="outline" className="mb-4">{item.category}</Badge>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
          <div className="space-y-2">
            {item.pricingRange.setup && (
              <div className="flex justify-between">
                <span className="text-gray-600">Setup:</span>
                <span className="font-semibold text-gray-900">{item.pricingRange.setup}</span>
              </div>
            )}
            {item.pricingRange.monthly && (
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly:</span>
                <span className="font-semibold text-gray-900">{item.pricingRange.monthly}</span>
              </div>
            )}
            {item.pricingRange.hourly && (
              <div className="flex justify-between">
                <span className="text-gray-600">Hourly:</span>
                <span className="font-semibold text-gray-900">{item.pricingRange.hourly}</span>
              </div>
            )}
            {item.pricingRange.engagement && (
              <div className="flex justify-between">
                <span className="text-gray-600">Engagement:</span>
                <span className="font-semibold text-gray-900">{item.pricingRange.engagement}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
