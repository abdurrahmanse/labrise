import { SupportContact } from "@/modules/support/components/SupportContact";
import { SupportExpectations } from "@/modules/support/components/SupportExpectations";
import { SupportPlans } from "@/modules/support/components/SupportPlans";
import { SupportProcess } from "@/modules/support/components/SupportProcess";
import { buildMetadata } from "@/modules/seo";
import { commonText } from "@/content/text/common";
import { supportPageText as t } from "@/content/text/support";
import { PageShell } from "@/shared/components/PageShell";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/support" });

export default function SupportPage() {
  return (
    <PageShell eyebrow={t.eyebrow} title={t.heading} lead={t.lead} back={{ href: "/", label: commonText.actions.home }}>
      <SupportPlans />
      <SupportProcess />
      <SupportExpectations />
      <SupportContact />
    </PageShell>
  );
}
