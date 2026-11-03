import React from "react";

export interface StepAcademicContextProps {
  description: string;
}

/**
 * Step academic context and expectations sub-section.
 */
export function StepAcademicContext({ description }: StepAcademicContextProps) {
  return (
    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#0b0b0c]/60 p-4 rounded-xl border border-white/5">
      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
        Context & Academic Expectations:
      </span>
      <p>{description}</p>
    </div>
  );
}

export default StepAcademicContext;
