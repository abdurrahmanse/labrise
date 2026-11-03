import { NextResponse } from "next/server";
import { directoryTypeSchema } from "@/modules/directory/api/schemas";
import { directoryData } from "@/modules/directory/data";

export async function GET(_request: Request, { params }: { params: Promise<{ type: string }> }) {
  const parsed = directoryTypeSchema.safeParse((await params).type);
  if (!parsed.success) {
    return NextResponse.json({ error: "Unknown directory type" }, { status: 404 });
  }

  return NextResponse.json(directoryData[parsed.data], {
    headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" }
  });
}
