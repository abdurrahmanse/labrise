import type { ElementType, HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

export const surface = cva("backdrop-blur-xl", {
  variants: {
    tone: {
      glass: "bg-canvas-card/70",
      panel: "border-2 border-white/30 bg-canvas-card/60",
      quiet: "border-2 border-white/20 bg-canvas-card/50",
      tint: "border-2 border-white/25 bg-white/[0.03]"
    },
    depth: {
      none: "",
      sm: "shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]",
      soft: "shadow-[4px_4px_0_0_rgba(15,23,42,0.12)]",
      md: "shadow-[4px_4px_0_0_rgba(15,23,42,0.18)]",
      lg: "shadow-[6px_6px_0_0_rgba(58,95,224,0.25)]"
    },
    interactive: {
      true: "transition-all duration-150 hover:-translate-y-0.5 hover:border-indigo-400",
      false: ""
    },
    padding: { none: "", sm: "p-3", md: "p-4", lg: "p-5", xl: "p-6" }
  },
  defaultVariants: { tone: "panel", depth: "md", interactive: false, padding: "lg" }
});

type SurfaceProps = HTMLAttributes<HTMLElement> & VariantProps<typeof surface> & { as?: ElementType };

/** The glass card with hard shadow used for panels, tiles and list rows. */
export function Surface({ as: Tag = "div", tone, depth, interactive, padding, className, ...rest }: SurfaceProps) {
  return <Tag className={cn(surface({ tone, depth, interactive, padding }), className)} {...rest} />;
}
