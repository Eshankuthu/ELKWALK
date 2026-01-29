import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-4" aria-label="ElkWalk AI home">
              <Image
                src="/ELK-WALK.png"
                alt="ElkWalk"
                width={180}
                height={48}
                className="h-11 w-auto object-contain object-left"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              We build AI systems that reduce cost, replace manual work, and generate revenue.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ai-automation-agent-development" className="text-white/80 hover:text-white transition-colors">
                  Automation & Agents
                </Link>
              </li>
              <li>
                <Link href="/services/ai-voice-agents" className="text-white/80 hover:text-white transition-colors">
                  Voice Agents
                </Link>
              </li>
              <li>
                <Link href="/services/custom-ai-saas-development" className="text-white/80 hover:text-white transition-colors">
                  Custom SaaS
                </Link>
              </li>
              <li>
                <Link href="/services/ai-healthcare-enterprise-qa" className="text-white/80 hover:text-white transition-colors">
                  Healthcare QA
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/80 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/80 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Connect</h4>
            <ul className="space-y-3 text-sm">
              {/* Contact information will be added here */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2026 ElkWalk LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
