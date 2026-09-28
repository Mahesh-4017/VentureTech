"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import AnimateOnView from "./AnimateOnView";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <AnimateOnView direction="up" once={true} amount={0.05}>
      <footer
        className="transition-colors relative"
        style={{
          background: "var(--bg-primary)",
          borderTop: "1px solid var(--border-light)",
          color: "var(--text-secondary)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand Column (lg: 4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-flex items-center group select-none">
                <div className="relative flex items-center shrink-0">
                  <Image
                    src="/images/Venturetechlogo.png"
                    alt="VentureTech"
                    width={170}
                    height={44}
                    className="h-10 w-auto object-cover"
                  />
                </div>
              </Link>

              <p
                className="text-xs sm:text-sm leading-relaxed max-w-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                Accelerating enterprise digital transformation with modern cloud architectures,
                scalable AI microservices, and human-centered user experiences.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-2.5 pt-2">
                {[
                  {
                    href: "https://github.com",
                    label: "GitHub",
                    path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
                  },
                  {
                    href: "https://twitter.com",
                    label: "Twitter",
                    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  },
                  {
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  },
                  {
                    href: "https://instagram.com/venturetech",
                    label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 14 }}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border transition-all duration-200"
                    style={{
                      background: "var(--bg-secondary)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--graphite)";
                      e.currentTarget.style.color = "var(--text-white)";
                      e.currentTarget.style.borderColor = "var(--graphite)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--bg-secondary)";
                      e.currentTarget.style.color = "var(--text-secondary)";
                      e.currentTarget.style.borderColor = "var(--border-light)";
                    }}
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation Column (lg: 2.5 cols) */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{ color: "var(--text-primary)" }}
              >
                Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {[
                  { name: "Home", href: "/" },
                  { name: "Services", href: "/services" },
                  { name: "Enterprise Solutions", href: "/solutions" },
                  { name: "About Our Team", href: "/about" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Client Portal", href: "/dashboard" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="transition-colors duration-150 inline-block py-0.5"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-dark)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities Column (lg: 2.5 cols) */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{ color: "var(--text-primary)" }}
              >
                Capabilities
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {[
                  { name: "Cloud Infrastructure", href: "/services#cloud" },
                  { name: "Applied AI & Analytics", href: "/services#ai" },
                  { name: "Cybersecurity & Audits", href: "/services#security" },
                  { name: "Full-Stack Engineering", href: "/services#apps" },
                  { name: "DevOps Automation", href: "/services#devops" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="transition-colors duration-150 inline-block py-0.5"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-dark)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stay Informed Column (lg: 4 cols) */}
            <div className="lg:col-span-4 space-y-3.5">
              <h4
                className="text-[11px] font-bold tracking-widest uppercase"
                style={{ color: "var(--text-primary)" }}
              >
                Stay Informed
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Get bi-weekly briefings on technology trends, architecture blueprints, and product updates.
              </p>

              {subscribed ? (
                <div
                  className="flex items-center gap-2 p-3 rounded-xl border text-xs"
                  style={{
                    background: "var(--silver-light)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-primary)",
                  }}
                >
                  <CheckCircle2
                    className="w-4 h-4 shrink-0"
                    style={{ color: "var(--accent)" }}
                  />
                  <span>Thank you! You are subscribed to our updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2" suppressHydrationWarning>
                  <div className="relative">
                    <input
                      suppressHydrationWarning
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter business email"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border outline-none transition-all"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-light)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--accent)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-light)";
                      }}
                    />
                    <Mail
                      className="w-3.5 h-3.5 absolute left-3 top-3.5 pointer-events-none"
                      style={{ color: "var(--text-muted)" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer"
                    style={{
                      background: "var(--graphite)",
                      color: "var(--text-white)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--black)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--graphite)";
                    }}
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs border-t"
            style={{
              borderColor: "var(--border-light)",
              color: "var(--text-muted)",
            }}
          >
            <p suppressHydrationWarning>&copy; {new Date().getFullYear()} VentureTech Solutions Inc. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/privacy"
                className="transition-colors duration-150"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-150"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                Terms of Service
              </Link>

              {/* Status Indicator */}
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-semibold"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-light)",
                  color: "var(--text-secondary)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>All systems operational</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </AnimateOnView>
  );
}
