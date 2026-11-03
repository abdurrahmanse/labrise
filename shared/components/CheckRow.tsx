"use client";

import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CheckRowProps {
  checked: boolean;
  onChange: () => void;
  /** Accessible name for the checkbox. */
  label: string;
  children: ReactNode;
  hint?: ReactNode;
}

/** A tickable row. The native checkbox stays in the page for keyboards and screen readers. */
export function CheckRow({ checked, onChange, label, children, hint }: CheckRowProps) {
  return (
    <label className={cn("flex cursor-pointer items-start gap-3 border-2 p-3 transition-colors", checked ? "border-indigo-400 bg-indigo-600/15" : "border-white/20 bg-white/[0.03] hover:border-indigo-400/60")}>
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" aria-label={label} />
      <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2", checked ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/40")}>
        {checked && <Check className="h-3.5 w-3.5" aria-hidden />}
      </span>
      <span className="min-w-0">
        <span className={cn("block font-bold", checked ? "text-slate-400 line-through" : "text-slate-100")}>{children}</span>
        {hint && <span className="mt-0.5 block font-sans text-sm font-normal text-slate-400">{hint}</span>}
      </span>
    </label>
  );
}

/** Small square toggle used at the end of a step card. */
export function CheckBox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="flex shrink-0 cursor-pointer items-start">
      <input type="checkbox" checked={checked} onChange={onChange} className="sr-only" aria-label={label} />
      <span className={cn("flex h-8 w-8 items-center justify-center border-2 transition-colors", checked ? "border-indigo-400 bg-indigo-600 text-white" : "border-white/40 text-transparent hover:border-indigo-400")}>
        <Check className="h-5 w-5" aria-hidden />
      </span>
    </label>
  );
}
