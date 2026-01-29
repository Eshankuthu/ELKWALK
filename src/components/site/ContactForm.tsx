"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
      serviceInterest: formData.get("serviceInterest") as string,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full h-11 px-4 rounded-xl glass border-white/10 text-white placeholder:text-cyan-200/50 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full h-11 px-4 rounded-xl glass border-white/10 text-white placeholder:text-cyan-200/50 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full h-11 px-4 rounded-xl glass border-white/10 text-white placeholder:text-cyan-200/50 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        />
      </div>
      <div>
        <label htmlFor="serviceInterest" className="block text-sm font-semibold text-white mb-2">
          Service Interest
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          className="w-full h-11 px-4 rounded-xl glass border-white/10 text-white focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        >
          <option value="">Select a service...</option>
          <option value="ai-workflow-automation">AI Workflow Automation</option>
          <option value="ai-voice-agents">AI Voice Agents</option>
          <option value="custom-ai-saas-development">Custom AI SaaS Development</option>
          <option value="ai-healthcare-enterprise-qa">AI for Healthcare & Enterprise QA</option>
          <option value="ai-data-document-intelligence">AI Data & Document Intelligence</option>
          <option value="ai-marketing-seo-automation">AI Marketing & SEO Automation</option>
          <option value="ai-strategy-advisory">AI Strategy & Advisory</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-xl glass border-white/10 text-white placeholder:text-cyan-200/50 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
        />
      </div>
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 glass border-red-400/30 rounded-xl text-red-300">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 glass border-green-400/30 rounded-xl text-green-300">
          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
          <span>Thank you! We'll be in touch soon.</span>
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full md:w-auto min-h-[48px] px-8 py-3.5 glass-strong text-white font-semibold rounded-xl hover:bg-cyan-500/20 hover:border-cyan-400/40 active:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 border-glow-cyan"
      >
        {status === "loading" ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
