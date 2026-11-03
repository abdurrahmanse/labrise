import type { ElementType, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

const label = cva("font-mono text-xs uppercase tracking-wider", {
  variants: { tone: { muted: "text-slate-400", accent: "text-indigo-300", faint: "text-slate-500" } },
  defaultVariants: { tone: "muted" }
});

/** Small uppercase mono caption used above values and titles. */
export function Label({ as: Tag = "span", tone, className, children }: { as?: ElementType; className?: string; children: ReactNode } & VariantProps<typeof label>) {
  return <Tag className={cn(label({ tone }), className)}>{children}</Tag>;
}

const body = cva("font-sans text-[length:var(--text-body)] font-normal", {
  variants: { tone: { default: "text-slate-300", strong: "text-slate-200", muted: "text-slate-400" } },
  defaultVariants: { tone: "default" }
});

/** Paragraph text at the site's one body size. */
export function Body({ as: Tag = "p", tone, className, children }: { as?: ElementType; className?: string; children: ReactNode } & VariantProps<typeof body>) {
  return <Tag className={cn(body({ tone }), className)}>{children}</Tag>;
}
