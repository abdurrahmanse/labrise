/** Overlapping row of small images that hints at what a card contains. */
export function ArtRow({ children }: { children: React.ReactNode }) {
  return <div className="flex -space-x-2">{children}</div>;
}
