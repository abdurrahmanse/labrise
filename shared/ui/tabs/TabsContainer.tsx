"use client";

import { cn } from "@/shared/utils/cn";
import { COLUMN_CLASSES, CONTAINER_VARIANTS } from "./tabStyles";
import type { TabsContainerProps } from "./tabTypes";

/**
 * Universal Tabs layout container component.
 */
export function TabsContainer({
  children,
  variant = "pills",
  fullWidth = false,
  className = "",
  columns
}: TabsContainerProps) {
  const colClass = columns ? COLUMN_CLASSES[columns] || "" : "";
  const widthClass = fullWidth ? "w-full" : "";
  return (
    <div
      role="tablist"
      className={cn(CONTAINER_VARIANTS[variant], colClass, widthClass, className)}
    >
      {children}
    </div>
  );
}
