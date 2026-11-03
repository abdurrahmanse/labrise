"use client";

import { SearchInput } from "@/components/ui/SearchInput";
import { useDirectoryFilters } from "../store/useDirectoryFilters";

export function DirectorySearch({ placeholder }: { placeholder: string }) {
  const query = useDirectoryFilters((s) => s.query);
  const setQuery = useDirectoryFilters((s) => s.setQuery);

  return <SearchInput className="w-full lg:max-w-sm" value={query} onChange={setQuery} placeholder={placeholder} />;
}
