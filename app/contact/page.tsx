import React from "react";
import type { Metadata } from "next";
import ContactShowcase from "@/components/ContactShowcase";

export const metadata: Metadata = {
  title: "Direct Architectural Consultation & Contact",
  description:
    "Schedule an architectural consultation with VentureTech's Lead Systems Architects under mutual NDA. Fast-track enterprise project scoping, code audits, and cloud infrastructure migrations.",
  keywords: [
    "Contact VentureTech",
    "Enterprise Software Consultation",
    "Hire Senior Cloud Architects",
    "Zero-Downtime Migration Support",
    "Architecture Audit Under NDA",
    "Custom Software Engineering RFP",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Direct Architectural Consultation & Contact | VentureTech",
    description:
      "Connect with VentureTech's Lead Systems Architects under mutual NDA. Request preliminary architecture reviews and enterprise software scoping.",
    url: "/contact",
    siteName: "VentureTech",
    images: [
      {
        url: "/images/Venturetechlogo.png",
        width: 1200,
        height: 630,
        alt: "Contact VentureTech Engineering Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Architectural Consultation & Contact | VentureTech",
    description:
      "Connect directly with VentureTech's Lead Systems Architects under mutual NDA.",
    images: ["/images/Venturetechlogo.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen" style={{ background: "var(--bg-secondary)" }}>
      <ContactShowcase />
    </main>
  );
}
