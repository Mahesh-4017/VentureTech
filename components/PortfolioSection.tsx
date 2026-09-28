"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "./AnimateOnView";
import Link from "next/link";

interface CaseStudy {
  id: string;
  num: string;
  title: string;
  category: string;
  metric: string;
  description: string;
  tags: string[];
  specs: { label: string; value: string }[];
  href: string;
}

const projects: CaseStudy[] = [
  {
    id: "nexatrade",
    num: "01",
    title: "NexaTrade E-Commerce",
    category: "E-Commerce Architecture",
    metric: "+142% Revenue",
    description:
      "A high-converting Shopify + Next.js storefront with custom checkout, Stripe payments, and real-time inventory.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    specs: [
      { label: "Checkout", value: "Custom 1-Click" },
      { label: "Latency", value: "0.34s Edge" },
      { label: "Sync", value: "Real-Time Webhooks" },
    ],
    href: "/contact?project=NexaTrade",
  },
  {
    id: "greenleaf",
    num: "02",
    title: "GreenLeaf SaaS",
    category: "B2B Analytics Platform",
    metric: "50K+ Users",
    description:
      "A multi-tenant SaaS analytics platform serving 50K+ daily users with sub-40ms API response times.",
    tags: ["React", "Node.js", "PostgreSQL"],
    specs: [
      { label: "Scale", value: "50K+ Daily Active" },
      { label: "P99 Speed", value: "<40ms Response" },
      { label: "Uptime", value: "99.99% SLA" },
    ],
    href: "/contact?project=GreenLeaf",
  },
  {
    id: "urbanpulse",
    num: "03",
    title: "UrbanPulse Web App",
    category: "PropTech Portal",
    metric: "3.8x Speed",
    description:
      "Full-stack real-estate portal with interactive maps, advanced filtering, and real-time listing notifications.",
    tags: ["Next.js", "MongoDB", "Firebase"],
    specs: [
      { label: "Engine", value: "Geospatial Mapbox" },
      { label: "Queries", value: "Sub-10ms Indexed" },
      { label: "Updates", value: "Push WebSockets" },
    ],
    href: "/contact?project=UrbanPulse",
  },
  {
    id: "finedge",
    num: "04",
    title: "FinEdge Banking UI",
    category: "FinTech Security UI",
    metric: "99/100 Score",
    description:
      "Secure, WCAG-compliant fintech dashboard redesign. Lighthouse score 99 across all metrics.",
    tags: ["TypeScript", "React", "Tailwind"],
    specs: [
      { label: "Lighthouse", value: "99/100 Perfect" },
      { label: "Standards", value: "WCAG 2.1 AAA" },
      { label: "Security", value: "Zero-Trust 2FA" },
    ],
    href: "/contact?project=FinEdge",
  },
  {
    id: "cloudmesh",
    num: "05",
    title: "CloudMesh DevOps",
    category: "Cloud Infrastructure",
    metric: "99.99% Uptime",
    description:
      "Enterprise CI/CD platform with GitHub Actions integration, Docker management, and alerting.",
    tags: ["Docker", "GitHub Actions", "AWS"],
    specs: [
      { label: "Pipelines", value: "Automated CI/CD" },
      { label: "Deploy", value: "Multi-Cluster" },
      { label: "Reliability", value: "Zero Downtime" },
    ],
    href: "/contact?project=CloudMesh",
  },
  {
    id: "swiftapi",
    num: "06",
    title: "SwiftAPI Backend Suite",
    category: "High-Throughput APIs",
    metric: "12M+ Req / Day",
    description:
      "High-throughput REST + GraphQL API backend with rate limiting, JWT auth, and auto documentation.",
    tags: ["Node.js", "GraphQL", "MongoDB"],
    specs: [
      { label: "Protocol", value: "REST + GraphQL" },
      { label: "Auth", value: "JWT Rotation" },
      { label: "Docs", value: "OpenAPI 3.1 Live" },
    ],
    href: "/contact?project=SwiftAPI",
  },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "E-Commerce", "SaaS", "FinTech", "DevOps"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "E-Commerce") return p.category.includes("E-Commerce");
    if (activeFilter === "SaaS") return p.category.includes("SaaS") || p.category.includes("PropTech");
    if (activeFilter === "FinTech") return p.category.includes("FinTech");
    if (activeFilter === "DevOps") return p.category.includes("Cloud") || p.category.includes("API");
    return true;
  });

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      id="portfolio"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(var(--border-light) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <StaggerContainer className="text-center max-w-3xl mx-auto mb-14">
          <StaggerItem>
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] uppercase tracking-widest font-bold mb-3"
              style={{
                background: "var(--silver-light)",
                borderColor: "var(--border-light)",
                color: "var(--accent-dark)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
              <span>Portfolio &amp; Case Studies</span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Work That Speaks for Itself
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p
              className="mt-4 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Real projects. Real results. A proven track record across industries and tech stacks.
            </p>
          </StaggerItem>

          {/* Minimalist Filter Navigation */}
          <StaggerItem>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer"
                  style={{
                    background:
                      activeFilter === cat
                        ? "var(--graphite)"
                        : "var(--bg-secondary)",
                    color:
                      activeFilter === cat
                        ? "var(--text-white)"
                        : "var(--text-secondary)",
                    border: "1px solid var(--border-light)",
                    boxShadow:
                      activeFilter === cat
                        ? "0 4px 12px rgba(0,0,0,0.12)"
                        : "0 1px 3px rgba(0,0,0,0.03)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Executive 2-Column Showcase Grid */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between p-7 sm:p-8"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-light)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.03)",
                }}
              >
                {/* Top Subtle Champagne Accent Line on Hover */}
                <div
                  className="absolute top-0 left-8 right-8 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: "var(--accent)" }}
                />

                <div>
                  {/* Card Top Row: Numeric Identifier & Metric Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b" style={{ borderColor: "var(--border-light)" }}>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-lg font-black tracking-tight"
                        style={{ color: "var(--accent)" }}
                      >
                        {project.num}
                      </span>
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-extrabold"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <TrendingUp className="w-3 h-3" style={{ color: "var(--accent)" }} />
                      <span>{project.metric}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold tracking-tight mb-2.5 transition-colors duration-200"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* Architecture & Telemetry Specs Strip */}
                  <div
                    className="grid grid-cols-3 gap-2 p-3 rounded-xl border mb-6"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-light)",
                    }}
                  >
                    {project.specs.map((spec, si) => (
                      <div key={si} className="flex flex-col">
                        <span
                          className="text-[9.5px] uppercase font-bold tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {spec.label}
                        </span>
                        <span
                          className="text-xs font-semibold mt-0.5 truncate"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack Tags & Action Button */}
                <div className="pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4" style={{ borderColor: "var(--border-light)" }}>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg border"
                        style={{
                          background: "var(--silver-light)",
                          borderColor: "var(--border-light)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link
                    href={project.href}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 shrink-0"
                    style={{
                      background: "var(--silver-light)",
                      color: "var(--text-primary)",
                      border: "1px solid var(--border-light)",
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
                    <span>View Case Study</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-sm border"
            style={{
              background: "var(--graphite)",
              color: "var(--text-white)",
              borderColor: "var(--border-dark)",
            }}
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
