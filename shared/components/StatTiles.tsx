import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { IconBadge } from "./IconBadge";
import { Label } from "./Text";
import { Surface } from "./Surface";

export interface StatItem {
  Icon: LucideIcon;
  label: string;
  value: ReactNode;
}

/** Row of number tiles: an icon, a big value and a caption. */
export function StatTiles({ items }: { items: StatItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map(({ Icon, label, value }) => (
        <Surface key={label} tone="glass" depth="sm" padding="md" className="flex items-center gap-4">
          <IconBadge icon={Icon} size="lg" />
          <div className="min-w-0">
            <dd className="text-2xl font-bold text-white">{value}</dd>
            <Label as="dt">{label}</Label>
          </div>
        </Surface>
      ))}
    </dl>
  );
}

export interface HighlightItem {
  Icon: LucideIcon;
  label: string;
  children: ReactNode;
}

/** Row of key facts at the top of a detail page: an icon, a caption and a value. */
export function HighlightTiles({ items }: { items: HighlightItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ Icon, label, children }) => (
        <Surface key={label} tone="glass" depth="sm" padding="md" className="flex items-start gap-3">
          <IconBadge icon={Icon} />
          <div className="min-w-0">
            <Label as="p">{label}</Label>
            <div className="font-bold text-white">{children}</div>
          </div>
        </Surface>
      ))}
    </div>
  );
}
