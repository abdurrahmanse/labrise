import * as React from "react";
import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/shared/utils/cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "indigo"
  | "cyan"
  | "emerald"
  | "amber"
  | "purple";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-heading transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--btn-bg)]/60 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-[var(--btn-fg)] border-2 border-[var(--btn-bg)] shadow-[4px_4px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] hover:shadow-[2px_2px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none uppercase tracking-wider",
        secondary:
          "bg-transparent hover:bg-[var(--btn-bg)] hover:text-[var(--btn-fg)] text-[var(--btn-bg)] border-2 border-[var(--btn-bg)] shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)] uppercase tracking-wider",
        outline:
          "bg-transparent hover:bg-[var(--btn-bg)] hover:text-[var(--btn-fg)] text-[var(--btn-bg)] border-2 border-[var(--btn-bg)] uppercase tracking-wider",
        ghost: "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-transparent",
        danger:
          "bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-500/40 shadow-lg shadow-rose-950/50",
        indigo:
          "bg-transparent hover:bg-[var(--btn-bg)] hover:text-[var(--btn-fg)] text-[var(--btn-bg)] border-2 border-[var(--btn-bg)] shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]",
        cyan: "bg-transparent hover:bg-[var(--btn-bg)] hover:text-[var(--btn-fg)] text-[var(--btn-bg)] border-2 border-[var(--btn-bg)] shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]",
        emerald:
          "bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 shadow-md shadow-emerald-950/50",
        amber:
          "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 shadow-md shadow-amber-950/50",
        purple:
          "bg-transparent hover:bg-[var(--btn-bg)] hover:text-[var(--btn-fg)] text-[var(--btn-bg)] border-2 border-[var(--btn-bg)] shadow-[3px_3px_0_0_color-mix(in_srgb,var(--pure-fg)_30%,transparent)]"
      },
      size: {
        xs: "px-2.5 py-1 text-[11px] gap-1.5",
        sm: "px-3 py-1.5 text-xs gap-2",
        md: "px-4 py-2 text-xs sm:text-sm gap-2 font-medium",
        lg: "px-5 py-2.5 text-sm sm:text-base gap-2.5 font-semibold"
      },
      fullWidth: { true: "w-full", false: "" }
    },
    defaultVariants: { variant: "primary", size: "md", fullWidth: false }
  }
);

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  iconRight?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  /** Render the child element (e.g. a Next Link) with button styles. */
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant,
  size,
  icon,
  leftIcon,
  iconRight,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);
  const startIcon = leftIcon || icon;
  const endIcon = rightIcon || iconRight;

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : (
        startIcon && <span className="shrink-0">{startIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && endIcon && <span className="shrink-0">{endIcon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    const computedRel = rel || (target === "_blank" ? "noopener noreferrer" : undefined);
    return (
      <Link href={href} target={target} rel={computedRel} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  const Comp = asChild ? Slot : "button";

  return (
    <Comp className={classes} disabled={isLoading || buttonProps.disabled} {...buttonProps}>
      {asChild ? children : content}
    </Comp>
  );
}
