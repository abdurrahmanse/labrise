import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import type { ResourceItem } from "../../types/step";

export interface StepResourcesListProps {
  resources?: ResourceItem[];
}

/**
 * Recommended literature & official documentation resource links sub-section.
 */
export function StepResourcesList({ resources }: StepResourcesListProps) {
  if (!resources || resources.length === 0) return null;

  return (
    <div className="pt-2">
      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
        <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
        <span>Recommended Literature & Official Documentation:</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {resources.map((resource, idx) => (
          <a
            key={idx}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-canvas-base border border-white/5 hover:border-indigo-500/40 transition-all flex items-start justify-between gap-3 group/link"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                  {resource.type}
                </span>
                <span className="text-xs font-semibold text-white group-hover/link:text-indigo-300 transition-colors truncate">
                  {resource.title}
                </span>
              </div>
              {resource.description && (
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {resource.description}
                </p>
              )}
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-indigo-400 shrink-0 mt-1 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default StepResourcesList;
