import React from "react";

export interface CountryDetailSectionTitleProps {
  icon: React.ReactNode;
  title: string;
  color: "teal" | "indigo" | "emerald" | "amber" | "violet";
}

export function CountryDetailSectionTitle({
  icon,
  title,
  color,
}: CountryDetailSectionTitleProps) {
  const badgeColorMap: Record<string, string> = {
    teal: "text-teal-400 bg-teal-500/10 border-teal-500/25 shadow-teal-500/10",
    indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25 shadow-indigo-500/10",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25 shadow-emerald-500/10",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/25 shadow-amber-500/10",
    violet: "text-violet-400 bg-violet-500/10 border-violet-500/25 shadow-violet-500/10",
  };

  const currentStyle = badgeColorMap[color] || badgeColorMap.teal;

  return (
    <div className="flex items-center gap-3 sm:gap-3.5">
      <div
        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 border shadow-sm ${currentStyle}`}
      >
        {icon}
      </div>
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
        {title}
      </h2>
    </div>
  );
}

export default CountryDetailSectionTitle;
