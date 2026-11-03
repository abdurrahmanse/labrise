import { mockScholarshipRepository } from "@/infrastructure/scholarships/mockScholarshipRepository";
import { toScholarshipDto } from "@/modules/scholarships/contracts";
import { fail, ok } from "@/shared/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const scholarship = await mockScholarshipRepository.getBySlug((await params).slug);
  return scholarship ? ok(toScholarshipDto(scholarship)) : fail(404, "Scholarship not found");
}
