import { cacheLife, cacheTag } from "next/cache";
import { container } from "@/core/container/server";
import type { ScholarshipSearchParams } from "./types/search";

/** Server-side reads, cached and tagged like the content module's. */
export async function getScholarshipPage(params: ScholarshipSearchParams) {
  "use cache";
  cacheLife("hours");
  cacheTag("scholarships");
  return container.scholarships.search(params);
}

export async function getFeaturedScholarships(limit?: number) {
  "use cache";
  cacheLife("hours");
  cacheTag("scholarships");
  return container.scholarships.featured(limit);
}
