import { createElement } from "react";
import type { LucideIcon, LucideProps } from "lucide-react";
import { iconFor } from "../utils/iconFor";

/** The icon that goes with a heading or label, chosen from the rules in data/text/iconRules.ts. */
export function IconFor({ text, fallback, ...props }: { text: string; fallback?: LucideIcon } & LucideProps) {
  return createElement(iconFor(text, fallback), { "aria-hidden": true, ...props });
}
