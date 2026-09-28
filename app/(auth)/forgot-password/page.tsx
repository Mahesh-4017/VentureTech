"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [devResetLink, setDevResetLink] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setDevResetLink(null);
    setPreviewUrl(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to process request. Please try again.");
      } else {
        setSuccessMessage(data.message);
        if (data.devResetLink) {
          setDevResetLink(data.devResetLink);
        }
        if (data.previewUrl) {
          setPreviewUrl(data.previewUrl);
        }
      }
    } catch {
      setError("An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            ACCOUNT RECOVERY
          </div>
          <h1
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Reset Your Password
          </h1>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Enter your account email and we&apos;ll dispatch a cryptographically secured reset link.
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-7 sm:p-8 border shadow-sm"
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border-light)",
          }}
        >
          {error && (
            <div
              className="mb-5 p-3 rounded-xl border flex items-start gap-2.5 text-xs text-red-700 bg-red-50/80 border-red-200"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {successMessage ? (
            <div className="space-y-4">
              <div
                className="p-4 rounded-xl border flex items-start gap-3 text-xs"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                  color: "var(--text-primary)",
                }}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Instructions Dispatched</p>
                  <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {successMessage}
                  </p>
                </div>
              </div>

              {/* Development link */}
              {devResetLink && (
                <div
                  className="p-3.5 rounded-xl border text-xs space-y-2"
                  style={{
                    background: "var(--bg-primary)",
                    borderColor: "var(--border-light)",
                  }}
                >
                  <div className="flex items-center justify-between font-semibold">
                    <span>⚡ Local Development Link:</span>
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold border"
                      style={{
                        background: "var(--silver-light)",
                        borderColor: "var(--border-light)",
                        color: "var(--accent-dark)",
                      }}
                    >
                      Dev Mode
                    </span>
                  </div>
                  <a
                    href={devResetLink}
                    className="inline-flex items-center gap-1.5 font-bold hover:underline break-all"
                    style={{ color: "var(--accent-dark)" }}
                  >
                    <span>Click to Reset Password</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <Link
                href="/login"
                className="w-full mt-4 py-2.5 px-4 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-2 border"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                  color: "var(--text-primary)",
                }}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Sign In</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Registered Account Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-primary)",
                    }}
                  />
                  <Mail
                    className="w-4 h-4 absolute left-3 top-3 pointer-events-none"
                    style={{ color: "var(--text-muted)" }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                style={{
                  background: "var(--graphite)",
                  color: "var(--text-white)",
                }}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    <span>Dispatching Token...</span>
                  </>
                ) : (
                  <>
                    <span>Send Reset Instructions</span>
                    <ArrowRight className="w-4 h-4" style={{ color: "var(--accent-light)" }} />
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-medium hover:underline"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Sign In</span>
                </Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
