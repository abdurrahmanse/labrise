import React from "react";

export interface FooterContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function FooterContainer({ children, className = "" }: FooterContainerProps) {
  return (
    <footer
      className={`mt-auto border-t border-white/10 bg-canvas-base/95 text-slate-400 text-xs backdrop-blur-xl relative z-10 ${className}`}
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {children}
      </div>
    </footer>
  );
}

export default FooterContainer;
