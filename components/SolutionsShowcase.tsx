"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  Server,
  Database,
  Cpu,
  BarChart3,
  CreditCard,
  HeartPulse,
  ShoppingBag,
  Building2,
  Workflow,
  Radio,
  FileCheck2,
  Network,
  Activity,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

interface SolutionItem {
  id: string;
  code: string;
  title: string;
  category: string;
  filterTab: string;
  tagline: string;
  metric: string;
  metricSub: string;
  description: string;
  challenges: string[];
  blueprintItems: string[];
  techStack: string[];
  compliance: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const solutionsList: SolutionItem[] = [
  {
    id: "fintech",
    code: "SOL-01",
    title: "High-Throughput FinTech & Transaction Engines",
    category: "Financial Technology",
    filterTab: "FinTech & Banking",
    tagline: "Sub-15ms idempotent transaction processing with bank-grade encryption",
    metric: "120,000+ TPS",
    metricSub: "Zero ledger drift & ACID consistency",
    description:
      "Engineered for neo-banks, algorithmic trading desks, and high-volume payment orchestrators. We architect distributed double-entry ledger platforms that guarantee zero race conditions under severe network volatility.",
    challenges: [
      "Eliminating double-spend exploits across asynchronous distributed nodes",
      "P99 latency exceeding SLAs during flash transaction surges",
      "Rigid regulatory compliance (PCI-DSS Level 1, ISO 27001)",
    ],
    blueprintItems: [
      "Event-driven Kafka streaming pipeline with distributed saga patterns",
      "In-memory Redis enterprise caching cluster for instant balance checks",
      "Encrypted tokenization vault with hardware security module (HSM) hooks",
      "Automated fraud detection engine running real-time anomaly inference",
    ],
    techStack: ["Next.js", "Node.js", "Kafka", "Redis Enterprise", "MongoDB Atlas", "Docker"],
    compliance: ["PCI-DSS Level 1", "SOC-2 Type II", "ISO 27001"],
    icon: CreditCard,
  },
  {
    id: "healthtech",
    code: "SOL-02",
    title: "HIPAA-Hardened Healthcare & Clinical Data Systems",
    category: "Digital Healthcare",
    filterTab: "Healthcare & HIPAA",
    tagline: "Zero-Trust medical data pipelines with real-time FHIR/HL7 telemetry",
    metric: "100% HIPAA Ready",
    metricSub: "End-to-end cryptographic patient isolation",
    description:
      "Purpose-built for telehealth providers, diagnostic platforms, and digital health networks. We implement secure, audited cloud architectures that safely process electronic health records (EHR) and biometric streaming telemetry.",
    challenges: [
      "Strict HIPAA and HITECH privacy constraints across mobile & web endpoints",
      "Complex integration with legacy HL7 v2 and modern FHIR medical protocols",
      "Secure patient video consultations with latency under 120ms globally",
    ],
    blueprintItems: [
      "Field-level AES-256-GCM data encryption with rotated customer-managed keys",
      "FHIR REST API gateway with automated schema validation and access audits",
      "WebRTC audio/video infrastructure with end-to-end encrypted signaling",
      "Immutable BAA-compliant audit logs tracking all clinician access events",
    ],
    techStack: ["Next.js", "TypeScript", "FHIR / HL7", "MongoDB", "WebRTC", "AWS GovCloud"],
    compliance: ["HIPAA Compliant", "HITECH Certified", "BAA Ready"],
    icon: HeartPulse,
  },
  {
    id: "saas",
    code: "SOL-03",
    title: "Multi-Tenant Enterprise SaaS Infrastructure",
    category: "B2B SaaS Architectures",
    filterTab: "Enterprise SaaS",
    tagline: "Elastic multi-tenant partitioning with automated billing & RBAC",
    metric: "40% FinOps Savings",
    metricSub: "Sub-second tenant provisioning & isolation",
    description:
      "Built for venture-backed founders and scaling B2B platforms. We deliver multi-tenant SaaS foundations with isolated tenant data tiers, flexible role-based access control, and usage-based metered billing engines.",
    challenges: [
      "Tenant noisy-neighbor problems degrading query performance for large accounts",
      "Complex custom domain SSL generation and enterprise SAML / SSO onboarding",
      "Handling tier-based feature gating and asynchronous Stripe billing webhooks",
    ],
    blueprintItems: [
      "Dynamic tenant routing with schema-level MongoDB partitioning & indexes",
      "Automated automated SSL certificate provisioning for custom client domains",
      "Enterprise Single Sign-On (Okta, Azure AD, SAML 2.0) with granular permissions",
      "Real-time event logging telemetry with tenant-specific usage quotas",
    ],
    techStack: ["Next.js 16", "React Server Components", "MongoDB", "Tailwind CSS", "Stripe API"],
    compliance: ["SOC-2 Type II", "GDPR", "CCPA"],
    icon: Building2,
  },
  {
    id: "ecommerce",
    code: "SOL-04",
    title: "Headless High-Frequency Commerce Platforms",
    category: "Omnichannel Commerce",
    filterTab: "E-Commerce & Retail",
    tagline: "Global edge storefronts handling 50k requests/sec flash sale elasticity",
    metric: "< 35ms Edge Latency",
    metricSub: "+48% Average mobile checkout conversion",
    description:
      "Tailored for high-growth direct-to-consumer (D2C) brands and omnichannel retailers. We build headless commerce architectures powered by edge rendering, instant inventory locking, and unified multi-currency checkout.",
    challenges: [
      "Monolithic CMS crashes during viral social launches and holiday flash sales",
      "High cart abandonment caused by slow mobile render times (> 2.5s)",
      "Inventory race conditions leading to overselling scarce product SKUs",
    ],
    blueprintItems: [
      "Edge-rendered product catalog with incremental static regeneration (ISR)",
      "Distributed optimistic lock reservation service preventing double-booking",
      "One-click frictionless checkout with Apple Pay, Google Pay, and Klarna",
      "Omnichannel ERP integration synchronizing warehouse inventory in real time",
    ],
    techStack: ["Next.js", "Edge Middleware", "Shopify / Medusa", "Redis", "MongoDB"],
    compliance: ["PCI-DSS Level 1", "GDPR Compliant", "WCAG 2.1 AA"],
    icon: ShoppingBag,
  },
  {
    id: "aiops",
    code: "SOL-05",
    title: "Private Enterprise GenAI & Autonomous Workflows",
    category: "Applied Artificial Intelligence",
    filterTab: "AI & Autonomous Ops",
    tagline: "Proprietary RAG knowledge systems with zero external data leakage",
    metric: "10x Operational Speed",
    metricSub: "Zero enterprise training data contamination",
    description:
      "Designed for enterprises seeking to operationalize large language models securely. We build private retrieval-augmented generation (RAG) pipelines and autonomous agent teams that analyze confidential documents and automate back-office workflows.",
    challenges: [
      "Risk of proprietary corporate data leaking into public LLM training datasets",
      "Hallucination rates rendering AI outputs unreliable for mission-critical tasks",
      "High API token costs and unpredictable inference latency under load",
    ],
    blueprintItems: [
      "Private vector search embedding pipeline (Atlas Vector Search & Pinecone)",
      "Strict RBAC document permission filters enforcing user clearance before inference",
      "Multi-agent task orchestrator with human-in-the-loop review boundaries",
      "Semantic prompt caching and fine-tuned lightweight open-weight models",
    ],
    techStack: ["Python", "LangChain", "OpenAI / Claude", "MongoDB Vector Search", "Next.js"],
    compliance: ["SOC-2 Type II", "Zero-Data Retention SLA", "ISO 42001"],
    icon: Cpu,
  },
];

const architectureLayers = [
  {
    step: "01",
    name: "Global Edge & Ingress Tier",
    badge: "Edge Security",
    desc: "Next.js edge middleware routing, rate limiting, and DDoS mitigation with global low-latency CDN presence.",
    icon: Radio,
    items: ["Edge JWT Verification", "DDoS Mitigation (Cloudflare)", "Bot & Threat Scrubbing"],
  },
  {
    step: "02",
    name: "Application & Microservices",
    badge: "Containerized Core",
    desc: "Kubernetes orchestrated microservices and serverless endpoints designed for horizontal autoscaling.",
    icon: Server,
    items: ["Asynchronous Event Sagas", "Stateless Next.js Workers", "Graceful Degradation"],
  },
  {
    step: "03",
    name: "High-Availability Data Tier",
    badge: "Resilient Persistence",
    desc: "Multi-region sharded MongoDB Atlas clusters with sub-millisecond in-memory Redis caching.",
    icon: Database,
    items: ["Encrypted Cold Archival", "Read-Replica Balancing", "Sub-15ms Query Response"],
  },
  {
    step: "04",
    name: "Continuous Telemetry & SLA",
    badge: "Zero-Downtime Ops",
    desc: "24/7 real-time telemetry, OpenTelemetry distributed tracing, and automated zero-downtime rolling cutovers.",
    icon: Activity,
    items: ["99.999% SLA Guarantee", "Automated Health Self-Healing", "Continuous Compliance Checks"],
  },
];

const caseStudies = [
  {
    client: "Apex Global Capital",
    industry: "Algorithmic Trading & FinTech",
    headline: "Zero Ledger Drift Across $45M Daily Transaction Volume",
    stats: [
      { label: "Execution Latency", value: "11.4ms" },
      { label: "Uptime Record", value: "100.0%" },
      { label: "FinOps Reduction", value: "38%" },
    ],
    quote:
      "“VentureTech re-engineered our core ledger from scratch. The distributed architecture handles our peak morning surges with zero downtime and sub-15ms roundtrip times.”",
    author: "David Chen, Chief Technology Officer",
  },
  {
    client: "PulseHealth Telemedicine",
    industry: "Clinical HealthTech",
    headline: "HIPAA-Certified Patient Portal Scaling to 450,000 Active Members",
    stats: [
      { label: "Active Patients", value: "450k+" },
      { label: "FHIR Sync Latency", value: "65ms" },
      { label: "Audit Compliance", value: "Zero Findings" },
    ],
    quote:
      "“Their strict adherence to zero-trust encryption and HIPAA standards allowed us to pass our enterprise hospital partner security audits on the first pass.”",
    author: "Elena Rostova, VP of Engineering",
  },
];

export default function SolutionsShowcase() {
  const [activeTab, setActiveTab] = useState("All Solutions");
  const [selectedSolution, setSelectedSolution] = useState<string>("fintech");

  const tabs = [
    "All Solutions",
    "FinTech & Banking",
    "Healthcare & HIPAA",
    "Enterprise SaaS",
    "E-Commerce & Retail",
    "AI & Autonomous Ops",
  ];

  const filteredSolutions =
    activeTab === "All Solutions"
      ? solutionsList
      : solutionsList.filter((item) => item.filterTab === activeTab);

  return (
    <div className="w-full relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section
        className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b overflow-hidden"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border-light)",
        }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.04) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border select-none"
              style={{
                background: "var(--silver-light)",
                borderColor: "var(--border-light)",
                color: "var(--text-secondary)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ background: "var(--accent)" }}
              />
              <span>ENTERPRISE ARCHITECTURES &amp; INDUSTRY SOLUTIONS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              Mission-Critical Solutions{" "}
              <span
                className="inline-block relative"
                style={{
                  color: "var(--accent)",
                }}
              >
                Engineered to Scale.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-base sm:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              From bank-grade double-entry ledgers to HIPAA-compliant clinical systems and private
              generative AI pipelines — explore production-hardened software blueprints custom-built
              for high-stakes organizations.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5"
            >
              <Link
                href="/contact?topic=blueprint"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--graphite)",
                  color: "var(--text-white)",
                }}
              >
                <Sparkles className="w-4 h-4" style={{ color: "var(--accent-light)" }} />
                <span>Request Custom Architecture Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#solutions-matrix"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold border transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                  color: "var(--text-primary)",
                }}
              >
                <span>Browse Industry Blueprints</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Key Telemetry Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
            >
              {[
                { label: "Global Redundancy", value: "99.999% SLA", icon: ShieldCheck },
                { label: "P99 Execution Time", value: "< 25ms Edge", icon: Zap },
                { label: "Compliance Standards", value: "SOC-2 & HIPAA", icon: Lock },
                { label: "Cloud Optimization", value: "40% Cost Savings", icon: TrendingUp },
              ].map((pill, i) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-light)",
                    }}
                  >
                    <Icon className="w-4 h-4 mb-1.5" style={{ color: "var(--accent)" }} />
                    <div
                      className="text-xs sm:text-sm font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {pill.value}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-wider font-semibold mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {pill.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SOLUTIONS MATRIX & INTERACTIVE FILTER
      ======================================================== */}
      <section id="solutions-matrix" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            ARCHITECTURE BLUEPRINTS BY DOMAIN
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Tailored Solutions For High-Growth Sectors
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Select an industry sector below to examine our hardened architectural patterns, compliance
            models, and quantified performance outcomes.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => {
            const isCurrent = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer"
                style={{
                  background: isCurrent ? "var(--graphite)" : "var(--bg-secondary)",
                  color: isCurrent ? "var(--text-white)" : "var(--text-secondary)",
                  borderColor: isCurrent ? "var(--graphite)" : "var(--border-light)",
                  boxShadow: isCurrent ? "0 4px 14px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-lg"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                  }}
                >
                  <div className="space-y-5">
                    {/* Top Row: Code & Category */}
                    <div className="flex items-center justify-between gap-3 border-b pb-4" style={{ borderColor: "var(--border-light)" }}>
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border"
                          style={{
                            background: "var(--silver-light)",
                            borderColor: "var(--border-light)",
                            color: "var(--accent)",
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span
                            className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border"
                            style={{
                              background: "var(--bg-primary)",
                              borderColor: "var(--border-light)",
                              color: "var(--text-muted)",
                            }}
                          >
                            {item.code}
                          </span>
                          <span
                            className="text-xs font-semibold ml-2"
                            style={{ color: "var(--accent)" }}
                          >
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Performance Metric Badge */}
                      <div className="text-right">
                        <div
                          className="text-sm font-black tracking-tight"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {item.metric}
                        </div>
                        <div
                          className="text-[10px] font-medium"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {item.metricSub}
                        </div>
                      </div>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3
                        className="text-xl font-bold tracking-tight mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm font-medium leading-snug mb-3"
                        style={{ color: "var(--accent-dark)" }}
                      >
                        {item.tagline}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.description}
                      </p>
                    </div>

                    {/* Architectural Challenges Solved */}
                    <div
                      className="p-4 rounded-xl border space-y-2"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                      }}
                    >
                      <div
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Core Engineering Challenges Solved
                      </div>
                      <ul className="space-y-1.5">
                        {item.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                            <span className="text-[10px] mt-0.5 font-bold" style={{ color: "var(--accent)" }}>
                              ▸
                            </span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture Blueprint Deliverables */}
                    <div className="space-y-2">
                      <div
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Production Architecture Components
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.blueprintItems.map((bp, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-xs p-2.5 rounded-lg border"
                            style={{
                              background: "var(--bg-secondary)",
                              borderColor: "var(--border-light)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            <CheckCircle2
                              className="w-3.5 h-3.5 shrink-0 mt-0.5"
                              style={{ color: "var(--accent)" }}
                            />
                            <span className="leading-tight">{bp}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Footer: Tech Stack & CTA */}
                  <div className="pt-6 mt-6 border-t space-y-4" style={{ borderColor: "var(--border-light)" }}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      {/* Tech Chips */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold border"
                            style={{
                              background: "var(--silver-light)",
                              borderColor: "var(--border-light)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Compliance Tags */}
                      <div className="flex items-center gap-1.5">
                        {item.compliance.map((comp) => (
                          <span
                            key={comp}
                            className="px-2 py-0.5 rounded text-[9.5px] font-bold uppercase tracking-wider border"
                            style={{
                              background: "var(--bg-primary)",
                              borderColor: "var(--border-light)",
                              color: "var(--accent-dark)",
                            }}
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA link */}
                    <Link
                      href={`/contact?solution=${item.id}`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 border"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--graphite)";
                        e.currentTarget.style.color = "var(--text-white)";
                        e.currentTarget.style.borderColor = "var(--graphite)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--silver-light)";
                        e.currentTarget.style.color = "var(--text-primary)";
                        e.currentTarget.style.borderColor = "var(--border-light)";
                      }}
                    >
                      <span>Consult on {item.title.split(" ")[0]} Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================
          END-TO-END SYSTEM BLUEPRINT ARCHITECTURE
      ======================================================== */}
      <section
        className="py-16 sm:py-24 border-y"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border-light)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              END-TO-END SYSTEM TOPOLOGY
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              The VentureTech Enterprise Reference Architecture
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Every solution we deploy adheres to a standardized, battle-tested 4-tier topology
              engineered to eliminate single points of failure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <div
                  key={layer.step}
                  className="rounded-2xl border p-6 flex flex-col justify-between transition-all hover:-translate-y-1 duration-200"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--border-light)",
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded border"
                        style={{
                          background: "var(--silver-light)",
                          borderColor: "var(--border-light)",
                          color: "var(--accent)",
                        }}
                      >
                        TIER {layer.step}
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {layer.badge}
                      </span>
                    </div>

                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3
                      className="text-base font-bold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {layer.name}
                    </h3>

                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {layer.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t space-y-1.5" style={{ borderColor: "var(--border-light)" }}>
                    {layer.items.map((it, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[11px] font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          PROVEN QUANTIFIED CASE STUDIES
      ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            VALIDATED PERFORMANCE OUTCOMES
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Proven in Production at Scale
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Real metrics from high-growth enterprise deployments engineered and maintained by VentureTech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs, i) => (
            <div
              key={i}
              className="rounded-2xl border p-7 sm:p-9 flex flex-col justify-between space-y-6"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-light)",
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--border-light)" }}>
                  <div>
                    <div
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--accent)" }}
                    >
                      {cs.industry}
                    </div>
                    <div
                      className="text-lg font-extrabold tracking-tight mt-0.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {cs.client}
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      background: "var(--silver-light)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Enterprise Case Study
                  </span>
                </div>

                <h4
                  className="text-base sm:text-lg font-bold leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cs.headline}
                </h4>

                {/* 3 Metric counters */}
                <div className="grid grid-cols-3 gap-3 py-2">
                  {cs.stats.map((st, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl border text-center"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                      }}
                    >
                      <div
                        className="text-base sm:text-xl font-black tracking-tight"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {st.value}
                      </div>
                      <div
                        className="text-[9.5px] uppercase tracking-wider font-semibold mt-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {st.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p
                  className="text-xs sm:text-sm italic leading-relaxed pt-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cs.quote}
                </p>
              </div>

              <div className="pt-4 border-t flex items-center justify-between text-xs" style={{ borderColor: "var(--border-light)" }}>
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  {cs.author}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-bold hover:underline"
                  style={{ color: "var(--accent-dark)" }}
                >
                  <span>Request Full Case Report</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          LEAD ARCHITECT CONSULTATION CTA
      ======================================================== */}
      <section className="pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl border p-8 sm:p-14 relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{
            background: "var(--graphite)",
            borderColor: "var(--border-dark)",
            color: "var(--text-white)",
          }}
        >
          {/* Subtle background glow */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: "var(--accent)" }}
          />

          <div className="space-y-4 max-w-2xl relative z-10">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.14)",
                color: "var(--accent-light)",
              }}
            >
              <Sparkles className="w-3 h-3" />
              DIRECT ARCHITECT ENGAGEMENT
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to architect your solution with zero technical compromises?
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
              Schedule a 30-minute confidential architectural discovery session with our Lead Cloud &amp;
              Systems Architects. We review your schemas, latency bottlenecks, and compliance goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto relative z-10 shrink-0">
            <Link
              href="/contact?topic=architecture-session"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-[1.02]"
              style={{
                background: "var(--accent)",
                color: "var(--text-white)",
              }}
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all hover:bg-white/5"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "var(--text-white)",
              }}
            >
              <span>Explore All Capabilities</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
