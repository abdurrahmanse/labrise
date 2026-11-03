import { getEntryResponseDto } from "@/modules/directory/api/wireServer";
import { directoryTypeSchema } from "@/modules/directory/schemas/directorySchemas";
import { fail, ok } from "@/shared/api/respond";

export async function GET(_request: Request, { params }: { params: Promise<{ type: string; slug: string }> }) {
  const { type, slug } = await params;
  const parsed = directoryTypeSchema.safeParse(type);
  if (!parsed.success) return fail(404, "Unknown directory type");

  const dto = getEntryResponseDto(parsed.data, slug);
  return dto ? ok(dto) : fail(404, "Entry not found");
}
