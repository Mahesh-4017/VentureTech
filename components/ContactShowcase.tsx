"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  HelpCircle,
  Building,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Globe2,
  Lock,
  ChevronDown,
  Copy,
  Check,
} from "lucide-react";

const serviceOptions = [
  { id: "cloud", label: "Cloud Infrastructure & DevOps" },
  { id: "ai", label: "Applied AI & Autonomous Agents" },
  { id: "web", label: "Full-Stack Web Engineering" },
  { id: "security", label: "Cybersecurity & Zero-Trust" },
  { id: "blueprint", label: "Architecture Audit & Blueprint" },
  { id: "migration", label: "Zero-Downtime Migration" },
];

const timelineOptions = ["Urgent (< 30 Days)", "Next Quarter (1-3 Mos)", "Flexible Roadmap"];

const hubs = [
  {
    city: "San Francisco",
    region: "Headquarters (Americas)",
    address: "500 Howard Street, Suite 400",
    tz: "PST (UTC-8)",
    status: "Active Ops",
  },
  {
    city: "London",
    region: "EMEA Regional Hub",
    address: "100 Bishopsgate, Level 18",
    tz: "GMT (UTC+0)",
    status: "Active Ops",
  },
  {
    city: "Singapore",
    region: "APAC Engineering Centre",
    address: "Marina Bay Financial Centre, Tower 2",
    tz: "SGT (UTC+8)",
    status: "Active Ops",
  },
];

const faqs = [
  {
    q: "What is your typical technical discovery timeline?",
    a: "For initial architectural assessments and code audits, our Lead Architects can typically schedule and commence discovery within 48 to 72 hours of initial mutual NDA execution.",
  },
  {
    q: "Do you sign mutual Non-Disclosure Agreements (NDAs)?",
    a: "Yes, without exception. All technical discovery sessions, architecture evaluations, and proprietary codebase inspections are conducted under mutual NDA protection.",
  },
  {
    q: "Who owns the code and intellectual property produced?",
    a: "You retain 100% exclusive intellectual property and copyright ownership over all source code, schema migrations, Terraform configurations, and documentation we author.",
  },
  {
    q: "What engagement models do you support?",
    a: "We offer two models: Dedicated Engineering Retainers (for ongoing agile sprints with dedicated architects) and Fixed-Scope Milestone Deliverables (for greenfield platform builds with guaranteed SLAs).",
  },
  {
    q: "Can you guarantee zero downtime during cloud or database migrations?",
    a: "Yes. We utilize dual-write replication patterns, automated state drift validation, and blue/green DNS cutovers to guarantee continuous production uptime during complex migrations.",
  },
];

function ContactFormInner() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "Cloud Infrastructure & DevOps",
    timeline: "Next Quarter (1-3 Mos)",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Pre-fill service from URL if provided (e.g. ?service=cloud or ?solution=fintech)
  useEffect(() => {
    const serviceParam = searchParams.get("service") || searchParams.get("solution") || searchParams.get("topic");
    if (serviceParam) {
      const match = serviceOptions.find(
        (s) => s.id === serviceParam || s.label.toLowerCase().includes(serviceParam.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, service: match.label }));
      }
    }
  }, [searchParams]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("architects@venturetech.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1100);
  };

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
              <span>DIRECT ARCHITECTURAL CONSULTATION</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
              style={{ color: "var(--text-primary)" }}
            >
              Direct Access to{" "}
              <span
                className="inline-block relative"
                style={{
                  color: "var(--accent)",
                }}
              >
                Lead Systems Architects.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="text-base sm:text-lg lg:text-xl font-normal max-w-3xl mx-auto leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Have an upcoming platform migration, custom software requirement, or complex
              distributed system challenge? Connect directly with our engineering leadership under
              mutual non-disclosure protection.
            </motion.p>

            {/* Quick Guarantees Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-center"
            >
              {[
                { title: "24-Hour Review", desc: "Principal Architect SLA" },
                { title: "100% Mutual NDA", desc: "Prior to Technical Review" },
                { title: "Zero Lock-In", desc: "Full IP & Source Ownership" },
                { title: "Direct Engineers", desc: "No Sales Intermediaries" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl border flex flex-col items-center justify-center"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                  }}
                >
                  <span
                    className="text-xs font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </span>
                  <span
                    className="text-[10px] font-semibold mt-0.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.desc}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MAIN INTERACTIVE FORM & DIRECT CHANNELS
      ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Channels & Hubs (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                DIRECT CHANNELS
              </span>
              <h2
                className="text-2xl font-extrabold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Connect With Us Directly
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Our architecture team conducts direct preliminary reviews for every incoming technical
                spec. Reach out via email, hotline, or schedule an in-person briefing.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3.5">
              {/* Email Card */}
              <div
                className="p-5 rounded-2xl border flex items-center justify-between gap-4 transition-all"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-light)",
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
                    style={{
                      background: "var(--silver-light)",
                      borderColor: "var(--border-light)",
                      color: "var(--accent)",
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Engineering Mailbox
                    </div>
                    <div
                      className="text-sm font-bold tracking-tight mt-0.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      architects@venturetech.com
                    </div>
                    <div className="text-[11px] font-medium" style={{ color: "var(--accent)" }}>
                      Response guaranteed &lt; 24h
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl border transition-all cursor-pointer"
                  style={{
                    background: "var(--silver-light)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-secondary)",
                  }}
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Hotline Card */}
              <div
                className="p-5 rounded-2xl border flex items-center gap-3.5"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-light)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center border shrink-0"
                  style={{
                    background: "var(--silver-light)",
                    borderColor: "var(--border-light)",
                    color: "var(--accent)",
                  }}
                >
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Direct Enterprise Hotline
                  </div>
                  <div
                    className="text-sm font-bold tracking-tight mt-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    +1 (800) 555-0199
                  </div>
                  <div className="text-[11px] font-medium" style={{ color: "var(--text-secondary)" }}>
                    Mon – Fri, 9:00 AM – 6:00 PM EST
                  </div>
                </div>
              </div>

              {/* NDA Security Banner */}
              <div
                className="p-4 rounded-xl border flex items-start gap-3"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                }}
              >
                <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                <div className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Confidential Discovery:</strong> All
                  architecture diagrams and code repositories shared with VentureTech remain strictly
                  covered by standard mutual NDA protocol.
                </div>
              </div>
            </div>

            {/* Global Hubs */}
            <div className="pt-4 border-t space-y-3" style={{ borderColor: "var(--border-light)" }}>
              <div
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: "var(--text-muted)" }}
              >
                Engineering Operations Hubs
              </div>

              <div className="space-y-2.5">
                {hubs.map((hub) => (
                  <div
                    key={hub.city}
                    className="p-3.5 rounded-xl border flex items-center justify-between text-xs"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-light)",
                    }}
                  >
                    <div>
                      <div className="font-bold" style={{ color: "var(--text-primary)" }}>
                        {hub.city}
                      </div>
                      <div className="text-[11px] text-neutral-500">{hub.address}</div>
                    </div>
                    <div className="text-right">
                      <span
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-semibold border"
                        style={{
                          background: "var(--silver-light)",
                          borderColor: "var(--border-light)",
                          color: "var(--accent-dark)",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {hub.tz}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Form (lg: 7 cols) */}
          <div className="lg:col-span-7">
            <div
              className="rounded-3xl border p-7 sm:p-10 shadow-sm"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-light)",
              }}
            >
              <div className="border-b pb-5 mb-6 space-y-1" style={{ borderColor: "var(--border-light)" }}>
                <h3
                  className="text-xl sm:text-2xl font-bold tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Initiate Technical Consultation
                </h3>
                <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  Submit your architectural requirements. A Lead Systems Architect will review your
                  inquiry and respond within 24 hours.
                </p>
              </div>

              {status === "success" ? (
                <div
                  className="p-8 rounded-2xl border text-center space-y-4"
                  style={{
                    background: "var(--silver-light)",
                    borderColor: "var(--border-light)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto border"
                    style={{
                      background: "var(--graphite)",
                      borderColor: "var(--border-dark)",
                      color: "var(--text-white)",
                    }}
                  >
                    <CheckCircle2 className="w-7 h-7" style={{ color: "var(--accent-light)" }} />
                  </div>

                  <h4
                    className="text-lg font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Inquiry Dispatched Successfully
                  </h4>

                  <p
                    className="text-xs sm:text-sm max-w-md mx-auto leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Thank you, <strong style={{ color: "var(--text-primary)" }}>{formData.firstName || "Colleague"}</strong>.
                    Your architectural inquiry has been logged. A Principal Systems Architect is
                    evaluating your parameters and will reply via email at{" "}
                    <strong style={{ color: "var(--text-primary)" }}>{formData.email}</strong> shortly.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        company: "",
                        service: "Cloud Infrastructure & DevOps",
                        timeline: "Next Quarter (1-3 Mos)",
                        message: "",
                      });
                    }}
                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-primary)",
                    }}
                  >
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Alexander"
                        className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all"
                        style={{
                          background: "var(--bg-primary)",
                          borderColor: "var(--border-light)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Vance"
                        className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all"
                        style={{
                          background: "var(--bg-primary)",
                          borderColor: "var(--border-light)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Email & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all"
                        style={{
                          background: "var(--bg-primary)",
                          borderColor: "var(--border-light)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Technologies Inc."
                        className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all"
                        style={{
                          background: "var(--bg-primary)",
                          borderColor: "var(--border-light)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Area of Architectural Focus */}
                  <div>
                    <label
                      className="block text-xs font-semibold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Primary Area of Technical Focus *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((opt) => {
                        const isSelected = formData.service === opt.label;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: opt.label })}
                            className="px-3 py-2 rounded-xl text-xs font-semibold text-left border transition-all cursor-pointer flex items-center justify-between"
                            style={{
                              background: isSelected ? "var(--graphite)" : "var(--bg-primary)",
                              color: isSelected ? "var(--text-white)" : "var(--text-secondary)",
                              borderColor: isSelected ? "var(--graphite)" : "var(--border-light)",
                            }}
                          >
                            <span>{opt.label}</span>
                            {isSelected && (
                              <CheckCircle2
                                className="w-3.5 h-3.5"
                                style={{ color: "var(--accent-light)" }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Urgency */}
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Target Implementation Timeline
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {timelineOptions.map((tl) => {
                        const isCurrent = formData.timeline === tl;
                        return (
                          <button
                            key={tl}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: tl })}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer"
                            style={{
                              background: isCurrent ? "var(--silver-light)" : "transparent",
                              borderColor: isCurrent ? "var(--accent)" : "var(--border-light)",
                              color: isCurrent ? "var(--text-primary)" : "var(--text-secondary)",
                            }}
                          >
                            {tl}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div>
                    <label
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      System Architecture Overview or Challenges *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your existing stack, concurrency bottlenecks, compliance constraints, or intended migration goals..."
                      className="w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none"
                      style={{
                        background: "var(--bg-primary)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    style={{
                      background: "var(--graphite)",
                      color: "var(--text-white)",
                    }}
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Encrypting &amp; Routing to Engineering Lead...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Architecture Consultation Request</span>
                        <Send className="w-4 h-4" style={{ color: "var(--accent-light)" }} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          FREQUENTLY ASKED ARCHITECTURAL QUESTIONS (FAQ ACCORDION)
      ======================================================== */}
      <section
        className="py-16 sm:py-24 border-t"
        style={{
          background: "var(--bg-secondary)",
          borderColor: "var(--border-light)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <div
              className="text-[11px] font-bold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              TECHNICAL ENGAGEMENT GUIDELINES
            </div>
            <h2
              className="text-2xl sm:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Clear, transparent answers about our discovery process, NDA protections, and engineering
              standards.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border transition-all overflow-hidden"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--border-light)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span
                      className="text-xs sm:text-sm font-bold tracking-tight"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      style={{ color: "var(--accent)" }}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div
                          className="px-5 pb-5 pt-1 text-xs leading-relaxed border-t"
                          style={{
                            borderColor: "var(--border-light)",
                            color: "var(--text-secondary)",
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ContactShowcase() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-stone-300 border-t-stone-800 animate-spin" />
        </div>
      }
    >
      <ContactFormInner />
    </React.Suspense>
  );
}
