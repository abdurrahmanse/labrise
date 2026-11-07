import { inlineLinkClass } from "@/shared/components/linkStyles";
import { Label } from "@/shared/components/Text";
import { caseStudyText as t } from "../text";
import { student } from "../data/profile";
import { StudentPortrait } from "./StudentPortrait";

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
          <StudentPortrait size={96} className="shrink-0 border-2 border-white/40" />
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
      <figcaption className="space-y-1 font-sans text-sm text-slate-400">
        <span className="block">{p.note}</span>
        <a href="/case-study/documents/passport-specimen.pdf" target="_blank" rel="noopener noreferrer" className={`${inlineLinkClass} font-bold text-white`}>{t.pdf.passport}</a>
      </figcaption>
    </figure>
  );
}
