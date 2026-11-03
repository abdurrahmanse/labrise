import type { ReactNode } from "react";

export function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-white border-b-2 border-white/80 pb-2">{title}</h2>
      {children}
    </section>
  );
}
