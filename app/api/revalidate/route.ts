import { revalidateTag } from "next/cache";
import { z } from "zod";
import { serverEnv } from "@/core/config/env.server";
import { isCollectionName } from "@/modules/content/registry";
import { contentTag } from "@/modules/content/tags";
import { fail } from "@/shared/api/respond";

const bodySchema = z.object({ collection: z.string() });

/**
 * Call this from your backend after the database changes so cached pages refresh:
 *   POST /api/revalidate   header x-revalidate-secret: $REVALIDATE_SECRET   body {"collection":"faqs"}
 */
export async function POST(request: Request) {
  if (!serverEnv.revalidateSecret || request.headers.get("x-revalidate-secret") !== serverEnv.revalidateSecret) {
    return fail(401, "Invalid secret");
  }
  const body = bodySchema.safeParse(await request.json().catch(() => null));
  if (!body.success || !isCollectionName(body.data.collection)) return fail(400, "Send {\"collection\": \"<name>\"}");

  revalidateTag(contentTag(body.data.collection), "max");
  return Response.json({ revalidated: true, collection: body.data.collection });
}
