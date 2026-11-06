/**
 * The directory's records (countries, universities, professors, providers, scholarships) and the lookups built on them.
 * Heavy: importing this puts all the data in the bundle. For types, schemas and slugs use "@/modules/directory/contracts".
 * No React components here; those are in the module root (index.ts) and cards.ts.
 */
export { countries, directoryTypes, labs, professors, providers, scholarships, universities } from "./data";
export { fieldByKey, fieldKeys, fieldOf } from "./data/fields";
export { regionNames, regionOfSlug, regionSlug } from "./utils/hubs";
export { labsAtUniversity, labsInCountry, labsOfProfessor } from "./utils/lookups";
export { ecosystemOfCountry } from "./utils/connections";
export { entryMeta } from "./utils/entryMeta";
export { findCountry, findLab, findProfessor, findProvider, findScholarship, findUniversity, providerOfScholarship } from "./utils/lookups";
