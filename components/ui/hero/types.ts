import type { ReactNode } from "react";

export type PageHeroTheme = "indigo" | "cyan" | "purple" | "emerald" | "amber" | "blue";

export interface PageHeroHighlight {
  label: string;
  iconName?: string;
  icon?: ReactNode;
}

export interface PageHeroProps {
  badge: string;
  badgeIconName?: string;
  badgeIcon?: ReactNode;
  theme?: PageHeroTheme;
  title: string;
  highlightWord?: string;
  subtitle: string;
  highlights?: PageHeroHighlight[];
  gradientText?: string;
  children?: ReactNode;
}
