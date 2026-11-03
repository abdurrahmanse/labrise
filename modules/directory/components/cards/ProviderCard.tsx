import { providerSlug } from "../../lib/slugs";
import type { ProviderEntry } from "../../types";
import { Flag } from "../Flag";
import { CardFact, CardShell } from "./CardShell";

export function ProviderCard({ provider }: { provider: ProviderEntry }) {
  return (
    <CardShell
      href={`/directory/providers/${providerSlug(provider)}`}
      eyebrow={`${provider.country} · ${provider.kind}`}
      title={provider.name}
      media={<Flag country={provider.country} className="h-8 w-12" />}
    >
      <CardFact label="Supports" value={provider.supports} />
      <CardFact label="Programmes" value={provider.programs.join(", ")} />
      <CardFact label="How to apply" value={provider.route} />
    </CardShell>
  );
}
