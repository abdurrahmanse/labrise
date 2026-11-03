"use client";

import { plannerText as t } from "@/data/text/planner";
import { useMounted } from "@/shared/hooks/useMounted";
import { daysUntil } from "../lib/dates";
import { usePlanner } from "../store/usePlanner";

export function PlannerSummary() {
  const mounted = useMounted();
  const applications = usePlanner((s) => s.applications);
  if (!mounted) return null;

  const open = applications.filter((a) => a.status === "planning" || a.status === "preparing");
  const next = open.filter((a) => daysUntil(a.deadline) >= 0).sort((a, b) => a.deadline.localeCompare(b.deadline))[0];

  const tiles = [
    { label: t.summary.total, value: String(applications.length) },
    { label: t.summary.submitted, value: String(applications.filter((a) => a.status === "submitted").length) },
    { label: t.summary.offers, value: String(applications.filter((a) => a.status === "offer").length) },
    { label: t.summary.next, value: next ? `${next.deadline}` : t.summary.none }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {tiles.map((tile) => (
        <div key={tile.label} className="bg-canvas-card/70 p-4 shadow-[3px_3px_0_0_rgba(15,23,42,0.12)]">
          <div className="text-2xl font-bold text-white">{tile.value}</div>
          <div className="font-mono text-xs uppercase tracking-wider text-slate-400">{tile.label}</div>
        </div>
      ))}
    </div>
  );
}
