"use client";

import { useState } from "react";
import { Service } from "@/content/services";
import { HelpCircle, ChevronDown } from "lucide-react";

interface ServiceFAQProps {
  service: Service;
}

const faqItems = [
  {
    question: "How long does implementation typically take?",
    answer: "Most projects are implemented in 4-8 weeks, depending on complexity. We start with a discovery phase to understand your workflows, then build and deploy iteratively with regular feedback loops.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer monthly maintenance and support packages. Many clients choose ongoing support to ensure their AI systems continue performing optimally and to add new capabilities over time.",
  },
  {
    question: "Can this integrate with our existing systems?",
    answer: "Yes, we specialize in integrating AI solutions with existing tech stacks. We work with popular tools like Zapier, Make, and custom APIs to connect with your current systems seamlessly.",
  },
  {
    question: "What's the typical ROI timeline?",
    answer: "Most clients see ROI within 6-12 months through reduced labor costs, increased efficiency, and error reduction. We provide detailed ROI projections during the discovery phase.",
  },
];

export function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-50 rounded-lg">
          <HelpCircle className="h-5 w-5 text-blue-600" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      <div className="space-y-3">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
              aria-expanded={openIndex === index}
            >
              <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 pt-0 text-sm sm:text-base text-gray-600 leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
