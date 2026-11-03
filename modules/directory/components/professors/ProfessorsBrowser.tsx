"use client";

import { useMemo } from "react";
import { Pagination } from "@/shared/components/Pagination";
import { useProfessorFilters } from "../../hooks/useProfessorFilters";
import { fieldOptions, filterProfessors, sortProfessors } from "../../utils/professorFilters";
import { paginate } from "../../utils/paginate";
import { useProfessorTracker } from "../../store/useProfessorTracker";
import type { ProfessorEntry } from "../../types";
import { ExportButton } from "./ExportButton";
import { ProfessorGrid } from "./ProfessorGrid";
import { ProfessorToolbar } from "./ProfessorToolbar";
import { TrackerSummary } from "./TrackerSummary";

export function ProfessorsBrowser({ data }: { data: ProfessorEntry[] }) {
  const [filters, setFilters] = useProfessorFilters();
  const tracked = useProfessorTracker((s) => s.entries);

  const fields = useMemo(() => fieldOptions(data), [data]);
  const matches = useMemo(() => sortProfessors(filterProfessors(data, filters, tracked), filters.sort), [data, filters, tracked]);
  const { items, pages, current } = paginate(matches, filters.page);

  // Any filter change goes back to page 1.
  const change = (patch: Partial<typeof filters>) => setFilters({ ...patch, page: 1 });

  return (
    <div className="space-y-6">
      <TrackerSummary professors={data} />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <ProfessorToolbar filters={filters} fields={fields} count={matches.length} onChange={change} />
        </div>
        <ExportButton professors={data} />
      </div>
      <ProfessorGrid professors={items} />
      <Pagination page={current} pages={pages} onChange={(page) => setFilters({ page })} />
    </div>
  );
}
