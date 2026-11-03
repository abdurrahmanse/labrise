"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { renderCommonIcon } from "./IconUtils";

export type PageHeroTheme = "indigo" | "cyan" | "purple" | "emerald" | "amber" | "blue";

export interface PageHeroHighlight {
  label: string;
  iconName?: string;
  icon?: React.ReactNode;
}

export interface PageHeroProps {
  badge: string;
  badgeIconName?: string;
  badgeIcon?: React.ReactNode;
  theme?: PageHeroTheme;
  title: string;
  highlightWord?: string;
  subtitle: string;
  highlights?: PageHeroHighlight[];
  gradientText?: string;
  children?: React.ReactNode;
}

const THEME_STYLES: Record<
  PageHeroTheme,
  {
    badgeContainer: string;
    badgeText: string;
    radarPing: string;
    radarDot: string;
    gradient: string;
    defaultHighlightIcon: string;
    spotlight: string;
    orbLeft: string;
    orbRight: string;
  }
> = {
  indigo: {
    badgeContainer: "bg-white/[0.06] border-white/40 shadow-transparent",
    badgeText: "text-slate-100",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-400",
    gradient: "from-indigo-400 via-indigo-300 to-white",
    defaultHighlightIcon: "text-indigo-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(198, 242, 31, 0.1) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 75%)",
    orbLeft: "bg-indigo-400/10",
    orbRight: "bg-white/5",
  },
  cyan: {
    badgeContainer: "bg-white/[0.06] border-white/40 shadow-transparent",
    badgeText: "text-slate-100",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-400",
    gradient: "from-indigo-400 via-indigo-300 to-white",
    defaultHighlightIcon: "text-indigo-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(198, 242, 31, 0.1) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 75%)",
    orbLeft: "bg-indigo-400/10",
    orbRight: "bg-white/5",
  },
  purple: {
    badgeContainer: "bg-white/[0.06] border-white/40 shadow-transparent",
    badgeText: "text-slate-100",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-400",
    gradient: "from-indigo-400 via-indigo-300 to-white",
    defaultHighlightIcon: "text-indigo-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(198, 242, 31, 0.1) 0%, rgba(198, 242, 31, 0.04) 45%, transparent 75%)",
    orbLeft: "bg-indigo-400/10",
    orbRight: "bg-white/5",
  },
  emerald: {
    badgeContainer: "bg-white/[0.06] border-white/40 shadow-transparent",
    badgeText: "text-slate-100",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-400",
    gradient: "from-indigo-400 via-indigo-300 to-white",
    defaultHighlightIcon: "text-indigo-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(198, 242, 31, 0.1) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 75%)",
    orbLeft: "bg-indigo-400/10",
    orbRight: "bg-white/5",
  },
  amber: {
    badgeContainer: "bg-white/[0.06] border-white/40 shadow-transparent",
    badgeText: "text-slate-100",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-400",
    gradient: "from-indigo-400 via-indigo-300 to-white",
    defaultHighlightIcon: "text-indigo-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(198, 242, 31, 0.1) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 75%)",
    orbLeft: "bg-indigo-400/10",
    orbRight: "bg-white/5",
  },
  blue: {
    badgeContainer: "bg-white/[0.06] border-white/40 shadow-transparent",
    badgeText: "text-slate-100",
    radarPing: "bg-indigo-400",
    radarDot: "bg-indigo-400",
    gradient: "from-indigo-400 via-indigo-300 to-white",
    defaultHighlightIcon: "text-indigo-400",
    spotlight:
      "radial-gradient(ellipse 85% 60% at 50% -15%, rgba(198, 242, 31, 0.1) 0%, rgba(255, 255, 255, 0.03) 45%, transparent 75%)",
    orbLeft: "bg-indigo-400/10",
    orbRight: "bg-white/5",
  },
};

/**
 * Universal PageHero component following DRY architecture.
 * Responsive across 5 device categories (mobile, small tablet, tablet, laptop, desktop).
 */
export function PageHero({
  badge,
  badgeIconName,
  badgeIcon,
  theme = "indigo",
  title,
  highlightWord,
  subtitle,
  highlights = [],
  gradientText,
  children,
}: PageHeroProps) {
  const styles = THEME_STYLES[theme] || THEME_STYLES.indigo;
  const gradient = gradientText || styles.gradient;

  const iconElement =
    badgeIcon ||
    (badgeIconName ? renderCommonIcon(badgeIconName, "w-3.5 h-3.5 " + styles.badgeText) : null);

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 border-b-2 border-white/80 bg-canvas-base/70 backdrop-blur-sm">
      {/* 0. Top Glowing Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent pointer-events-none" />

      {/* 1. Overhead Radial Spotlight Beam */}
      <div
        className="absolute top-0 inset-x-0 h-[500px] pointer-events-none"
        style={{
          background: styles.spotlight,
        }}
      />

      {/* 2. Delicate Micro-Grid Pattern with Radial Mask Fade */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)",
        }}
      />

      {/* 3. Floating Aurora Ambient Glow Orbs */}
      <div
        className={`absolute top-1/4 -left-16 w-80 sm:w-[420px] h-80 sm:h-[420px] ${styles.orbLeft} blur-[100px] pointer-events-none rounded-full`}
      />
      <div
        className={`absolute top-8 -right-16 w-96 sm:w-[480px] h-96 sm:h-[480px] ${styles.orbRight} blur-[110px] pointer-events-none rounded-full`}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(650px,90vw)] h-[220px] bg-cyan-400/10 blur-[85px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Radar Badge Ribbon */}
        <div
          className={`inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-none border text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6 shadow-[3px_3px_0_0_rgba(198,242,31,0.9)] backdrop-blur-xl max-w-[calc(100vw-32px)] hover:border-white/30 transition-all duration-200 ${styles.badgeContainer} ${styles.badgeText}`}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span
              className={`animate-radar-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.radarPing}`}
            />
            <span className={`relative inline-flex rounded-full h-2 w-2 ${styles.radarDot}`} />
          </span>
          {iconElement}
          <span className="font-mono text-[10px] sm:text-[11px] truncate tracking-wide">{badge}</span>
        </div>

        {/* Hero Title with Gradient Text Accent */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6 max-w-4xl mx-auto leading-[1.15] sm:leading-[1.1] font-heading break-words px-1">
          {title}{" "}
          {highlightWord && (
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              {highlightWord}
            </span>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-sans font-normal px-2">
          {subtitle}
        </p>

        {/* Optional Action Buttons or Custom Children */}
        {children && <div className="mb-6 sm:mb-8">{children}</div>}

        {/* Highlights Telemetry Ribbon */}
        {highlights.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs">
            {highlights.map((h) => {
              const hIcon =
                h.icon ||
                (h.iconName ? (
                  renderCommonIcon(h.iconName, "w-3.5 h-3.5 " + styles.defaultHighlightIcon)
                ) : (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${styles.defaultHighlightIcon}`} />
                ));

              return (
                <div
                  key={h.label}
                  className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/[0.05] border border-white/25 hover:border-indigo-400 backdrop-blur-md text-slate-200 hover:text-white font-mono text-[11px] sm:text-xs shadow-[3px_3px_0_0_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="w-5 h-5 bg-white/[0.06] border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {hIcon}
                  </span>
                  <span className="tracking-wide font-medium">{h.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default PageHero;
