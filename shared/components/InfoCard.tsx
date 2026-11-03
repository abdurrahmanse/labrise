import type { ReactNode } from "react";
import { IconFor } from "./IconFor";
import { surface } from "./Surface";
import { Label } from "./Text";

export const infoCardClass = surface({ tone: "panel", depth: "md", padding: "lg" });

export function InfoCard({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className={infoCardClass}>
      {label && (
        <Label as="div" tone="accent" className="mb-2 flex items-center gap-2">
          <IconFor text={label} className="h-4 w-4" />
          {label}
        </Label>
      )}
      {children}
    </div>
  );
}
