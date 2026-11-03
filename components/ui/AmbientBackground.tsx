import React from "react";

/**
 * Quiet field behind every page: flat canvas, a faint grid and two soft colour
 * washes (scholarly blue and academic gold) so frosted glass has something to blur.
 */
export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-canvas-base" />

      <div className="absolute inset-0 bg-grid-pattern opacity-50 [mask-image:linear-gradient(to_bottom,#000_0%,transparent_70%)]" />

      <div className="absolute top-[6%] -right-[140px] w-[460px] h-[460px] rounded-full bg-indigo-400/[0.14] blur-[130px] animate-float-slow" />
      <div className="absolute top-[52%] -left-[160px] w-[460px] h-[460px] rounded-full bg-cyan-400/[0.12] blur-[140px] animate-float-reverse" />
    </div>
  );
}
