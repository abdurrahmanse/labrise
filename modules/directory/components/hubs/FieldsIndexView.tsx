import { PageShell } from "@/shared/components/PageShell";
import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { directoryListTrail } from "../../utils/trails";
import { sectionText } from "@/content/text/directory";
import { summaryOfFields } from "../../utils/hubs";

export function FieldsIndexView() {
  const t = sectionText.fields;
  return (
    <PageShell
      eyebrow="Directory"
      title={t.title}
      lead={t.lead}
      trail={directoryListTrail(t.title, "fields")}
    >
      <LinkCardGrid items={summaryOfFields().map((f) => ({ href: `/directory/fields/${f.key}`, title: f.info.title, meta: t.counts(f.professors, f.labs) }))} />
    </PageShell>
  );
}
