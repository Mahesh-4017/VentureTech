"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function ResetPasswordPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const resolvedParams = use(params);
  const token = resolvedParams.token;
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to reset password. The link may have expired.");
      } else {
        setSuccess(true);
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
            CREDENTIAL SECURITY
          </div>
          <h1
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Set New Password
          </h1>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Please enter your new password to regain access to your account.
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
              <div className="space-y-1">
                <span>{error}</span>
                {error.includes("expired") && (
                  <div className="pt-1">
                    <Link
                      href="/forgot-password"
                      className="underline font-bold"
                      style={{ color: "var(--accent-dark)" }}
                    >
                      Request a new password reset link
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}

          {success ? (
            <div
              className="p-6 rounded-xl border text-center space-y-3"
              style={{
                background: "var(--silver-light)",
                borderColor: "var(--border-light)",
              }}
            >
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3
                className="text-base font-bold tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Password Reset Complete
              </h3>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Your credentials have been securely updated. You can now sign in with your new password.
              </p>
              <Link
                href="/login"
                className="mt-4 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-colors"
                style={{
                  background: "var(--graphite)",
                  color: "var(--text-white)",
                }}
              >
                <span>Proceed to Sign In</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: "var(--accent-light)" }} />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  New Password (min. 6 characters)
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-9 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-primary)",
                    }}
                  />
                  <Lock
                    className="w-4 h-4 absolute left-3 top-3 pointer-events-none"
                    style={{ color: "var(--text-muted)" }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 transition-colors cursor-pointer"
                    style={{ color: "var(--text-muted)" }}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-9 pr-9 py-2.5 rounded-xl border text-xs sm:text-sm outline-none transition-all"
                    style={{
                      background: "var(--bg-primary)",
                      borderColor: "var(--border-light)",
                      color: "var(--text-primary)",
                    }}
                  />
                  <Lock
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
                    <span>Updating Password...</span>
                  </>
                ) : (
                  <>
                    <span>Reset Password</span>
                    <ArrowRight className="w-4 h-4" style={{ color: "var(--accent-light)" }} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
