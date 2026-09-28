import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set New Secure Password",
  description:
    "Configure a new encrypted password for your VentureTech enterprise account.",
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: "/images/Venturetechlogo.png",
  },
};

export default function ResetPasswordTokenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
