import { z } from "zod";
import { mockScholarshipRepository } from "@/infrastructure/scholarships/mockScholarshipRepository";
import { toScholarshipDto } from "@/modules/scholarships/contracts";
import { fail, ok } from "@/shared/api/respond";

const limitSchema = z.coerce.number().int().min(1).max(20).default(6);

export async function GET(request: Request) {
  const limit = limitSchema.safeParse(new URL(request.url).searchParams.get("limit") ?? undefined);
  if (!limit.success) return fail(400, "limit must be between 1 and 20");
  return ok((await mockScholarshipRepository.getFeatured(limit.data)).map(toScholarshipDto));
}
