import { PageShell } from "@/shared/components/PageShell";
import { GlossaryBrowser } from "@/modules/glossary";
import { buildMetadata } from "@/modules/seo";
import { commonText } from "@/data/text/common";
import { glossaryText as t } from "@/data/text/glossary";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/glossary" });

export default function GlossaryPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <GlossaryBrowser />
    </PageShell>
  );
}
