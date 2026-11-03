import { PageShell } from "@/shared/components/PageShell";
import { SavedBrowser } from "@/modules/library/components/SavedBrowser";
import { buildMetadata } from "@/modules/seo";
import { commonText } from "@/content/text/common";
import { libraryText as t } from "@/content/text/library";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/saved" });

export default function SavedPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <p className="font-mono text-xs text-slate-400">{t.privacy}</p>
      <SavedBrowser />
    </PageShell>
  );
}
