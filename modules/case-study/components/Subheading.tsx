import type { ReactNode } from "react";

/** A small heading inside a section, with its content below. */
export function Subheading({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-indigo-300">{title}</h3>
      {children}
    </div>
  );
}
