import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ElkWalk - AI Automation & Custom AI Solutions",
    template: "%s | ElkWalk",
  },
  description: "We build AI systems that reduce cost, replace manual work, and generate revenue. AI workflow automation, voice agents, custom SaaS, document intelligence, and more.",
  keywords: ["AI automation", "AI agents", "voice AI", "custom AI SaaS", "healthcare AI", "document intelligence", "AI strategy"],
  authors: [{ name: "ElkWalk" }],
  creator: "ElkWalk",
  publisher: "ElkWalk",
  metadataBase: new URL("https://elkwalk.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elkwalk.ai",
    siteName: "ElkWalk",
    title: "ElkWalk - AI Automation & Custom AI Solutions",
    description: "We build AI systems that reduce cost, replace manual work, and generate revenue.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ElkWalk - AI Automation Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElkWalk - AI Automation & Custom AI Solutions",
    description: "We build AI systems that reduce cost, replace manual work, and generate revenue.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ElkWalk",
  url: "https://elkwalk.ai",
  logo: "https://elkwalk.ai/logo.png",
  description: "We build AI systems that reduce cost, replace manual work, and generate revenue.",
  sameAs: [
    "https://linkedin.com/company/elkwalk",
    "https://twitter.com/elkwalk",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@elkwalk.ai",
    contactType: "Customer Service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
