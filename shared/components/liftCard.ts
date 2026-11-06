import { cn } from "@/shared/utils/cn";
import { surface } from "./Surface";

const LIFT =
  "group relative transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--hover-line)] hover:shadow-[var(--hover-shadow)]";

/** Classes for a card that is a link: glass surface that rises a little and firms its border on hover. */
export const liftCard = (className?: string, size: "md" | "lg" = "lg") =>
  surface({ tone: "glass", depth: size === "lg" ? "soft" : "sm", padding: size, className: cn(LIFT, className) });
