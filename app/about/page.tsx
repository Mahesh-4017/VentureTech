import React from "react";
import type { Metadata } from "next";
import AboutShowcase from "@/components/AboutShowcase";

export const metadata: Metadata = {
  title: "About Our Team & Engineering Heritage",
  description:
    "Discover VentureTech's elite engineering heritage. Our distributed systems architects build zero-trust cloud infrastructure, high-throughput microservices, and enterprise AI.",
  keywords: [
    "About VentureTech",
    "Enterprise Software Company",
    "Cloud Architects Team",
    "Distributed Systems Engineers",
    "Zero-Trust Architecture",
    "VentureTech Engineering Leadership",
    "Silicon Valley Software Agency",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Our Team & Engineering Heritage | VentureTech",
    description:
      "Meet the engineers and architects behind VentureTech's high-throughput cloud infrastructure and mission-critical enterprise systems.",
    url: "/about",
    siteName: "VentureTech",
    images: [
      {
        url: "/images/Venturetechlogo.png",
        width: 1200,
        height: 630,
        alt: "VentureTech Engineering Team & Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Team & Engineering Heritage | VentureTech",
    description:
      "Meet the engineers and architects behind VentureTech's high-throughput cloud infrastructure.",
    images: ["/images/Venturetechlogo.png"],
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "var(--bg-secondary)" }}>
      <AboutShowcase />
    </main>
  );
}
