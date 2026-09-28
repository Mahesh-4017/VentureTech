import type { Metadata, Viewport } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import { AuthProvider } from "@/context/AuthContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://venturetech.com"),
  title: {
    default: "VentureTech | Next-Gen Enterprise Solutions & Cloud Systems",
    template: "%s | VentureTech",
  },
  description:
    "VentureTech powers modern enterprises with resilient cloud architectures, scalable AI agents, high-concurrency web systems, and zero-trust security engineering.",
  keywords: [
    "VentureTech",
    "Enterprise Software Solutions",
    "Cloud Architecture Engineering",
    "Applied AI & LLM Systems",
    "Cybersecurity & Zero-Trust",
    "Full-Stack Web Development",
    "Next.js Enterprise Apps",
    "Distributed Microservices",
    "High-Concurrency Backend",
  ],
  authors: [{ name: "VentureTech Engineering Team" }],
  creator: "VentureTech",
  publisher: "VentureTech Systems Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/Venturetechlogo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/Venturetechlogo.png",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/images/Venturetechlogo.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://venturetech.com",
    siteName: "VentureTech Enterprise Systems",
    title: "VentureTech | Next-Gen Enterprise Solutions & Cloud Systems",
    description:
      "VentureTech powers modern enterprises with resilient cloud architectures, scalable AI agents, high-concurrency web systems, and zero-trust security engineering.",
    images: [
      {
        url: "/images/Venturetechlogo.png",
        width: 1200,
        height: 630,
        alt: "VentureTech Official Logo & Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VentureTech | Next-Gen Enterprise Solutions & Cloud Systems",
    description:
      "Empowering enterprises with intelligent cloud architecture, full-stack digital products, and secure authentication systems.",
    images: ["/images/Venturetechlogo.png"],
    creator: "@VentureTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Hebrew:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link style={{ scale: "100" }} rel="icon" type="image/png" href="/images/Venturetechlogo.png" />
        <link rel="shortcut icon" href="/images/Venturetechlogo.png" />
        <link rel="apple-touch-icon" href="/images/Venturetechlogo.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased" style={{ background: "var(--bg-secondary)", color: "var(--text-primary)" }} suppressHydrationWarning>
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
