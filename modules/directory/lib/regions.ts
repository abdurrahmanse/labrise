export const REGIONS = ["All", "Europe", "North America", "Asia", "Oceania", "Middle East"] as const;
export type RegionFilter = (typeof REGIONS)[number];
