import { Suspense, type ReactNode } from "react";
import { PageFallback } from "./PageFallback";

interface WithParamsProps<P> {
  /** The `params` (or `searchParams`) promise, passed on without awaiting it. */
  params: Promise<P>;
  /** Shown while the values resolve. */
  fallback?: ReactNode;
  children: (params: P) => ReactNode;
}

async function Resolve<P>({ params, children }: Pick<WithParamsProps<P>, "params" | "children">) {
  return <>{children(await params)}</>;
}

/**
 * The one place a page reads its URL data. Reading `params` outside `<Suspense>` makes the page wait for the
 * URL before it can show anything, which Next.js flags in development. Here the read happens inside a boundary,
 * so the shell appears at once and the page content streams in. `notFound()` can be called from `children`.
 */
export function WithParams<P>({ params, fallback = <PageFallback />, children }: WithParamsProps<P>) {
  return (
    <Suspense fallback={fallback}>
      <Resolve params={params}>{children}</Resolve>
    </Suspense>
  );
}
