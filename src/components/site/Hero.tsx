"use client";

import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  orbColor: "blue" | "purple";
  features: Array<{
    icon: ReactNode;
    title: string;
  }>;
  orbSize?: "large" | "medium";
}

export function Hero({ title, subtitle, description, orbColor, features, orbSize = "large" }: HeroProps) {
  const orbClass = orbColor === "blue" ? "orb-blue" : "orb-purple";
  const sizeClass = orbSize === "large" ? "w-64 h-64 md:w-80 md:h-80" : "w-48 h-48 md:w-64 md:h-64";

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                {title}
              </h1>
              <h2 className="text-2xl md:text-3xl text-white font-light mb-6">
                {subtitle}
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
          </div>

          {/* Right: Orb and Feature Grid */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Glowing Orb */}
            <div className={`${orbClass} ${sizeClass} rounded-full absolute z-0`} />
            
            {/* Feature Grid */}
            <div className={`relative z-10 grid ${features.length === 4 ? 'grid-cols-2' : 'grid-cols-1'} gap-4 ${orbSize === 'large' ? 'ml-8' : 'ml-4'}`}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] rounded-xl p-4 md:p-5 min-w-[200px] border border-white/10"
                >
                  <div className="mb-3 text-white">
                    {feature.icon}
                  </div>
                  <p className="text-sm md:text-base text-white leading-snug">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
