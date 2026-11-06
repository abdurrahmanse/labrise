import React from "react";

interface WidgetTabsProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4 | "auto";
  scrollable?: boolean;
  className?: string;
}

const COLUMN_GRID_CLASSES = {
  2: "grid grid-cols-1 sm:grid-cols-2",
  3: "grid grid-cols-1 sm:grid-cols-3",
  4: "grid grid-cols-2 lg:grid-cols-4",
  auto: "flex flex-wrap"
};

export function WidgetTabs({
  children,
  columns = 4,
  scrollable = false,
  className = ""
}: WidgetTabsProps) {
  if (scrollable) {
    return (
      <div
        className={`flex items-center gap-2 overflow-x-auto pb-2 mb-3 scrollbar-none relative z-10 ${className}`}
      >
        {children}
      </div>
    );
  }

  const gridClass = COLUMN_GRID_CLASSES[columns] || COLUMN_GRID_CLASSES[4];

  return (
    <div className={`${gridClass} gap-2.5 mb-6 relative z-10 ${className}`}>
      {children}
    </div>
  );
}
