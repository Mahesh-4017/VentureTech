import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Command Center & Client Portal",
  description:
    "Secure workspace for managing active cloud architecture deployments, artificial intelligence models, real-time telemetry, and enterprise service contracts.",
  keywords: [
    "VentureTech Dashboard",
    "Client Portal",
    "Enterprise Command Center",
    "Cloud Telemetry",
    "Active Infrastructure Monitoring",
  ],
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/images/Venturetechlogo.png",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
