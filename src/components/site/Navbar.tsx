"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/industries", label: "Industries" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-purple-500" />
            <span className="text-lg font-semibold text-white">
              ElkWalk
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#1A1A1A] border border-white rounded-full hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black transition-all"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 min-w-[44px] min-h-[44px] text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-full left-0 right-0 lg:hidden bg-black/95 backdrop-blur-md border-b border-white/10 shadow-xl z-50 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col py-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3.5 min-h-[44px] text-base font-medium text-white rounded-lg transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3.5 min-h-[44px] text-center text-base font-semibold text-white bg-[#1A1A1A] border border-white rounded-full hover:bg-[#2A2A2A] transition-all"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
