import { directoryTypeSchema } from "@/modules/directory/api/schemas";
import { getEntry } from "@/modules/directory/api/entryServer";
import { fail, ok } from "@/shared/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ type: string; slug: string }> }) {
  const { type, slug } = await params;
  const parsed = directoryTypeSchema.safeParse(type);
  if (!parsed.success) return fail(404, "Unknown directory type");

  const result = getEntry(parsed.data, slug);
  return result ? ok(result) : fail(404, "Entry not found");
}
