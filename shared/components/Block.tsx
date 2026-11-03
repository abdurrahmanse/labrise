import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { iconFor } from "../lib/iconFor";

interface BlockProps {
  title: string;
  /** Overrides the icon picked from the title. */
  icon?: LucideIcon;
  children: ReactNode;
}

export function Block({ title, icon, children }: BlockProps) {
  const Icon = icon ?? iconFor(title);
  return (
    <section className="space-y-4">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-white border-b-2 border-white/80 pb-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-indigo-600 text-white shadow-[2px_2px_0_0_rgba(15,23,42,0.2)]">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}
