import { mockContentRepository } from "@/infrastructure/content/mockContentRepository";
import { isCollectionName } from "@/modules/content/registry";
import { fail, ok } from "@/shared/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ resource: string; id: string }> }) {
  const { resource, id } = await params;
  if (!isCollectionName(resource)) return fail(404, "Unknown resource");
  const item = await mockContentRepository.get(resource, id);
  return item ? ok(item) : fail(404, "Not found");
}
