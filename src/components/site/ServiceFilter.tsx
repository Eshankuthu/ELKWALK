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
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                : "bg-white border border-gray-300 text-gray-700 hover:border-blue-500"
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
