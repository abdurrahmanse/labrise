import type { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

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
  icon: LucideIcon;
  className?: string;
}

/** The square blue tile with an icon that marks headings, cards and tiles across the site. */
export function IconBadge({ icon: Icon, size, shadow, className }: IconBadgeProps) {
  return (
    <span className={cn(badge({ size, shadow }), className)}>
      <Icon aria-hidden />
    </span>
  );
}
