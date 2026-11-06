import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { PageShell } from "@/shared/components/PageShell";
import { sectionText } from "@/content/text/directory";
import { countryByName } from "../../utils/lookups/countryLookups";
import { countrySlug } from "../../utils/slugs";
import { peopleInField } from "../../utils/hubs";
import { LabRoster } from "../ecosystem/LabRoster";
import { ProfessorRoster } from "../ecosystem/ProfessorRoster";
import type { FieldInfo } from "../../data/fields";

const SHOWN = 24;

/** One research field: what it is, what to read, and the professors and labs that work in it. */
export function FieldView({ fieldKey, info }: { fieldKey: string; info: FieldInfo }) {
  const t = sectionText.fields;
  const { professors, labs, countries } = peopleInField(fieldKey);

  return (
    <PageShell
      eyebrow="Research field"
      title={info.title}
      lead={info.about}
      trail={[
        { label: "Home", href: "/" },
        { label: "Directory", href: "/directory" },
        { label: t.title, href: "/directory/fields" },
        { label: info.title, href: `/directory/fields/${fieldKey}` }
      ]}
    >
      <Block title={t.topics}>
        <BulletList items={info.topics} />
      </Block>
      <Block title={t.skills}>
        <BulletList items={info.skills} />
      </Block>
      <Block title={t.reading}>
        <BulletList items={info.reading} />
      </Block>
      {countries.length > 0 && (
        <Block title={t.countries}>
          <Chips
            items={countries.map((c) => {
              const entry = countryByName(c.country);
              return { href: entry ? `/directory/countries/${countrySlug(entry)}/professors` : "/directory/countries", label: c.country, meta: String(c.count) };
            })}
          />
        </Block>
      )}
      {labs.length > 0 && (
        <Block title={t.labs(labs.length)}>
          <LabRoster labs={labs.slice(0, 8)} />
        </Block>
      )}
      <Block title={t.people(professors.length)}>
        <ProfessorRoster professors={professors.slice(0, SHOWN)} />
        {professors.length > SHOWN && <p className="text-sm text-slate-400">{t.showing(SHOWN, professors.length)}</p>}
      </Block>
    </PageShell>
  );
}
