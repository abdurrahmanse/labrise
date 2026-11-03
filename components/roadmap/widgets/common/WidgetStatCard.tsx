"use client";

import React from "react";

interface WidgetStatCardProps {
  label: string;
  value: React.ReactNode;
  sublabel?: string;
  icon?: React.ReactNode;
  valueColor?: string;
  highlight?: boolean;
  className?: string;
}

export function WidgetStatCard({
  label,
  value,
  sublabel,
  icon,
  valueColor = "text-slate-200",
  highlight = false,
  className = ""
}: WidgetStatCardProps) {
  return (
    <div
      className={`p-3.5 rounded-lg border transition-all ${
        highlight
          ? "bg-emerald-950/20 border-emerald-500/40 shadow-sm"
          : "bg-[#0b0b0c] border-white/5"
      } ${className}`}
    >
      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
        {icon}
        <span>{label}</span>
      </div>
      <div className={`text-xs sm:text-sm font-bold font-mono ${valueColor}`}>
        {value}
      </div>
      {sublabel && (
        <span className="text-[10px] text-slate-500 block mt-0.5 leading-tight">
          {sublabel}
        </span>
      )}
    </div>
  );
}
