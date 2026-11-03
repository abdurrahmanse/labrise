import React from "react";
import {
  Cpu,
  Sparkles,
  Target,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  Presentation,
  FileCode,
  Compass,
  DollarSign,
  Map,
  GraduationCap,
  Wrench,
  ShieldAlert,
  HelpCircle,
  Users,
  Award,
  Activity,
  Clock,
  ExternalLink,
  BookOpen,
  ClipboardCheck,
  Search,
  RotateCcw,
  Globe2,
  Building2,
  Crown,
  LucideIcon
} from "lucide-react";

export const COMMON_ICONS: Record<string, LucideIcon> = {
  Cpu,
  Sparkles,
  Target,
  FileCheck,
  ShieldCheck,
  CheckCircle2,
  Presentation,
  FileCode,
  Compass,
  DollarSign,
  Map,
  GraduationCap,
  Wrench,
  ShieldAlert,
  HelpCircle,
  Users,
  Award,
  Activity,
  Clock,
  ExternalLink,
  BookOpen,
  ClipboardCheck,
  Search,
  RotateCcw,
  Globe2,
  Building2,
  Crown
};

/**
 * Universal DRY icon renderer.
 * Eliminates duplicate switch-statement helpers across heroes, navbars, and cards.
 */
export function getIconComponent(iconName: string): LucideIcon {
  return COMMON_ICONS[iconName] || GraduationCap;
}

export function renderCommonIcon(
  iconName: string,
  className = "w-4 h-4",
  fallback?: React.ReactNode
): React.ReactNode {
  const IconComp = COMMON_ICONS[iconName];
  if (IconComp) {
    return <IconComp className={className} />;
  }
  return fallback || <GraduationCap className={className} />;
}
