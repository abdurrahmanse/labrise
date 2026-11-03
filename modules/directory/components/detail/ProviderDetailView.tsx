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

const linkClass = "text-indigo-400 hover:text-indigo-200 underline underline-offset-4";

export function ProviderDetailView({ provider }: { provider: ProviderEntry }) {
  const programmes = scholarships.filter((s) => provider.programs.includes(s.name));
  const places = universitiesOfProvider(provider);

  return (
    <PageShell
      eyebrow={`Provider · ${provider.kind}`}
      title={provider.name}
      lead={provider.route}
      media={<Flag country={provider.country} className="h-10 w-14" />}
      back={{ href: "/directory/providers", label: "All providers" }}
    >
      <Facts
        rows={[
          ["Who it supports", provider.supports],
          ["Based in", provider.country],
          ["Selection", provider.selection],
          [
            "Official page",
            <a key="s" href={provider.site} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-1`}>
              {provider.site.replace("https://", "")} <ExternalLink className="h-4 w-4" />
            </a>
          ]
        ]}
      />

      <Block title="Requirements">
        <ul className="space-y-2">
          {provider.requirements.map((r) => (
            <li key={r} className="flex gap-3 text-slate-200 font-sans font-normal">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" /> {r}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-400">These are the usual rules. Each programme sets its own, so read the official call before you apply.</p>
      </Block>

      <Block title="Documents usually asked">
        <BulletList items={provider.documents} />
      </Block>

      {programmes.length > 0 && (
        <Block title="Programmes">
          <Chips items={programmes.map((s) => ({ href: `/directory/scholarships/${scholarshipSlug(s)}`, label: s.name, meta: s.level }))} />
        </Block>
      )}

      {places.length > 0 && (
        <Block title="Universities where this applies">
          <Chips items={places.map((u) => ({ href: `/directory/universities/${universitySlug(u)}`, label: u.name, meta: u.country }))} />
        </Block>
      )}

      <Block title="Next">
        <Chips
          items={[
            { href: "/apply/scholarship", label: "How to apply to a scholarship" },
            { href: "/guides/reference-letter", label: "Reference letters" },
            { href: "/guides/sop", label: "Statement of purpose" }
          ]}
        />
        <p className="text-sm text-slate-400">
          Want a university route instead? <Link href="/apply/university" className={linkClass}>See how to apply to a university</Link>.
        </p>
      </Block>
    </PageShell>
  );
}
