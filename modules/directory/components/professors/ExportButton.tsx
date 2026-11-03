"use client";

import { Download } from "lucide-react";
import { getTracked, useProfessorTracker } from "../../store/useProfessorTracker";
import { professorSlug } from "../../utils/slugs";
import type { ProfessorEntry } from "../../types";

const HEADER = ["Name", "University", "Country", "Group", "Official email", "Saved", "Status", "Note"];

const quote = (cell: string) => `"${cell.replace(/"/g, '""')}"`;

/** Downloads the whole list with your own status and notes as a spreadsheet. */
export function ExportButton({ professors }: { professors: ProfessorEntry[] }) {
  const entries = useProfessorTracker((s) => s.entries);

  const download = () => {
    const rows = professors.map((p) => {
      const t = getTracked(entries, professorSlug(p));
      return [p.name, p.university, p.country, p.group, p.email ?? "", t.saved ? "yes" : "", t.status, t.note];
    });
    const csv = [HEADER, ...rows].map((row) => row.map(quote).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "professor-tracker.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button type="button" onClick={download} className="inline-flex items-center gap-1.5 bg-white/[0.05] px-3 py-2 text-sm font-bold uppercase tracking-wider text-slate-100 hover:bg-white/10 cursor-pointer">
      <Download className="h-4 w-4" /> Export CSV
    </button>
  );
}
