"use client";

import { TabItem, TabsContainer } from "@/components/ui/Tabs";
import { REGIONS, useDirectoryFilters } from "../store/useDirectoryFilters";

export function RegionTabs() {
  const region = useDirectoryFilters((s) => s.region);
  const setRegion = useDirectoryFilters((s) => s.setRegion);

  return (
    <TabsContainer variant="pills" size="xs">
      {REGIONS.map((r) => (
        <TabItem key={r} active={region === r} onClick={() => setRegion(r)}>
          {r}
        </TabItem>
      ))}
    </TabsContainer>
  );
}
