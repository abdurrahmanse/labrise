import { NextResponse } from "next/server";

const CACHE = "public, s-maxage=3600, stale-while-revalidate=86400";

/** Success response for the bundled data, cacheable by the CDN. */
export const ok = <T>(data: T) => NextResponse.json(data, { headers: { "Cache-Control": CACHE } });

/** Error response with one consistent shape. */
export const fail = (status: number, message: string) => NextResponse.json({ error: { status, message } }, { status });
