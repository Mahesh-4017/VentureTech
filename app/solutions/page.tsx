import React from "react";
import type { Metadata } from "next";
import SolutionsShowcase from "@/components/SolutionsShowcase";

export const metadata: Metadata = {
  title: "Industry Solutions & System Blueprints",
  description:
    "Explore VentureTech's vertical enterprise architectures: high-frequency FinTech systems, HIPAA-compliant Healthcare clouds, multi-tenant SaaS kernels, and AI-native automation pipelines.",
  keywords: [
    "Enterprise Solutions",
    "FinTech Architecture",
    "HIPAA Healthcare Software",
    "Multi-Tenant SaaS Blueprints",
    "Headless Commerce Engineering",
    "Enterprise RAG AI Pipelines",
    "Zero-Trust Cloud Infrastructure",
  ],
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: "Industry Solutions & System Blueprints | VentureTech",
    description:
      "Vertical enterprise architectures for FinTech, Healthcare, Multi-Tenant SaaS, and Autonomous AI Operations.",
    url: "/solutions",
    siteName: "VentureTech",
    images: [
      {
        url: "/images/Venturetechlogo.png",
        width: 1200,
        height: 630,
        alt: "VentureTech Industry Solutions & Blueprints",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Solutions & System Blueprints | VentureTech",
    description:
      "Explore VentureTech's mission-critical enterprise solutions tailored for FinTech, Healthcare, and SaaS.",
    images: ["/images/Venturetechlogo.png"],
  },
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "var(--bg-secondary)" }}>
      <SolutionsShowcase />
    </main>
  );
}
