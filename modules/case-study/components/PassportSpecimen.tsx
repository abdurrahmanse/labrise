import { Avatar } from "@/shared/components/Avatar";
import { Label } from "@/shared/components/Text";
import { caseStudyText as t } from "../text";
import { student } from "../data/profile";

/** A drawn specimen of the passport photo page, with a SAMPLE watermark and no real numbers. */
export function PassportSpecimen() {
  const p = student.passport;
  const rows: [string, string][] = [
    [t.passport.surname, p.surname], [t.passport.given, p.given], [t.passport.nationality, p.nationality],
    [t.passport.born, p.born], [t.passport.issued, p.issued], [t.passport.expires, p.expires], [t.passport.number, p.number]
  ];
  return (
    <figure className="space-y-3">
      <div className="relative overflow-hidden border-2 border-white/40 bg-white/[0.04] p-5">
        <span aria-hidden className="pointer-events-none absolute inset-0 flex -rotate-12 items-center justify-center font-mono text-6xl font-bold uppercase tracking-widest text-white/10">{t.specimen}</span>
        <div className="relative flex flex-col gap-4 sm:flex-row">
          <Avatar name={student.name} size={96} square />
          <dl className="grid flex-1 grid-cols-2 gap-x-4 gap-y-2">
            {rows.map(([label, value]) => (
              <div key={label}>
                <Label as="dt">{label}</Label>
                <dd className="font-mono text-sm font-bold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <figcaption className="font-sans text-sm text-slate-400">{p.note}</figcaption>
    </figure>
  );
}
