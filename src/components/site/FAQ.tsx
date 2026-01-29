"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-12 sm:py-16 md:py-20 ${className || ""}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center px-2">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl glass-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-4 sm:px-6 py-3.5 sm:py-4 min-h-[56px] text-left flex items-center justify-between transition-colors ${
                  openIndex === index
                    ? "bg-white/5"
                    : "hover:bg-white/5"
                }`}
              >
                <span className="font-semibold text-sm sm:text-base text-white pr-4">
                  {item.question}
                </span>
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full glass transition-all duration-200 flex-shrink-0 ${
                    openIndex === index
                      ? "text-cyan-400 rotate-180"
                      : "text-cyan-200/60"
                  }`}
                >
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-base text-cyan-50/80 border-t border-white/10 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
