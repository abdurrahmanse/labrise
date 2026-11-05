import type { PageHeroTheme } from "./types";

export interface HeroThemeStyles {
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

const spotlight = (mid: string) =>
  `radial-gradient(ellipse 85% 60% at 50% -15%, color-mix(in srgb, var(--pure-fg) calc(0.1 * 100%), transparent) 0%, ${mid} 45%, transparent 75%)`;

const WHITE_3 = "rgba(255, 255, 255, 0.03)";

/** Every theme currently shares one palette; only the middle stop of the spotlight differs. */
const base: Omit<HeroThemeStyles, "spotlight"> = {
  badgeContainer: "bg-white/[0.06] border-white/40 shadow-transparent",
  badgeText: "text-slate-100",
  radarPing: "bg-indigo-400",
  radarDot: "bg-indigo-400",
  gradient: "from-indigo-400 via-indigo-300 to-white",
  defaultHighlightIcon: "text-indigo-400",
  orbLeft: "bg-indigo-400/10",
  orbRight: "bg-white/5"
};

export const THEME_STYLES: Record<PageHeroTheme, HeroThemeStyles> = {
  indigo: { ...base, spotlight: spotlight("rgba(255, 255, 255, 0.04)") },
  cyan: { ...base, spotlight: spotlight(WHITE_3) },
  purple: { ...base, spotlight: spotlight("color-mix(in srgb, var(--pure-fg) calc(0.04 * 100%), transparent)") },
  emerald: { ...base, spotlight: spotlight(WHITE_3) },
  amber: { ...base, spotlight: spotlight(WHITE_3) },
  blue: { ...base, spotlight: spotlight(WHITE_3) }
};
