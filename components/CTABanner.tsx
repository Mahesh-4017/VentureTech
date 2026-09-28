"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

export default function CTABanner() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Deep Monochrome Graphite Backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--black) 0%, var(--bg-charcoal) 50%, var(--graphite) 100%)",
        }}
      />

      {/* Subtle Warm Champagne Ambient Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] pointer-events-none rounded-full blur-[120px] opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      {/* Architectural Dot Grid Mask */}
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top & Bottom Hairline Borders */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border-dark)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--border-dark)" }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Eyebrow Promotional Badge */}
        <AnimateOnView direction="down" delay={0.05}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-8 border"
            style={{
              background: "rgba(165,138,98,0.12)",
              borderColor: "rgba(165,138,98,0.35)",
              color: "var(--accent-light)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>LIMITED TIME: 50% OFF SETUP + MIGRATION — SEPTEMBER ONLY</span>
          </div>
        </AnimateOnView>

        {/* Heading */}
        <AnimateOnView delay={0.12}>
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] max-w-4xl mx-auto"
            style={{ color: "var(--text-white)" }}
          >
            Ready to Build Something{" "}
            <span
              style={{
                background: "var(--gradient-silver)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Great?
            </span>
          </h2>
        </AnimateOnView>

        {/* Subtitle */}
        <AnimateOnView delay={0.2}>
          <p
            className="mt-6 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--silver)" }}
          >
            From high-converting websites and scalable SaaS platforms to custom
            software — let&apos;s turn your vision into market-leading reality.
          </p>
        </AnimateOnView>

        {/* Dual Action Buttons */}
        <AnimateOnView delay={0.28}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="btn-shine w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm shadow-xl transition-all"
                style={{
                  background: "var(--silver-light)",
                  color: "var(--text-primary)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                }}
              >
                <span>Claim 50% Off &amp; Free Consultation</span>
                <ArrowRight
                  className="w-4 h-4"
                  style={{ color: "var(--accent-dark)" }}
                />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/register"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all border"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.18)",
                  color: "var(--text-white)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.18)";
                }}
              >
                <span>Create Free Account</span>
              </Link>
            </motion.div>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-10 pt-8 border-t flex flex-wrap items-center justify-center gap-6 sm:gap-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--silver-mid)" }}>
              <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
              <span>Free 30-min strategy session</span>
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--silver-mid)" }}>
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
              <span>100% NDA &amp; IP Protection</span>
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--silver-mid)" }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
              <span>Zero obligation estimate</span>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
