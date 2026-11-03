import { mockScholarshipRepository } from "@/infrastructure/scholarships/mockScholarshipRepository";
import { searchParamsSchema } from "@/modules/scholarships/schemas/scholarshipSchemas";
import { fail, ok } from "@/shared/api/respond";

/** Built-in backend: search, filter, sort and page scholarships. */
export async function GET(request: Request) {
  const parsed = searchParamsSchema.safeParse(Object.fromEntries(new URL(request.url).searchParams));
  if (!parsed.success) return fail(400, "Invalid search parameters");
  return ok(await mockScholarshipRepository.search(parsed.data));
}
