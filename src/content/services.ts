export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  outcomes: string[];
  techStack: string[];
  useCases: string[];
  idealClients: string[];
  pricingRange: {
    setup?: string;
    monthly?: string;
    hourly?: string;
    engagement?: string;
  };
  category: string;
}

export const services: Service[] = [
  {
    slug: "ai-automation-agent-development",
    title: "AI Automation & Agent Development",
    shortDescription: "Build intelligent agents that automate complex workflows and reduce manual work.",
    longDescription: "We develop custom AI agents that handle multi-step processes, decision-making, and integrations across your tech stack. From RPA replacement to intelligent document processing, our agents reduce operational costs while improving accuracy.",
    outcomes: [
      "Reduce manual work by 60-80%",
      "24/7 automated operations",
      "Error reduction through intelligent validation",
      "Scalable workflows that grow with your business",
      "ROI typically achieved within 6-12 months"
    ],
    techStack: ["OpenAI GPT-4", "Claude", "LangChain", "Python", "Node.js", "Zapier/Make", "Custom APIs"],
    useCases: [
      "Customer support ticket routing and response",
      "Invoice processing and accounting automation",
      "Data entry and form filling",
      "Email and document classification",
      "Multi-system data synchronization"
    ],
    idealClients: ["SMBs with repetitive workflows", "Growing companies scaling operations", "Teams drowning in manual tasks"],
    pricingRange: {
      setup: "$2,500–$10,000",
      monthly: "$500–$2,000"
    },
    category: "Automation"
  },
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents",
    shortDescription: "Conversational AI voice assistants that handle calls, bookings, and customer interactions.",
    longDescription: "Deploy AI voice agents that sound natural, understand context, and handle complex conversations. Perfect for appointment scheduling, customer support, lead qualification, and after-hours coverage.",
    outcomes: [
      "24/7 call handling capability",
      "Reduce call center costs by 40-60%",
      "Instant response times",
      "Consistent, professional interactions",
      "Multi-language support"
    ],
    techStack: ["Twilio", "Deepgram", "ElevenLabs", "OpenAI Whisper", "Custom LLM Integration"],
    useCases: [
      "Appointment booking and scheduling",
      "Customer support first-line response",
      "Lead qualification and routing",
      "After-hours call handling",
      "Order status and FAQ responses"
    ],
    idealClients: ["Healthcare practices", "Service businesses", "Real estate agencies", "Law firms"],
    pricingRange: {
      setup: "$3,000–$8,000",
      monthly: "Usage-based + monthly maintenance"
    },
    category: "Voice"
  },
  {
    slug: "custom-ai-saas-development",
    title: "Custom AI SaaS Development",
    shortDescription: "Build AI-powered SaaS products from MVP to scale with modern architecture.",
    longDescription: "We design and develop custom SaaS platforms with AI at the core. From MVP to production, we build scalable, secure applications that solve specific industry problems with intelligent automation.",
    outcomes: [
      "MVP launch in 8-12 weeks",
      "Scalable cloud architecture",
      "AI features that differentiate your product",
      "Modern tech stack for long-term maintenance",
      "Revenue-generating platform"
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase/Vercel", "OpenAI API", "Stripe", "AWS/Vercel"],
    useCases: [
      "Industry-specific AI tools",
      "B2B automation platforms",
      "AI-enhanced productivity apps",
      "Custom CRM with AI insights",
      "Niche market SaaS solutions"
    ],
    idealClients: ["SaaS startups", "Entrepreneurs with validated ideas", "Companies building internal tools"],
    pricingRange: {
      setup: "$15,000–$40,000",
      monthly: "$5,000+"
    },
    category: "SaaS"
  },
  {
    slug: "ai-healthcare-enterprise-qa",
    title: "AI for Healthcare & Enterprise QA",
    shortDescription: "AI-powered quality assurance and compliance for healthcare and regulated industries.",
    longDescription: "Specialized AI solutions for healthcare documentation, compliance checking, and quality assurance. We build systems that ensure accuracy, reduce liability, and streamline regulatory workflows.",
    outcomes: [
      "Reduce documentation errors by 70%+",
      "Faster compliance reviews",
      "Consistent quality standards",
      "Reduced liability risk",
      "Audit-ready documentation"
    ],
    techStack: ["HIPAA-compliant infrastructure", "Custom LLMs", "Document processing", "Compliance APIs"],
    useCases: [
      "Medical record review and QA",
      "Immigration document verification",
      "Legal document compliance checks",
      "Insurance claim validation",
      "Regulatory reporting automation"
    ],
    idealClients: ["Healthcare organizations", "Immigration law firms", "Regulated industries", "Quality assurance teams"],
    pricingRange: {
      hourly: "$150–$250/hr",
      setup: "Pilots $20k+"
    },
    category: "Healthcare QA"
  },
  {
    slug: "ai-data-document-intelligence",
    title: "AI Data & Document Intelligence",
    shortDescription: "Extract, analyze, and structure data from documents with AI-powered intelligence.",
    longDescription: "Transform unstructured documents into actionable data. Our systems extract key information, classify documents, and integrate insights into your workflows—handling everything from invoices to contracts.",
    outcomes: [
      "90%+ extraction accuracy",
      "Process documents 10x faster",
      "Structured data for analytics",
      "Automated document routing",
      "Searchable document archives"
    ],
    techStack: ["OCR (Tesseract, AWS Textract)", "LLM extraction", "Vector databases", "Document parsing APIs"],
    useCases: [
      "Invoice and receipt processing",
      "Contract analysis and extraction",
      "Form data extraction",
      "Document classification and routing",
      "Knowledge base creation"
    ],
    idealClients: ["Accounting firms", "Real estate agencies", "Legal practices", "Document-heavy operations"],
    pricingRange: {
      setup: "$5,000–$15,000",
      monthly: "Per-doc or monthly subscription"
    },
    category: "Doc Intelligence"
  },
  {
    slug: "ai-marketing-seo-automation",
    title: "AI Marketing & SEO Automation",
    shortDescription: "Automate content creation, SEO optimization, and marketing workflows with AI.",
    longDescription: "Scale your marketing efforts with AI-powered content generation, SEO optimization, social media automation, and lead nurturing. We build systems that create, optimize, and distribute content at scale.",
    outcomes: [
      "10x content production capacity",
      "Improved SEO rankings",
      "Automated social media posting",
      "Personalized email campaigns",
      "Reduced marketing overhead"
    ],
    techStack: ["OpenAI GPT-4", "Content APIs", "SEO tools", "Social media APIs", "Email automation"],
    useCases: [
      "Blog post and article generation",
      "SEO-optimized content creation",
      "Social media content scheduling",
      "Email campaign personalization",
      "Landing page A/B testing"
    ],
    idealClients: ["Marketing agencies", "Content teams", "SaaS companies", "E-commerce businesses"],
    pricingRange: {
      monthly: "$1,500–$4,000/month"
    },
    category: "Marketing SEO"
  },
  {
    slug: "ai-strategy-advisory",
    title: "AI Strategy & Advisory",
    shortDescription: "Strategic guidance on AI adoption, ROI analysis, and implementation roadmaps.",
    longDescription: "Get expert advice on how AI can transform your business. We assess opportunities, build implementation roadmaps, analyze ROI, and guide you through AI adoption with confidence.",
    outcomes: [
      "Clear AI adoption roadmap",
      "ROI projections and analysis",
      "Risk assessment and mitigation",
      "Vendor and technology selection",
      "Implementation planning"
    ],
    techStack: ["Strategic frameworks", "ROI modeling", "Technology assessment"],
    useCases: [
      "AI readiness assessment",
      "Use case identification",
      "Technology stack recommendations",
      "Implementation planning",
      "Team training and enablement"
    ],
    idealClients: ["Executives exploring AI", "Companies planning AI initiatives", "Teams needing strategic guidance"],
    pricingRange: {
      engagement: "$3,000–$7,500/engagement"
    },
    category: "Advisory"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((service) => service.category === category);
}
