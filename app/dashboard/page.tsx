"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  Cloud,
  Cpu,
  Code2,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Activity,
  Clock,
  User,
  LogOut,
  Headphones,
  Sparkles,
  Building2,
  Calendar,
  Layers,
  Zap,
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/dashboard");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-slate-900 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs text-slate-500 font-medium">Loading your enterprise console...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const servicesProvided = [
    {
      id: "cloud",
      title: "Cloud Infrastructure & DevOps Automation",
      category: "Elastic Cloud Architecture",
      status: "Operational",
      statusColor: "emerald",
      metrics: "99.999% Multi-Region Uptime",
      description:
        "Elastic multi-region infrastructure utilizing Kubernetes, automated zero-downtime CI/CD deployment pipelines, and proactive cross-zone disaster recovery failover.",
      features: [
        "Kubernetes container orchestration & autoscaling clusters",
        "Automated Infrastructure as Code (Terraform / CloudFormation)",
        "Zero-downtime blue/green deployment pipelines",
        "Automated multi-region backups & sub-second failover",
      ],
      tech: ["AWS", "Kubernetes", "Terraform", "Docker", "GitHub Actions"],
      icon: Cloud,
      actionText: "Manage Cloud Stack",
      actionHref: "/contact?service=cloud",
    },
    {
      id: "ai",
      title: "Applied AI & Autonomous Agent Workflows",
      category: "Intelligent Systems & Copilots",
      status: "Active Deployment",
      statusColor: "indigo",
      metrics: "<120ms Latency RAG Engine",
      description:
        "Custom context-aware AI copilots, enterprise knowledge retrieval-augmented generation (RAG), and autonomous multi-agent task execution integrated with your proprietary data.",
      features: [
        "Proprietary vector database indexing & semantic search",
        "Fine-tuned LLM inference pipelines with prompt caching",
        "Autonomous multi-agent orchestration for complex workflows",
        "Automated enterprise guardrails & PII redaction filters",
      ],
      tech: ["OpenAI", "LangChain", "Vector Indexing", "Python", "Microservices"],
      icon: Cpu,
      actionText: "Configure AI Copilot",
      actionHref: "/contact?service=ai",
    },
    {
      id: "web",
      title: "Full-Stack Web Engineering & Custom SaaS",
      category: "Modern Web Platforms",
      status: "Production Ready",
      statusColor: "emerald",
      metrics: "Sub-100ms Core Web Vitals",
      description:
        "High-performance, mission-critical web applications built with Next.js App Router, streaming Server Components, and reactive, ultra-responsive user interfaces.",
      features: [
        "High-throughput server-side rendering & edge routing",
        "Reactive, micro-animated user interfaces with accessibility compliance",
        "Scalable RESTful & real-time WebSocket data synchronization",
        "Cross-browser testing, SEO optimization & Core Web Vitals excellence",
      ],
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js"],
      icon: Code2,
      actionText: "Request Web Features",
      actionHref: "/contact?service=web",
    },
    {
      id: "security",
      title: "Zero-Trust Cybersecurity & Identity Governance",
      category: "Enterprise Security Architecture",
      status: "Enforced & Monitored",
      statusColor: "emerald",
      metrics: "SOC-2 Type II Standards",
      description:
        "Comprehensive zero-trust identity verification, cryptographic session encryption, granular role-based access management (RBAC), and 24/7 proactive security monitoring.",
      features: [
        "Encrypted token session management & automated CSRF protection",
        "OWASP Top 10 compliance audits & automated vulnerability scanning",
        "Multi-factor authentication & Enterprise SSO / SAML integration",
        "Tamper-evident audit logging & real-time intrusion anomaly detection",
      ],
      tech: ["TLS 1.3", "Zero-Trust RBAC", "Bcrypt Encryption", "SOC-2", "Cloudflare"],
      icon: ShieldCheck,
      actionText: "View Security Specs",
      actionHref: "/contact?service=security",
    },
  ];

  return (
    <div className="flex-1 bg-slate-50/60 pb-20">
      {/* Top Banner / User Welcome */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-bold text-xl uppercase shadow-xs">
                {user.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-slate-900">
                    Welcome, {user.name}
                  </h1>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span>Enterprise Workspace Active</span>
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                  <span>{user.email}</span>
                  <span>•</span>
                  <span className="capitalize font-medium text-slate-700">Account Tier: Enterprise Partner</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/services"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
              >
                <span>Explore Full Service Catalog</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => logout()}
                className="px-4 py-2 bg-white border border-slate-200 hover:bg-red-50 hover:text-red-700 text-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Active Solutions
              </span>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 mt-3">4 Engaged</p>
            <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full cloud &amp; AI suite provisioned</span>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Guaranteed Uptime
              </span>
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 mt-3">99.999%</p>
            <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>SLA verified across all regions</span>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Security Posture
              </span>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 mt-3">Zero-Trust</p>
            <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-500">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>SOC-2 Type II standards enforced</span>
            </div>
          </div>

          <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Support Level
              </span>
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800">
                <Headphones className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-extrabold text-slate-900 mt-3">24/7 Priority</p>
            <div className="mt-2 text-[11px] text-slate-500">
              <span>&lt;15 min dedicated engineer response</span>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Active Services Portfolio (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Your Provisioned Services &amp; Engagements</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Overview of active enterprise systems, performance metrics, and technological capabilities delivered by VentureTech.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shrink-0"
                >
                  <span>Request Customization</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Service Cards List */}
              <div className="mt-6 space-y-5">
                {servicesProvided.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50/90 transition-all duration-200 space-y-4"
                    >
                      {/* Header Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0 shadow-xs">
                            <Icon className="w-5 h-5 text-slate-800" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="text-sm font-bold text-slate-900">{service.title}</h4>
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-200/70 text-slate-700">
                                {service.category}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-xl">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="shrink-0 flex items-center gap-2 self-start sm:self-center">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            <span>{service.status}</span>
                          </span>
                        </div>
                      </div>

                      {/* Capabilities Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/60 text-xs text-slate-600">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Footer: Tech Stack Badges & Action Link */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-200/60 text-xs">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-[11px] font-semibold text-slate-400 mr-1">Stack:</span>
                          {service.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[10.5px] font-medium bg-white border border-slate-200 text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={service.actionHref}
                          className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                        >
                          <span>{service.actionText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Account Profile & Support Relationship (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Account Profile Card (Clean client information, no internal hashes/session IDs) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <User className="w-4 h-4 text-slate-700" />
                <span>Account Profile</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Account Name</span>
                  <span className="font-semibold text-slate-800 text-sm">{user.name}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Corporate Email</span>
                  <span className="font-semibold text-slate-800">{user.email}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Organization Plan</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-semibold text-slate-800">Enterprise Dedicated Workspace</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700">
                      Tier 1
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Verification Status</span>
                  <div className="flex items-center gap-1.5 mt-0.5 text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Enterprise Partner</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated Solutions Architecture Team */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Headphones className="w-4 h-4 text-emerald-600" />
                <span>Your Dedicated Support Team</span>
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed">
                As an enterprise client, you have direct priority access to our principal software architects and cloud engineering staff.
              </p>

              <div className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Lead Architect:</span>
                  <span className="font-semibold">VentureTech Solutions Lead</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Response SLA:</span>
                  <span className="font-semibold text-emerald-700">&lt;15 Minutes (24/7/365)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Architecture Review:</span>
                  <span className="font-semibold">Monthly Assessment</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full mt-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Strategy Call</span>
              </Link>
            </div>

            {/* Enterprise Service Level Agreement (SLA) */}
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Guaranteed Service Commitments</span>
              </h3>

              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>99.999% High Availability Multi-Region Uptime</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Continuous Automated Data Snapshots &amp; Backups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Zero-Trust Enterprise Access &amp; SOC-2 Ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Rapid Security Patching &amp; Vulnerability Shield</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
