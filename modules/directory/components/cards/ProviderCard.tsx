import { providerSlug } from "../../utils/slugs";
import type { ProviderEntry } from "../../types";
import { Flag } from "@/shared/components/Flag";
import { CardFact, CardShell } from "./CardShell";
import { cardText } from "@/content/text/directory";

export function ProviderCard({ provider }: { provider: ProviderEntry }) {
  return (
    <CardShell
      href={`/directory/providers/${providerSlug(provider)}`}
      eyebrow={`${provider.country} · ${provider.kind}`}
      title={provider.name}
      media={<Flag country={provider.country} className="h-8 w-12" />}
    >
      <CardFact label={cardText.provider.supports} value={provider.supports} />
      <CardFact label={cardText.provider.programmes} value={provider.programs.join(", ")} />
      <CardFact label={cardText.provider.route} value={provider.route} />
    </CardShell>
  );
}
