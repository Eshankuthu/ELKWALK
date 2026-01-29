"use client";

import { useState } from "react";
import { Service } from "@/content/services";
import { ArrowRight, ChevronUp, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import Link from "next/link";

interface ServiceSummaryProps {
  service: Service;
}

export function ServiceSummary({ service }: ServiceSummaryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop: Always Visible Card */}
      <div className="hidden lg:block bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Quick Summary</h3>
        
        <div className="space-y-4 mb-6">
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Timeline
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>4-8 weeks typical</span>
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
              Pricing
            </div>
            <div className="space-y-2">
              {service.pricingRange.setup && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Setup:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.setup}</span>
                </div>
              )}
              {service.pricingRange.monthly && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Monthly:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.monthly}</span>
                </div>
              )}
              {service.pricingRange.hourly && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Hourly:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.hourly}</span>
                </div>
              )}
              {service.pricingRange.engagement && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Engagement:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.engagement}</span>
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500 mt-3">
              * Custom quotes available
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 space-y-3">
          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm min-h-[44px]"
          >
            Book a Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/pricing"
            className="w-full inline-flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm min-h-[44px]"
          >
            View Pricing
          </Link>
        </div>
      </div>

      {/* Mobile: Collapsible Bottom Sheet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-blue-50 rounded-lg">
              <DollarSign className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Get Started</div>
              <div className="text-xs text-gray-500">
                {service.pricingRange.setup || service.pricingRange.monthly || "Custom pricing"}
              </div>
            </div>
          </div>
          <ChevronUp
            className={`h-5 w-5 text-gray-400 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>

        {isExpanded && (
          <div className="px-4 pb-4 pt-2 border-t border-gray-100">
            <div className="space-y-4 mb-4">
              {service.pricingRange.setup && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Setup:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.setup}</span>
                </div>
              )}
              {service.pricingRange.monthly && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Monthly:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.monthly}</span>
                </div>
              )}
              {service.pricingRange.hourly && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Hourly:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.hourly}</span>
                </div>
              )}
              {service.pricingRange.engagement && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Engagement:</span>
                  <span className="font-semibold text-gray-900">{service.pricingRange.engagement}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Link
                href="/contact"
                onClick={() => setIsExpanded(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-sm min-h-[44px]"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsExpanded(false)}
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors text-sm min-h-[44px]"
              >
                View Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
