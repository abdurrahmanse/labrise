import { mockScholarshipRepository } from "@/infrastructure/scholarships/mockScholarshipRepository";
import { toScholarshipPageDto } from "@/modules/scholarships/contracts";
import { searchParamsSchema } from "@/modules/scholarships/schemas/searchParamsSchema";
import { fail, ok } from "@/shared/api/respond";

/** Built-in backend: search, filter, sort and page scholarships. */
export async function GET(request: Request) {
  const parsed = searchParamsSchema.safeParse(Object.fromEntries(new URL(request.url).searchParams));
  if (!parsed.success) return fail(400, "Invalid search parameters");
  return ok(toScholarshipPageDto(await mockScholarshipRepository.search(parsed.data)));
}
