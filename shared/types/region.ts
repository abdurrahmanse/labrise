/** World regions used to group countries, universities, funders and scholarships. */
export const REGION_NAMES = ["Europe", "North America", "Asia", "Oceania", "Middle East"] as const;
export type Region = (typeof REGION_NAMES)[number];
