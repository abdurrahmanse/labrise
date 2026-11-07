import { CaseStudyView, caseStudyText as t } from "@/modules/case-study";
import { buildMetadata } from "@/modules/seo";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/case-study" });

export default function CaseStudyPage() {
  return <CaseStudyView />;
}
