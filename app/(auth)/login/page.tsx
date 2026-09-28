"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Globe2,
  Sparkles,
  ArrowLeft,
  KeyRound,
} from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || "/dashboard";

  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [authMode, setAuthMode] = useState<"standard" | "sso">("standard");
  const [ssoDomain, setSsoDomain] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (authMode === "sso") {
      // Mock SSO redirect for demo
      setTimeout(() => {
        setLoading(false);
        setError("Enterprise SSO redirection is active for verified corporate workspaces. Please use standard email login for direct access.");
      }, 900);
      return;
    }

    const res = await login(email, password);

    if (res.success) {
      router.push(redirectUrl);
    } else {
      setError(res.error || "Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <div
      className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 sm:p-6 lg:p-10 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background Animated Ambient Lights */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{ background: "var(--accent)" }}
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-32 -right-32 w-[32rem] h-[32rem] rounded-full pointer-events-none blur-3xl"
        style={{ background: "var(--graphite)" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.04) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="w-full max-w-5xl relative z-10">
        <div
          className="rounded-3xl border overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 transition-all duration-300"
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border-light)",
          }}
        >
          {/* ===================================================
              LEFT SIDE: BRAND SHOWCASE & LIVE TELEMETRY (lg: 5 cols)
          =================================================== */}
          <div
            className="lg:col-span-5 p-8 sm:p-10 border-b lg:border-b-0 lg:border-r flex flex-col justify-between relative overflow-hidden"
            style={{
              background: "var(--silver-light)",
              borderColor: "var(--border-light)",
            }}
          >
            <div className="space-y-6 relative z-10">
              {/* Brand Logo */}
              <Link href="/" className="inline-flex items-center group select-none">
                <div className="relative flex items-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/images/Venturetechlogo.png"
                    alt="VentureTech"
                    width={180}
                    height={48}
                    className="h-10 sm:h-11 w-auto object-cover"
                    priority
                  />
                </div>
              </Link>

              {/* Status Pill */}
              <div>
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-semibold border"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Nodes Operational</span>
                </span>
              </div>

              {/* Title & Narrative */}
              <div className="space-y-2">
                <h2
                  className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  Mission-Critical Systems &amp; Telemetry Hub
                </h2>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Log in to manage multi-region cloud workloads, AI agent inference pipelines, and
                  zero-trust security policies.
                </p>
              </div>

              {/* Telemetry Indicator Badges */}
              <div className="space-y-2.5 pt-2">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Zero-Trust Identity",
                    metric: "12-Round Bcrypt Salt",
                  },
                  {
                    icon: Zap,
                    title: "Sub-25ms Edge Routing",
                    metric: "14 Global Regions",
                  },
                  {
                    icon: Activity,
                    title: "Historical Uptime",
                    metric: "99.999% SLA Verified",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08 }}
                      className="p-3 rounded-xl border flex items-center justify-between text-xs transition-all"
                      style={{
                        background: "var(--bg-secondary)",
                        borderColor: "var(--border-light)",
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" style={{ color: "var(--accent)" }} />
                        <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                          {item.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold" style={{ color: "var(--text-muted)" }}>
                        {item.metric}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div
              className="mt-8 pt-6 border-t relative z-10 space-y-2"
              style={{ borderColor: "var(--border-light)" }}
            >
              <p
                className="text-xs italic leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                “The custom dashboard handles 50,000 daily users flawlessly with response times under
                40ms and zero downtime.”
              </p>
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold" style={{ color: "var(--text-primary)" }}>
                  Sarah O&apos;Brien
                </span>
                <span style={{ color: "var(--accent-dark)" }}>Founder, GreenLeaf SaaS</span>
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT SIDE: ANIMATED LOGIN FORM (lg: 7 cols)
          =================================================== */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Top Navigation Row */}
              <div className="flex items-center justify-between pb-3 border-b" style={{ borderColor: "var(--border-light)" }}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-75 transition-opacity"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Home</span>
                </Link>

                <div className="flex items-center gap-1 text-xs">
                  <span style={{ color: "var(--text-muted)" }}>Need an account?</span>
                  <Link
                    href="/register"
                    className="font-bold hover:underline"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    Create Account
                  </Link>
                </div>
              </div>

              {/* Form Title */}
              <div className="space-y-1">
                <h1
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Sign In to Your Account
                </h1>
                <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary)" }}>
                  Enter your credentials or corporate workspace to access your console.
                </p>
              </div>

              {/* Auth Mode Tabs (Password vs SSO) */}
              <div
                className="p-1 rounded-xl border flex items-center gap-1 text-xs font-semibold"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("standard");
                    setError(null);
                  }}
                  className="flex-1 py-2 px-3 rounded-lg transition-all duration-200 cursor-pointer text-center"
                  style={{
                    background: authMode === "standard" ? "var(--bg-secondary)" : "transparent",
                    color: authMode === "standard" ? "var(--text-primary)" : "var(--text-muted)",
                    boxShadow: authMode === "standard" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  Direct Email Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAuthMode("sso");
                    setError(null);
                  }}
                  className="flex-1 py-2 px-3 rounded-lg transition-all duration-200 cursor-pointer text-center"
                  style={{
                    background: authMode === "sso" ? "var(--bg-secondary)" : "transparent",
                    color: authMode === "sso" ? "var(--text-primary)" : "var(--text-muted)",
                    boxShadow: authMode === "sso" ? "0 2px 8px rgba(0,0,0,0.06)" : "none",
                  }}
                >
                  Enterprise SSO / SAML
                </button>
              </div>

              {/* Error Alert */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 rounded-xl border flex items-start gap-2.5 text-xs text-red-700 bg-red-50/80 border-red-200"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                    <span>{error}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {authMode === "standard" ? (
                  <>
                    {/* Work Email */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Corporate Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@company.com"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all"
                          style={{
                            background: "var(--bg-primary)",
                            borderColor: "var(--border-light)",
                            color: "var(--text-primary)",
                          }}
                        />
                        <Mail
                          className="w-4 h-4 absolute left-3 top-3 pointer-events-none"
                          style={{ color: "var(--text-muted)" }}
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label
                          className="block text-xs font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          Password *
                        </label>
                        <Link
                          href="/forgot-password"
                          className="text-xs font-medium hover:underline"
                          style={{ color: "var(--accent-dark)" }}
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-9 pr-9 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all"
                          style={{
                            background: "var(--bg-primary)",
                            borderColor: "var(--border-light)",
                            color: "var(--text-primary)",
                          }}
                        />
                        <Lock
                          className="w-4 h-4 absolute left-3 top-3 pointer-events-none"
                          style={{ color: "var(--text-muted)" }}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 transition-colors cursor-pointer"
                          style={{ color: "var(--text-muted)" }}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* SSO Workspace Domain */}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--text-primary)" }}
                      >
                        Company Workspace Domain *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={ssoDomain}
                          onChange={(e) => setSsoDomain(e.target.value)}
                          placeholder="company.com or acme-corp"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all"
                          style={{
                            background: "var(--bg-primary)",
                            borderColor: "var(--border-light)",
                            color: "var(--text-primary)",
                          }}
                        />
                        <KeyRound
                          className="w-4 h-4 absolute left-3 top-3 pointer-events-none"
                          style={{ color: "var(--text-muted)" }}
                        />
                      </div>
                      <p className="text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>
                        Enter your identity provider slug (Okta, Azure AD, or Google Workspace).
                      </p>
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  style={{
                    background: "var(--graphite)",
                    color: "var(--text-white)",
                  }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Authenticating Identity Session...</span>
                    </>
                  ) : (
                    <>
                      <span>{authMode === "standard" ? "Sign In to Dashboard" : "Authenticate via SSO"}</span>
                      <ArrowRight className="w-4 h-4" style={{ color: "var(--accent-light)" }} />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Bottom Security Note */}
            <div
              className="mt-8 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]"
              style={{
                borderColor: "var(--border-light)",
                color: "var(--text-muted)",
              }}
            >
              <span>TLS 1.3 · Encrypted HttpOnly Session</span>
              <div className="flex items-center gap-3">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <React.Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          style={{ background: "var(--bg-primary)" }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-stone-300 border-t-stone-800 animate-spin" />
        </div>
      }
    >
      <LoginForm />
    </React.Suspense>
  );
}
