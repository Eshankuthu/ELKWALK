"use client";

import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ features, columns = 2 }: FeatureGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-[#1A1A1A] rounded-xl p-5 md:p-6 transition-all border border-white/10"
        >
          <div className="mb-4 text-white">
            {feature.icon}
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          {feature.description && (
            <p className="text-sm md:text-base text-white/80 leading-relaxed">
              {feature.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
