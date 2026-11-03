import Link from "next/link";
import { Check, ExternalLink } from "lucide-react";
import { Block } from "@/shared/components/Block";
import { BulletList } from "@/shared/components/BulletList";
import { Chips } from "@/shared/components/Chips";
import { Facts } from "@/shared/components/Facts";
import { PageShell } from "@/shared/components/PageShell";
import { scholarships } from "../../data/scholarships";
import { universitiesOfProvider } from "../../lib/connections";
import { scholarshipSlug, universitySlug } from "../../lib/slugs";
import type { ProviderEntry } from "../../types";
import { Flag } from "../Flag";
import { detailText } from "@/data/text/directory";
import { EntryActions } from "@/modules/library/components/EntryActions";
import { providerSlug } from "../../lib/slugs";

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function ProviderDetailView({ provider }: { provider: ProviderEntry }) {
  const programmes = scholarships.filter((s) => provider.programs.includes(s.name));
  const places = universitiesOfProvider(provider);

  return (
    <PageShell
      eyebrow={detailText.eyebrow.provider(provider.kind)}
      title={provider.name}
      notice={{ subject: provider.name, source: provider.site }}
      actions={<EntryActions type="providers" slug={providerSlug(provider)} />}
      lead={provider.route}
      media={<Flag country={provider.country} className="h-10 w-14" />}
      back={{ href: "/directory/providers", label: detailText.back.providers }}
    >
      <Facts
        rows={[
          [detailText.facts.whoItSupports, provider.supports],
          [detailText.facts.basedIn, provider.country],
          [detailText.facts.selection, provider.selection],
          [
            detailText.facts.officialPage,
            <a key="s" href={provider.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {provider.site.replace("https://", "")} <ExternalLink className="h-4 w-4" />
            </a>
          ]
        ]}
      />

      <Block title={detailText.blocks.requirements}>
        <ul className="space-y-2">
          {provider.requirements.map((r) => (
            <li key={r} className="flex gap-3 text-slate-200 font-sans font-normal">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" /> {r}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-400">{detailText.hints.usualRules}</p>
      </Block>

      <Block title={detailText.blocks.documents}>
        <BulletList items={provider.documents} />
      </Block>

      {programmes.length > 0 && (
        <Block title={detailText.blocks.programmes}>
          <Chips items={programmes.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.level }))} />
        </Block>
      )}

      {places.length > 0 && (
        <Block title={detailText.blocks.universitiesApply}>
          <Chips items={places.map((u) => ({ href: `/directory/universities/${universitySlug(u)}`, label: u.name, meta: u.country }))} />
        </Block>
      )}

      <Block title={detailText.blocks.next}>
        <Chips
          items={[
            { href: "/apply/scholarship", label: detailText.readNext.applyScholarship },
            { href: "/guides/reference-letter", label: detailText.readNext.referenceLetters },
            { href: "/guides/sop", label: detailText.readNext.sop }
          ]}
        />
        <p className="text-sm text-slate-400">
          {detailText.hints.universityRoute} <Link href="/apply/university" className={linkClass}>{detailText.hints.universityRouteLink}</Link>.
        </p>
      </Block>
    </PageShell>
  );
}
