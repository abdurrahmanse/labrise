import { ArrowRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { Flag, countries, professors, fieldOf, countrySlug } from "@/modules/directory";
import { LinkTile, LinkTileGrid } from "@/shared/components/LinkTile";
import { Label } from "@/shared/components/Text";

function countBy<T>(items: T[], key: (item: T) => string) {
  const map = new Map<string, number>();
  for (const item of items) map.set(key(item), (map.get(key(item)) ?? 0) + 1);
  return [...map].sort((a, b) => b[1] - a[1]);
}

export function FindProfessors() {
  const fields = countBy(professors, (p) => fieldOf(p.group).title);
  const byCountry = countBy(professors, (p) => p.country).slice(0, 9);

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Label as="h3" tone="accent">{t.find.byField}</Label>
        <LinkTileGrid columns="sm:grid-cols-2 lg:grid-cols-4">
          {fields.map(([title, n]) => (
            <LinkTile key={title} href={`/directory/professors?field=${encodeURIComponent(title)}`} title={title} meta={t.find.count(n)} arrow={false} />
          ))}
        </LinkTileGrid>
      </div>

      <div className="space-y-3">
        <Label as="h3" tone="accent">{t.find.byCountry}</Label>
        <LinkTileGrid>
          {byCountry.flatMap(([name, n]) => {
            const country = countries.find((c) => c.country === name);
            return country ? [<LinkTile key={name} href={`/directory/countries/${countrySlug(country)}/professors`} title={name} meta={t.find.count(n)} arrow={false} leading={<Flag country={name} className="h-6 w-9 shrink-0" />} />] : [];
          })}
        </LinkTileGrid>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button href="/directory/professors" size="lg" rightIcon={<ArrowRight className="h-4 w-4" aria-hidden />}>{t.find.all}</Button>
        <Button href="/directory/professors?savedOnly=true" size="lg" variant="secondary" leftIcon={<Bookmark className="h-4 w-4" aria-hidden />}>{t.find.saved}</Button>
      </div>
    </div>
  );
}
