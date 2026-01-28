import Link from "next/link";
import { Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ElkWalk</h3>
            <p className="text-sm">
              We build AI systems that reduce cost, replace manual work, and generate revenue.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/ai-automation-agent-development" className="hover:text-white">Automation & Agents</Link></li>
              <li><Link href="/services/ai-voice-agents" className="hover:text-white">Voice Agents</Link></li>
              <li><Link href="/services/custom-ai-saas-development" className="hover:text-white">Custom SaaS</Link></li>
              <li><Link href="/services/ai-healthcare-enterprise-qa" className="hover:text-white">Healthcare QA</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/case-studies" className="hover:text-white">Case Studies</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@elkwalk.ai" className="flex items-center hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@elkwalk.ai
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-white" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ElkWalk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
