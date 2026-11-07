import { BulletList } from "@/shared/components/BulletList";
import { Surface } from "@/shared/components/Surface";
import { applicationPackage } from "../data/package";
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
    </div>
  );
}
