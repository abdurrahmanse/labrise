import { Surface } from "@/shared/components/Surface";
import { Label } from "@/shared/components/Text";
import { caseStudyText as t } from "../text";
import { student } from "../data/profile";
import { SECTIONS } from "../sections";
import { StudentPortrait } from "./StudentPortrait";

/** The student's profile card: photo, name, headline and key numbers, with the page's section links beneath it. */
export function ProfileCard() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
      <Surface tone="panel" depth="md" padding="lg" className="space-y-4">
        <div className="flex items-center gap-4">
          <StudentPortrait size={88} className="shrink-0 border-2 border-white/40" />
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-white">{student.name}</h2>
            <p className="font-sans text-sm text-slate-400">{student.location}</p>
          </div>
        </div>
        <p className="font-sans text-sm text-slate-300">{student.headline}</p>
        <dl className="grid grid-cols-2 gap-2">
          {student.stats.map((s) => (
            <div key={s.label} className="border border-white/20 p-2">
              <Label as="dt">{s.label}</Label>
              <dd className="font-bold text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="border-t border-white/15 pt-3 font-sans text-sm font-bold text-white">{student.outcome}</p>
      </Surface>
      <nav aria-label={t.onThisPage} className="hidden lg:block">
        <Label as="p" className="mb-2 block">{t.onThisPage}</Label>
        <ol className="space-y-1 border-l-2 border-white/20">
          {SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="-ml-0.5 flex gap-2 border-l-2 border-transparent py-1 pl-3 font-sans text-sm text-slate-300 hover:border-[var(--hover-line)] hover:bg-[var(--hover-tint)]">
                <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}
