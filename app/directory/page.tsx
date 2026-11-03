import type { Metadata } from "next";
import { LinkCardGrid, PageShell } from "@/components/overview/PageShell";
import { countries, professors, universities } from "@/data/overviewData";

export const metadata: Metadata = { title: "Directory" };

export default function DirectoryPage() {
  return (
    <PageShell
      eyebrow="Directory"
      title="Where to apply, whom to contact"
      lead="Confirm funding and deadlines on the official page."
      back={{ href: "/", label: "Home" }}
      prev={{ href: "/guides", label: "Guides" }}
      next={{ href: "/problems", label: "Problems" }}
    >
      <LinkCardGrid
        columns="md:grid-cols-3"
        items={[
          { href: "/directory/countries", title: "Countries", meta: `${countries.length} listed` },
          { href: "/directory/universities", title: "Universities", meta: `${universities.length} listed` },
          { href: "/directory/professors", title: "Professors", meta: `${professors.length} listed` }
        ]}
      />
      <div className="space-y-3 pt-4">
        <h2 className="text-xl font-bold text-white border-b border-white/20 pb-2">More resources</h2>
        <LinkCardGrid
          items={[
            { href: "/countries", title: "Country dossiers", meta: "20 detailed guides" },
            { href: "/scholarships", title: "Scholarship finder", meta: "Search workflow" },
            { href: "/professors", title: "Email templates", meta: "Cold email and checklist" },
            { href: "/documents", title: "Documents", meta: "Required papers" }
          ]}
        />
      </div>
    </PageShell>
  );
}
