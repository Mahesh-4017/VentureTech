import React from "react";
import ServicesShowcase from "@/components/ServicesShowcase";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Services & Technology Capabilities",
  description:
    "Explore VentureTech's end-to-end enterprise capabilities: hyperscale cloud architecture, custom AI & LLM integration, zero-trust cybersecurity, and high-concurrency web applications.",
  keywords: [
    "Enterprise Technology Services",
    "Cloud Architecture & DevOps",
    "Applied AI & Machine Learning",
    "Zero-Trust Cybersecurity Audits",
    "Full-Stack Web Engineering",
    "Microservices Modernization",
    "VentureTech Services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Enterprise Services & Technology Capabilities | VentureTech",
    description:
      "Hyperscale cloud architecture, enterprise AI automation, zero-trust security audits, and mission-critical web applications.",
    url: "/services",
    siteName: "VentureTech",
    images: [
      {
        url: "/images/Venturetechlogo.png",
        width: 1200,
        height: 630,
        alt: "VentureTech Enterprise Technology Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Services & Technology Capabilities | VentureTech",
    description:
      "Hyperscale cloud architecture, enterprise AI automation, and zero-trust security engineering.",
    images: ["/images/Venturetechlogo.png"],
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--bg-secondary)" }}>
      <ServicesShowcase />
    </div>
  );
}
