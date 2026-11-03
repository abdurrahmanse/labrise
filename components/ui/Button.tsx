"use client";

import React from "react";
import Link from "next/link";

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

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  iconRight?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
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

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-400 hover:bg-indigo-300 text-black border-2 border-black shadow-[4px_4px_0_0_rgba(255,255,255,0.9)] hover:shadow-[2px_2px_0_0_rgba(255,255,255,0.9)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none uppercase tracking-wider",
  secondary:
    "bg-white/[0.06] backdrop-blur-md hover:bg-white/10 text-slate-100 border-2 border-white/40 hover:border-white shadow-[3px_3px_0_0_rgba(255,255,255,0.2)] uppercase tracking-wider",
  outline:
    "bg-transparent hover:bg-white hover:text-black text-slate-200 border-2 border-white/60 uppercase tracking-wider",
  ghost:
    "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-transparent",
  danger:
    "bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-500/40 shadow-lg shadow-rose-950/50",
  indigo:
    "bg-indigo-400/10 hover:bg-indigo-400 hover:text-black text-indigo-300 border-2 border-indigo-400 shadow-[3px_3px_0_0_rgba(198,242,31,0.5)]",
  cyan:
    "bg-white/10 hover:bg-white hover:text-black text-white border-2 border-white/70 shadow-[3px_3px_0_0_rgba(255,255,255,0.3)]",
  emerald:
    "bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 shadow-md shadow-emerald-950/50",
  amber:
    "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 shadow-md shadow-amber-950/50",
  purple:
    "bg-indigo-400/10 hover:bg-indigo-400 hover:text-black text-indigo-300 border-2 border-indigo-400 shadow-[3px_3px_0_0_rgba(198,242,31,0.5)]"
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1 text-[11px] gap-1.5",
  sm: "px-3 py-1.5 text-xs gap-2",
  md: "px-4 py-2 text-xs sm:text-sm gap-2 font-medium",
  lg: "px-5 py-2.5 text-sm sm:text-base gap-2.5 font-semibold"
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  leftIcon,
  iconRight,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-heading transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400/60 disabled:opacity-50 disabled:pointer-events-none";
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const sizeClass = SIZE_STYLES[size] || SIZE_STYLES.md;
  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${className}`;

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
      <Link href={href} target={target} rel={computedRel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={combinedClasses} disabled={isLoading || buttonProps.disabled} {...buttonProps}>
      {content}
    </button>
  );
}
