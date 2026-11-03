import { listContentDtos } from "@/infrastructure/content/contentWire";
import { isCollectionName } from "@/modules/content/registry";
import { fail, ok } from "@/shared/api/respond";

/** Built-in backend for a collection. A real backend must return the same JSON for this path. */
export async function GET(_request: Request, { params }: { params: Promise<{ resource: string }> }) {
  const { resource } = await params;
  if (!isCollectionName(resource)) return fail(404, "Unknown resource");
  return ok(await listContentDtos(resource));
}
