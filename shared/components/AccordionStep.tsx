"use client";

import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { CheckBox } from "./CheckRow";
import { NumberBadge } from "./IconBadge";

interface AccordionStepProps {
  number: string | number;
  title: string;
  summary: string;
  done: boolean;
  onToggle: () => void;
  toggleLabel: string;
  /** Detail shown when the step is opened. */
  children: ReactNode;
}

/** A numbered step that opens to show details and can be ticked off. */
export function AccordionStep({ number, title, summary, done, onToggle, toggleLabel, children }: AccordionStepProps) {
  return (
    <li className={cn("border-2 backdrop-blur-xl transition-colors", done ? "border-indigo-400/60 bg-indigo-600/10" : "border-white/25 bg-canvas-card/60")}>
      <details className="group">
        <summary className="flex cursor-pointer list-none items-start gap-4 p-4">
          <NumberBadge>{number}</NumberBadge>
          <span className="min-w-0 flex-1">
            <span className={cn("block text-lg font-bold", done ? "text-slate-400 line-through" : "text-white")}>{title}</span>
            <span className="mt-1 block font-sans text-[length:var(--text-body)] font-normal text-slate-300">{summary}</span>
          </span>
          <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden />
        </summary>
        <div className="space-y-4 border-t border-white/15 p-4">
          {children}
          <div className="flex items-center gap-3 font-bold text-slate-100">
            <CheckBox checked={done} onChange={onToggle} label={toggleLabel} />
            {toggleLabel}
          </div>
        </div>
      </details>
    </li>
  );
}
