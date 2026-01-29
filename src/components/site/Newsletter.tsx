"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
    };

    try {
      // Placeholder API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#1059D2]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder-landscape.jpg')] bg-cover bg-center opacity-30 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            newsletter
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10">
            Get updates and valuable cybersecurity insights
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                required
                className="w-full h-12 px-4 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                required
                className="w-full h-12 px-4 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full h-12 px-4 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            />
            
            <p className="text-sm text-white text-left">
              By submitting your information, you agree to the processing of your personal data by ElkWalk as described in the{" "}
              <a href="/privacy" className="text-[#2196F3] hover:text-[#42A5F5] underline">
                Privacy Statement
              </a>
              .
            </p>

            {/* reCAPTCHA placeholder */}
            <div className="flex justify-start">
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="recaptcha" className="w-4 h-4" />
                  <label htmlFor="recaptcha" className="text-sm text-gray-900">
                    I'm not a robot
                  </label>
                </div>
              </div>
            </div>

            {status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle className="h-5 w-5 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === "success" && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full md:w-auto min-h-[48px] px-8 py-3 bg-white text-black font-semibold rounded-lg border border-black hover:bg-gray-100 active:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                "Subscribing..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
