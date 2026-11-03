"use client";

import { SearchInput } from "@/components/ui/SearchInput";
import { REGIONS } from "../../lib/regions";
import { SORTS, type ProfessorFilters, type ProfessorSort } from "../../lib/professorFilters";

interface ProfessorToolbarProps {
  filters: ProfessorFilters;
  fields: string[];
  count: number;
  onChange: (patch: Partial<ProfessorFilters>) => void;
}

const control = "bg-white/[0.05] px-3 py-2 text-sm font-bold text-slate-100 outline-none cursor-pointer";

function Toggle({ label, on, onClick }: { label: string; on: boolean; onClick: () => void }) {
  return (
    <button type="button" aria-pressed={on} onClick={onClick} className={`px-3 py-2 text-sm font-bold cursor-pointer transition-colors ${on ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-slate-200 hover:bg-white/10"}`}>
      {label}
    </button>
  );
}

export function ProfessorToolbar({ filters, fields, count, onChange }: ProfessorToolbarProps) {
  return (
    <div className="space-y-3">
      <SearchInput value={filters.q} onChange={(q) => onChange({ q })} placeholder="Search name, university, country, field…" className="w-full lg:max-w-md" />
      <div className="flex flex-wrap items-center gap-2">
        <select aria-label="Region" value={filters.region} onChange={(e) => onChange({ region: e.target.value })} className={control}>
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r === "All" ? "All regions" : r}
            </option>
          ))}
        </select>
        <select aria-label="Field" value={filters.field} onChange={(e) => onChange({ field: e.target.value })} className={control}>
          <option value="All">All fields</option>
          {fields.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <select aria-label="Sort" value={filters.sort} onChange={(e) => onChange({ sort: e.target.value as ProfessorSort })} className={control}>
          {SORTS.map((s) => (
            <option key={s} value={s}>
              Sort: {s}
            </option>
          ))}
        </select>
        <Toggle label="Has email" on={filters.hasEmail} onClick={() => onChange({ hasEmail: !filters.hasEmail })} />
        <Toggle label="Saved only" on={filters.savedOnly} onClick={() => onChange({ savedOnly: !filters.savedOnly })} />
        <span className="ml-auto font-mono text-xs text-slate-400">{count} shown</span>
      </div>
    </div>
  );
}
