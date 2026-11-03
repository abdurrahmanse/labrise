import React from "react";

export function RoadmapHeaderGlow() {
  return (
    <>
      {/* Specular Top Glow Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />

      {/* Ambient Radial Accent */}
      <div
        className="absolute top-0 right-1/4 w-96 h-48 pointer-events-none -translate-y-1/2 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
        }}
      />
    </>
  );
}

export default RoadmapHeaderGlow;
