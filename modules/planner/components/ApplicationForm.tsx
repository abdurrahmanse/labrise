"use client";

import { useId } from "react";
import { Plus } from "lucide-react";
import { plannerText as t } from "@/content/text/planner";
import { Button } from "@/shared/ui/Button";
import { fieldClass as field, fieldLabelClass as label } from "@/shared/ui/fieldStyles";
import { cn } from "@/shared/utils/cn";
import { surface } from "@/shared/components/Surface";
import { useApplicationForm } from "../hooks/useApplicationForm";
import type { ApplicationKind } from "../store/usePlanner";


export function ApplicationForm() {
  const listId = useId();
  const form = useApplicationForm();

  return (
    <form id="add-application" onSubmit={form.submit} noValidate className={surface({ tone: "panel", depth: "md", padding: "lg", className: "grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr_1fr_auto] md:items-end" })}>
      <div>
        <label htmlFor="app-name" className={label}>{t.form.name}</label>
        <input id="app-name" list={listId} value={form.name} onChange={(e) => form.changeName(e.target.value)} placeholder={t.form.namePlaceholder} className={cn(field, form.errors.name && "border-rose-400")} />
        <datalist id={listId}>
          {form.suggestions.map((s) => (
            <option key={s.href} value={s.title} />
          ))}
        </datalist>
        {form.errors.name && <p className="mt-1 text-sm text-rose-400">{t.form.nameRequired}</p>}
      </div>
      <div>
        <label htmlFor="app-deadline" className={label}>{t.form.deadline}</label>
        <input id="app-deadline" type="date" value={form.deadline} onChange={(e) => form.changeDeadline(e.target.value)} className={cn(field, form.errors.deadline && "border-rose-400")} />
        {form.errors.deadline && <p className="mt-1 text-sm text-rose-400">{t.form.deadlineRequired}</p>}
      </div>
      <div>
        <label htmlFor="app-kind" className={label}>{t.form.kind}</label>
        <select id="app-kind" value={form.kind} onChange={(e) => form.setKind(e.target.value as ApplicationKind)} className={cn(field, "cursor-pointer")}>
          {(Object.keys(t.form.kinds) as ApplicationKind[]).map((k) => (
            <option key={k} value={k}>{t.form.kinds[k]}</option>
          ))}
        </select>
      </div>
      <Button type="submit" leftIcon={<Plus className="h-4 w-4" aria-hidden />}>{t.form.add}</Button>
      <p className="font-sans text-sm font-normal text-slate-400 md:col-span-4">{form.prefilled ? t.prefill : t.form.deadlineHint}</p>
    </form>
  );
}
