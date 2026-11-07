import { BulletList } from "@/shared/components/BulletList";
import { Surface } from "@/shared/components/Surface";
import { applicationPackage } from "../data/package";
import { EmailCard } from "./EmailCard";
import { Subheading } from "./Subheading";

export function PackageSection() {
  return (
    <div className="space-y-6">
      <Subheading title={applicationPackage.sop.label}>
        <Surface as="blockquote" tone="panel" depth="none" padding="lg" className="font-sans text-slate-200">{applicationPackage.sop.text}</Surface>
      </Subheading>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Subheading title="CV choices"><BulletList items={applicationPackage.cv} /></Subheading>
        <Subheading title="Research proposal outline"><BulletList items={applicationPackage.proposal} /></Subheading>
      </div>
      <Subheading title="How her drafts improved">
        <ul className="space-y-3">
          {applicationPackage.revisions.map((r) => (
            <Surface as="li" key={r.before} tone="quiet" depth="none" padding="md" className="space-y-1 font-sans text-sm">
              <p className="text-slate-400"><span className="font-mono text-xs uppercase">Before · </span><s>{r.before}</s></p>
              <p className="text-white"><span className="font-mono text-xs uppercase text-slate-400">After · </span>{r.after}</p>
              <p className="text-slate-300">{r.why}</p>
            </Surface>
          ))}
        </ul>
      </Subheading>
      <Subheading title="The email she sent her referee"><EmailCard email={applicationPackage.refereeBrief} /></Subheading>
    </div>
  );
}
