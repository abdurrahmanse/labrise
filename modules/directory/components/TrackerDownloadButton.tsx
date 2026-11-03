"use client";

import { Download } from "lucide-react";
import type { ProfessorEntry } from "../types";

const HEADER = ["Name", "University", "Country", "Group", "Official email", "Date sent", "Reply", "Follow-up"];

function buildCsv(professors: ProfessorEntry[]) {
  const rows = professors.map((p) => [p.name, p.university, p.country, p.group, p.email ?? "", "", "", ""]);
  return [HEADER, ...rows].map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\n");
}

export function TrackerDownloadButton({ professors }: { professors: ProfessorEntry[] }) {
  const download = () => {
    const url = URL.createObjectURL(new Blob([buildCsv(professors)], { type: "text/csv" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "professor-outreach-tracker.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      onClick={download}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-white/60 text-slate-100 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wider"
    >
      <Download className="w-3.5 h-3.5" /> Tracker CSV
    </button>
  );
}
