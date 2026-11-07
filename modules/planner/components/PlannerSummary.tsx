"use client";

import Link from "next/link";
import { AlertTriangle, CalendarClock, ClipboardList, Hourglass, Send } from "lucide-react";
import { plannerText as t } from "@/content/text/planner";
import { StatTiles } from "@/shared/components/StatTiles";
import { Surface } from "@/shared/components/Surface";
import { Label } from "@/shared/components/Text";
import { actionLinkClass } from "@/shared/components/linkStyles";
import { useMounted } from "@/shared/hooks/useMounted";
import { daysUntil } from "../utils/dates";
import { plannerNumbers } from "../utils/urgency";
import { usePlanner } from "../store/usePlanner";
import { dueLabel } from "./dueLabel";

/** The numbers that matter first: what is overdue, what is due soon and which deadline comes next. */
export function PlannerSummary() {
  const mounted = useMounted();
  const applications = usePlanner((s) => s.applications);
  if (!mounted) return null;

  const n = plannerNumbers(applications);

  return (
    <div className="space-y-4">
      <Surface tone="panel" depth="sm" padding="lg" className="flex flex-wrap items-center justify-between gap-4">
        <div className="min-w-0">
          <Label>{t.summary.nextLead}</Label>
          {n.next ? (
            <>
              <p className="text-xl font-bold text-white">{n.next.name}</p>
              <p className="inline-flex items-center gap-2 font-sans text-slate-300">
                <CalendarClock className="h-4 w-4" aria-hidden /> {n.next.deadline} · {dueLabel(daysUntil(n.next.deadline))}
              </p>
            </>
          ) : (
            <p className="font-sans text-slate-300">{t.summary.allClear}</p>
          )}
        </div>
        {n.next?.href && <Link href={n.next.href} className={`text-sm ${actionLinkClass}`}>{t.summary.nextOpen} →</Link>}
      </Surface>
      <StatTiles
        items={[
          { Icon: ClipboardList, label: t.summary.total, value: n.total },
          { Icon: AlertTriangle, label: t.summary.overdue, value: n.overdue },
          { Icon: Hourglass, label: t.summary.soon, value: n.soon },
          { Icon: Send, label: t.summary.progress, value: `${n.submitted} / ${n.offers}` }
        ]}
      />
    </div>
  );
}
