import type { LucideIcon } from "lucide-react";

export function IconTile({ icon: Icon, size = 48 }: { icon: LucideIcon; size?: number }) {
  return (
    <span
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-400 text-white shadow-[3px_3px_0_0_rgba(15,23,42,0.15)]"
    >
      <Icon style={{ width: size * 0.5, height: size * 0.5 }} />
    </span>
  );
}
