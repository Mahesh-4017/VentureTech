"use client";

import React from "react";
import {
  SiStripe,
  SiShopify,
  SiVercel,
  SiFirebase,
  SiMongodb,
  SiSupabase,
  SiNetlify,
  SiDigitalocean,
  SiFigma,
  SiNextdotjs,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

interface TechPartner {
  name: string;
  category: string;
  brandColor: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const techPartners: TechPartner[] = [
  {
    name: "Stripe",
    category: "Payments",
    brandColor: "#635BFF",
    Icon: SiStripe,
  },
  {
    name: "Shopify",
    category: "E-Commerce",
    brandColor: "#96BF48",
    Icon: SiShopify,
  },
  {
    name: "Vercel",
    category: "Edge Cloud",
    brandColor: "#000000",
    Icon: SiVercel,
  },
  {
    name: "Next.js",
    category: "Web Framework",
    brandColor: "#000000",
    Icon: SiNextdotjs,
  },
  {
    name: "Supabase",
    category: "Postgres BaaS",
    brandColor: "#3ECF8E",
    Icon: SiSupabase,
  },
  {
    name: "MongoDB",
    category: "NoSQL Database",
    brandColor: "#13AA52",
    Icon: SiMongodb,
  },
  {
    name: "AWS",
    category: "Cloud Systems",
    brandColor: "#FF9900",
    Icon: FaAws,
  },
  {
    name: "Firebase",
    category: "Google Cloud",
    brandColor: "#FFA611",
    Icon: SiFirebase,
  },
  {
    name: "Figma",
    category: "UI/UX Systems",
    brandColor: "#F24E1E",
    Icon: SiFigma,
  },
  {
    name: "Netlify",
    category: "CI/CD & Edge",
    brandColor: "#00C7B7",
    Icon: SiNetlify,
  },
  {
    name: "DigitalOcean",
    category: "Cloud Compute",
    brandColor: "#0080FF",
    Icon: SiDigitalocean,
  },
  {
    name: "GitHub",
    category: "DevOps & CI/CD",
    brandColor: "#24292E",
    Icon: SiGithub,
  },
];

/* Duplicate for seamless infinite loop */
const allPartners = [...techPartners, ...techPartners];

export default function ClientsStrip() {
  return (
    <section
      className="py-12 overflow-hidden select-none"
      style={{
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        background: "var(--bg-primary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border bg-white/70 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p
            className="text-[10.5px] font-bold uppercase tracking-[0.18em]"
            style={{ color: "var(--text-muted)" }}
          >
            Technologies &amp; Partners We Work With
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Soft edge gradient fades */}
        <div
          className="absolute left-0 top-0 w-28 sm:w-36 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, var(--bg-primary) 20%, transparent 100%)",
          }}
        />
        <div
          className="absolute right-0 top-0 w-28 sm:w-36 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, var(--bg-primary) 20%, transparent 100%)",
          }}
        />

        {/* Marquee Track */}
        <div className="animate-marquee gap-4 flex py-1">
          {allPartners.map((partner, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 flex items-center gap-3.5 px-4.5 py-3 rounded-2xl border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-md"
              style={{
                background: "var(--card-white)",
                borderColor: "var(--border-light)",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* Official Brand Icon with hover illumination */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "var(--bg-primary)",
                  borderColor: "var(--border-light)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = partner.brandColor;
                  e.currentTarget.style.borderColor = `${partner.brandColor}40`;
                  e.currentTarget.style.background = `${partner.brandColor}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-secondary)";
                  e.currentTarget.style.borderColor = "var(--border-light)";
                  e.currentTarget.style.background = "var(--bg-primary)";
                }}
              >
                <partner.Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Partner Text & Tag */}
              <div className="flex flex-col text-left">
                <span
                  className="text-xs font-bold tracking-tight whitespace-nowrap transition-colors duration-200"
                  style={{ color: "var(--text-primary)" }}
                >
                  {partner.name}
                </span>
                <span
                  className="text-[10px] font-medium tracking-normal whitespace-nowrap mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
