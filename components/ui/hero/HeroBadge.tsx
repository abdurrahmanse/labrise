import type { ReactNode } from "react";
import type { HeroThemeStyles } from "./heroThemes";

interface HeroBadgeProps {
  label: string;
  icon: ReactNode;
  styles: Pick<HeroThemeStyles, "badgeContainer" | "badgeText" | "radarPing" | "radarDot">;
}

/** The small pulsing ribbon above the title. */
export function HeroBadge({ label, icon, styles }: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-none border text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6 shadow-[3px_3px_0_0_rgba(58,95,224,0.35)] backdrop-blur-xl max-w-[calc(100vw-32px)] hover:border-white/30 transition-all duration-200 ${styles.badgeContainer} ${styles.badgeText}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className={`animate-radar-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${styles.radarPing}`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${styles.radarDot}`} />
      </span>
      {icon}
      <span className="font-mono text-[10px] sm:text-[11px] truncate tracking-wide">{label}</span>
    </div>
  );
}
