import Link from "next/link";
import { AlertTriangle, BadgeCheck, BookOpen } from "lucide-react";
import type { DocumentGuideline } from "@/data/documentsData";
import { documentDetailText as t, documentMeta } from "@/data/text/documents";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { InfoCard } from "@/shared/components/InfoCard";
import { documentsData } from "@/data/documentsData";
import { DocumentChecklist } from "./DocumentChecklist";

const bullet = "flex gap-3 font-sans text-[length:var(--text-body)] font-normal text-slate-200";

export function DocumentBody({ doc }: { doc: DocumentGuideline }) {
  const guide = documentMeta[doc.id]?.guide;
  const others = documentsData.filter((d) => d.id !== doc.id);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <InfoCard label={t.what}>
            <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-200">{doc.what}</p>
          </InfoCard>
          <InfoCard label={t.why}>
            <p className="font-sans text-[length:var(--text-body)] font-normal text-slate-200">{doc.why}</p>
          </InfoCard>
        </div>

        <Block title={t.structure}>
          <ol className="space-y-3">
            {doc.structure.map((s, i) => (
              <li key={s.section} className="flex gap-4 border-2 border-white/20 bg-canvas-card/50 p-4 backdrop-blur-xl">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-indigo-600 font-mono font-bold text-white" aria-label={t.step(i + 1)}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{s.section.replace(/^\d+\.\s*/, "")}</h3>
                  <p className="mt-1 font-sans text-[length:var(--text-body)] font-normal text-slate-300">{s.guidance}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>

        <Block title={t.mistakes} icon={AlertTriangle}>
          <ul className="space-y-2">
            {doc.commonMistakes.map((m) => (
              <li key={m} className={bullet}>
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" aria-hidden /> {m}
              </li>
            ))}
          </ul>
        </Block>

        <Block title={t.checks} icon={BadgeCheck}>
          <ul className="space-y-2">
            {doc.officialChecks.map((c) => (
              <li key={c} className={bullet}>
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden /> {c}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <InfoCard label={t.checklist}>
          <DocumentChecklist doc={doc} />
        </InfoCard>

        {guide && (
          <Link href={`/guides/${guide}`} className="flex items-center gap-3 border-2 border-white/30 bg-canvas-card/60 p-4 font-bold text-white backdrop-blur-xl hover:border-indigo-400">
            <span className="flex h-10 w-10 items-center justify-center bg-indigo-600 text-white"><BookOpen className="h-5 w-5" aria-hidden /></span>
            {t.guide}
          </Link>
        )}

        <InfoCard label={t.others}>
          <Chips items={others.map((d) => ({ href: `/documents/${d.id}`, label: d.name.replace(/\s*\(.*\)$/, "") }))} />
        </InfoCard>
      </aside>
    </div>
  );
}


