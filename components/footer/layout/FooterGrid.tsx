import React from "react";

export interface FooterGridProps {
  children: React.ReactNode;
  className?: string;
}

export function FooterGrid({ children, className = "" }: FooterGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 ${className}`}
    >
      {children}
    </div>
  );
}

export default FooterGrid;
