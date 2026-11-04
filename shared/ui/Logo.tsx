import { brand } from "@/content/site/brand";

/** The FundedCS mark: a blue square with a white F and a gold prompt chevron. The same art is in app/icon.svg. */
export function Logo({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={brand.name} className={className}>
      <rect width="64" height="64" fill={brand.colors.blue} />
      <path d="M16 12h30v9H27v8h14v9H27v14h-11Z" fill="#fff" />
      <path d="M38 43l9 7-9 7" fill="none" stroke={brand.colors.gold} strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}
