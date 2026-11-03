import { mockScholarshipRepository } from "@/infrastructure/scholarships/mockScholarshipRepository";
import { fail, ok } from "@/shared/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const scholarship = await mockScholarshipRepository.getBySlug((await params).slug);
  return scholarship ? ok(scholarship) : fail(404, "Scholarship not found");
}
