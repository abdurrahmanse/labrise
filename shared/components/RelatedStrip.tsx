import { hubChrome, type RelatedItem } from "@/content/text/hubPages";
import { Block } from "./Block";
import { LinkTile, LinkTileGrid } from "./LinkTile";

/** Links from a page to the rest of the site. */
export function RelatedStrip({ items }: { items: RelatedItem[] }) {
  return (
    <Block title={hubChrome.related}>
      <LinkTileGrid>
        {items.map(({ href, title, meta, Icon }) => (
          <LinkTile key={href} href={href} title={title} meta={meta} icon={Icon} />
        ))}
      </LinkTileGrid>
    </Block>
  );
}
