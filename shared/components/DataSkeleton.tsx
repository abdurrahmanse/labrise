interface DataSkeletonProps {
  /** Number of placeholder cards. */
  count?: number;
  className?: string;
}

/** Placeholder grid shown while a list loads. Matches the card grid so the page does not jump. */
export function DataSkeleton({ count = 6, className = "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3" }: DataSkeletonProps) {
  return (
    <div className={className} role="status" aria-busy="true" aria-label="Loading">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="h-40 animate-pulse border-2 border-white/10 bg-white/[0.04]" />
      ))}
    </div>
  );
}
