/** Degree levels a scholarship can fund. The one list the entity type, the wire schema and the level tabs all use. */
export const SCHOLARSHIP_LEVELS = ["Master's", "PhD", "Master's & PhD", "PhD & research"] as const;

export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 50;

/** Programmes shown first on the home and finder pages. */
export const FEATURED_SCHOLARSHIPS = [
  "Chevening Scholarships",
  "DAAD Scholarships",
  "Fulbright Foreign Student Program",
  "Gates Cambridge Scholarship",
  "Swiss Government Excellence Scholarships",
  "Stipendium Hungaricum"
] as const;
