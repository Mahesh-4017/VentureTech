"use client";

import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./AnimateOnView";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShoppingCart,
  GitBranch,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiLaravel,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiGooglecloud,
  SiNetlify,
  SiDigitalocean,
  SiShopify,
  SiWoocommerce,
  SiStripe,
  SiRazorpay,
  SiPaypal,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

interface TechItem {
  name: string;
  brandColor: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

interface TechGroup {
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  items: TechItem[];
}

const techStack: TechGroup[] = [
  {
    category: "Frontend",
    description: "Modern, reactive, and lightning-fast user interfaces",
    icon: Code2,
    items: [
      { name: "React.js", brandColor: "#087ea4", Icon: SiReact },
      { name: "Next.js", brandColor: "#000000", Icon: SiNextdotjs },
      { name: "Vue.js", brandColor: "#42b883", Icon: SiVuedotjs },
      { name: "TypeScript", brandColor: "#3178c6", Icon: SiTypescript },
      { name: "Tailwind CSS", brandColor: "#06b6d4", Icon: SiTailwindcss },
    ],
  },
  {
    category: "Backend",
    description: "High-throughput APIs and enterprise microservices",
    icon: Server,
    items: [
      { name: "Node.js", brandColor: "#5fa04e", Icon: SiNodedotjs },
      { name: "Express.js", brandColor: "#222222", Icon: SiExpress },
      { name: "Django", brandColor: "#092e20", Icon: SiDjango },
      { name: "Laravel", brandColor: "#ff2d20", Icon: SiLaravel },
      { name: "GraphQL", brandColor: "#e10098", Icon: SiGraphql },
    ],
  },
  {
    category: "Databases",
    description: "ACID-compliant, distributed, and realtime storage",
    icon: Database,
    items: [
      { name: "MongoDB", brandColor: "#13aa52", Icon: SiMongodb },
      { name: "PostgreSQL", brandColor: "#336791", Icon: SiPostgresql },
      { name: "MySQL", brandColor: "#00758f", Icon: SiMysql },
      { name: "Firebase", brandColor: "#ffa611", Icon: SiFirebase },
      { name: "Supabase", brandColor: "#3ecf8e", Icon: SiSupabase },
    ],
  },
  {
    category: "Cloud & Hosting",
    description: "Global edge delivery and resilient cloud infrastructure",
    icon: Cloud,
    items: [
      { name: "AWS", brandColor: "#ff9900", Icon: FaAws },
      { name: "Vercel", brandColor: "#000000", Icon: SiVercel },
      { name: "Google Cloud", brandColor: "#4285f4", Icon: SiGooglecloud },
      { name: "Netlify", brandColor: "#00c7b7", Icon: SiNetlify },
      { name: "DigitalOcean", brandColor: "#0080ff", Icon: SiDigitalocean },
    ],
  },
  {
    category: "E-Commerce",
    description: "Secure payment gateways and high-conversion storefronts",
    icon: ShoppingCart,
    items: [
      { name: "Shopify", brandColor: "#7ab55c", Icon: SiShopify },
      { name: "WooCommerce", brandColor: "#96588a", Icon: SiWoocommerce },
      { name: "Stripe", brandColor: "#635bff", Icon: SiStripe },
      { name: "Razorpay", brandColor: "#0c2340", Icon: SiRazorpay },
      { name: "PayPal", brandColor: "#003087", Icon: SiPaypal },
    ],
  },
  {
    category: "DevOps & Tools",
    description: "Automated pipelines, containerization, and UI design",
    icon: GitBranch,
    items: [
      { name: "Docker", brandColor: "#2496ed", Icon: SiDocker },
      { name: "GitHub Actions", brandColor: "#2088ff", Icon: SiGithubactions },
      { name: "Git CI/CD", brandColor: "#f05032", Icon: SiGit },
      { name: "Figma", brandColor: "#f24e1e", Icon: SiFigma },
      { name: "Postman", brandColor: "#ff6c37", Icon: SiPostman },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section
      className="py-20 md:py-28 overflow-hidden relative"
      id="tech-stack"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <StaggerContainer className="text-center max-w-2xl mx-auto mb-16">
          <StaggerItem>
            <span
              className="text-[11px] uppercase tracking-widest font-bold px-3.5 py-1 rounded-full border inline-block"
              style={{
                background: "var(--accent-light)",
                borderColor: "rgba(165,138,98,0.3)",
                color: "var(--accent-dark)",
              }}
            >
              Technologies We Use
            </span>
          </StaggerItem>
          <StaggerItem>
            <h2
              className="text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Powered by the Best Tools in the Industry
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p
              className="mt-4 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              We handpick the right technology for every challenge — combining speed, scalability, and developer experience.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Cards Grid */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          stagger={0.08}
        >
          {techStack.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <StaggerItem key={gi}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: "0 20px 45px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full group"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "var(--border-light)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  }}
                >
                  <div>
                    {/* Header with Lucide category icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                          style={{
                            background: "var(--silver-light)",
                            color: "var(--text-primary)",
                            border: "1px solid var(--border-light)",
                          }}
                        >
                          <GroupIcon className="w-5 h-5 text-current" />
                        </div>
                        <div>
                          <h3
                            className="font-bold text-base tracking-tight"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {group.category}
                          </h3>
                          <span
                            className="text-[11px] font-medium"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {group.items.length} Technologies
                          </span>
                        </div>
                      </div>
                    </div>

                    <p
                      className="text-xs leading-relaxed mb-5"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {group.description}
                    </p>
                  </div>

                  {/* Badges with best vector SVG brand icons */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: "var(--border-light)" }}>
                    {group.items.map((tech, ti) => {
                      const TechIcon = tech.Icon;
                      return (
                        <motion.div
                          key={ti}
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-default transition-all duration-200 border"
                          style={{
                            background: "var(--bg-primary)",
                            borderColor: "var(--border-light)",
                            color: "var(--text-primary)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = `${tech.brandColor}50`;
                            e.currentTarget.style.background = "#ffffff";
                            e.currentTarget.style.boxShadow = `0 4px 12px ${tech.brandColor}18`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--border-light)";
                            e.currentTarget.style.background = "var(--bg-primary)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <TechIcon
                            className="w-3.5 h-3.5 shrink-0 transition-transform duration-200"
                            style={{ color: tech.brandColor }}
                          />
                          <span className="text-[12px]">{tech.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
