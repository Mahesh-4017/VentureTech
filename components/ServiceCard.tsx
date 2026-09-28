"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export interface ServiceCardProps {
  id?: string;
  index?: number;
  title: string;
  badge?: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  actionText?: string;
  href?: string;
}

export default function ServiceCard({
  id,
  index,
  title,
  badge,
  description,
  features,
  icon,
  actionText = "Explore Solution",
  href = "/contact",
}: ServiceCardProps) {
  const indexStr = index !== undefined ? String(index).padStart(2, "0") : null;

  return (
    <div
      id={id}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 h-full"
      style={{
        background: "var(--bg-primary)",
        borderColor: "var(--border-light)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Top accent highlight bar on hover */}
      <div
        className="absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: "var(--accent)" }}
      />

      <div>
        {/* Top Header: Icon + Badge / Index */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105"
            style={{
              background: "var(--bg-secondary)",
              borderColor: "var(--border-light)",
              color: "var(--text-primary)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
            }}
          >
            {icon}
          </div>

          <div className="flex items-center gap-2">
            {badge && (
              <span
                className="px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider rounded-full border"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                  color: "var(--accent-dark)",
                }}
              >
                {badge}
              </span>
            )}
            {indexStr && (
              <span
                className="text-xs font-black tracking-widest select-none"
                style={{ color: "var(--silver-dark)", opacity: 0.5 }}
              >
                {indexStr}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-xl font-bold tracking-tight transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="mt-3 text-xs sm:text-sm leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>

        {/* Features Checklist */}
        <ul
          className="mt-6 space-y-2.5 pt-4 border-t"
          style={{ borderColor: "var(--border-light)" }}
        >
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border"
                style={{
                  background: "var(--silver-light)",
                  borderColor: "var(--border-light)",
                  color: "var(--accent)",
                }}
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA Button */}
      <div className="mt-8 pt-2">
        <Link
          href={href}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 group-hover:shadow-sm"
          style={{
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-light)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--graphite)";
            e.currentTarget.style.color = "var(--text-white)";
            e.currentTarget.style.borderColor = "var(--graphite)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--bg-secondary)";
            e.currentTarget.style.color = "var(--text-primary)";
            e.currentTarget.style.borderColor = "var(--border-light)";
          }}
        >
          <span>{actionText}</span>
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: "var(--accent)" }}
          />
        </Link>
      </div>
    </div>
  );
}
