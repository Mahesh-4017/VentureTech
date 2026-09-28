"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Rocket, Sparkles, ArrowRight, TrendingUp, Cpu, Code2,
  Globe, ShoppingCart, Palette, Search, Bell, Star,
  BarChart3, Users, LayoutDashboard, FolderKanban,
  UserCheck, LineChart, MessageSquare, Settings,
  CheckCircle2, Zap, Shield, Clock, PieChart,
  Smartphone, ChevronRight, Check, Send, ToggleLeft,
  ToggleRight, Building2, Server,
} from "lucide-react";

import ServiceCard from "@/components/ServiceCard";
import StatsSection from "@/components/StatsSection";
import ClientsStrip from "@/components/ClientsStrip";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import AnimateOnView, { StaggerContainer, StaggerItem } from "@/components/AnimateOnView";
import { openVentureTechChat } from "@/components/ChatWidget";

/* ─── Tilt card wrapper ───────────────────────────────────── */
function TiltCard({
  children,
  className,
  style,
}: React.PropsWithChildren<{ className?: string; style?: React.CSSProperties }>) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [5, -5]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-5, 5]), { stiffness: 280, damping: 28 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [aiPrompt, setAiPrompt] = useState("");
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [projectFilter, setProjectFilter] = useState("All");
  const [settingsState, setSettingsState] = useState({
    autoBackup: true,
    twoFactor: true,
    slackAlerts: true,
    publicStatus: false,
  });
  const [savedSettings, setSavedSettings] = useState(false);

  const handleChatSubmit = (query?: string) => {
    const message = (query !== undefined ? query : aiPrompt).trim() || "Hello! I would like to consult on a new project requirement with VentureTech.";
    const opened = openVentureTechChat(message);
    if (!opened && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-venturetech-chat", { detail: { message } }));
    }
  };
  const [messagesList, setMessagesList] = useState([
    {
      id: 1,
      sender: "Marcus Vance",
      company: "Apex Capital",
      avatar: "MV",
      avatarBg: "bg-slate-900",
      text: "The multi-region failover test passed with zero downtime. Can we deploy to staging tonight?",
      time: "5m ago",
      unread: true,
    },
    {
      id: 2,
      sender: "Dr. Aris Thorne",
      company: "BioSphere Health",
      avatar: "AT",
      avatarBg: "bg-emerald-700",
      text: "Reviewed the new patient telemetry dashboard mockup. Looks fantastic! Approving sprint 4.",
      time: "42m ago",
      unread: true,
    },
    {
      id: 3,
      sender: "QuantumScale AI Team",
      company: "QuantumScale",
      avatar: "QS",
      avatarBg: "bg-indigo-700",
      text: "Vector database indexing completed. Latency dropped to 110ms with cached prompt pipeline.",
      time: "2h ago",
      unread: false,
    },
  ]);
  const [replyInput, setReplyInput] = useState("");

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyInput.trim()) return;
    setMessagesList((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "Mahesh Rao (You)",
        company: "VentureTech",
        avatar: "MR",
        avatarBg: "bg-slate-800",
        text: replyInput.trim(),
        time: "Just now",
        unread: false,
      },
    ]);
    setReplyInput("");
  };

  const handleToggleSetting = (key: keyof typeof settingsState) => {
    setSettingsState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveSettings = () => {
    setSavedSettings(true);
    setTimeout(() => setSavedSettings(false), 2000);
  };

  const coreServices = [
    {
      title: "Websites & High-Speed Platforms",
      badge: "Performance",
      description: "Sub-second load times, Next.js App Router architecture, and SEO-optimized sites built to convert visitors into loyal clients.",
      features: ["Headless CMS & static regeneration", "Top-tier Core Web Vitals", "Mobile-first responsive design"],
      icon: <Globe className="w-6 h-6" />,
      href: "/services#websites",
    },
    {
      title: "Web Apps & Custom SaaS",
      badge: "Scalable",
      description: "Full-stack cloud applications with resilient APIs, real-time database reactivity, and enterprise multi-tenant capabilities.",
      features: ["MongoDB high-throughput data models", "Serverless microservices & REST/GraphQL", "Interactive real-time dashboards"],
      icon: <Code2 className="w-6 h-6" />,
      href: "/services#web-apps",
    },
    {
      title: "Software & Cloud Architecture",
      badge: "Enterprise",
      description: "99.999% uptime enterprise software, automated DevOps CI/CD pipelines, and seamless cloud migration strategies.",
      features: ["50% OFF setup & migration – September", "Automated backup & disaster recovery", "Zero-Trust cybersecurity architecture"],
      icon: <Cpu className="w-6 h-6" />,
      href: "/services#software",
    },
    {
      title: "UI/UX Design & E-Commerce",
      badge: "High Impact",
      description: "Premium product designs and high-converting e-commerce experiences engineered to maximise engagement and revenue.",
      features: ["Figma design systems & wireframes", "High-conversion checkout funnels", "Seamless payment gateway integration"],
      icon: <Palette className="w-6 h-6" />,
      href: "/services#ecommerce",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-secondary)" }}>

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION — Two-column split with tilt mockup
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(165deg, var(--silver-light) 0%, var(--bg-secondary) 45%, var(--bg-primary) 100%)",
          minHeight: "100vh",
        }}
      >
        {/* ── Background Grid & Subtle Metallic Orbs ────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(var(--silver) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            opacity: 0.35,
            maskImage: "radial-gradient(ellipse 85% 75% at 50% 25%, #000 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute -top-24 left-1/4 w-[600px] h-[450px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(199,203,209,0.35) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-10 right-0 w-[500px] h-[400px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(157,163,170,0.2) 0%, transparent 70%)" }}
        />

        {/* ── Main Container ───────────────────────────────────── */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 md:pt-12 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* ════════════════════════════════════════════════════
                LEFT COLUMN (5 cols on large screens)
            ════════════════════════════════════════════════════ */}
            <div className="lg:col-span-5 flex flex-col items-start text-left order-2 lg:order-1">

              {/* Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: -14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold mb-5 select-none"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-light)",
                  color: "var(--text-secondary)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-800 tracking-tight">VentureTech Technology &amp; Digital Solutions</span>
                <span style={{ color: "var(--border-medium)" }}>—</span>
                <span className="font-semibold text-slate-500">DigitalExcellence</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-black tracking-tight leading-[1.08]"
                style={{ color: "var(--text-primary)" }}
              >
                Innovative Digital Solutions{" "}
                <span
                  style={{
                    background: "var(--gradient-metal)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  for Your Business
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-5 text-base sm:text-lg leading-relaxed font-normal"
                style={{ color: "var(--text-secondary)" }}
              >
                Websites, Web Apps, Software, UI/UX &amp; E-commerce — engineered for performance, growth &amp; impact.
              </motion.p>

              {/* Input + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full mt-7"
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleChatSubmit();
                  }}
                  className="flex items-center rounded-2xl p-1.5 sm:p-2 w-full transition-all"
                  style={{
                    background: "var(--card-white)",
                    border: "1.5px solid var(--border-medium)",
                    boxShadow: "0 8px 30px -4px rgba(11, 11, 11, 0.08), 0 0 0 1px var(--border-light)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--graphite)";
                    e.currentTarget.style.boxShadow = "0 8px 30px -4px rgba(48, 49, 50, 0.16), 0 0 0 2px var(--graphite)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-medium)";
                    e.currentTarget.style.boxShadow = "0 8px 30px -4px rgba(11, 11, 11, 0.08), 0 0 0 1px var(--border-light)";
                  }}
                >
                  <div className="pl-3 pr-2" style={{ color: "var(--graphite)" }}>
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  </div>
                  <input
                    type="text"
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="Describe your project or requirement..."
                    className="flex-1 text-sm focus:outline-none bg-transparent py-2 px-1 min-w-0"
                    style={{ color: "var(--text-primary)" }}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-shine inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shrink-0 transition-all shadow-md cursor-pointer"
                    style={{
                      background: "var(--gradient-dark)",
                      color: "var(--text-white)",
                      border: "1px solid var(--border-dark)",
                    }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>

                {/* Popular Tags */}
                <div className="flex flex-wrap items-center gap-2 mt-3.5 text-xs">
                  <span className="font-semibold mr-1 select-none" style={{ color: "var(--text-secondary)" }}>Popular:</span>
                  {[
                    { label: "✨ Modern Web App", val: "Modern Web App" },
                    { label: "✨ E-commerce Store", val: "E-commerce Store" },
                    { label: "⚡ 50% Off Migration", val: "50% Off Migration", highlight: true },
                    { label: "✨ UI/UX Redesign", val: "UI/UX Redesign" },
                  ].map((tag, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        setAiPrompt(tag.val);
                        handleChatSubmit(`I am interested in ${tag.val}. Please guide me on project architecture and timeline.`);
                      }}
                      className="px-3 py-1 rounded-full text-[11px] font-medium border transition-all hover:scale-105 active:scale-95 cursor-pointer"
                      style={tag.highlight ? {
                        background: "var(--graphite)",
                        color: "var(--text-white)",
                        borderColor: "var(--black)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        fontWeight: 700,
                      } : {
                        background: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        borderColor: "var(--border-light)",
                      }}
                      onMouseEnter={(e) => {
                        if (!tag.highlight) {
                          e.currentTarget.style.background = "var(--silver-light)";
                          e.currentTarget.style.borderColor = "var(--border-medium)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!tag.highlight) {
                          e.currentTarget.style.background = "var(--bg-secondary)";
                          e.currentTarget.style.borderColor = "var(--border-light)";
                        }
                      }}
                    >
                      {tag.label}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="flex items-center gap-4 mt-8 pt-6 border-t w-full"
                style={{ borderColor: "var(--border-light)" }}
              >
                {/* Avatars */}
                <div className="flex -space-x-2.5 shrink-0">
                  {[
                    { text: "MR", bg: "#1f2937" },
                    { text: "AS", bg: "#374151" },
                    { text: "JD", bg: "#4b5563" },
                    { text: "EK", bg: "#111827" },
                  ].map((av, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                      style={{ background: av.bg }}
                    >
                      {av.text}
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-black ml-1" style={{ color: "var(--text-primary)" }}>
                      4.9/5
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                    Trusted by 1,000+ businesses
                  </span>
                </div>
              </motion.div>
            </div>

            {/* ════════════════════════════════════════════════════
                RIGHT COLUMN (7 cols on large screens) — Dashboard
            ════════════════════════════════════════════════════ */}
            <div className="lg:col-span-7 relative order-1 lg:order-2 pt-6 lg:pt-0">

              {/* Floating Badge 1: Top-Left "Modern Solutions / For a Smarter Tomorrow" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, type: "spring", stiffness: 240, damping: 20 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -top-4 -left-3 sm:-left-6 z-30 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border backdrop-blur-xl bg-white/95 shadow-xl select-none"
                style={{ borderColor: "var(--border-light)" }}
              >
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Modern Solutions</p>
                  <p className="text-[10px] font-medium text-slate-500 mt-0.5">For a Smarter Tomorrow</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom-Right "Grow Faster / With Technology" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.85, type: "spring", stiffness: 240, damping: 20 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="absolute -bottom-5 right-2 sm:right-6 z-30 flex items-center gap-3 px-3.5 py-2.5 rounded-2xl border backdrop-blur-xl bg-white/95 shadow-xl select-none"
                style={{ borderColor: "var(--border-light)" }}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Grow Faster</p>
                  <p className="text-[10px] font-medium text-slate-500 mt-0.5">With Technology</p>
                </div>
              </motion.div>

              {/* 3D Tilt Dashboard Mockup Container */}
              <TiltCard className="w-full perspective-1000">
                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden border shadow-2xl transition-all"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                    boxShadow: "0 25px 70px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(255,255,255,0.7) inset",
                  }}
                >
                  {/* Top Bar: Logo, Search, Avatar */}
                  <div
                    className="flex items-center justify-between px-4 sm:px-5 py-3 border-b"
                    style={{ background: "var(--silver-light)", borderColor: "var(--border-light)" }}
                  >
                    {/* Left: Window Dots + Logo */}
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5 items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      </div>
                      <div className="h-4 w-px bg-slate-300 mx-1" />
                      <div className="flex items-center">
                        <Image
                          src="/images/Venturetechlogo.png"
                          alt="VentureTech"
                          width={110}
                          height={28}
                          className="h-5 sm:h-5.5 w-auto object-cover"
                          priority
                        />
                      </div>
                    </div>

                    {/* Middle: Search input bar */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-400 text-xs w-52">
                      <Search className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-slate-400 text-[11px] truncate">Search anything...</span>
                    </div>

                    {/* Right: Notifications & Profile avatar */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 relative">
                        <Bell className="w-3 h-3" />
                        <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      </div>
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shadow-sm">
                        MR
                      </div>
                    </div>
                  </div>

                  {/* Body: Sidebar + Main Content */}
                  <div className="grid grid-cols-12 min-h-[380px]">
                    {/* Left Sidebar */}
                    <aside
                      className="col-span-3 sm:col-span-3 p-2 sm:p-3 flex flex-col justify-between border-r"
                      style={{ background: "var(--bg-primary)", borderColor: "var(--border-light)" }}
                    >
                      <div className="space-y-1">
                        {[
                          { name: "Dashboard", icon: <LayoutDashboard className="w-3.5 h-3.5" /> },
                          { name: "Projects", icon: <FolderKanban className="w-3.5 h-3.5" /> },
                          { name: "Clients", icon: <UserCheck className="w-3.5 h-3.5" /> },
                          { name: "Analytics", icon: <LineChart className="w-3.5 h-3.5" /> },
                          { name: "Team", icon: <Users className="w-3.5 h-3.5" /> },
                          { name: "Messages", icon: <MessageSquare className="w-3.5 h-3.5" /> },
                          { name: "Settings", icon: <Settings className="w-3.5 h-3.5" /> },
                        ].map((item) => (
                          <button
                            key={item.name}
                            type="button"
                            onClick={() => setActiveTab(item.name)}
                            className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all ${activeTab === item.name
                              ? "bg-slate-900 text-white shadow-sm"
                              : "text-slate-600 hover:bg-slate-200/60"
                              }`}
                          >
                            <span className="shrink-0">{item.icon}</span>
                            <span className="hidden sm:inline truncate">{item.name}</span>
                          </button>
                        ))}
                      </div>

                      {/* Mahesh Rao Profile at Sidebar Bottom */}
                      <div className="pt-2 border-t border-slate-200 flex items-center gap-2 mt-2">
                        <div className="w-7 h-7 rounded-full bg-slate-800 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                          MR
                        </div>
                        <div className="hidden sm:block leading-tight text-left min-w-0">
                          <p className="text-[11px] font-bold text-slate-900 truncate">Mahesh Rao</p>
                          <p className="text-[9px] text-slate-500 font-medium truncate">Project Manager</p>
                        </div>
                      </div>
                    </aside>

                    {/* Main Workspace Area */}
                    <main className="col-span-9 sm:col-span-9 p-3 sm:p-4 bg-white min-h-[380px] overflow-hidden flex flex-col justify-between">
                      <AnimatePresence mode="wait">
                        {activeTab === "Dashboard" && (
                          <motion.div
                            key="dashboard"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-3"
                          >
                            {/* 1. Four KPI Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {[
                                { label: "Total Projects", val: "24", change: "↑ 12%", changeColor: "text-emerald-600" },
                                { label: "Active Clients", val: "18", change: "↑ 8%", changeColor: "text-emerald-600" },
                                { label: "Revenue", val: "$48,260", change: "↑ 16%", changeColor: "text-emerald-600" },
                                { label: "Growth Rate", val: "+32%", change: "↑ 12%", changeColor: "text-emerald-600" },
                              ].map((kpi, i) => (
                                <div
                                  key={i}
                                  className="p-2 sm:p-2.5 rounded-xl border"
                                  style={{ background: "var(--bg-primary)", borderColor: "var(--border-light)" }}
                                >
                                  <p className="text-[9px] sm:text-[10px] font-semibold text-slate-500 truncate">{kpi.label}</p>
                                  <p className="text-sm sm:text-base font-black text-slate-900 mt-0.5 leading-none">{kpi.val}</p>
                                  <span className={`text-[9px] sm:text-[10px] font-bold ${kpi.changeColor} mt-1 block`}>
                                    {kpi.change}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* 2. Middle Row: Project Performance (Chart) + Project Types Breakdown */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                              {/* Chart: Project Performance */}
                              <div
                                className="md:col-span-7 p-3 rounded-xl border bg-white flex flex-col justify-between"
                                style={{ borderColor: "var(--border-light)" }}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <div>
                                    <p className="text-[11px] font-bold text-slate-900 leading-none">Project Performance</p>
                                    <p className="text-[9px] text-slate-400 mt-0.5">Velocity &amp; completion rate</p>
                                  </div>
                                  <span className="text-[9px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                                    Last 6 Months ▾
                                  </span>
                                </div>

                                {/* Chart SVG Curve */}
                                <div className="w-full my-1">
                                  <svg className="w-full" height="54" viewBox="0 0 280 54" preserveAspectRatio="none">
                                    <defs>
                                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#1e293b" stopOpacity="0.25" />
                                        <stop offset="100%" stopColor="#1e293b" stopOpacity="0.0" />
                                      </linearGradient>
                                    </defs>
                                    <line x1="0" y1="18" x2="280" y2="18" stroke="#f1f5f9" strokeWidth="1" />
                                    <line x1="0" y1="36" x2="280" y2="36" stroke="#f1f5f9" strokeWidth="1" />
                                    <path
                                      d="M 0 45 Q 40 42 70 30 T 140 24 T 210 14 T 280 6 L 280 54 L 0 54 Z"
                                      fill="url(#chartGradient)"
                                    />
                                    <path
                                      d="M 0 45 Q 40 42 70 30 T 140 24 T 210 14 T 280 6"
                                      fill="none"
                                      stroke="#0f172a"
                                      strokeWidth="2.2"
                                      strokeLinecap="round"
                                    />
                                    <circle cx="70" cy="30" r="3" fill="#0f172a" />
                                    <circle cx="140" cy="24" r="3" fill="#0f172a" />
                                    <circle cx="210" cy="14" r="3" fill="#0f172a" />
                                    <circle cx="280" cy="6" r="3.5" fill="#10b981" />
                                  </svg>
                                </div>

                                <div className="flex justify-between text-[9px] text-slate-400 font-medium px-1">
                                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                                    <span key={m}>{m}</span>
                                  ))}
                                </div>
                              </div>

                              {/* Breakdown: Project Types */}
                              <div
                                className="md:col-span-5 p-3 rounded-xl border bg-white flex flex-col justify-between"
                                style={{ borderColor: "var(--border-light)" }}
                              >
                                <div className="flex items-center justify-between mb-1.5">
                                  <p className="text-[11px] font-bold text-slate-900 leading-none">Project Types</p>
                                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-900 text-white">
                                    24 Active
                                  </span>
                                </div>

                                <div className="space-y-1.5 text-[10px]">
                                  {[
                                    { label: "Web Dev", pct: 42, barColor: "bg-slate-900" },
                                    { label: "Web Apps", pct: 25, barColor: "bg-slate-700" },
                                    { label: "UI/UX", pct: 17, barColor: "bg-slate-500" },
                                    { label: "E-comm", pct: 16, barColor: "bg-emerald-600" },
                                  ].map((pt, i) => (
                                    <div key={i}>
                                      <div className="flex justify-between font-semibold text-slate-700 mb-0.5 text-[9px]">
                                        <span>{pt.label}</span>
                                        <span className="text-slate-900 font-bold">{pt.pct}%</span>
                                      </div>
                                      <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                          className={`h-full rounded-full ${pt.barColor}`}
                                          style={{ width: `${pt.pct}%` }}
                                        />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* 3. Recent Projects List */}
                            <div
                              className="p-2.5 rounded-xl border bg-white"
                              style={{ borderColor: "var(--border-light)" }}
                            >
                              <div className="flex items-center justify-between mb-1.5">
                                <p className="text-[11px] font-bold text-slate-900">Recent Deliverables</p>
                                <button
                                  type="button"
                                  onClick={() => setActiveTab("Projects")}
                                  className="text-[9px] font-bold text-slate-800 hover:text-black flex items-center gap-1 transition-colors"
                                >
                                  <span>View All Projects</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>

                              <div className="space-y-1.5">
                                {[
                                  {
                                    name: "Next-Gen FinTech SaaS",
                                    category: "Web Platform",
                                    status: "In Progress",
                                    statusClass: "bg-amber-50 text-amber-700 border-amber-200",
                                    icon: <ShoppingCart className="w-3 h-3 text-slate-700" />,
                                  },
                                  {
                                    name: "AI Knowledge Engine RAG",
                                    category: "Machine Learning",
                                    status: "Production",
                                    statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                                    icon: <Cpu className="w-3 h-3 text-slate-700" />,
                                  },
                                ].map((proj, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center justify-between p-1.5 rounded-lg border text-[10px]"
                                    style={{ background: "var(--bg-primary)", borderColor: "var(--border-light)" }}
                                  >
                                    <div className="flex items-center gap-2 min-w-0">
                                      <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0">
                                        {proj.icon}
                                      </div>
                                      <div className="truncate">
                                        <p className="font-bold text-slate-900 truncate text-[10px]">{proj.name}</p>
                                        <p className="text-[9px] text-slate-400 font-medium truncate">{proj.category}</p>
                                      </div>
                                    </div>
                                    <span
                                      className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold border shrink-0 ${proj.statusClass}`}
                                    >
                                      {proj.status}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "Projects" && (
                          <motion.div
                            key="projects"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-3"
                          >
                            <div className="flex items-center justify-between border-b pb-2">
                              <div>
                                <h4 className="text-xs font-extrabold text-slate-900">Active Projects Workspace</h4>
                                <p className="text-[9px] text-slate-500">24 enterprise systems under active development</p>
                              </div>
                              <div className="flex items-center gap-1">
                                {["All", "In Progress", "Review", "Completed"].map((flt) => (
                                  <button
                                    key={flt}
                                    type="button"
                                    onClick={() => setProjectFilter(flt)}
                                    className={`px-2 py-0.5 rounded-md text-[9px] font-semibold transition-all ${projectFilter === flt
                                        ? "bg-slate-900 text-white"
                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                      }`}
                                  >
                                    {flt}
                                  </button>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-2">
                              {[
                                {
                                  name: "FinTech Cloud Platform",
                                  client: "Apex Capital",
                                  budget: "$24,500",
                                  progress: 85,
                                  due: "In 12 days",
                                  status: "In Progress",
                                  statusClass: "bg-amber-50 text-amber-700 border-amber-200",
                                },
                                {
                                  name: "Enterprise AI RAG Copilot",
                                  client: "QuantumScale AI",
                                  budget: "$18,200",
                                  progress: 60,
                                  due: "In 18 days",
                                  status: "In Progress",
                                  statusClass: "bg-amber-50 text-amber-700 border-amber-200",
                                },
                                {
                                  name: "Global Logistics Cloud Portal",
                                  client: "GreenLeaf Logistics",
                                  budget: "$32,000",
                                  progress: 95,
                                  due: "Tomorrow",
                                  status: "Review",
                                  statusClass: "bg-indigo-50 text-indigo-700 border-indigo-200",
                                },
                                {
                                  name: "Patient Telemetry Dashboard",
                                  client: "BioSphere Health",
                                  budget: "$14,000",
                                  progress: 100,
                                  due: "Delivered",
                                  status: "Completed",
                                  statusClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
                                },
                              ]
                                .filter((p) => projectFilter === "All" || p.status === projectFilter)
                                .map((proj, idx) => (
                                  <div
                                    key={idx}
                                    className="p-2.5 rounded-xl border bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-1.5"
                                    style={{ borderColor: "var(--border-light)" }}
                                  >
                                    <div className="flex items-center justify-between text-[11px]">
                                      <div>
                                        <span className="font-bold text-slate-900">{proj.name}</span>
                                        <span className="text-slate-400 text-[9px] ml-2">Client: {proj.client}</span>
                                      </div>
                                      <div className="flex items-center gap-2">
                                        <span className="font-bold text-slate-800 text-[10px]">{proj.budget}</span>
                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold border ${proj.statusClass}`}>
                                          {proj.status}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="flex-1 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                                        <div
                                          className="h-full bg-slate-900 rounded-full transition-all duration-500"
                                          style={{ width: `${proj.progress}%` }}
                                        />
                                      </div>
                                      <span className="text-[9px] font-bold text-slate-600">{proj.progress}%</span>
                                      <span className="text-[9px] text-slate-400">Due: {proj.due}</span>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "Clients" && (
                          <motion.div
                            key="clients"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-3"
                          >
                            <div className="flex items-center justify-between border-b pb-2">
                              <div>
                                <h4 className="text-xs font-extrabold text-slate-900">Enterprise Client Directory</h4>
                                <p className="text-[9px] text-slate-500">18 verified corporate client partnerships</p>
                              </div>
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                                98% Retention Rate
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {[
                                {
                                  name: "Apex Capital Group",
                                  industry: "FinTech & Assets",
                                  active: "3 Active Projects",
                                  contract: "$48,000/yr",
                                  avatar: "AC",
                                  status: "Active SLA",
                                },
                                {
                                  name: "BioSphere Health",
                                  industry: "MedTech Systems",
                                  active: "2 Active Projects",
                                  contract: "$62,000/yr",
                                  avatar: "BH",
                                  status: "Active SLA",
                                },
                                {
                                  name: "QuantumScale AI Labs",
                                  industry: "Applied AI",
                                  active: "4 Active Projects",
                                  contract: "$84,000/yr",
                                  avatar: "QS",
                                  status: "Enterprise Plan",
                                },
                                {
                                  name: "GreenLeaf Logistics",
                                  industry: "Supply Chain SaaS",
                                  active: "1 Active Project",
                                  contract: "$32,000/yr",
                                  avatar: "GL",
                                  status: "Active SLA",
                                },
                              ].map((client, i) => (
                                <div
                                  key={i}
                                  className="p-2.5 rounded-xl border bg-slate-50/60 hover:bg-slate-50 transition-colors flex items-center justify-between gap-2"
                                  style={{ borderColor: "var(--border-light)" }}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <div className="w-7 h-7 rounded-lg bg-slate-900 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0">
                                      {client.avatar}
                                    </div>
                                    <div className="min-w-0">
                                      <p className="font-bold text-slate-900 text-[10px] truncate">{client.name}</p>
                                      <p className="text-[9px] text-slate-400 truncate">{client.industry} • {client.active}</p>
                                    </div>
                                  </div>
                                  <div className="text-right shrink-0">
                                    <p className="text-[10px] font-black text-slate-900">{client.contract}</p>
                                    <span className="text-[8.5px] font-semibold text-emerald-700">{client.status}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "Analytics" && (
                          <motion.div
                            key="analytics"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-3"
                          >
                            <div className="flex items-center justify-between border-b pb-2">
                              <div>
                                <h4 className="text-xs font-extrabold text-slate-900">Production Telemetry &amp; Growth</h4>
                                <p className="text-[9px] text-slate-500">Live multi-region performance metrics</p>
                              </div>
                              <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                                Real-time Stream
                              </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {[
                                { title: "Edge Latency", val: "24ms", desc: "Sub-30ms global SLA" },
                                { title: "Conversion", val: "4.8%", desc: "+1.2% MoM lift" },
                                { title: "API Throughput", val: "1.42M", desc: "Requests per day" },
                                { title: "Error Rate", val: "0.001%", desc: "99.999% reliability" },
                              ].map((item, idx) => (
                                <div key={idx} className="p-2 rounded-xl border bg-slate-50/50" style={{ borderColor: "var(--border-light)" }}>
                                  <span className="text-[9px] text-slate-400 block font-semibold">{item.title}</span>
                                  <span className="text-sm font-black text-slate-900 block mt-0.5">{item.val}</span>
                                  <span className="text-[8.5px] text-emerald-600 font-medium block">{item.desc}</span>
                                </div>
                              ))}
                            </div>

                            {/* Regional Traffic Bars */}
                            <div className="p-2.5 rounded-xl border bg-white space-y-1.5" style={{ borderColor: "var(--border-light)" }}>
                              <p className="text-[10px] font-bold text-slate-800">Regional Traffic Distribution</p>
                              {[
                                { region: "North America (us-east & us-west)", pct: 54 },
                                { region: "Europe (eu-central & eu-west)", pct: 28 },
                                { region: "Asia-Pacific (ap-southeast)", pct: 18 },
                              ].map((reg, i) => (
                                <div key={i} className="text-[9px]">
                                  <div className="flex justify-between font-semibold text-slate-600 mb-0.5">
                                    <span>{reg.region}</span>
                                    <span className="font-bold text-slate-900">{reg.pct}%</span>
                                  </div>
                                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-slate-800 rounded-full" style={{ width: `${reg.pct}%` }} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "Team" && (
                          <motion.div
                            key="team"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-3"
                          >
                            <div className="flex items-center justify-between border-b pb-2">
                              <div>
                                <h4 className="text-xs font-extrabold text-slate-900">Engineering &amp; Solutions Staff</h4>
                                <p className="text-[9px] text-slate-500">12 dedicated developers &amp; architects</p>
                              </div>
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-900 text-white">
                                All Members Active
                              </span>
                            </div>

                            <div className="space-y-1.5">
                              {[
                                {
                                  name: "Mahesh Rao",
                                  role: "Solutions Architect & Lead",
                                  focus: "System Architecture • Sprint Planning",
                                  status: "Available",
                                  statusClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
                                  initials: "MR",
                                },
                                {
                                  name: "Elena Rostova",
                                  role: "Principal Cloud Engineer",
                                  focus: "Kubernetes • Terraform • AWS",
                                  status: "Deploying",
                                  statusClass: "text-blue-700 bg-blue-50 border-blue-200",
                                  initials: "ER",
                                },
                                {
                                  name: "David Chen",
                                  role: "Senior Full-Stack Engineer",
                                  focus: "Next.js 16 • React 19 • App Router",
                                  status: "Reviewing",
                                  statusClass: "text-amber-700 bg-amber-50 border-amber-200",
                                  initials: "DC",
                                },
                                {
                                  name: "Sarah Al-Mansoor",
                                  role: "Lead AI / ML Specialist",
                                  focus: "Vector Search • RAG Inference Pipeline",
                                  status: "Active",
                                  statusClass: "text-emerald-700 bg-emerald-50 border-emerald-200",
                                  initials: "SA",
                                },
                              ].map((member, i) => (
                                <div
                                  key={i}
                                  className="p-2 rounded-xl border bg-slate-50/50 flex items-center justify-between gap-2"
                                  style={{ borderColor: "var(--border-light)" }}
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    <div className="w-7 h-7 rounded-full bg-slate-800 text-white font-extrabold text-[10px] flex items-center justify-center shrink-0">
                                      {member.initials}
                                    </div>
                                    <div className="min-w-0">
                                      <p className="text-[10px] font-bold text-slate-900 truncate">{member.name}</p>
                                      <p className="text-[9px] text-slate-400 truncate">{member.role} • {member.focus}</p>
                                    </div>
                                  </div>
                                  <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold border shrink-0 ${member.statusClass}`}>
                                    {member.status}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}

                        {activeTab === "Messages" && (
                          <motion.div
                            key="messages"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-3"
                          >
                            <div className="flex items-center justify-between border-b pb-2">
                              <div>
                                <h4 className="text-xs font-extrabold text-slate-900">Client Communications</h4>
                                <p className="text-[9px] text-slate-500">Live priority threads with active client leads</p>
                              </div>
                              <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                                2 Unread Threads
                              </span>
                            </div>

                            <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                              {messagesList.map((msg) => (
                                <div
                                  key={msg.id}
                                  className="p-2 rounded-xl border bg-slate-50/50 space-y-1"
                                  style={{ borderColor: "var(--border-light)" }}
                                >
                                  <div className="flex items-center justify-between text-[10px]">
                                    <div className="flex items-center gap-1.5">
                                      <span className={`w-5 h-5 rounded-full ${msg.avatarBg} text-white font-bold text-[8.5px] flex items-center justify-center`}>
                                        {msg.avatar}
                                      </span>
                                      <span className="font-bold text-slate-900">{msg.sender}</span>
                                      <span className="text-[8.5px] text-slate-400">({msg.company})</span>
                                    </div>
                                    <span className="text-[8.5px] text-slate-400">{msg.time}</span>
                                  </div>
                                  <p className="text-[9.5px] text-slate-600 leading-snug pl-6">{msg.text}</p>
                                </div>
                              ))}
                            </div>

                            {/* Reply Form */}
                            <form onSubmit={handleSendReply} className="flex gap-1.5 pt-1">
                              <input
                                type="text"
                                value={replyInput}
                                onChange={(e) => setReplyInput(e.target.value)}
                                placeholder="Type a quick reply to the client..."
                                className="flex-1 px-2.5 py-1.5 rounded-lg border text-[10px] outline-none"
                                style={{ borderColor: "var(--border-light)" }}
                              />
                              <button
                                type="submit"
                                className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-bold flex items-center gap-1 hover:bg-black transition-colors shrink-0"
                              >
                                <span>Send</span>
                                <Send className="w-3 h-3" />
                              </button>
                            </form>
                          </motion.div>
                        )}

                        {activeTab === "Settings" && (
                          <motion.div
                            key="settings"
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="space-y-3"
                          >
                            <div className="flex items-center justify-between border-b pb-2">
                              <div>
                                <h4 className="text-xs font-extrabold text-slate-900">Workspace &amp; Security Settings</h4>
                                <p className="text-[9px] text-slate-500">Configure automated governance and telemetry</p>
                              </div>
                              {savedSettings && (
                                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md border border-emerald-300 animate-pulse">
                                  ✓ Preferences Saved!
                                </span>
                              )}
                            </div>

                            <div className="space-y-2">
                              {[
                                {
                                  id: "autoBackup" as const,
                                  title: "Automated Cloud Backups",
                                  desc: "Hourly multi-region snapshots with instant rollback point",
                                },
                                {
                                  id: "twoFactor" as const,
                                  title: "Zero-Trust Two-Factor Auth (2FA)",
                                  desc: "Mandatory biometric or authenticator token on login",
                                },
                                {
                                  id: "slackAlerts" as const,
                                  title: "Real-time Slack / Discord Webhooks",
                                  desc: "Instant notifications for production errors and deployments",
                                },
                                {
                                  id: "publicStatus" as const,
                                  title: "Public Telemetry & Status Page",
                                  desc: "Expose live uptime metrics to verified enterprise clients",
                                },
                              ].map((setting) => {
                                const isOn = settingsState[setting.id];
                                return (
                                  <div
                                    key={setting.id}
                                    onClick={() => handleToggleSetting(setting.id)}
                                    className="p-2 rounded-xl border bg-slate-50/50 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                                    style={{ borderColor: "var(--border-light)" }}
                                  >
                                    <div>
                                      <p className="text-[10px] font-bold text-slate-900">{setting.title}</p>
                                      <p className="text-[8.5px] text-slate-400">{setting.desc}</p>
                                    </div>
                                    <button
                                      type="button"
                                      aria-label={`Toggle ${setting.title}`}
                                      className="shrink-0 text-slate-900"
                                    >
                                      {isOn ? (
                                        <ToggleRight className="w-5 h-5 text-emerald-600" />
                                      ) : (
                                        <ToggleLeft className="w-5 h-5 text-slate-400" />
                                      )}
                                    </button>
                                  </div>
                                );
                              })}
                            </div>

                            <button
                              type="button"
                              onClick={handleSaveSettings}
                              className="w-full py-1.5 rounded-lg bg-slate-900 text-white text-[10px] font-bold hover:bg-black transition-colors"
                            >
                              Save Preferences
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </main>
                  </div>
                </motion.div>
              </TiltCard>
            </div>

          </div>
        </div>

        {/* Bottom subtle divider/fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--bg-secondary))" }}
        />
      </section>

      {/* ─── Remaining sections ──────────────────────────────── */}
      <ClientsStrip />
      <StatsSection />

      {/* Core Services */}
      <section className="py-20 md:py-28 relative overflow-hidden" id="services" style={{ background: "var(--bg-secondary)" }}>
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: "radial-gradient(var(--border-light) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StaggerContainer className="text-center max-w-3xl mx-auto mb-16">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-[11px] uppercase tracking-widest font-bold mb-3"
                style={{
                  background: "var(--accent-light)",
                  borderColor: "rgba(165,138,98,0.3)",
                  color: "var(--accent-dark)",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
                <span>Technology &amp; Digital Solutions</span>
              </div>
            </StaggerItem>
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight" style={{ color: "var(--text-primary)" }}>
                Engineered for Performance, Growth &amp; Impact
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
                We design, build, and deploy modern digital products that empower brands to dominate their digital landscape.
              </p>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
            {coreServices.map((service, idx) => (
              <StaggerItem key={idx}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 280, damping: 20 }} className="h-full">
                  <ServiceCard index={idx + 1} {...service} />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnView delay={0.2} className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 border shadow-xs"
              style={{
                background: "var(--bg-primary)",
                color: "var(--text-primary)",
                borderColor: "var(--border-light)",
              }}
            >
              <span>Explore full technological stack &amp; capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} />
            </Link>
          </AnimateOnView>
        </div>
      </section>

      <TechStackSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </div>
  );
}
