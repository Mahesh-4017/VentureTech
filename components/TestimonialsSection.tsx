"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
  metric: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah O'Brien",
    role: "Founder",
    company: "GreenLeaf SaaS",
    initials: "SO",
    rating: 5,
    metric: "Sub-40ms P99 • 50K Daily Users",
    quote:
      "The custom SaaS dashboard they built handles 50,000 daily users flawlessly. Response time under 40ms, zero downtime since launch. Their architecture decisions are top-class — exactly what we needed to scale.",
  },
  {
    id: "james",
    name: "James Khalid",
    role: "CTO",
    company: "UrbanPulse",
    initials: "JK",
    rating: 5,
    metric: "+43% Engagement in 30 Days",
    quote:
      "Incredible attention to design and code quality. They delivered a complete UI redesign in Figma, then implemented it flawlessly in Next.js. Our app's user engagement rose by 43% within the first month.",
  },
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Director of Product",
    company: "FinEdge",
    initials: "PS",
    rating: 5,
    metric: "Enterprise Security & Zero-Trust",
    quote:
      "VentureTech's team didn't just build software — they became strategic partners. Their MongoDB expertise and API security models are battle-tested. We'd have no hesitation recommending them to any enterprise team.",
  },
  {
    id: "aarav",
    name: "Aarav Mehta",
    role: "CEO",
    company: "NexaTrade",
    initials: "AM",
    rating: 5,
    metric: "+68% Sales Lift in 3 Months",
    quote:
      "VentureTech transformed our e-commerce platform from a sluggish, conversion-killing site into a lightning-fast revenue engine. Within 3 months of launch, our sales jumped 68%. The team is simply exceptional.",
  },
];

const AUTOPLAY_DURATION = 6000; // 6 seconds per testimonial

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToSlide = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  /* Auto-carousel timer */
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused, nextSlide]);

  const activeTestimonial = testimonials[current];

  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      id="testimonials"
      style={{ background: "var(--bg-secondary)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] uppercase tracking-widest font-bold mb-3"
            style={{
              background: "var(--silver-light)",
              borderColor: "var(--border-light)",
              color: "var(--accent-dark)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
            <span>Client Testimonials</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Trusted by High-Growth Companies
          </h2>

          <p
            className="mt-4 text-sm sm:text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Real results delivered for founders, CTOs, and technical leaders.
          </p>
        </div>

        {/* Main Auto-Carousel Showcase Card */}
        <div className="relative">
          <div
            className="relative rounded-3xl p-8 sm:p-12 border overflow-hidden transition-all duration-300 min-h-[380px] sm:min-h-[340px] flex flex-col justify-between"
            style={{
              background: "var(--bg-primary)",
              borderColor: "var(--border-light)",
              boxShadow: "0 6px 30px rgba(0, 0, 0, 0.04)",
            }}
          >
            {/* Top Champagne Accent Line */}
            <div
              className="absolute top-0 left-10 right-10 h-0.5 rounded-full"
              style={{ background: "var(--accent)" }}
            />

            {/* Decorative Quote Watermark */}
            <Quote
              className="absolute top-6 right-8 w-20 h-20 rotate-180 pointer-events-none select-none"
              style={{
                color: "var(--silver)",
                opacity: 0.25,
              }}
            />

            {/* Sliding Content */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeTestimonial.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Metric Pill */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(activeTestimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4"
                          style={{
                            color: "var(--accent)",
                            fill: "var(--accent)",
                          }}
                        />
                      ))}
                    </div>

                    <div
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                    >
                      <ShieldCheck className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                      <span>{activeTestimonial.metric}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <blockquote
                    className="text-lg sm:text-xl md:text-2xl leading-relaxed font-semibold relative z-10"
                    style={{ color: "var(--text-primary)" }}
                  >
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div
                  className="mt-8 pt-6 border-t flex flex-wrap items-center justify-between gap-4"
                  style={{ borderColor: "var(--border-light)" }}
                >
                  <div className="flex items-center gap-4">
                    {/* Initials Avatar */}
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center font-black text-sm tracking-wide border shadow-xs"
                      style={{
                        background: "var(--graphite)",
                        color: "var(--accent-light)",
                        borderColor: "var(--border-dark)",
                      }}
                    >
                      {activeTestimonial.initials}
                    </div>

                    <div>
                      <p
                        className="text-base font-bold tracking-tight"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {activeTestimonial.name}
                      </p>
                      <p
                        className="text-xs font-medium mt-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {activeTestimonial.role},{" "}
                        <span
                          className="font-semibold"
                          style={{ color: "var(--accent-dark)" }}
                        >
                          {activeTestimonial.company}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Verified Indicator */}
                  <span
                    className="text-[10.5px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border"
                    style={{
                      background: "var(--silver-light)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    Verified Client
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Auto-carousel Progress Bar (at bottom of card) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden"
              style={{ background: "var(--border-light)" }}
            >
              <motion.div
                key={activeTestimonial.id + (isPaused ? "-paused" : "")}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{
                  duration: isPaused ? 0 : AUTOPLAY_DURATION / 1000,
                  ease: "linear",
                }}
                className="h-full"
                style={{ background: "var(--accent)" }}
              />
            </div>
          </div>
        </div>

        {/* Carousel Navigation Strip & Client Selector Tabs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Quick Client Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {testimonials.map((t, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={t.id}
                  onClick={() => goToSlide(idx)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 border"
                  style={{
                    background: isActive ? "var(--graphite)" : "var(--bg-primary)",
                    color: isActive ? "var(--text-white)" : "var(--text-secondary)",
                    borderColor: isActive ? "var(--graphite)" : "var(--border-light)",
                    boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-all"
                    style={{
                      background: isActive ? "var(--accent-light)" : "var(--silver-dark)",
                    }}
                  />
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-full border transition-all duration-200 cursor-pointer hover:scale-105"
              style={{
                background: "var(--bg-primary)",
                borderColor: "var(--border-light)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--silver-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-primary)";
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-2.5 rounded-full border transition-all duration-200 cursor-pointer hover:scale-105"
              style={{
                background: "var(--bg-primary)",
                borderColor: "var(--border-light)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--silver-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--bg-primary)";
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
