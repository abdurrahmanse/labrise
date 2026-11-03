import React from "react";
import { RoadmapStep } from "@/data/types";

export interface StepCodeSnippetProps {
  snippet: NonNullable<RoadmapStep["codeSnippet"]>;
}

/**
 * Step code snippet viewer sub-section.
 */
export function StepCodeSnippet({ snippet }: StepCodeSnippetProps) {
  return (
    <div className="my-5 rounded-xl border border-white/10 bg-[#070708] overflow-hidden">
      <div className="px-4 py-2 bg-[#121214] border-b border-white/10 flex items-center justify-between">
        <span className="text-xs font-mono text-slate-300">
          {snippet.caption}
        </span>
        <span className="text-[10px] font-mono text-indigo-400 uppercase">
          {snippet.language}
        </span>
      </div>
      <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300">
        <pre>
          <code>{snippet.code}</code>
        </pre>
      </div>
    </div>
  );
}

export default StepCodeSnippet;
