import React from "react";

/**
 * Quiet field behind every page: flat ink, a hairline grid (brutalist structure)
 * and two faint colour blocks so frosted glass surfaces have something to blur.
 */
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-canvas-base" />

      <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:linear-gradient(to_bottom,#000_0%,transparent_75%)]" />

      <div className="absolute top-[8%] -right-[140px] w-[420px] h-[420px] rounded-full bg-indigo-400/[0.09] blur-[130px] animate-float-slow" />
      <div className="absolute top-[55%] -left-[160px] w-[420px] h-[420px] rounded-full bg-white/[0.05] blur-[140px] animate-float-reverse" />

      <div className="absolute top-0 left-0 right-0 h-[2px] bg-indigo-400" />
    </div>
  );
}
