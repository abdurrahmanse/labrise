import type { ReactNode } from "react";
import { DataError } from "./DataError";
import { DataSkeleton } from "./DataSkeleton";
import { EmptyState } from "./EmptyState";

interface DataRendererProps<T> {
  data: T | undefined;
  isPending: boolean;
  error: unknown;
  onRetry?: () => void;
  /** True when `data` holds nothing to show. Defaults to an empty array. */
  isEmpty?: (data: T) => boolean;
  emptyTitle: string;
  emptyHint?: string;
  skeleton?: ReactNode;
  children: (data: T) => ReactNode;
}

const isEmptyArray = (data: unknown) => Array.isArray(data) && data.length === 0;

/**
 * Decides which of loading, error, empty and success to show, so no page repeats that logic.
 * Data that is already on screen stays visible if a background refresh fails.
 */
export function DataRenderer<T>({ data, isPending, error, onRetry, isEmpty = isEmptyArray, emptyTitle, emptyHint, skeleton, children }: DataRendererProps<T>) {
  if (data !== undefined) return isEmpty(data) ? <EmptyState title={emptyTitle} hint={emptyHint} /> : <>{children(data)}</>;
  if (error) return <DataError error={error} onRetry={onRetry} />;
  if (isPending) return <>{skeleton ?? <DataSkeleton />}</>;
  return <EmptyState title={emptyTitle} hint={emptyHint} />;
}
