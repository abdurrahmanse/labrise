import { PageShell } from "@/shared/components/PageShell";
import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { sectionText } from "@/content/text/directory";
import { summaryOfFields } from "../../utils/hubs";

export function FieldsIndexView() {
  const t = sectionText.fields;
  return (
    <PageShell
      eyebrow="Directory"
      title={t.title}
      lead={t.lead}
      trail={[{ label: "Home", href: "/" }, { label: "Directory", href: "/directory" }, { label: t.title, href: "/directory/fields" }]}
    >
      <LinkCardGrid items={summaryOfFields().map((f) => ({ href: `/directory/fields/${f.key}`, title: f.info.title, meta: t.counts(f.professors, f.labs) }))} />
    </PageShell>
  );
}
