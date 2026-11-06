import type { ReactNode } from "react";
import Link from "next/link";
import { Block } from "@/shared/components/Block";
import { rosterText } from "@/content/text/directory";
import type { UniversityEntry } from "../types";
import { universitySlug } from "../utils/slugs";
import { inlineLinkClass } from "@/shared/components/linkStyles";

/** A block titled with a university, holding its people or labs, with a link to the university page. */
export function UniversityGroupBlock({ university, children }: { university: UniversityEntry; children: ReactNode }) {
  return (
    <Block title={university.name}>
      {children}
      <Link href={`/directory/universities/${universitySlug(university)}`} className={`text-sm font-bold ${inlineLinkClass}`}>
        {rosterText.universityDetails}
      </Link>
    </Block>
  );
}
