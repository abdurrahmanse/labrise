import { LinkCardGrid } from "@/shared/components/LinkCardGrid";
import { Block } from "@/shared/components/Block";
import { PageShell } from "@/shared/components/PageShell";
import { countries, professors, providers, scholarships, universities } from "@/modules/directory/data";
import { buildMetadata } from "@/modules/seo/buildMetadata";
import { commonText } from "@/data/text/common";
import { directoryIndexText as t } from "@/data/text/pages";
import { Award, GraduationCap, Landmark, MapPin, Users } from "lucide-react";

export const metadata = buildMetadata({ title: t.title, description: t.description, path: "/directory" });

export default function DirectoryPage() {
  return (
    <PageShell
      eyebrow={t.eyebrow}
      title={t.heading}
      lead={t.lead}
      back={{ href: "/", label: commonText.actions.home }}
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
          { href: "/directory/professors", icon: Users, ...t.cards.professors(professors.length) }
        ]}
      />
      <Block title={t.more.title}>
        <LinkCardGrid items={t.more.items.map((item) => ({ ...item }))} />
      </Block>
    </PageShell>
  );
}
