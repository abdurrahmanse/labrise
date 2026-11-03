import { scholarshipDetailText as t } from "@/data/text/scholarships";
import { Block } from "@/shared/components/Block";
import { Chips } from "@/shared/components/Chips";
import { sameHostScholarships, sameLevelScholarships } from "../../../lib/scholarshipRelations";
import { scholarshipSlug } from "../../../lib/slugs";
import type { ScholarshipEntry } from "../../../types";
import { ScholarshipCard } from "../../cards/ScholarshipCard";

/** Other scholarships worth a look: same country as cards, same level elsewhere as links. */
export function ScholarshipRelated({ scholarship }: { scholarship: ScholarshipEntry }) {
  const sameHost = sameHostScholarships(scholarship);
  const sameLevel = sameLevelScholarships(scholarship);

  return (
    <>
      {sameHost.length > 0 && (
        <Block title={t.similar.title(scholarship.host)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sameHost.slice(0, 4).map((s) => <ScholarshipCard key={s.name} scholarship={s} />)}
          </div>
        </Block>
      )}
      {sameLevel.length > 0 && (
        <Block title={t.similar.level}>
          <Chips items={sameLevel.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.host }))} />
        </Block>
      )}
    </>
  );
}
