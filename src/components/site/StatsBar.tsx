"use client";

import { ScrollAnimation } from "./ScrollAnimation";
import { TrendingUp, Users, CheckCircle2, Zap } from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: Stat[] = [
  {
    value: "100+",
    label: "Projects Completed",
    icon: CheckCircle2,
  },
  {
    value: "50+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "85%",
    label: "Cost Reduction Avg",
    icon: TrendingUp,
  },
  {
    value: "4-8",
    label: "Weeks to Launch",
    icon: Zap,
  },
];

export function StatsBar() {
  return (
    <section className="py-12 sm:py-16 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <ScrollAnimation
                key={index}
                delay={index * 100}
                direction="up"
                className="text-center"
              >
                <div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 text-glow-cyan">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-cyan-200/70">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
