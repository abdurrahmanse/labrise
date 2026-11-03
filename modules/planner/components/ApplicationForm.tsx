"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { plannerText as t } from "@/data/text/planner";
import { cn } from "@/lib/utils";
import { useSearch } from "@/modules/search/hooks/useSearch";
import { usePlanner, type ApplicationKind } from "../store/usePlanner";

const KIND_OF: Record<string, ApplicationKind> = { University: "university", Scholarship: "scholarship", Funder: "scholarship" };

const field =
  "w-full border-2 border-white/30 bg-white/[0.05] px-4 py-3 font-sans text-base text-slate-100 placeholder-slate-500 outline-none transition-colors focus:border-indigo-400";
const label = "mb-1.5 block font-mono text-xs uppercase tracking-wider text-slate-400";

export function ApplicationForm() {
  const add = usePlanner((s) => s.add);
  const listId = useId();
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [kind, setKind] = useState<ApplicationKind>("university");
  const [errors, setErrors] = useState<{ name?: boolean; deadline?: boolean }>({});
  // Names come from the search API while typing, so the page does not ship the whole directory.
  const search = useSearch(name, name.trim().length >= 2);
  const suggestions = search.items.filter((i) => KIND_OF[i.kind]);

  const onName = (value: string) => {
    setName(value);
    setErrors((e) => ({ ...e, name: false }));
    const match = suggestions.find((s) => s.title.toLowerCase() === value.trim().toLowerCase());
    if (match) setKind(KIND_OF[match.kind]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = { name: !name.trim(), deadline: !deadline };
    setErrors(next);
    if (next.name || next.deadline) return;
    const match = suggestions.find((s) => s.title.toLowerCase() === name.trim().toLowerCase());
    add({ name: name.trim(), kind, deadline, href: match?.href });
    setName("");
    setDeadline("");
  };

  return (
    <form onSubmit={submit} noValidate className="grid gap-4 border-2 border-white/30 bg-canvas-card/60 p-5 backdrop-blur-xl shadow-[4px_4px_0_0_rgba(15,23,42,0.18)] md:grid-cols-[2fr_1fr_1fr_auto] md:items-end">
      <div>
        <label htmlFor="app-name" className={label}>{t.form.name}</label>
        <input id="app-name" list={listId} value={name} onChange={(e) => onName(e.target.value)} placeholder={t.form.namePlaceholder} className={cn(field, errors.name && "border-rose-400")} />
        <datalist id={listId}>
          {suggestions.map((s) => (
            <option key={s.href} value={s.title} />
          ))}
        </datalist>
        {errors.name && <p className="mt-1 text-sm text-rose-400">{t.form.nameRequired}</p>}
      </div>
      <div>
        <label htmlFor="app-deadline" className={label}>{t.form.deadline}</label>
        <input id="app-deadline" type="date" value={deadline} onChange={(e) => { setDeadline(e.target.value); setErrors((x) => ({ ...x, deadline: false })); }} className={cn(field, errors.deadline && "border-rose-400")} />
        {errors.deadline && <p className="mt-1 text-sm text-rose-400">{t.form.deadlineRequired}</p>}
      </div>
      <div>
        <label htmlFor="app-kind" className={label}>{t.form.kind}</label>
        <select id="app-kind" value={kind} onChange={(e) => setKind(e.target.value as ApplicationKind)} className={cn(field, "cursor-pointer")}>
          {(Object.keys(t.form.kinds) as ApplicationKind[]).map((k) => (
            <option key={k} value={k}>{t.form.kinds[k]}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="inline-flex cursor-pointer items-center justify-center gap-2 border-2 border-transparent bg-indigo-600 px-5 py-3 font-bold uppercase tracking-wider text-sm text-white shadow-[4px_4px_0_0_rgba(15,23,42,0.25)] transition-transform hover:-translate-y-0.5">
        <Plus className="h-4 w-4" aria-hidden /> {t.form.add}
      </button>
      <p className="font-sans text-sm font-normal text-slate-400 md:col-span-4">{t.form.deadlineHint}</p>
    </form>
  );
}
