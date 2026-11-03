/**
 * What other modules need to talk about scholarships without loading the scholarships feature:
 * the entity, its wire format (DTO, schema) and the mappers between them. No React, no data.
 */
export { SCHOLARSHIP_LEVELS } from "./constants";
export type { Scholarship, ScholarshipLevel } from "./types/scholarship";
export type { ScholarshipDto, ScholarshipPageDto } from "./dto/scholarshipDto";
export { scholarshipDtoSchema, scholarshipPageDtoSchema } from "./schemas/scholarshipSchema";
export { toScholarship, toScholarshipDto, toScholarshipPage, toScholarshipPageDto } from "./mappers/scholarshipMapper";
