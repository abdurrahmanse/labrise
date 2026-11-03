import { getContentDto } from "@/infrastructure/content/contentWire";
import { isCollectionName } from "@/modules/content/registry";
import { fail, ok } from "@/shared/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ resource: string; id: string }> }) {
  const { resource, id } = await params;
  if (!isCollectionName(resource)) return fail(404, "Unknown resource");
  const dto = await getContentDto(resource, id);
  return dto ? ok(dto) : fail(404, "Not found");
}
