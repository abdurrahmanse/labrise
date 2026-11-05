"use client";

import React, { useState, useRef } from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderGlow?: "none" | "indigo" | "cyan" | "emerald" | "purple" | "amber" | "rose";
  onClick?: () => void;
  enableSpotlight?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  borderGlow = "none",
  onClick,
  enableSpotlight = true
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !enableSpotlight) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const glowStyles = {
    none: "border-white/20 hover:border-white/70 hover:shadow-[7px_7px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]",
    indigo: "border-indigo-400/40 hover:border-indigo-400 hover:shadow-[7px_7px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]",
    cyan: "border-white/30 hover:border-white hover:shadow-[7px_7px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]",
    emerald: "border-emerald-500/40 hover:border-emerald-400 hover:shadow-[7px_7px_0_0_#10b981]",
    purple: "border-indigo-400/40 hover:border-indigo-400 hover:shadow-[7px_7px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]",
    amber: "border-amber-500/40 hover:border-amber-400 hover:shadow-[7px_7px_0_0_#f59e0b]",
    rose: "border-rose-500/40 hover:border-rose-400 hover:shadow-[7px_7px_0_0_#f43f5e]"
  };

  const spotlightGlows = {
    none: "rgba(255, 255, 255, 0.07)",
    indigo: "color-mix(in srgb, var(--pure-fg) calc(0.15 * 100%), transparent)",
    cyan: "rgba(255, 255, 255, 0.15)",
    emerald: "rgba(16, 185, 129, 0.15)",
    purple: "color-mix(in srgb, var(--pure-fg) calc(0.15 * 100%), transparent)",
    amber: "rgba(245, 158, 11, 0.15)",
    rose: "rgba(244, 63, 94, 0.15)"
  };

  const hoverClass = hoverEffect
    ? "transition-all duration-150 ease-out hover:-translate-x-[3px] hover:-translate-y-[3px]"
    : "";

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-canvas-card/55 backdrop-blur-xl backdrop-saturate-150 border p-6 sm:p-7 shadow-[5px_5px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] ${glowStyles[borderGlow]} ${hoverClass} ${className}`}
    >
      {/* Glass edge highlight */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/25 pointer-events-none" />

      {/* Dynamic Cursor Spotlight Layer */}
      {enableSpotlight && isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightGlows[borderGlow]}, transparent 70%)`
          }}
        />
      )}

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

