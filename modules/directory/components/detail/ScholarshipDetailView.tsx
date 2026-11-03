import { ExternalLink } from "lucide-react";
import { detailText } from "@/data/text/directory";
import { scholarshipDetailText as t } from "@/data/text/scholarships";
import { Button } from "@/components/ui/Button";
import { EntryActions } from "@/modules/library";
import { InfoCard } from "@/shared/components/InfoCard";
import { PageShell } from "@/shared/components/PageShell";
import { applicationChecklist } from "../../lib/scholarshipRelations";
import { providerOfScholarship } from "../../lib/lookups";
import { scholarshipSlug } from "../../lib/slugs";
import type { ScholarshipEntry } from "../../types";
import { Flag } from "@/shared/components/Flag";
import { bodyClass } from "./scholarship/detailStyles";
import { ScholarshipHighlights } from "./scholarship/ScholarshipHighlights";
import { ScholarshipProviderBlock } from "./scholarship/ScholarshipProviderBlock";
import { ScholarshipRelated } from "./scholarship/ScholarshipRelated";
import { ScholarshipSidebar } from "./scholarship/ScholarshipSidebar";

export function ScholarshipDetailView({ scholarship }: { scholarship: ScholarshipEntry }) {
  const slug = scholarshipSlug(scholarship);
  const provider = providerOfScholarship(scholarship.name);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.scholarship(scholarship.level)}
      title={scholarship.name}
      notice={{ subject: scholarship.name, source: scholarship.site }}
      actions={
        <>
          <EntryActions type="scholarships" slug={slug} />
          <Button href={scholarship.site} target="_blank" rightIcon={<ExternalLink className="h-4 w-4" aria-hidden />}>{t.official}</Button>
        </>
      }
      media={<Flag country={scholarship.host} className="h-10 w-14" />}
      lead={detailText.lead.scholarship(scholarship.host, scholarship.covers)}
      back={{ href: "/directory/scholarships", label: detailText.back.scholarships }}
    >
      <ScholarshipHighlights scholarship={scholarship} provider={provider} />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <InfoCard label={t.covers}>
          <p className={bodyClass}>{scholarship.covers}</p>
        </InfoCard>
        <InfoCard label={t.eligibility}>
          <p className={bodyClass}>{scholarship.eligibility}</p>
        </InfoCard>
      </div>
      <p className="font-sans text-sm text-slate-400">{t.officialNote}</p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="space-y-8">
          {provider && <ScholarshipProviderBlock provider={provider} />}
          <ScholarshipRelated scholarship={scholarship} />
        </div>
        <ScholarshipSidebar slug={slug} checklist={applicationChecklist(provider)} />
      </div>
    </PageShell>
  );
}
