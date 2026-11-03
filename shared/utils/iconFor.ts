import type { LucideIcon } from "lucide-react";
import { fallbackIcon, iconRules } from "@/data/text/iconRules";

/** Picks an icon for a heading or label from the rules in data/text/iconRules.ts. */
export function iconFor(text: string, fallback: LucideIcon = fallbackIcon): LucideIcon {
  return iconRules.find(([pattern]) => pattern.test(text))?.[1] ?? fallback;
}
