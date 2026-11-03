"use client";

import type { ReactNode } from "react";
import { useMounted } from "@/shared/hooks/useMounted";
import { useDirectory, type DirectoryEntries } from "../hooks/useDirectory";
import type { DirectoryType } from "../types";

interface LiveDirectoryProps<T extends DirectoryType> {
  type: T;
  initialData: DirectoryEntries[T];
  children: (data: DirectoryEntries[T]) => ReactNode;
}

function Live<T extends DirectoryType>({ type, initialData, children }: LiveDirectoryProps<T>) {
  const { data } = useDirectory(type, initialData);
  return <>{children(data)}</>;
}

/**
 * Server render and first paint use the bundled rows (so search engines see them).
 * After mount, TanStack Query takes over and keeps the list fresh from the API.
 */
export function LiveDirectory<T extends DirectoryType>(props: LiveDirectoryProps<T>) {
  const mounted = useMounted();
  return mounted ? <Live {...props} /> : <>{props.children(props.initialData)}</>;
}
