import { brand } from "@/content/site/brand";

/** The Labrise mark: a white L with a gold arrow rising from it. The same art is in app/icon.svg. */
export function Logo({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={brand.name} className={className}>
      <rect width="64" height="64" fill={brand.colors.blue} />
      <path d="M18 10v42h30" fill="none" stroke="#fff" strokeWidth="8" strokeLinejoin="miter" />
      <path d="M32 38 50 20M38 19h13v13" fill="none" stroke={brand.colors.gold} strokeWidth="6" strokeLinejoin="miter" />
    </svg>
  );
}
