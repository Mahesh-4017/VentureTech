"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Sparkles,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Link from "next/link";

interface FAQItemData {
  id: string;
  num: string;
  category: string;
  q: string;
  a: string;
}

const faqs: FAQItemData[] = [
  {
    id: "faq-1",
    num: "01",
    category: "Timeline",
    q: "How long does it take to build a website?",
    a: "A standard marketing website typically takes 2–4 weeks. More complex web apps or SaaS platforms range from 6–16 weeks depending on features, integrations, and design complexity. We provide a detailed milestone timeline during the discovery phase.",
  },
  {
    id: "faq-2",
    num: "02",
    category: "Support",
    q: "Do you offer ongoing maintenance after launch?",
    a: "Yes — we offer flexible maintenance plans starting post-launch. These cover bug fixes, security patches, performance monitoring, and ongoing feature enhancements. Our 24/7 support ensures your product stays running at peak performance.",
  },
  {
    id: "faq-3",
    num: "03",
    category: "Tech",
    q: "Which technologies do you specialise in?",
    a: "Our core stack is Next.js 16, React, Node.js, Express, MongoDB, TypeScript, and Tailwind CSS. We also work with PostgreSQL, Firebase, Supabase, AWS, Google Cloud, Docker, and CI/CD pipelines via GitHub Actions.",
  },
  {
    id: "faq-4",
    num: "04",
    category: "Timeline",
    q: "Can you redesign my existing website?",
    a: "Absolutely. Website redesigns are one of our most popular services. We start with a Figma prototype of the new design, validate it with you, then build the new version — either as a seamless migration or a fresh rebuild on a modern tech stack.",
  },
  {
    id: "faq-5",
    num: "05",
    category: "Tech",
    q: "Do you build e-commerce stores?",
    a: "Yes — we build custom e-commerce experiences using Next.js + Stripe/Razorpay, as well as Shopify storefronts with custom themes. We focus on high-converting checkout flows and blazing-fast load times to maximise your revenue.",
  },
  {
    id: "faq-6",
    num: "06",
    category: "Pricing",
    q: "What is your pricing model — fixed or hourly?",
    a: "We offer both models. For well-scoped projects, we prefer a fixed-price contract with clearly defined deliverables and milestones. For ongoing work or evolving requirements, we use a transparent hourly rate with weekly reporting.",
  },
  {
    id: "faq-7",
    num: "07",
    category: "Pricing",
    q: "Do you sign NDAs for confidential projects?",
    a: "Yes, always. We take confidentiality seriously and are happy to sign NDAs before any project discussion begins. Your business ideas, code, data, and intellectual property remain entirely yours.",
  },
  {
    id: "faq-8",
    num: "08",
    category: "Tech",
    q: "Do you provide UI/UX design separately?",
    a: "Yes — we offer standalone UI/UX design packages including user research, information architecture, wireframing, interactive Figma prototypes, and a complete design system with component tokens.",
  },
];

const categories = ["All", "Timeline", "Tech", "Pricing", "Support"];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory === "All") return true;
    return faq.category === activeCategory;
  });

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      id="faq"
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
        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Header & Direct Support Box */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] uppercase tracking-widest font-bold mb-3"
              style={{
                background: "var(--silver-light)",
                borderColor: "var(--border-light)",
                color: "var(--accent-dark)",
              }}
            >
              <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
              <span>FAQs</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Frequently Asked Questions
            </h2>

            <p
              className="mt-4 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Everything you need to know before we start building together. Clear, honest answers with zero jargon.
            </p>

            {/* Direct Support Card */}
            <div
              className="mt-8 p-6 sm:p-7 rounded-2xl border transition-all duration-300"
              style={{
                background: "var(--bg-secondary)",
                borderColor: "var(--border-light)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{
                    background: "var(--silver-light)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                  }}
                >
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3
                    className="text-sm font-bold tracking-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Have a custom question?
                  </h3>
                  <span
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Speak directly with our engineers
                  </span>
                </div>
              </div>

              <p
                className="text-xs leading-relaxed mb-5"
                style={{ color: "var(--text-secondary)" }}
              >
                Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get back to you with detailed technical advice.
              </p>

              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <Clock className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                  <span>Average response time: &lt; 2 hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
                  <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                  <span>Confidentiality &amp; NDA protected</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200"
                style={{
                  background: "var(--graphite)",
                  color: "var(--text-white)",
                }}
              >
                <span>Ask a Question</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
              </Link>
            </div>
          </div>

          {/* Right Column: Category Filters & Accordion List */}
          <div className="lg:col-span-7">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer border"
                  style={{
                    background:
                      activeCategory === cat
                        ? "var(--graphite)"
                        : "var(--bg-secondary)",
                    color:
                      activeCategory === cat
                        ? "var(--text-white)"
                        : "var(--text-secondary)",
                    borderColor:
                      activeCategory === cat
                        ? "var(--graphite)"
                        : "var(--border-light)",
                    boxShadow:
                      activeCategory === cat
                        ? "0 4px 12px rgba(0,0,0,0.1)"
                        : "none",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Accordion Stack */}
            <div className="space-y-3.5">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    layout
                    key={faq.id}
                    className="rounded-2xl border transition-all duration-300 overflow-hidden"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: isOpen ? "var(--border-medium)" : "var(--border-light)",
                      boxShadow: isOpen
                        ? "0 8px 25px rgba(0, 0, 0, 0.04)"
                        : "0 2px 8px rgba(0, 0, 0, 0.01)",
                    }}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                        <span
                          className="text-xs font-black shrink-0 tracking-wider"
                          style={{
                            color: isOpen ? "var(--accent)" : "var(--silver-dark)",
                          }}
                        >
                          {faq.num}
                        </span>
                        <span
                          className="text-sm sm:text-base font-bold tracking-tight transition-colors duration-200"
                          style={{
                            color: isOpen
                              ? "var(--text-primary)"
                              : "var(--text-primary)",
                          }}
                        >
                          {faq.q}
                        </span>
                      </div>

                      {/* Rotating Plus Toggle */}
                      <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors border"
                        style={{
                          background: isOpen
                            ? "var(--graphite)"
                            : "var(--silver-light)",
                          color: isOpen
                            ? "var(--text-white)"
                            : "var(--text-secondary)",
                          borderColor: "var(--border-light)",
                        }}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div
                            className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t"
                            style={{
                              borderColor: "var(--border-light)",
                              color: "var(--text-secondary)",
                            }}
                          >
                            <p className="mt-3">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
