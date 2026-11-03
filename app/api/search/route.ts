import { z } from "zod";
import { PAGE_SIZE, runSearch } from "@/modules/search/lib/searchServer";
import { fail, ok } from "@/shared/api/respond";

const paramsSchema = z.object({
  q: z.string().trim().min(1).max(100),
  page: z.coerce.number().int().min(1).max(50).default(1),
  kinds: z.string().optional()
});
const KINDS = ["Country", "University", "Professor", "Funder", "Scholarship"] as const;

export async function GET(request: Request) {
  const raw = Object.fromEntries(new URL(request.url).searchParams);
  const parsed = paramsSchema.safeParse(raw);
  if (!parsed.success) return fail(400, `Send a search text in q (page size ${PAGE_SIZE})`);

  const kinds = parsed.data.kinds?.split(",").filter((k): k is (typeof KINDS)[number] => (KINDS as readonly string[]).includes(k));
  return ok(runSearch(parsed.data.q, parsed.data.page, kinds?.length ? kinds : undefined));
}
