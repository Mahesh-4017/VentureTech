"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Cpu,
  ShieldCheck,
  Code2,
  Terminal,
  Workflow,
  Sparkles,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Lock,
  Zap,
  Activity,
  Headphones,
  FileCode2,
  Users2,
  Clock,
  Compass,
  FileCheck,
  Boxes,
} from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: string;
  filterCategory: string;
  metric: string;
  impactBadge: string;
  description: string;
  features: string[];
  techStack: string[];
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "cloud",
    num: "01",
    title: "Cloud Infrastructure & DevOps",
    category: "Cloud Architecture",
    filterCategory: "Cloud & DevOps",
    metric: "99.999% Multi-Region Uptime",
    impactBadge: "40% FinOps Cost Savings",
    description:
      "Architecting elastic multi-region cloud backbones utilizing Terraform, Kubernetes, and automated zero-downtime blue/green deployment pipelines.",
    features: [
      "Kubernetes container orchestration & autoscaling clusters",
      "Infrastructure as Code (Terraform / Pulumi) with automated state drift detection",
      "Automated multi-stage CI/CD pipelines via GitHub Actions",
      "Disaster recovery protocols with sub-second cross-zone failover",
    ],
    techStack: ["Kubernetes", "Docker", "AWS", "Terraform", "GitHub Actions"],
    icon: Cloud,
    href: "/contact?service=cloud",
  },
  {
    id: "ai",
    num: "02",
    title: "Applied AI & Intelligent Agents",
    category: "Machine Learning & LLMs",
    filterCategory: "Applied AI",
    metric: "<120ms Latency RAG Engine",
    impactBadge: "10x Task Automation",
    description:
      "Building tailored RAG systems, context-aware AI copilots, and autonomous task agents integrated securely with your proprietary business knowledge.",
    features: [
      "Proprietary vector database indexing (Pinecone / MongoDB Atlas Vector)",
      "Fine-tuned LLM inference pipelines with latency & prompt token caching",
      "Autonomous multi-agent orchestration for asynchronous complex workflows",
      "Enterprise security guardrails, automated PII redaction & RBAC filters",
    ],
    techStack: ["OpenAI", "LangChain", "Pinecone", "Python", "MongoDB Atlas"],
    icon: Cpu,
    href: "/contact?service=ai",
  },
  {
    id: "web",
    num: "03",
    title: "Full-Stack Web Engineering",
    category: "Modern Web Platforms",
    filterCategory: "Full-Stack Web",
    metric: "Sub-100ms Core Web Vitals",
    impactBadge: "+48% Conversion Lift",
    description:
      "Modern, hyper-fast web applications built on Next.js App Router, React Server Components, Tailwind CSS, and resilient MongoDB data schemas.",
    features: [
      "Next.js App Router with optimized streaming Server-Side Rendering (SSR)",
      "Hydration-optimized client state & reactive instantaneous UI micro-interactions",
      "Sub-100ms Google PageSpeed Core Web Vitals performance benchmarks",
      "Scalable RESTful & GraphQL microservice APIs with real-time WebSocket syncing",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"],
    icon: Code2,
    href: "/contact?service=web",
  },
  {
    id: "security",
    num: "04",
    title: "Cybersecurity & Identity Systems",
    category: "Zero-Trust Security",
    filterCategory: "Cybersecurity",
    metric: "Zero-Trust TLS 1.3 Encryption",
    impactBadge: "SOC-2 Type II Ready",
    description:
      "Zero-Trust identity verification, hardened JWT cookie mechanics, role-based access management, and automated security vulnerability monitoring.",
    features: [
      "HttpOnly encrypted token session architecture preventing XSS / CSRF exploits",
      "Bcrypt 12-round salted cryptographic password hashing & biometric auth",
      "OWASP Top 10 compliance audits, CSP headers & automated penetration testing",
      "Comprehensive tamper-evident audit trails & real-time intrusion anomaly detection",
    ],
    techStack: ["OAuth 2.0", "JWT", "Bcrypt", "SonarQube", "WAF"],
    icon: ShieldCheck,
    href: "/contact?service=security",
  },
  {
    id: "devops",
    num: "05",
    title: "High-Throughput API Systems",
    category: "Distributed Systems",
    filterCategory: "API Systems",
    metric: "100K+ RPS Distributed Engine",
    impactBadge: "Sub-25ms Distributed P99",
    description:
      "Designing event-driven microservices capable of handling millions of transactions with persistent queuing and distributed caching.",
    features: [
      "Distributed Redis cluster caching with adaptive token bucket rate limiting",
      "Kafka / RabbitMQ persistent asynchronous message broker pipelines",
      "Microservice decoupling with ultra-low latency gRPC inter-service communication",
      "Comprehensive Swagger & OpenAPI 3.1 automated documentation & mocking",
    ],
    techStack: ["Node.js", "Redis", "Kafka", "GraphQL", "Fastify"],
    icon: Terminal,
    href: "/contact?service=api",
  },
  {
    id: "strategy",
    num: "06",
    title: "Technical Architecture Advisory",
    category: "Executive Advisory",
    filterCategory: "Technical Advisory",
    metric: "Up to 40% Cloud Cost Reduction",
    impactBadge: "Executive Fractional CTO",
    description:
      "Executive-level guidance to evaluate legacy codebases, design migration roadmaps, reduce cloud computing bills, and eliminate technical debt.",
    features: [
      "Comprehensive architectural health, security & maintainability code audits",
      "Cloud FinOps cost optimization reducing AWS/GCP bills by up to 40%",
      "Monolith-to-microservices modernization roadmap & zero-risk phasing",
      "Fractional CTO advisory, technical hiring assistance & senior engineering mentorship",
    ],
    techStack: ["AWS FinOps", "GCP", "Kubernetes", "Architecture Reviews"],
    icon: Workflow,
    href: "/contact?service=advisory",
  },
];

const filterCategories = [
  "All Capabilities",
  "Cloud & DevOps",
  "Applied AI",
  "Full-Stack Web",
  "Cybersecurity",
  "API Systems",
  "Technical Advisory",
];

interface MethodologyPhase {
  num: string;
  timeline: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
  roles: string[];
  approvalGate: string;
  tools: string[];
}

const methodologyPhases: MethodologyPhase[] = [
  {
    num: "01",
    timeline: "Week 1",
    name: "Discovery & Audit",
    headline: "Architectural Assessment & Strategic Requirements",
    description:
      "We review existing architecture, legacy codebases, and infrastructure bottlenecks, gather business requirements, and formulate clear quantitative milestones.",
    deliverables: [
      "Comprehensive Architectural Decision Record (ADR 1.0)",
      "Threat Model & Zero-Trust Vulnerability Matrix",
      "Cloud FinOps Infrastructure Spend Audit & Target ROI",
      "Milestone Delivery Roadmap with Resource Allocation",
    ],
    roles: ["Lead Enterprise Architect", "Technical Program Manager", "Principal Consultant"],
    approvalGate: "Formal Technical Specification Sign-off & Architecture Baseline",
    tools: ["Miro", "Notion", "AWS Cost Explorer", "SonarQube"],
  },
  {
    num: "02",
    timeline: "Weeks 2–3",
    name: "System Blueprint",
    headline: "Interface Contracts, Schemas & UX Prototypes",
    description:
      "We design database schemas, API interface contracts, security trust boundaries, and pixel-perfect high-fidelity interactive user experience prototypes.",
    deliverables: [
      "OpenAPI 3.1 & GraphQL Schema Contract Definitions",
      "Interactive Figma Clickable Prototype (Desktop & Mobile)",
      "Database Entity-Relationship Schema & Indexing Strategy",
      "Security Boundary & RBAC Authorization Architecture",
    ],
    roles: ["Principal Systems Architect", "Senior UI/UX Director", "Lead Database Engineer"],
    approvalGate: "Interactive Prototype Walkthrough & Contract Freeze",
    tools: ["Figma", "Stoplight", "Postman", "Tokens Studio"],
  },
  {
    num: "03",
    timeline: "Weeks 3–6",
    name: "Agile Sprints",
    headline: "Test-Driven Development & Continuous Staging",
    description:
      "Bi-weekly deployments with automated test coverage, strict linting, automated staging builds, and continuous transparent client demos.",
    deliverables: [
      "Production-ready typed codebase in client Git repository",
      "Automated CI/CD pipelines with GitHub Actions & Docker",
      "90%+ Automated Unit, Integration & E2E Test Coverage",
      "Bi-weekly staging deployment & live executive sprint demos",
    ],
    roles: ["Full-Stack Engineers", "DevOps Engineer", "QA Automation Engineer"],
    approvalGate: "Automated QA Verification & Client Sprint Acceptance",
    tools: ["Next.js", "TypeScript", "Jest", "Cypress", "GitHub Actions"],
  },
  {
    num: "04",
    timeline: "Week 7+",
    name: "Scale & 24/7 SLA",
    headline: "Zero-Downtime Cutover & Active Observability",
    description:
      "Zero-downtime production cutover accompanied by active telemetry, real-time error alerting, and dedicated continuous SLA maintenance.",
    deliverables: [
      "Zero-downtime Blue/Green production cutover execution",
      "Full-stack telemetry sentinels & synthetic user monitoring",
      "Guaranteed <15m emergency SLA incident escalation protocol",
      "Ongoing security patches, dependency updates & feature sprints",
    ],
    roles: ["Site Reliability Engineer (SRE)", "Lead Architect", "24/7 Support Desk"],
    approvalGate: "Production Cutover Sign-off & Active SLA Transition",
    tools: ["Datadog", "Sentry", "PagerDuty", "Slack Connect"],
  },
];

export default function ServicesShowcase() {
  const [activeFilter, setActiveFilter] = useState("All Capabilities");
  const [selectedPhase, setSelectedPhase] = useState("01");

  const filteredServices = servicesData.filter((s) => {
    if (activeFilter === "All Capabilities") return true;
    return s.filterCategory === activeFilter;
  });

  const currentPhaseData =
    methodologyPhases.find((p) => p.num === selectedPhase) || methodologyPhases[0];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          HERO & LIVE TELEMETRY OVERVIEW
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="pt-20 pb-20 relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        {/* Subtle architectural background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage: "radial-gradient(var(--border-light) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] uppercase tracking-widest font-bold mb-5 shadow-xs"
            style={{
              background: "var(--silver-light)",
              borderColor: "var(--border-light)",
              color: "var(--accent-dark)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
            <span>End-to-End Capabilities</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Enterprise Services &amp; Technical Solutions
          </h1>

          <p
            className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            From resilient cloud foundations to applied artificial intelligence, we deliver
            custom software solutions tailored to ambitious organizations.
          </p>

          {/* Unified Enterprise Telemetry Ribbon */}
          <div
            className="mt-10 max-w-4xl mx-auto rounded-2xl border p-2 sm:p-2.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-0 lg:divide-x transition-all duration-300"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-light)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
            }}
          >
            {[
              {
                icon: Activity,
                label: "SLA Uptime",
                value: "99.999%",
                sub: "Multi-Region Redundancy",
              },
              {
                icon: Zap,
                label: "P99 Latency",
                value: "< 35ms",
                sub: "Global Edge Network",
              },
              {
                icon: ShieldCheck,
                label: "Security",
                value: "Zero-Trust",
                sub: "OWASP & SOC-2 Hardened",
              },
              {
                icon: Headphones,
                label: "Support",
                value: "24/7 SLA",
                sub: "Direct Senior Engineers",
              },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-4 py-3 text-left group transition-colors rounded-xl"
                  style={{
                    borderColor: "var(--border-light)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "var(--silver-light)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <ItemIcon className="w-4 h-4" style={{ color: "var(--accent)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider block"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {item.label}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    </div>
                    <span
                      className="text-base sm:text-lg font-black tracking-tight block leading-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.value}
                    </span>
                    <span
                      className="text-[10px] font-medium block truncate"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Minimalist Filter Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border"
                  style={{
                    background: isActive ? "var(--graphite)" : "var(--bg-secondary)",
                    color: isActive ? "var(--text-white)" : "var(--text-secondary)",
                    borderColor: isActive ? "var(--graphite)" : "var(--border-light)",
                    boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICES 2-COLUMN SHOWCASE GRID
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                    whileHover={{ y: -5 }}
                    className="group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between p-7 sm:p-9"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-light)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    }}
                  >
                    {/* Top Champagne Accent Line on Hover */}
                    <div
                      className="absolute top-0 left-8 right-8 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                      style={{ background: "var(--accent)" }}
                    />

                    <div>
                      {/* Top Header: Numeric Marker + Icon + SLA Metric */}
                      <div className="flex items-center justify-between gap-4 mb-6 pb-5 border-b" style={{ borderColor: "var(--border-light)" }}>
                        <div className="flex items-center gap-3.5">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                            style={{
                              background: "var(--bg-secondary)",
                              borderColor: "var(--border-light)",
                              color: "var(--text-primary)",
                            }}
                          >
                            <Icon className="w-5 h-5 text-current" />
                          </div>
                          <div>
                            <span
                              className="text-[10.5px] font-bold uppercase tracking-wider block"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {service.category}
                            </span>
                            <span
                              className="text-xs font-black tracking-widest"
                              style={{ color: "var(--accent)" }}
                            >
                              SERVICE {service.num}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                          <div
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-extrabold"
                            style={{
                              background: "var(--silver-light)",
                              borderColor: "var(--border-light)",
                              color: "var(--text-primary)",
                            }}
                          >
                            <TrendingUp className="w-3 h-3" style={{ color: "var(--accent)" }} />
                            <span>{service.metric}</span>
                          </div>
                          <span
                            className="text-[10px] font-bold"
                            style={{ color: "var(--accent-dark)" }}
                          >
                            {service.impactBadge}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3
                        className="text-xl sm:text-2xl font-bold tracking-tight mb-3"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed mb-6"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {service.description}
                      </p>

                      {/* Architectural Deliverables Checklist */}
                      <div
                        className="space-y-2.5 py-4 border-t mb-6"
                        style={{ borderColor: "var(--border-light)" }}
                      >
                        <p
                          className="text-[10.5px] font-bold uppercase tracking-wider mb-3"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Architectural Deliverables
                        </p>
                        {service.features.map((feature, fi) => (
                          <div key={fi} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border"
                              style={{
                                background: "var(--silver-light)",
                                borderColor: "var(--border-light)",
                                color: "var(--accent)",
                              }}
                            >
                              <CheckCircle2 className="w-3 h-3" />
                            </span>
                            <span style={{ color: "var(--text-secondary)" }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom: Tech Stack Pills & CTA */}
                    <div className="pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ borderColor: "var(--border-light)" }}>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech, ti) => (
                          <span
                            key={ti}
                            className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded-md border"
                            style={{
                              background: "var(--bg-secondary)",
                              borderColor: "var(--border-light)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={service.href}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 shrink-0"
                        style={{
                          background: "var(--bg-secondary)",
                          color: "var(--text-primary)",
                          border: "1px solid var(--border-light)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--graphite)";
                          e.currentTarget.style.color = "var(--text-white)";
                          e.currentTarget.style.borderColor = "var(--graphite)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "var(--bg-secondary)";
                          e.currentTarget.style.color = "var(--text-primary)";
                          e.currentTarget.style.borderColor = "var(--border-light)";
                        }}
                      >
                        <span>Schedule Architecture Call</span>
                        <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          THE VENTURETECH METHODOLOGY — "SOMETHING DIFFERENT"
          Interactive Phased Lifecycle with Deep Engineering Data
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="py-20 md:py-28 relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          borderTop: "1px solid var(--border-light)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="text-[11px] uppercase tracking-widest font-bold px-3.5 py-1 rounded-full border inline-block"
              style={{
                background: "var(--silver-light)",
                borderColor: "var(--border-light)",
                color: "var(--accent-dark)",
              }}
            >
              The VentureTech Methodology
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              How We Deliver Predictable Excellence
            </h2>
            <p
              className="mt-4 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              An institutional engineering lifecycle with explicit deliverables, role governance, and verification gates.
            </p>
          </div>

          {/* Interactive Phase Selector Rail */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {methodologyPhases.map((phase) => {
              const isSelected = selectedPhase === phase.num;
              return (
                <button
                  key={phase.num}
                  onClick={() => setSelectedPhase(phase.num)}
                  className="p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer relative"
                  style={{
                    background: isSelected ? "var(--bg-secondary)" : "rgba(255,255,255,0.4)",
                    borderColor: isSelected ? "var(--accent)" : "var(--border-light)",
                    boxShadow: isSelected ? "0 8px 25px rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  {/* Top indicator bar */}
                  <div
                    className="absolute top-0 left-4 right-4 h-0.5 rounded-full transition-opacity duration-300"
                    style={{
                      background: "var(--accent)",
                      opacity: isSelected ? 1 : 0,
                    }}
                  />

                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xl sm:text-2xl font-black tracking-tight"
                      style={{
                        color: isSelected ? "var(--accent)" : "var(--silver-mid)",
                      }}
                    >
                      {phase.num}
                    </span>
                    <span
                      className="text-[10.5px] font-bold px-2 py-0.5 rounded-full border"
                      style={{
                        background: isSelected ? "var(--silver-light)" : "var(--bg-primary)",
                        borderColor: "var(--border-light)",
                        color: isSelected ? "var(--text-primary)" : "var(--text-muted)",
                      }}
                    >
                      {phase.timeline}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-bold tracking-tight truncate"
                    style={{
                      color: isSelected ? "var(--text-primary)" : "var(--text-secondary)",
                    }}
                  >
                    {phase.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Interactive Phase Breakdown Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhaseData.num}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 rounded-3xl border relative overflow-hidden"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-light)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
              }}
            >
              {/* Header inside the card */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b" style={{ borderColor: "var(--border-light)" }}>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-black tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                      style={{
                        background: "var(--silver-light)",
                        color: "var(--accent-dark)",
                      }}
                    >
                      PHASE {currentPhaseData.num}
                    </span>
                    <span
                      className="text-xs font-bold"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Duration: {currentPhaseData.timeline}
                    </span>
                  </div>

                  <h3
                    className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {currentPhaseData.name} — {currentPhaseData.headline}
                  </h3>
                </div>

                {/* Stack tools */}
                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  {currentPhaseData.tools.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg border"
                      style={{
                        background: "var(--bg-primary)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3-Column Deep Engineering Data Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: Tangible Deliverables */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-4 h-4" style={{ color: "var(--accent)" }} />
                    <h4
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Key Tangible Artifacts
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {currentPhaseData.deliverables.map((deliv, di) => (
                      <li key={di} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium leading-relaxed">
                        <CheckCircle2
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: "var(--accent)" }}
                        />
                        <span style={{ color: "var(--text-secondary)" }}>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Governance & Team Roles */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Users2 className="w-4 h-4" style={{ color: "var(--accent)" }} />
                    <h4
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Assigned Engineering Roles
                    </h4>
                  </div>
                  <div className="space-y-2.5">
                    {currentPhaseData.roles.map((role, ri) => (
                      <div
                        key={ri}
                        className="p-3 rounded-xl border flex items-center gap-2.5 text-xs font-bold"
                        style={{
                          background: "var(--bg-primary)",
                          borderColor: "var(--border-light)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Column 3: Quality Gate & Sign-off */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" style={{ color: "var(--accent)" }} />
                    <h4
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Verification Gate
                    </h4>
                  </div>
                  <div
                    className="p-5 rounded-2xl border"
                    style={{
                      background: "var(--silver-light)",
                      borderColor: "var(--border-light)",
                    }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider block mb-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Exit Criteria &amp; Client Sign-Off
                    </span>
                    <p
                      className="text-xs sm:text-sm font-semibold leading-relaxed"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {currentPhaseData.approvalGate}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ENTERPRISE SLA & GUARANTEES BENTO
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="text-[11px] uppercase tracking-widest font-bold px-3.5 py-1 rounded-full border inline-block"
              style={{
                background: "var(--silver-light)",
                borderColor: "var(--border-light)",
                color: "var(--accent-dark)",
              }}
            >
              Enterprise Standards
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Built for Scale, Security &amp; Predictability
            </h2>
            <p
              className="mt-3 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Every system we engineer adheres to strict contractual SLAs and institutional-grade standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Guaranteed SLA",
                desc: "Sub-15 minute critical incident response SLA backed by 24/7 on-call tier-3 engineers.",
              },
              {
                icon: Activity,
                title: "Real-Time Telemetry",
                desc: "Full-stack observability with automated synthetic health checks and anomaly alerting.",
              },
              {
                icon: Lock,
                title: "100% IP Ownership",
                desc: "Full code, cloud credentials, documentation, and Git repository ownership transferred cleanly.",
              },
              {
                icon: Zap,
                title: "Weekly Release Velocity",
                desc: "Bi-weekly sprint demos with automated continuous integration and zero-downtime cutovers.",
              },
            ].map((pillar, pi) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pi}
                  className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--border-light)",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  }}
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <PillarIcon className="w-5 h-5 text-current" />
                    </div>
                    <h3
                      className="text-base font-bold tracking-tight mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ARCHITECTURE CONSULTATION CTA BOX
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border relative overflow-hidden"
            style={{
              background: "var(--graphite)",
              borderColor: "var(--border-dark)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
            }}
          >
            {/* Ambient champagne glow */}
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
              style={{ background: "var(--accent)" }}
            />

            <div className="space-y-2 text-center md:text-left z-10">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight" style={{ color: "var(--text-white)" }}>
                Have a specific project in mind?
              </h3>
              <p className="text-sm max-w-md leading-relaxed" style={{ color: "var(--silver)" }}>
                Schedule a complimentary 30-minute technical consultation with one of our lead architects.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shrink-0 inline-flex items-center gap-2 z-10 hover:scale-105 shadow-md"
              style={{
                background: "var(--silver-light)",
                color: "var(--text-primary)",
              }}
            >
              <span>Schedule Architecture Call</span>
              <ArrowRight className="w-4 h-4" style={{ color: "var(--accent-dark)" }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
