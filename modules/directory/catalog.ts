/**
 * The directory's records (countries, universities, professors, providers, scholarships) and the lookups built on them.
 * Heavy: importing this puts all the data in the bundle. For types, schemas and slugs use "@/modules/directory/contracts".
 * No React components here; those are in the module root (index.ts) and cards.ts.
 */
export { countries, directoryTypes, professors, providers, scholarships, universities } from "./data";
export { fieldOf } from "./data/fields";
export { ecosystemOfCountry } from "./lib/connections";
export { entryMeta } from "./lib/entryMeta";
export { findCountry, findProfessor, findProvider, findScholarship, findUniversity } from "./lib/lookups";
