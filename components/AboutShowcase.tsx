"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Sparkles,
  Users2,
  Award,
  Globe2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Zap,
  Lock,
  Code2,
  Server,
  Briefcase,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: "Executive" | "Engineering" | "Security & AI";
  pedigree: string;
  bio: string;
  focus: string[];
  initials: string;
}

const teamList: TeamMember[] = [
  {
    id: "alexander",
    name: "Dr. Alexander Vance",
    role: "Chief Executive Officer & Founder",
    category: "Executive",
    pedigree: "Ex-Principal Cloud Architect, AWS & Morgan Stanley",
    bio: "18+ years designing high-throughput distributed systems. Formulated VentureTech's foundational zero-compromise architectural framework.",
    focus: ["Distributed Consensus", "FinOps & Cloud Strategy", "Fault-Tolerant Topology"],
    initials: "AV",
  },
  {
    id: "sarah",
    name: "Sarah Jenkins",
    role: "VP of Engineering & Core Architecture",
    category: "Engineering",
    pedigree: "Ex-Lead Platform Engineer, Stripe & Twilio",
    bio: "Oversees full-stack platform teams and Next.js microservices. Champion of sub-50ms p99 execution SLAs and zero-downtime releases.",
    focus: ["Next.js React Server Components", "High-Volume Microservices", "CI/CD Reliability"],
    initials: "SJ",
  },
  {
    id: "tariq",
    name: "Dr. Tariq Mansoor",
    role: "Head of Artificial Intelligence",
    category: "Security & AI",
    pedigree: "Ph.D. in CS, Ex-Google Research Fellow",
    bio: "Pioneered proprietary enterprise RAG pipelines, deterministic prompt caching, and private vector database topologies with zero data leakage.",
    focus: ["Private Vector Indexing", "Autonomous Task Agents", "AI Safety & Guardrails"],
    initials: "TM",
  },
  {
    id: "claire",
    name: "Claire Dupont",
    role: "Chief Security & Compliance Officer",
    category: "Security & AI",
    pedigree: "Ex-Cybersecurity Director, Cisco & NATO Cyber Defence",
    bio: "Drives Zero-Trust architecture, cryptographic session engineering, and institutional SOC-2 Type II / HIPAA compliance audits.",
    focus: ["Zero-Trust Identity", "OWASP Penetration Defense", "Cryptographic Ledgers"],
    initials: "CD",
  },
  {
    id: "marcus",
    name: "Marcus Thorne",
    role: "Principal Infrastructure Architect",
    category: "Engineering",
    pedigree: "Ex-Staff Kubernetes Engineer, Datadog",
    bio: "Architects multi-region Kubernetes clusters, elastic mesh networks, and sub-second cross-zone automated disaster recovery protocols.",
    focus: ["Kubernetes & Docker", "Terraform & IaC Drift Detection", "Multi-Cloud Resiliency"],
    initials: "MT",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Director of Product Design & Human Systems",
    category: "Executive",
    pedigree: "Ex-Design Lead, Linear & Vercel",
    bio: "Crafts intuitive, responsive user experiences that translate deeply complex enterprise architectures into frictionless interfaces.",
    focus: ["Micro-Interactions", "Design Systems", "Accessible UX Patterns"],
    initials: "ER",
  },
];

const companyMilestones = [
  {
    year: "2021",
    tag: "Inception",
    title: "Founding & Core Protocol",
    description:
      "Founded by senior cloud architects aiming to banish brittle enterprise software and introduce verifiable, typed distributed systems.",
    achievement: "Initial 8 enterprise contracts delivered with 100% on-time deployment.",
  },
  {
    year: "2023",
    tag: "Expansion",
    title: "Multi-Region Cloud Scale",
    description:
      "Scaled operations across North America and Western Europe, crossing 100+ production architectures managed with zero unplanned downtime.",
    achievement: "Maintained 99.999% SLA across $450M in cumulative client transactions.",
  },
  {
    year: "2024",
    tag: "Innovation",
    title: "Enterprise AI Studio Launch",
    description:
      "Pioneered secure private RAG engines and autonomous multi-agent pipelines for heavily regulated banking and healthcare clients.",
    achievement: "Awarded SOC-2 Type II and HIPAA compliance certification without exceptions.",
  },
  {
    year: "2026",
    tag: "Present",
    title: "Unified Digital Architecture Platform",
    description:
      "Rolled out the next-generation VentureTech software suite, integrating modern Next.js 16 frameworks, edge computing, and real-time telemetry.",
    achievement: "Operating production nodes in 14 countries with sub-25ms global edge latency.",
  },
];

const pillars = [
  {
    num: "01",
    title: "Zero Technical Compromises",
    badge: "Engineering Rigor",
    icon: Code2,
    description:
      "We reject shortcuts that create technical debt. Every line of TypeScript is strictly typed, covered by automated integration suites, and audited against strict linting standards.",
  },
  {
    num: "02",
    title: "Zero-Trust Architecture",
    badge: "Security Core",
    icon: ShieldCheck,
    description:
      "Security is not a final checklist item; it is our foundation. HttpOnly token isolation, 12-round salted hashing, role-based access control, and TLS 1.3 encryption protect every layer.",
  },
  {
    num: "03",
    title: "Deterministic Performance",
    badge: "SLA Guarantees",
    icon: Zap,
    description:
      "We design for p99 latency boundaries under extreme traffic surges. In-memory caching, optimistic database updates, and multi-region read replicas guarantee speed.",
  },
  {
    num: "04",
    title: "Open Contracts & Radical Clarity",
    badge: "Client Trust",
    icon: Target,
    description:
      "No opaque codebases, no vendor lock-in. We deliver full source ownership, exhaustive architectural documentation, automated test harnesses, and clear telemetry dashboards.",
  },
];

export default function AboutShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Executive", "Engineering", "Security & AI"];

  const filteredTeam =
    selectedCategory === "All"
      ? teamList
      : teamList.filter((m) => m.category === selectedCategory);

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
              <span>OUR HERITAGE &amp; ENGINEERING CONVICTION</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              We Build Software Architectures{" "}
              <span
                className="inline-block relative"
                style={{
                  color: "var(--accent)",
                }}
              >
                That Endure.
              </span>
            </motion.h1>

            {/* Narrative Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-base sm:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              VentureTech was founded by principal cloud architects with a singular conviction: to
              eliminate technical debt, banish architectural shortcuts, and engineer high-throughput
              digital systems that empower modern enterprises.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold shadow-md transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--graphite)",
                  color: "var(--text-white)",
                }}
              >
                <span>Engage Our Engineering Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#leadership"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold border transition-all hover:-translate-y-0.5"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                  color: "var(--text-primary)",
                }}
              >
                <span>Meet the Architects</span>
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
                { label: "Systems Deployed", value: "150+ Enterprise", icon: Server },
                { label: "Uptime Reliability", value: "99.999% SLA", icon: ShieldCheck },
                { label: "Senior Engineers", value: "50+ Specialists", icon: Users2 },
                { label: "Global Reach", value: "14 Countries", icon: Globe2 },
              ].map((stat, i) => {
                const Icon = stat.icon;
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
                      {stat.value}
                    </div>
                    <div
                      className="text-[10px] uppercase tracking-wider font-semibold mt-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR ARCHITECTURAL PILLARS (THE 4 PRINCIPLES)
      ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            OUR ENGINEERING CONSTITUTION
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Four Uncompromising Pillars
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            These foundational standards govern every architecture diagram, API specification, and
            deployment pipeline our engineers release.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="rounded-2xl border p-6 flex flex-col justify-between transition-all hover:-translate-y-1 duration-200"
                style={{
                  background: "var(--bg-secondary)",
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
                      {pillar.num}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

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

                  <h3
                    className="text-base font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          CHRONOLOGICAL MILESTONE TIMELINE
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
              PROVEN TRACK RECORD
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Our Evolution &amp; Growth
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              From a boutique systems advisory to an international digital transformation powerhouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyMilestones.map((m) => (
              <div
                key={m.year}
                className="rounded-2xl border p-6 flex flex-col justify-between space-y-4"
                style={{
                  background: "var(--bg-primary)",
                  borderColor: "var(--border-light)",
                }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-black tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {m.year}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                        color: "var(--accent)",
                      }}
                    >
                      {m.tag}
                    </span>
                  </div>

                  <h3
                    className="text-sm font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {m.title}
                  </h3>

                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {m.description}
                  </p>
                </div>

                <div
                  className="pt-3 border-t text-[11px] font-medium leading-normal flex items-start gap-1.5"
                  style={{
                    borderColor: "var(--border-light)",
                    color: "var(--accent-dark)",
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                  <span>{m.achievement}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          LEADERSHIP & PRINCIPAL ARCHITECTS
      ======================================================== */}
      <section id="leadership" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            THE MINDS BEHIND THE ARCHITECTURE
          </div>
          <h2
            className="text-2xl sm:text-4xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Our Executive &amp; Engineering Leadership
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A multidisciplinary collective of distributed systems pioneers, cybersecurity specialists,
            and research fellows.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isCurrent = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer"
                style={{
                  background: isCurrent ? "var(--graphite)" : "var(--bg-secondary)",
                  color: isCurrent ? "var(--text-white)" : "var(--text-secondary)",
                  borderColor: isCurrent ? "var(--graphite)" : "var(--border-light)",
                  boxShadow: isCurrent ? "0 4px 14px rgba(0,0,0,0.12)" : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member, idx) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:shadow-md"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-light)",
                }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4" style={{ borderColor: "var(--border-light)" }}>
                    {/* Initials Avatar */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm tracking-wider border shadow-xs"
                      style={{
                        background: "var(--graphite)",
                        color: "var(--text-white)",
                        borderColor: "var(--border-dark)",
                      }}
                    >
                      {member.initials}
                    </div>

                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                        color: "var(--accent-dark)",
                      }}
                    >
                      {member.category}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-base font-bold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-xs font-semibold mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-[11px] font-medium mt-1 leading-snug"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {member.pedigree}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t space-y-2" style={{ borderColor: "var(--border-light)" }}>
                  <div
                    className="text-[9.5px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Core Domain Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focus.map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 rounded text-[10px] font-medium border"
                        style={{
                          background: "var(--silver-light)",
                          borderColor: "var(--border-light)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ========================================================
          GLOBAL STANDARDS & COMPLIANCE BAR
      ======================================================== */}
      <section
        className="py-12 border-t"
        style={{
          background: "var(--silver-light)",
          borderColor: "var(--border-light)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: "var(--accent)" }}
              >
                REGULATORY &amp; QUALITY CERTIFICATIONS
              </span>
              <h3
                className="text-base sm:text-lg font-bold tracking-tight mt-0.5"
                style={{ color: "var(--text-primary)" }}
              >
                Institutional Trust &amp; Audited Security
              </h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                "SOC-2 Type II Certified",
                "HIPAA & HITECH Ready",
                "ISO 27001 Audited",
                "PCI-DSS Level 1 Compliant",
                "GDPR & CCPA Compliant",
              ].map((cert) => (
                <div
                  key={cert}
                  className="px-3.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                  }}
                >
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CAREERS & ENGAGEMENT CTA BANNER
      ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              JOIN OR COLLABORATE
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to elevate your engineering standards with VentureTech?
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-neutral-300">
              Whether you are an ambitious enterprise preparing for 10x traffic scale or a senior
              systems engineer looking to tackle complex distributed challenges — we want to connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto relative z-10 shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-lg transition-all hover:scale-[1.02]"
              style={{
                background: "var(--accent)",
                color: "var(--text-white)",
              }}
            >
              <span>Schedule Architecture Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/solutions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all hover:bg-white/5"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "var(--text-white)",
              }}
            >
              <span>View Industry Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
