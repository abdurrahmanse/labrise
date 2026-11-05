import type React from "react";

export type TabTheme = "indigo" | "cyan" | "emerald" | "amber" | "purple" | "rose";
export type TabVariant = "pills" | "cards" | "segmented" | "minimal";

export interface TabsContainerProps {
  children: React.ReactNode;
  variant?: TabVariant;
  theme?: TabTheme | string;
  size?: "xs" | "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

export interface TabItemProps {
  active: boolean;
  onClick: () => void;
  title?: React.ReactNode;
  label?: React.ReactNode;
  children?: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  theme?: TabTheme | string;
  colorTheme?: TabTheme | string;
  variant?: TabVariant;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}
