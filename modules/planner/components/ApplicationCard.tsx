"use client";

import Link from "next/link";
import { CalendarClock, CalendarPlus, ExternalLink, Trash2 } from "lucide-react";
import { plannerText as t } from "@/content/text/planner";
import { Surface } from "@/shared/components/Surface";
import { actionLinkClass } from "@/shared/components/linkStyles";
import { cn } from "@/shared/utils/cn";
import { daysUntil } from "../utils/dates";
import { downloadText } from "../utils/download";
import { applicationsToIcs } from "../utils/ics";
import { urgencyOf, type Urgency } from "../utils/urgency";
import { STATUS_KEYS, usePlanner, type ApplicationStatus, type PlannedApplication } from "../store/usePlanner";
import { dueLabel } from "./dueLabel";

const STATUS_STYLE: Record<ApplicationStatus, string> = {
  planning: "text-slate-300",
  preparing: "text-amber-400",
  submitted: "text-indigo-400",
  offer: "text-emerald-400",
  rejected: "text-rose-400"
};

const URGENCY_STYLE: Record<Urgency, string> = {
  overdue: "border-rose-400 text-rose-400",
  soon: "border-amber-400 text-amber-400",
  later: "border-white/40 text-slate-200",
  closed: "border-white/20 text-slate-400"
};

const inputClass = "bg-white/[0.05] px-2 py-1.5 text-sm outline-none focus:ring-2 focus:ring-indigo-400/50";

/** One tracked application: urgency, deadline, status, note and calendar download. */
export function ApplicationCard({ application: a }: { application: PlannedApplication }) {
  const update = usePlanner((s) => s.update);
  const remove = usePlanner((s) => s.remove);
  const urgency = urgencyOf(a);

  return (
    <Surface as="li" tone="glass" depth="soft" padding="lg" className="flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-wider text-indigo-300">{t.form.kinds[a.kind]}</p>
          <h3 className="text-xl font-bold text-white">{a.name}</h3>
        </div>
        <button type="button" onClick={() => remove(a.id)} aria-label={`${t.list.remove}: ${a.name}`} className="cursor-pointer p-1 text-slate-500 hover:bg-[var(--hover-tint)] hover:text-rose-400">
          <Trash2 className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <p className="flex flex-wrap items-center gap-2 font-bold text-slate-100">
        <CalendarClock className="h-4 w-4" aria-hidden />
        {a.deadline} · {dueLabel(daysUntil(a.deadline))}
        <span className={cn("border px-2 py-0.5 font-mono text-xs uppercase tracking-wider", URGENCY_STYLE[urgency])}>{t.urgency[urgency]}</span>
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <select aria-label={t.list.statusLabel} value={a.status} onChange={(e) => update(a.id, { status: e.target.value as ApplicationStatus })} className={cn(inputClass, "cursor-pointer font-bold", STATUS_STYLE[a.status])}>
          {STATUS_KEYS.map((k) => (
            <option key={k} value={k}>{t.statuses[k]}</option>
          ))}
        </select>
        <input type="date" aria-label={t.edit.deadline} value={a.deadline} onChange={(e) => e.target.value && update(a.id, { deadline: e.target.value })} className={cn(inputClass, "text-slate-100")} />
      </div>

      <textarea aria-label={t.list.noteLabel} value={a.note} onChange={(e) => update(a.id, { note: e.target.value })} placeholder={t.list.notePlaceholder} rows={2} className="w-full resize-y bg-white/[0.05] p-3 text-slate-100 placeholder-slate-500 outline-none focus:ring-2 focus:ring-indigo-400/50" />

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <button type="button" onClick={() => downloadText(`${a.name.replace(/[^\w]+/g, "-")}.ics`, applicationsToIcs([a]), "text/calendar")} className={`inline-flex cursor-pointer items-center gap-1.5 ${actionLinkClass}`}>
          <CalendarPlus className="h-4 w-4" aria-hidden /> {t.calendar.one}
        </button>
        {a.href && (
          <Link href={a.href} className={`inline-flex items-center gap-1.5 ${actionLinkClass}`}>
            {t.list.openEntry} <ExternalLink className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>
    </Surface>
  );
}
