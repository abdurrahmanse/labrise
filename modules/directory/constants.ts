/** The kinds of directory entry. The one list the type, the route-param schema and the wire schemas use. */
export const DIRECTORY_TYPES = ["countries", "universities", "professors", "scholarships", "providers"] as const;

/** Labels a link to a directory entry carries, one per entry kind. */
export const ENTRY_KINDS = ["Country", "University", "Professor", "Funder", "Scholarship"] as const;
