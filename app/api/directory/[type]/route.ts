import { listDirectoryDtos } from "@/modules/directory/api/wireServer";
import { directoryTypeSchema } from "@/modules/directory/schemas/directorySchemas";
import { fail, ok } from "@/shared/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ type: string }> }) {
  const parsed = directoryTypeSchema.safeParse((await params).type);
  if (!parsed.success) return fail(404, "Unknown directory type");
  return ok(listDirectoryDtos(parsed.data));
}
