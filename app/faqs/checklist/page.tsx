import { CommunityHelpSection } from "@/components/faqs/CommunityHelpSection";
import { InteractivePreflightChecklist } from "@/components/faqs/InteractivePreflightChecklist";
import { PageShell } from "@/shared/components/PageShell";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Pre-flight readiness checklist",
  description: "Check that you are ready before you send applications.",
  path: "/faqs/checklist"
});

export default function FaqChecklistPage() {
  return (
    <PageShell eyebrow="FAQs" title="Pre-flight checklist" back={{ href: "/faqs", label: "All FAQs" }} next={{ href: "/apply", label: "How to apply" }}>
      <InteractivePreflightChecklist />
      <CommunityHelpSection />
    </PageShell>
  );
}
