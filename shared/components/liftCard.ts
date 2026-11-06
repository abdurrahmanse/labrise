import { cn } from "@/shared/utils/cn";
import { surface } from "./Surface";

const LIFT =
  "group relative transition-all duration-150 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-[6px_6px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]";

/** Classes for a card that is a link: glass surface that lifts and lights its border on hover. */
export const liftCard = (className?: string, size: "md" | "lg" = "lg") =>
  surface({ tone: "glass", depth: size === "lg" ? "soft" : "sm", padding: size, className: cn(LIFT, className) });
