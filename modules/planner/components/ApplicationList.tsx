"use client";

import Link from "next/link";
import { CalendarClock, Download, ExternalLink, Trash2 } from "lucide-react";
import { plannerText as t } from "@/data/text/planner";
import { EmptyState } from "@/shared/components/EmptyState";
import { useMounted } from "@/shared/hooks/useMounted";
import { cn } from "@/lib/utils";
import { applicationsToCsv } from "../lib/csv";
import { daysUntil } from "../lib/dates";
import { STATUS_KEYS, usePlanner, type ApplicationStatus } from "../store/usePlanner";

const STATUS_STYLE: Record<ApplicationStatus, string> = {
  planning: "text-slate-300",
  preparing: "text-amber-400",
  submitted: "text-indigo-400",
  offer: "text-emerald-400",
  rejected: "text-rose-400"
};

function dueLabel(days: number) {
  if (days === 0) return t.list.today;
  return days < 0 ? t.list.overdue(-days) : t.list.left(days);
}

function download(csv: string) {
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "applications.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export function ApplicationList() {
  const mounted = useMounted();
  const applications = usePlanner((s) => s.applications);
  const update = usePlanner((s) => s.update);
  const remove = usePlanner((s) => s.remove);

  // Saved data and today's date exist only in the browser.
  if (!mounted) return null;
  if (applications.length === 0) return <EmptyState title={t.list.empty} />;

  const sorted = [...applications].sort((a, b) => a.deadline.localeCompare(b.deadline));

  return (
    <div className="space-y-4">
      <button type="button" onClick={() => download(applicationsToCsv(sorted))} className="inline-flex cursor-pointer items-center gap-2 border-2 border-white/40 bg-white/[0.04] px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-100 hover:border-indigo-400 hover:text-indigo-300">
        <Download className="h-4 w-4" aria-hidden /> {t.list.export}
      </button>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {sorted.map((a) => {
          const days = daysUntil(a.deadline);
          const closed = a.status === "submitted" || a.status === "offer" || a.status === "rejected";
          return (
            <li key={a.id} className="flex flex-col gap-3 bg-canvas-card/70 p-5 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.12)]">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">{t.form.kinds[a.kind]}</p>
                  <h3 className="text-xl font-bold text-white">{a.name}</h3>
                </div>
                <button type="button" onClick={() => remove(a.id)} aria-label={t.list.remove} className="cursor-pointer text-slate-500 hover:text-rose-400">
                  <Trash2 className="h-5 w-5" aria-hidden />
                </button>
              </div>

              <p className={cn("inline-flex items-center gap-2 font-bold", closed ? "text-slate-400" : days < 0 ? "text-rose-400" : days <= 14 ? "text-amber-400" : "text-slate-100")}>
                <CalendarClock className="h-4 w-4" aria-hidden />
                {a.deadline} · {dueLabel(days)}
              </p>

              <select aria-label={t.list.statusLabel} value={a.status} onChange={(e) => update(a.id, { status: e.target.value as ApplicationStatus })} className={cn("w-fit cursor-pointer bg-white/[0.05] px-2 py-1.5 text-sm font-bold outline-none", STATUS_STYLE[a.status])}>
                {STATUS_KEYS.map((k) => (
                  <option key={k} value={k}>{t.statuses[k]}</option>
                ))}
              </select>

              <textarea aria-label={t.list.noteLabel} value={a.note} onChange={(e) => update(a.id, { note: e.target.value })} placeholder={t.list.notePlaceholder} rows={2} className="w-full resize-y bg-white/[0.05] p-3 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-400/50" />

              {a.href && (
                <Link href={a.href} className="inline-flex w-fit items-center gap-1.5 text-sm font-bold text-indigo-400 hover:text-indigo-200">
                  {t.list.openEntry} <ExternalLink className="h-4 w-4" aria-hidden />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
