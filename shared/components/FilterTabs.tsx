"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterOption<T extends string> {
  value: T;
  label: string;
  icon?: LucideIcon;
}

interface FilterTabsProps<T extends string> {
  options: readonly FilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
  /** "tablist" for views that swap content, "group" for filters on one list. */
  kind?: "tablist" | "group";
}

/** Pill buttons that pick one option. Used for level filters, document filters and tab switches. */
export function FilterTabs<T extends string>({ options, value, onChange, label, kind = "group" }: FilterTabsProps<T>) {
  const tabs = kind === "tablist";
  return (
    <div role={tabs ? "tablist" : "group"} aria-label={label} className="flex flex-wrap gap-2">
      {options.map(({ value: v, label: text, icon: Icon }) => {
        const active = v === value;
        return (
          <button
            key={v}
            type="button"
            role={tabs ? "tab" : undefined}
            aria-selected={tabs ? active : undefined}
            aria-pressed={tabs ? undefined : active}
            onClick={() => onChange(v)}
            className={cn(
              "inline-flex cursor-pointer items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors",
              active ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10"
            )}
          >
            {Icon && <Icon className="h-4 w-4" aria-hidden />}
            {text}
          </button>
        );
      })}
    </div>
  );
}
