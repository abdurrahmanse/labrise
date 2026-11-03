import React from "react";
import Link from "next/link";

export interface PhaseCardTitleProps {
  slug: string;
  title: string;
  tagline: string;
}

export function PhaseCardTitle({ slug, title, tagline }: PhaseCardTitleProps) {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-teal-200 transition-colors">
        <Link href={`/roadmap/phases/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-sans">
        {tagline}
      </p>
    </div>
  );
}

export default PhaseCardTitle;
