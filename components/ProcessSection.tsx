"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Headphones,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  id: string;
  stepNum: string;
  title: string;
  phase: string;
  duration: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const steps: ProcessStep[] = [
  {
    id: "01",
    stepNum: "Step 01",
    phase: "Phase 01",
    duration: "Week 1",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target audience, technical architecture, and competitive landscape to craft a bulletproof execution roadmap.",
    deliverables: [
      "Technical specification & architecture blueprint",
      "User personas & journey conversion maps",
      "Milestone breakdown & delivery timeline",
    ],
    tools: ["Miro", "Notion", "Figma", "Slack"],
    icon: Search,
  },
  {
    id: "02",
    stepNum: "Step 02",
    phase: "Phase 02",
    duration: "Weeks 2–3",
    title: "UI/UX & Design Systems",
    description:
      "Pixel-perfect interactive prototypes crafted in Figma — engineered for conversion psychology, responsive fluidity, and timeless brand cohesion.",
    deliverables: [
      "High-fidelity clickable Figma prototypes",
      "Modular design tokens & component system",
      "Mobile-first responsive micro-interactions",
    ],
    tools: ["Figma", "FigJam", "Tokens Studio", "Illustrator"],
    icon: Palette,
  },
  {
    id: "03",
    stepNum: "Step 03",
    phase: "Phase 03",
    duration: "Weeks 3–6",
    title: "Full-Stack Development",
    description:
      "Clean, typed, scalable engineering utilizing Next.js App Router, resilient serverless APIs, and high-throughput databases structured for long-term velocity.",
    deliverables: [
      "Type-safe Next.js frontend with sub-second speeds",
      "Resilient REST & GraphQL microservices",
      "Scalable database models with automated caching",
    ],
    tools: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind"],
    icon: Code2,
  },
  {
    id: "04",
    stepNum: "Step 04",
    phase: "Phase 04",
    duration: "Week 7",
    title: "Quality Assurance & Testing",
    description:
      "Rigorous end-to-end automated testing, Core Web Vitals benchmarks, security audits, and multi-device validation before pushing to production.",
    deliverables: [
      "Automated unit, integration & E2E test suites",
      "Lighthouse 95+ speed & SEO validation",
      "Zero-trust vulnerability & data penetration audits",
    ],
    tools: ["Jest", "Cypress", "Lighthouse", "SonarQube"],
    icon: TestTube2,
  },
  {
    id: "05",
    stepNum: "Step 05",
    phase: "Phase 05",
    duration: "Week 8",
    title: "Launch & Global Deployment",
    description:
      "Zero-downtime release engineering with multi-region CDN caching, automated CI/CD deployment pipelines, and real-time observability.",
    deliverables: [
      "Zero-downtime blue/green cloud deployment",
      "Worldwide edge CDN asset distribution",
      "Live telemetry dashboards & error sentinels",
    ],
    tools: ["Docker", "AWS", "Vercel", "GitHub Actions"],
    icon: Rocket,
  },
  {
    id: "06",
    stepNum: "Step 06",
    phase: "Phase 06",
    duration: "Ongoing SLA",
    title: "24/7 Support & Evolution",
    description:
      "Dedicated engineer-backed SLA support, proactive infrastructure monitoring, automated backups, and continuous feature expansion.",
    deliverables: [
      "Guaranteed <15m emergency SLA response",
      "Continuous performance tuning & security updates",
      "Dedicated roadmap reviews & feature sprints",
    ],
    tools: ["Datadog", "Sentry", "Slack Connect", "PagerDuty"],
    icon: Headphones,
  },
];

function StepCard({
  step,
  index,
  isLast,
}: {
  step: ProcessStep;
  index: number;
  isLast: boolean;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const Icon = step.icon;
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center md:items-stretch mb-12 sm:mb-16 last:mb-0"
    >
      {/* ── Left Column (Card for even, spacer for odd on desktop) ── */}
      <div className="w-full md:w-1/2 flex justify-end md:pr-10 lg:pr-12 order-2 md:order-1">
        {isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -5 }}
            className="group w-full max-w-xl p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative text-left"
            style={{
              background: "var(--bg-primary)",
              borderColor: "var(--border-light)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
            }}
          >
            {/* Top accent highlight */}
            <div
              className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: "var(--accent)" }}
            />

            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10.5px] font-black uppercase tracking-wider border"
                  style={{
                    background: "var(--silver-light)",
                    borderColor: "var(--border-light)",
                    color: "var(--accent-dark)",
                  }}
                >
                  {step.stepNum}
                </span>
                <span
                  className="text-[11px] font-bold"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.phase}
                </span>
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <Clock className="w-3 h-3" style={{ color: "var(--accent)" }} />
                <span>{step.duration}</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3
              className="text-lg sm:text-xl font-bold tracking-tight mb-2.5"
              style={{ color: "var(--text-primary)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              {step.description}
            </p>

            {/* Deliverables checklist */}
            <div
              className="space-y-2 py-3.5 border-t border-b mb-4"
              style={{ borderColor: "var(--border-light)" }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-wider mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                Key Deliverables
              </p>
              {step.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <CheckCircle2
                    className="w-3.5 h-3.5 shrink-0 mt-0.5"
                    style={{ color: "var(--accent)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {deliv}
                  </span>
                </div>
              ))}
            </div>

            {/* Tools badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span
                className="text-[10px] font-bold mr-1"
                style={{ color: "var(--text-muted)" }}
              >
                Stack:
              </span>
              {step.tools.map((tool, ti) => (
                <span
                  key={ti}
                  className="px-2 py-0.5 rounded-md text-[10.5px] font-medium border"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="hidden md:block w-full" />
        )}
      </div>

      {/* ── Center Spine & Node ── */}
      <div className="relative flex flex-col items-center shrink-0 order-1 md:order-2 my-4 md:my-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 340,
            damping: 20,
            delay: 0.05,
          }}
          className="w-13 h-13 rounded-2xl flex items-center justify-center z-10 border transition-transform duration-300 hover:scale-110 shadow-md"
          style={{
            background: "var(--graphite)",
            borderColor: "var(--border-light)",
            color: "var(--text-white)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
          }}
        >
          <Icon className="w-5 h-5 text-amber-200" />
        </motion.div>

        {!isLast && (
          <div
            className="w-0.5 grow min-h-12 md:min-h-16 my-2"
            style={{
              background:
                "linear-gradient(to bottom, var(--border-medium), var(--border-light))",
            }}
          />
        )}
      </div>

      {/* ── Right Column (Card for odd, spacer for even on desktop) ── */}
      <div className="w-full md:w-1/2 flex justify-start md:pl-10 lg:pl-12 order-3">
        {!isLeft ? (
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -5 }}
            className="group w-full max-w-xl p-6 sm:p-7 rounded-2xl border transition-all duration-300 relative text-left"
            style={{
              background: "var(--bg-primary)",
              borderColor: "var(--border-light)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
            }}
          >
            {/* Top accent highlight */}
            <div
              className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: "var(--accent)" }}
            />

            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10.5px] font-black uppercase tracking-wider border"
                  style={{
                    background: "var(--silver-light)",
                    borderColor: "var(--border-light)",
                    color: "var(--accent-dark)",
                  }}
                >
                  {step.stepNum}
                </span>
                <span
                  className="text-[11px] font-bold"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.phase}
                </span>
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                style={{
                  background: "var(--bg-secondary)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <Clock className="w-3 h-3" style={{ color: "var(--accent)" }} />
                <span>{step.duration}</span>
              </div>
            </div>

            {/* Title & Description */}
            <h3
              className="text-lg sm:text-xl font-bold tracking-tight mb-2.5"
              style={{ color: "var(--text-primary)" }}
            >
              {step.title}
            </h3>
            <p
              className="text-xs sm:text-sm leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              {step.description}
            </p>

            {/* Deliverables checklist */}
            <div
              className="space-y-2 py-3.5 border-t border-b mb-4"
              style={{ borderColor: "var(--border-light)" }}
            >
              <p
                className="text-[10px] font-bold uppercase tracking-wider mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                Key Deliverables
              </p>
              {step.deliverables.map((deliv, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <CheckCircle2
                    className="w-3.5 h-3.5 shrink-0 mt-0.5"
                    style={{ color: "var(--accent)" }}
                  />
                  <span style={{ color: "var(--text-secondary)" }}>
                    {deliv}
                  </span>
                </div>
              ))}
            </div>

            {/* Tools badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span
                className="text-[10px] font-bold mr-1"
                style={{ color: "var(--text-muted)" }}
              >
                Stack:
              </span>
              {step.tools.map((tool, ti) => (
                <span
                  key={ti}
                  className="px-2 py-0.5 rounded-md text-[10.5px] font-medium border"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="hidden md:block w-full" />
        )}
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      id="process"
      style={{ background: "var(--bg-secondary)" }}
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] uppercase tracking-widest font-bold mb-3"
            style={{
              background: "var(--accent-light)",
              borderColor: "rgba(165,138,98,0.3)",
              color: "var(--accent-dark)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
            <span>How We Work</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2"
            style={{ color: "var(--text-primary)" }}
          >
            Our Proven 6-Step Process
          </h2>

          <p
            className="mt-4 text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            From idea to launch — a transparent, collaborative, and results-focused workflow every time.
          </p>
        </div>

        {/* Alternating Scroll-Animated Timeline */}
        <div className="relative">
          {steps.map((step, idx) => (
            <StepCard
              key={step.id}
              step={step}
              index={idx}
              isLast={idx === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA prompt */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 border shadow-xs"
            style={{
              background: "var(--bg-primary)",
              color: "var(--text-primary)",
              borderColor: "var(--border-light)",
            }}
          >
            <span>Start Your Project With Us</span>
            <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
          </Link>
        </div>
      </div>
    </section>
  );
}
