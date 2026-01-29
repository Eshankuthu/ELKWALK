"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { ServiceCard } from "./ServiceCard";

const categories = [
  "All",
  "Automation",
  "Voice",
  "SaaS",
  "Healthcare QA",
  "Doc Intelligence",
  "Marketing SEO",
  "Advisory",
];

export function ServiceFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 px-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2.5 min-h-[44px] rounded-lg font-medium text-xs sm:text-sm transition-all active:scale-95 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                : "bg-white border border-gray-200 text-gray-700 active:border-blue-500 active:text-blue-600 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-300 dark:active:border-blue-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </>
  );
}
