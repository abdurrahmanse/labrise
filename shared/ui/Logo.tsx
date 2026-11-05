import { brand } from "@/content/site/brand";

/** The ResearchBound mark: a white R on blue, with a gold point like a data point on a graph. The same art is in app/icon.svg. */
export function Logo({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label={brand.name} className={className}>
      <rect width="64" height="64" fill={brand.colors.blue} />
      <path d="M18 54V14h15a10.5 10.5 0 0 1 0 21H18" fill="none" stroke="#fff" strokeWidth="8" strokeLinejoin="miter" />
      <path d="M33 36l14 18" fill="none" stroke="#fff" strokeWidth="8" />
      <circle cx="49" cy="15" r="6" fill={brand.colors.gold} />
    </svg>
  );
}
