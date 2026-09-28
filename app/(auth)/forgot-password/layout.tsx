import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Account Password & Credentials",
  description:
    "Initiate a secure password recovery request for your VentureTech enterprise account using encrypted one-time verification tokens.",
  keywords: [
    "Forgot Password",
    "Password Recovery",
    "VentureTech Security",
    "Account Credential Reset",
  ],
  alternates: {
    canonical: "/forgot-password",
  },
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/images/Venturetechlogo.png",
  },
};

export default function ForgotPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
