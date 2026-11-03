import type { PaginatedResponse } from "@/shared/api/types";
import type { ScholarshipDto, ScholarshipPageDto } from "../dto/scholarshipDto";
import type { Scholarship } from "../types/scholarship";

/** Wire format to entity. Every field is listed, so a field added on either side is a compile error here. */
export const toScholarship = (dto: ScholarshipDto): Scholarship => ({
  name: dto.name,
  host: dto.host,
  region: dto.region,
  level: dto.level,
  covers: dto.covers,
  eligibility: dto.eligibility,
  deadline: dto.deadline,
  site: dto.site
});

export const toScholarshipDto = (scholarship: Scholarship): ScholarshipDto => ({
  name: scholarship.name,
  host: scholarship.host,
  region: scholarship.region,
  level: scholarship.level,
  covers: scholarship.covers,
  eligibility: scholarship.eligibility,
  deadline: scholarship.deadline,
  site: scholarship.site
});

export const toScholarshipPage = (dto: ScholarshipPageDto): PaginatedResponse<Scholarship> => ({
  items: dto.items.map(toScholarship),
  total: dto.total,
  page: dto.page,
  pageSize: dto.pageSize,
  pageCount: dto.pageCount
});

export const toScholarshipPageDto = (page: PaginatedResponse<Scholarship>): ScholarshipPageDto => ({
  items: page.items.map(toScholarshipDto),
  total: page.total,
  page: page.page,
  pageSize: page.pageSize,
  pageCount: page.pageCount
});
