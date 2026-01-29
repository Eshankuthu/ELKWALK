export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: string;
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
}

export const services: Service[] = [
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    shortDescription: "AI agents that replace manual work and internal copilots for seamless automation.",
    longDescription: "We build AI workflow automation systems that eliminate repetitive tasks, reduce operational costs, and free your team to focus on high-value work. Our solutions include n8n automation (Zapier replacement), AI agents powered by ChatGPT/Claude/OpenAI API, and integrations with Email, Slack, CRM, and Airtable.",
    category: "Automation",
    outcomes: [
      "Reduce manual work by 60-80%",
      "Cut operational costs by 40-60%",
      "Improve process accuracy and consistency",
      "Enable 24/7 automated workflows",
      "Seamless integration with existing tools"
    ],
    techStack: [
      "n8n",
      "OpenAI API",
      "ChatGPT",
      "Claude",
      "Zapier",
      "Make",
      "Airtable",
      "Slack API",
      "CRM Integrations"
    ],
    useCases: [
      "Email automation and routing",
      "Slack notifications and workflows",
      "CRM data entry and updates",
      "Airtable record management",
      "Document intake and processing",
      "Internal copilots for team support"
    ],
    idealClients: [
      "SMBs looking to scale operations",
      "Healthcare organizations",
      "Law firms",
      "SaaS startups",
      "Teams with repetitive manual tasks"
    ],
    pricingRange: {
      setup: "$2,500 – $10,000 per automation",
      monthly: "$500 – $2,000 monthly support"
    }
  },
  {
    slug: "ai-voice-agents",
    title: "AI Voice Agents",
    shortDescription: "24/7 AI phone call agents for appointment booking, lead qualification, and customer support.",
    longDescription: "Deploy intelligent voice agents that handle calls 24/7, book appointments, qualify leads, and provide customer support. Perfect for immigration intake calls, healthcare scheduling, real estate leads, and customer support scenarios.",
    category: "Voice AI",
    outcomes: [
      "24/7 availability for customer calls",
      "Reduce call handling costs by 70%",
      "Improve lead qualification rates",
      "Automated appointment booking",
      "Consistent customer experience"
    ],
    techStack: [
      "Retell",
      "Twilio",
      "OpenAI",
      "Claude",
      "n8n",
      "Airtable",
      "CRM Systems"
    ],
    useCases: [
      "Immigration intake calls",
      "Healthcare appointment scheduling",
      "Real estate lead qualification",
      "Customer support automation",
      "After-hours call handling"
    ],
    idealClients: [
      "Healthcare practices",
      "Immigration law firms",
      "Real estate agencies",
      "SaaS companies",
      "Service businesses with high call volumes"
    ],
    pricingRange: {
      setup: "$3,000 – $8,000 setup",
      monthly: "Per-minute usage + monthly fee"
    }
  },
  {
    slug: "custom-ai-saas-development",
    title: "Custom AI SaaS Development",
    shortDescription: "Build AI-powered SaaS products from MVP to production with secure, scalable platforms.",
    longDescription: "We specialize in building custom AI-powered SaaS products that generate revenue. From MVP to production, we create secure, scalable platforms including immigration eligibility evaluators, QA copilots, compliance dashboards, and prediction engines.",
    category: "SaaS Development",
    outcomes: [
      "Launch AI-powered SaaS products",
      "Generate new revenue streams",
      "Secure and scalable architecture",
      "MVP to production in 8-12 weeks",
      "Modern tech stack with best practices"
    ],
    techStack: [
      "Next.js",
      "Vercel",
      "Supabase",
      "Prisma",
      "OpenAI API",
      "Vector DBs",
      "TypeScript",
      "Tailwind CSS"
    ],
    useCases: [
      "Immigration eligibility evaluators",
      "QA copilots for teams",
      "Compliance dashboards",
      "Prediction engines",
      "AI-powered business tools"
    ],
    idealClients: [
      "SaaS startups",
      "Entrepreneurs with AI product ideas",
      "Companies looking to build AI products",
      "Teams needing custom AI solutions"
    ],
    pricingRange: {
      setup: "$15,000 – $40,000 MVP",
      monthly: "$5,000+ ongoing development"
    }
  },
  {
    slug: "ai-healthcare-enterprise-qa",
    title: "AI for Healthcare & Enterprise QA",
    shortDescription: "AI-assisted test strategy, data quality copilots, and automated validation engines.",
    longDescription: "Our specialized AI solutions for healthcare and enterprise QA include AI-assisted test strategy, data quality copilots, and automated validation engines. We excel at AR aging anomaly detection, payroll validation bots, claims QA copilots, and rule-based + AI hybrid validation.",
    category: "Healthcare QA",
    outcomes: [
      "Improve QA accuracy by 90%+",
      "Reduce validation time by 75%",
      "Detect anomalies automatically",
      "Ensure compliance and data quality",
      "Hybrid rule-based + AI validation"
    ],
    techStack: [
      "OpenAI API",
      "Custom validation engines",
      "Rule-based systems",
      "Data quality tools",
      "Healthcare compliance frameworks"
    ],
    useCases: [
      "AR aging anomaly detection",
      "Payroll validation automation",
      "Claims QA copilots",
      "Healthcare data validation",
      "Enterprise quality assurance"
    ],
    idealClients: [
      "Healthcare organizations",
      "Enterprise companies",
      "Healthcare tech companies",
      "Organizations with complex QA needs"
    ],
    pricingRange: {
      hourly: "$150 – $250/hour consulting",
      engagement: "$20k+ enterprise pilots"
    }
  },
  {
    slug: "ai-data-document-intelligence",
    title: "AI Data & Document Intelligence",
    shortDescription: "Transform PDFs to structured data, extract evidence, and build knowledge bases with RAG.",
    longDescription: "Convert unstructured documents into actionable data. Our AI document intelligence solutions extract information from PDFs, build knowledge bases using RAG (Retrieval-Augmented Generation), and process immigration petitions, healthcare contracts, insurance documents, and SOPs.",
    category: "Document Intelligence",
    outcomes: [
      "Extract structured data from documents",
      "Build searchable knowledge bases",
      "Reduce document processing time by 80%",
      "Improve data accuracy",
      "Enable intelligent document search"
    ],
    techStack: [
      "OCR",
      "LLM (OpenAI/Claude)",
      "LangChain",
      "LlamaIndex",
      "Vector Search",
      "PDF Processing"
    ],
    useCases: [
      "Immigration petition processing",
      "Healthcare contract analysis",
      "Insurance document extraction",
      "SOP and policy knowledge bases",
      "Document evidence extraction"
    ],
    idealClients: [
      "Law firms",
      "Healthcare organizations",
      "Insurance companies",
      "Companies with document-heavy processes"
    ],
    pricingRange: {
      setup: "$5,000 – $15,000 setup",
      monthly: "Per-document or monthly pricing"
    }
  },
  {
    slug: "ai-marketing-seo-automation",
    title: "AI Marketing & SEO Automation",
    shortDescription: "AI content pipelines, SEO copilots, and answer-engine optimization (AEO) for better rankings.",
    longDescription: "Automate your marketing and SEO with AI-powered content pipelines, SEO copilots, and answer-engine optimization. We build blog generation systems, schema automation, AI FAQ engines, and ChatGPT-ranking optimization tools.",
    category: "Marketing Automation",
    outcomes: [
      "Increase organic traffic by 50-200%",
      "Automate content creation",
      "Improve search rankings",
      "Optimize for answer engines",
      "Scale content production"
    ],
    techStack: [
      "OpenAI API",
      "Content management systems",
      "SEO tools",
      "Schema markup",
      "Content automation"
    ],
    useCases: [
      "Blog generation and publishing",
      "Schema automation",
      "AI FAQ engines",
      "ChatGPT ranking optimization",
      "Content pipeline automation"
    ],
    idealClients: [
      "SaaS startups",
      "Marketing agencies",
      "Content teams",
      "Companies focused on SEO growth"
    ],
    pricingRange: {
      monthly: "$1,500 – $4,000/month"
    }
  },
  {
    slug: "ai-strategy-advisory",
    title: "AI Strategy & Advisory",
    shortDescription: "High-margin AI roadmap, tool selection, and governance consulting.",
    longDescription: "Get expert guidance on your AI strategy. We provide AI roadmaps, tool selection, governance & compliance (including Texas AI laws), use-case matrices, risk & ROI assessments, and architecture blueprints to set you up for success.",
    category: "Strategy",
    outcomes: [
      "Clear AI roadmap and strategy",
      "Informed tool selection",
      "Compliance and governance framework",
      "Risk and ROI assessment",
      "Architecture blueprint"
    ],
    techStack: [
      "Strategic frameworks",
      "Compliance tools",
      "ROI modeling",
      "Architecture design"
    ],
    useCases: [
      "AI use-case identification",
      "Tool selection and evaluation",
      "Governance and compliance planning",
      "Risk assessment",
      "Architecture design"
    ],
    idealClients: [
      "Enterprise companies",
      "Companies starting AI initiatives",
      "Organizations needing AI strategy",
      "Teams requiring compliance guidance"
    ],
    pricingRange: {
      engagement: "$3,000 – $7,500 per engagement"
    }
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: string): Service[] {
  return services.filter((service) => service.category === category);
}
