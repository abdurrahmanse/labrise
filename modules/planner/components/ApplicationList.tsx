"use client";

import { useState } from "react";
import { CalendarPlus, Download } from "lucide-react";
import { plannerText as t } from "@/content/text/planner";
import { Button } from "@/shared/ui/Button";
import { EmptyState } from "@/shared/components/EmptyState";
import { FilterTabs, type FilterOption } from "@/shared/components/FilterTabs";
import { useMounted } from "@/shared/hooks/useMounted";
import { applicationsToCsv } from "../utils/csv";
import { downloadText } from "../utils/download";
import { applicationsToIcs } from "../utils/ics";
import { matchesFilter, type PlannerFilter } from "../utils/urgency";
import { usePlanner } from "../store/usePlanner";
import { ApplicationCard } from "./ApplicationCard";

const FILTERS: PlannerFilter[] = ["all", "open", "submitted", "offer", "rejected"];

/** Saved applications, nearest deadline first, with a status filter and downloads for CSV and calendar. */
export function ApplicationList() {
  const mounted = useMounted();
  const applications = usePlanner((s) => s.applications);
  const [filter, setFilter] = useState<PlannerFilter>("all");

  // Saved data and today's date exist only in the browser.
  if (!mounted) return null;
  if (applications.length === 0) return <EmptyState title={t.list.empty} />;

  const sorted = [...applications].sort((a, b) => a.deadline.localeCompare(b.deadline));
  const visible = sorted.filter((a) => matchesFilter(a, filter));
  const options: FilterOption<PlannerFilter>[] = FILTERS.map((f) => ({ value: f, label: `${t.filters[f]} (${sorted.filter((a) => matchesFilter(a, f)).length})` }));

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <FilterTabs options={options} value={filter} onChange={setFilter} label={t.filters.label} />
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => downloadText("applications.ics", applicationsToIcs(sorted), "text/calendar")} leftIcon={<CalendarPlus className="h-4 w-4" aria-hidden />}>{t.calendar.all}</Button>
          <Button variant="secondary" onClick={() => downloadText("applications.csv", applicationsToCsv(sorted), "text/csv")} leftIcon={<Download className="h-4 w-4" aria-hidden />}>{t.list.export}</Button>
        </div>
      </div>
      <p className="font-sans text-sm text-slate-400">{t.calendar.hint}</p>

      {visible.length === 0 ? (
        <EmptyState title={t.filters.emptyFilter} hint={t.filters.emptyHint} />
      ) : (
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {visible.map((a) => <ApplicationCard key={a.id} application={a} />)}
        </ul>
      )}
    </div>
  );
}
