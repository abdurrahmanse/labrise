import React from "react";
import { CountryGuide } from "@/data/countryGuidesData";

interface SupervisorBadgeProps {
  requirement: CountryGuide["supervisorContactRequirement"];
}

export function SupervisorBadge({ requirement }: SupervisorBadgeProps) {
  const isStrict = requirement.includes("Strictly");
  const isCentralized = requirement.includes("Centralized");
  const color = isStrict
    ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
    : isCentralized
    ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
    : "bg-teal-500/20 text-teal-300 border-teal-500/40";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-none text-[11px] font-mono font-semibold border ${color}`}
    >
      {requirement}
    </span>
  );
}

export default SupervisorBadge;
