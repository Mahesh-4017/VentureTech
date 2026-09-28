import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Client Sign In & Security Portal",
  description:
    "Securely access the VentureTech enterprise client command center. Multi-factor authentication, enterprise SSO, and real-time infrastructure controls.",
  keywords: [
    "VentureTech Login",
    "Client Portal Sign In",
    "Enterprise SSO Access",
    "Secure Authentication",
    "Developer Command Center Login",
  ],
  alternates: {
    canonical: "/login",
  },
  openGraph: {
    title: "Enterprise Client Sign In | VentureTech",
    description: "Access your VentureTech client command center and enterprise infrastructure telemetry.",
    url: "/login",
    siteName: "VentureTech",
    images: [
      {
        url: "/images/Venturetechlogo.png",
        width: 1200,
        height: 630,
        alt: "VentureTech Secure Sign In",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Client Sign In | VentureTech",
    description: "Access your VentureTech client command center securely.",
    images: ["/images/Venturetechlogo.png"],
  },
  icons: {
    icon: "/images/Venturetechlogo.png",
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
