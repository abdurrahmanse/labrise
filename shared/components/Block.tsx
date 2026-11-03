import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { IconBadge } from "./IconBadge";
import { IconFor } from "./IconFor";

interface BlockProps {
  title: string;
  /** Overrides the icon picked from the title. */
  icon?: LucideIcon;
  children: ReactNode;
}

export function Block({ title, icon: Icon, children }: BlockProps) {
  return (
    <section className="space-y-4">
      <h2 className="flex items-center gap-3 text-2xl font-bold text-white border-b-2 border-white/80 pb-2">
        <IconBadge icon={Icon} shadow>
          <IconFor text={title} />
        </IconBadge>
        {title}
      </h2>
      {children}
    </section>
  );
}
