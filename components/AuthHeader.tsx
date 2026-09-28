"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldCheck, Lock } from "lucide-react";

export default function AuthHeader() {
  const pathname = usePathname();

  // Determine context-aware switch link
  const isLogin = pathname.startsWith("/login");
  const isRegister = pathname.startsWith("/register");
  const isForgotOrReset =
    pathname.startsWith("/forgot-password") || pathname.startsWith("/reset-password");

  return (
    <header
      className="w-full sticky top-0 z-50 transition-colors backdrop-blur-md"
      style={{
        background: "rgba(255, 255, 255, 0.92)",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Back to Home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 group"
          style={{
            background: "var(--silver-light)",
            borderColor: "var(--border-light)",
            color: "var(--text-secondary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.color = "var(--text-primary)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-light)";
            e.currentTarget.style.color = "var(--text-secondary)";
          }}
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Right: Switch Auth Mode / Security badge */}
        <div className="flex items-center gap-4">
          <div
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-semibold"
            style={{ color: "var(--text-muted)" }}
          >
            <Lock className="w-3 h-3" style={{ color: "var(--accent)" }} />
            <span>SSL Encrypted</span>
          </div>

          {isLogin && (
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
              style={{ color: "var(--accent-dark)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-dark)")}
            >
              <span>Create Account</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}

          {isRegister && (
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
              style={{ color: "var(--accent-dark)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-dark)")}
            >
              <span>Sign In</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}

          {isForgotOrReset && (
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
              style={{ color: "var(--accent-dark)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-dark)")}
            >
              <span>Back to Sign In</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
