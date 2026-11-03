import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const badge = cva("flex shrink-0 items-center justify-center bg-indigo-600 text-white", {
  variants: {
    size: {
      sm: "h-8 w-8 [&>svg]:h-4 [&>svg]:w-4",
      md: "h-10 w-10 [&>svg]:h-5 [&>svg]:w-5",
      lg: "h-12 w-12 [&>svg]:h-6 [&>svg]:w-6",
      xl: "h-14 w-14 [&>svg]:h-7 [&>svg]:w-7"
    },
    shadow: { true: "shadow-[3px_3px_0_0_rgba(15,23,42,0.2)]", false: "" }
  },
  defaultVariants: { size: "md", shadow: false }
});

interface IconBadgeProps extends VariantProps<typeof badge> {
  /** An icon, or children for anything else that belongs in the square (an icon picked by rule, a number). */
  icon?: LucideIcon;
  children?: ReactNode;
  className?: string;
}

/** The square blue tile that marks headings, cards and tiles across the site. */
export function IconBadge({ icon: Icon, children, size, shadow, className }: IconBadgeProps) {
  return <span className={cn(badge({ size, shadow }), className)}>{Icon ? <Icon aria-hidden /> : children}</span>;
}

/** The same tile holding a step number. */
export function NumberBadge({ children, size = "md", className }: { children: ReactNode; size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <IconBadge size={size} className={cn("font-mono font-bold", className)}>
      {children}
    </IconBadge>
  );
}
