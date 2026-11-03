/**
 * The quiet field behind every page: the flat canvas, and one soft blue light from the top that fades out
 * after the first screen, so the hero has depth and the rest of the page stays calm.
 */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[820px] overflow-hidden bg-field [mask-image:linear-gradient(to_bottom,#000_55%,transparent)]"
      aria-hidden="true"
    />
  );
}
