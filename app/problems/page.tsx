import { PageShell } from "@/shared/components/PageShell";
import { ProblemList } from "@/modules/roadmap/components/ProblemList";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Common scholarship application problems and fixes",
  description: "No replies, low GPA, no publications, fees and scams: what to do about each.",
  path: "/problems"
});

export default function ProblemsPage() {
  return (
    <PageShell
      eyebrow="Problems"
      title="Common problems and fixes"
      back={{ href: "/", label: "Home" }}
      prev={{ href: "/directory", label: "Directory" }}
    >
      <ProblemList />
    </PageShell>
  );
}
