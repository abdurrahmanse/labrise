import { REGION_NAMES } from "@/shared/types/region";

export const REGIONS = ["All", ...REGION_NAMES] as const;
export type RegionFilter = (typeof REGIONS)[number];
