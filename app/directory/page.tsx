import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { countries, labs, professors, providers, scholarships, universities } from "@/modules/directory/catalog";
import { buildMetadata } from "@/modules/seo";
import { navLabels } from "@/content/text/site";
import { directoryIndexText as t } from "@/content/text/pages";
import { Award, FlaskConical, GraduationCap, Landmark, MapPin, Users } from "lucide-react";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/directory" });

export default function DirectoryPage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      trail={[{ label: navLabels.home, href: "/" }, { label: navLabels.directory, href: "/directory" }]}
      prev={{ href: "/guides", label: t.prev }}
      next={{ href: "/problems", label: t.next }}
    >
      <LinkCardGrid
        columns="md:grid-cols-2"
        items={[
          { href: "/directory/providers", icon: Landmark, ...t.cards.providers(providers.length) },
          { href: "/directory/scholarships", icon: Award, ...t.cards.scholarships(scholarships.length) },
          { href: "/directory/countries", icon: MapPin, ...t.cards.countries(countries.length) },
          { href: "/directory/universities", icon: GraduationCap, ...t.cards.universities(universities.length) },
          { href: "/directory/professors", icon: Users, ...t.cards.professors(professors.length) },
          { href: "/directory/labs", icon: FlaskConical, ...t.cards.labs(labs.length) }
        ]}
      />
      <Block title={t.more.title}>
        <LinkCardGrid items={t.more.items.map((item) => ({ ...item }))} />
      </Block>
    </PageShell>
  );
}
