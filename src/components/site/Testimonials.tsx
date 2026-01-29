"use client";

import { useState } from "react";
import { ScrollAnimation } from "./ScrollAnimation";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function Testimonials({ testimonials, className }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={`py-16 sm:py-20 bg-black ${className || ""}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Central Testimonial Card */}
        <div className="max-w-3xl mx-auto mb-8">
          <ScrollAnimation direction="up" delay={0}>
            <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-12 text-center border border-white/10">
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mb-4 border-2 border-white/20" />
                <div className="font-semibold text-white text-lg mb-1">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-sm text-white/80">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Testimonial Selector */}
        <div className="flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black ${
                activeIndex === index
                  ? "bg-[#1A1A1A] text-white border border-white/20"
                  : "bg-[#1A1A1A]/50 text-white/80 hover:text-white border border-white/10"
              }`}
              aria-label={`View testimonial from ${testimonial.name}`}
            >
              {testimonial.company}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
