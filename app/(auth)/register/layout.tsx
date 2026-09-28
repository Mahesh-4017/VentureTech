import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Enterprise Account & Onboard",
  description:
    "Join VentureTech to deploy resilient cloud architectures, scalable AI agents, high-concurrency web applications, and enterprise security systems.",
  keywords: [
    "VentureTech Register",
    "Create Enterprise Account",
    "Client Onboarding",
    "Enterprise Software Sign Up",
    "Cloud Architecture Access",
  ],
  alternates: {
    canonical: "/register",
  },
  openGraph: {
    title: "Create Enterprise Account | VentureTech",
    description: "Deploy next-generation cloud architecture, AI models, and secure enterprise software with VentureTech.",
    url: "/register",
    siteName: "VentureTech",
    images: [
      {
        url: "/images/Venturetechlogo.png",
        width: 1200,
        height: 630,
        alt: "VentureTech Enterprise Registration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Enterprise Account | VentureTech",
    description: "Deploy next-generation cloud architecture, AI models, and secure enterprise software with VentureTech.",
    images: ["/images/Venturetechlogo.png"],
  },
  icons: {
    icon: "/images/Venturetechlogo.png",
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
