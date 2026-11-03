import React from "react";
import { commonText } from "@/data/text/common";

export function FooterStatusPing() {
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-none bg-emerald-500/10 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 shrink-0">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
      </span>
      <span>{commonText.footer.status}</span>
    </div>
  );
}

export default FooterStatusPing;
