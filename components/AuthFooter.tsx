"use client";

import React from "react";
import Link from "next/link";

export default function AuthFooter() {
  return (
    <footer
      className="w-full py-5 border-t text-xs transition-colors"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border-light)",
        color: "var(--text-muted)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          &copy; {new Date().getFullYear()} VentureTech Solutions Inc. All rights reserved.
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/privacy"
            className="hover:underline transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:underline transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            Terms of Service
          </Link>
          <Link
            href="/contact"
            className="hover:underline transition-colors"
            style={{ color: "var(--text-secondary)" }}
          >
            Help &amp; Support
          </Link>

          <span
            className="hidden md:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-semibold"
            style={{
              background: "var(--silver-light)",
              borderColor: "var(--border-light)",
              color: "var(--text-secondary)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Systems Secure</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
