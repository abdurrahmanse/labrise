import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { scholarshipDtoSchema, scholarshipPageDtoSchema } from "../schemas/scholarshipSchema";
import type { Scholarship } from "../types/scholarship";
import { toScholarship, toScholarshipDto, toScholarshipPage, toScholarshipPageDto } from "./scholarshipMapper";

const entity: Scholarship = {
  name: "Chevening Scholarships",
  host: "United Kingdom",
  region: "Europe",
  level: "Master's",
  covers: "Tuition and living costs",
  eligibility: "Citizens of eligible countries",
  deadline: "November",
  site: "https://www.chevening.org"
};

describe("scholarship mappers", () => {
  it("round-trips an entity through its DTO and schema", () => {
    const parsed = scholarshipDtoSchema.parse(toScholarshipDto(entity));
    assert.deepEqual(toScholarship(parsed), entity);
  });

  it("round-trips a page", () => {
    const page = { items: [entity], total: 1, page: 1, pageSize: 12, pageCount: 1 };
    const parsed = scholarshipPageDtoSchema.parse(toScholarshipPageDto(page));
    assert.deepEqual(toScholarshipPage(parsed), page);
  });

  it("the schema rejects a level the entity does not allow", () => {
    assert.equal(scholarshipDtoSchema.safeParse({ ...toScholarshipDto(entity), level: "Bachelor's" }).success, false);
  });
});
