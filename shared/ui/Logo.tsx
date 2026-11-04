import { brand } from "@/content/site/brand";

/** The AIGradPath mark: a path through neural-network nodes that ends at a gold goal node. The same art is in app/icon.svg. */
export function Logo({ size = 36, className }: { size?: number; className?: string }) {
  const { blue, gold } = brand.colors;
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={brand.name} className={className}>
      <rect width="64" height="64" fill={blue} />
      <path d="M14 46 26 22 38 40 50 17" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinejoin="miter" />
      <circle cx="14" cy="46" r="5" fill="#fff" />
      <circle cx="26" cy="22" r="5" fill="#fff" />
      <circle cx="38" cy="40" r="5" fill="#fff" />
      <circle cx="50" cy="17" r="7.5" fill={gold} />
    </svg>
  );
}
