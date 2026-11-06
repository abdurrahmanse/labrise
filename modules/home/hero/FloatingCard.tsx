import type { ReactNode } from "react";

interface FloatingCardProps {
  className: string;
  children: ReactNode;
}

/** A small glass card that drifts slowly; position comes from className. */
export function FloatingCard({ className, children }: FloatingCardProps) {
  return (
    <div className={`absolute hidden bg-canvas-card/85 p-3 sm:block backdrop-blur-xl shadow-[6px_6px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] ${className}`}>
      {children}
    </div>
  );
}
