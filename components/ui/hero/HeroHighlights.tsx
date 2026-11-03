import { CheckCircle2 } from "lucide-react";
import { renderCommonIcon } from "../IconUtils";
import type { PageHeroHighlight } from "./types";

interface HeroHighlightsProps {
  items: PageHeroHighlight[];
  iconClass: string;
}

function HighlightIcon({ item, iconClass }: { item: PageHeroHighlight; iconClass: string }) {
  if (item.icon) return <>{item.icon}</>;
  if (item.iconName) return <>{renderCommonIcon(item.iconName, `w-3.5 h-3.5 ${iconClass}`)}</>;
  return <CheckCircle2 className={`w-3.5 h-3.5 ${iconClass}`} />;
}

/** The row of small facts under the subtitle. */
export function HeroHighlights({ items, iconClass }: HeroHighlightsProps) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs">
      {items.map((item) => (
        <div
          key={item.label}
          className="group flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-white/[0.05] border border-white/25 hover:border-indigo-400 backdrop-blur-md text-slate-200 hover:text-white font-mono text-[11px] sm:text-xs shadow-[3px_3px_0_0_rgba(15,23,42,0.18)] hover:-translate-y-0.5 transition-all duration-200"
        >
          <span className="w-5 h-5 bg-white/[0.06] border border-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
            <HighlightIcon item={item} iconClass={iconClass} />
          </span>
          <span className="tracking-wide font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
