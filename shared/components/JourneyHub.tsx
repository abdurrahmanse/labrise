import type { ReactNode } from "react";
import { hubChrome, type JourneyItem, type RelatedItem } from "@/content/text/hubPages";
import { JourneyCard } from "./JourneyCard";
import { RelatedStrip } from "./RelatedStrip";
import { Block } from "./Block";

interface JourneyHubProps {
  items: JourneyItem[];
  related: RelatedItem[];
  /** Badge per item (for example saved progress), keyed by href. */
  badges?: Record<string, ReactNode>;
}

/** A hub as a numbered path of big cards, plus a strip of connected pages. */
export function JourneyHub({ items, related, badges = {} }: JourneyHubProps) {
  return (
    <>
      <Block title={hubChrome.journey}>
        <ol className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <li key={item.href} className={i === 0 ? "md:col-span-2" : undefined}>
              <JourneyCard item={item} index={i} badge={badges[item.href]} />
            </li>
          ))}
        </ol>
      </Block>
      <RelatedStrip items={related} />
    </>
  );
}
