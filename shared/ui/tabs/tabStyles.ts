import type { TabTheme, TabVariant } from "./tabTypes";

export const CONTAINER_VARIANTS: Record<TabVariant, string> = {
  segmented: "p-1.5 rounded-2xl bg-canvas-base border border-white/10 flex items-center gap-1.5 overflow-x-auto scrollbar-none",
  pills: "flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none",
  cards: "grid gap-2.5",
  minimal: "flex items-center gap-1 border-b border-white/10"
};

export const COLUMN_CLASSES: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
  5: "grid-cols-2 sm:grid-cols-5",
  6: "grid-cols-3 sm:grid-cols-6",
  7: "grid-cols-3 sm:grid-cols-7"
};

export const ACTIVE_THEMES: Record<TabTheme, string> = {
  indigo: "bg-indigo-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  cyan: "bg-cyan-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  emerald: "bg-emerald-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  amber: "bg-amber-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  purple: "bg-indigo-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent",
  rose: "bg-rose-600 text-white shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] border-transparent"
};

export const INACTIVE_STYLES = "bg-canvas-base text-slate-400 hover:text-white border-white/15 hover:border-white/60 hover:bg-white/[0.06] backdrop-blur-sm";
