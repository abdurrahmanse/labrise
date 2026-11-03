"use client";

import React from "react";

interface WidgetSectionCardProps {
  children: React.ReactNode;
  className?: string;
  headerSlot?: React.ReactNode;
}

export function WidgetSectionCard({
  children,
  className = "",
  headerSlot
}: WidgetSectionCardProps) {
  return (
    <div
      className={`p-5 sm:p-6 rounded-xl bg-canvas-card border border-white/10 relative z-10 space-y-4 shadow-xl ${className}`}
    >
      {headerSlot && (
        <div className="pb-3 border-b border-white/5">
          {headerSlot}
        </div>
      )}
      {children}
    </div>
  );
}
