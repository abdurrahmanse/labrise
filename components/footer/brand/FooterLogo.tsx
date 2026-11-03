import React from "react";
import { GraduationCap } from "lucide-react";

export function FooterLogo() {
  return (
    <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300 shrink-0">
      <GraduationCap className="w-4 h-4" />
      <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-400 opacity-0 group-hover:opacity-30 blur transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}

export default FooterLogo;
