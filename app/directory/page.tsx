import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { countries, professors, providers, scholarships, universities } from "@/modules/directory/data";
import { buildMetadata } from "@/modules/seo/buildMetadata";

export const metadata = buildMetadata({
  title: "Directory: countries, universities and professors",
  description: "Browse funded destinations, universities and professors with details for each.",
  path: "/directory"
});

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
        columns="md:grid-cols-2"
        items={[
          { href: "/directory/providers", title: "Scholarship providers", meta: `${providers.length} government and foundation funders, with requirements` },
          { href: "/directory/scholarships", title: "Scholarships", meta: `${scholarships.length} programs` },
          { href: "/directory/countries", title: "Countries", meta: `${countries.length} listed` },
          { href: "/directory/universities", title: "Universities", meta: `${universities.length} listed` },
          { href: "/directory/professors", title: "Professors", meta: `${professors.length} listed` }
        ]}
      />
      <Block title="More resources">
        <LinkCardGrid
          items={[
            { href: "/countries", title: "Country dossiers", meta: "20 detailed guides" },
            { href: "/scholarships", title: "Scholarship finder", meta: "Search workflow" },
            { href: "/professors", title: "Email templates", meta: "Cold email and checklist" },
            { href: "/documents", title: "Documents", meta: "Required papers" }
          ]}
        />
      </Block>
    </PageShell>
  );
}
