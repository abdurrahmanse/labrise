import { CommunityHelpSection } from "@/modules/faqs";
import { InteractivePreflightChecklist } from "@/modules/faqs";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo";
import { navLabels, pageText } from "@/data/text/site";

export const metadata = buildMetadata({
  title: pageText.checklist.title,
  description: pageText.checklist.description,
  path: "/faqs/checklist"
});

export default function FaqChecklistPage() {
  return (
    <PageShell eyebrow={pageText.checklist.eyebrow} title={pageText.checklist.heading} back={{ href: "/faqs", label: navLabels.allFaqs }} next={{ href: "/apply", label: navLabels.howToApply }}>
      <InteractivePreflightChecklist />
      <CommunityHelpSection />
    </PageShell>
  );
}
