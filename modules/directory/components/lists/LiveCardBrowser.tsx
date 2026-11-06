"use client";

import type { ReactNode } from "react";
import type { Region } from "@/shared/types/region";
import type { DirectoryType, EntryOf } from "../../types";
import { LiveDirectory } from "../LiveDirectory";
import { CardBrowser } from "./CardBrowser";

interface LiveCardBrowserProps<T extends DirectoryType> {
  type: T;
  initialData: EntryOf[T][];
  placeholder: string;
  keyOf: (item: EntryOf[T]) => string;
  regionOf: (item: EntryOf[T]) => Region | undefined;
  searchText: (item: EntryOf[T]) => string;
  renderCard: (item: EntryOf[T]) => ReactNode;
}

/** One directory list: bundled rows first, live rows after mount, then search, region filter and card grid. */
export function LiveCardBrowser<T extends DirectoryType>({ type, initialData, ...browser }: LiveCardBrowserProps<T>) {
  return <LiveDirectory type={type} initialData={initialData}>{(data) => <CardBrowser data={data} {...browser} />}</LiveDirectory>;
}
