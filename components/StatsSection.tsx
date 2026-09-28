"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Rocket,
  Award,
  ShieldCheck,
  Headphones,
  TrendingUp,
} from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stats: StatItem[] = [
  {
    value: 150,
    suffix: "+",
    label: "Projects Delivered",
    description: "Enterprise web apps, high-converting stores & platforms",
    badge: "100% On-Time",
    icon: Rocket,
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Consistently rated 4.9/5 across global client reviews",
    badge: "Top Rated",
    icon: Award,
  },
  {
    value: 5,
    suffix: "+",
    label: "Years of Excellence",
    description: "Continuous digital innovation and resilient software delivery",
    badge: "Proven Track Record",
    icon: ShieldCheck,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Always On",
    description: "Direct engineering support with rapid SLA response",
    badge: "Rapid Response",
    icon: Headphones,
  },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        background: "var(--bg-secondary)",
      }}
    >
      {/* Subtle architectural background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(var(--border-light) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b" style={{ borderColor: "var(--border-light)" }}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-widest mb-2"
              style={{
                background: "var(--silver-light)",
                borderColor: "var(--border-light)",
                color: "var(--text-secondary)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
              Measurable Impact
            </div>
            <h2
              className="text-2xl sm:text-3xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Proven Performance Across Every Metric
            </h2>
          </div>
          <p
            className="text-xs sm:text-sm font-medium max-w-sm"
            style={{ color: "var(--text-muted)" }}
          >
            Engineering standards and dedicated execution designed to scale your business with zero downtime.
          </p>
        </div>

        {/* 4-Stat Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 22 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.09,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.06)",
                }}
                className="group relative p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between"
                style={{
                  background: "var(--bg-primary)",
                  borderColor: "var(--border-light)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                }}
              >
                {/* Top: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                    >
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>

                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-light)",
                        color: "var(--accent-dark)",
                      }}
                    >
                      {stat.badge}
                    </span>
                  </div>

                  {/* Number display */}
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-4xl sm:text-5xl font-black tracking-tight leading-none tabular-nums"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {inView ? (
                        <CountUp
                          end={stat.value}
                          duration={2.2}
                          delay={idx * 0.12}
                        />
                      ) : (
                        "0"
                      )}
                    </span>
                    <span
                      className="text-2xl sm:text-3xl font-extrabold"
                      style={{ color: "var(--accent)" }}
                    >
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3
                    className="mt-2.5 text-base font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stat.label}
                  </h3>
                </div>

                {/* Bottom micro-description & champagne accent line */}
                <div className="mt-4 pt-3.5 border-t" style={{ borderColor: "var(--border-light)" }}>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.description}
                  </p>

                  <div
                    className="mt-3.5 h-0.5 w-8 rounded-full transition-all duration-300 group-hover:w-full"
                    style={{
                      background: "var(--accent)",
                      opacity: 0.6,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
