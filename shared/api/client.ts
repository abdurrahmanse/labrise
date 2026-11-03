import type { z } from "zod";
import { ApiError } from "./errors";

type Params = Record<string, string | number | boolean | undefined>;

interface RequestOptions<S extends z.ZodType> {
  /** Validates the response so a bad payload fails loudly instead of rendering garbage. */
  schema: S;
  params?: Params;
  /** Passed in by TanStack Query so a replaced query cancels its request. */
  signal?: AbortSignal;
  timeoutMs?: number;
}

const DEFAULT_TIMEOUT = 10_000;

/** Empty means the site's own /api routes. Set NEXT_PUBLIC_API_BASE_URL to send every call to a separate backend. */
const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");

function withParams(path: string, params?: Params) {
  if (!params) return path;
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== "") search.set(key, String(value));
  const query = search.toString();
  return query ? `${path}?${query}` : path;
}

/** Typed GET with timeout, cancellation and schema validation. Throws ApiError only. */
export async function apiGet<S extends z.ZodType>(path: string, { schema, params, signal, timeoutMs = DEFAULT_TIMEOUT }: RequestOptions<S>): Promise<z.infer<S>> {
  const timeout = new AbortController();
  const timer = setTimeout(() => timeout.abort(), timeoutMs);
  const onAbort = () => timeout.abort();
  signal?.addEventListener("abort", onAbort);

  try {
    const response = await fetch(`${API_BASE_URL}${withParams(path, params)}`, { signal: timeout.signal, headers: { Accept: "application/json" } });
    if (!response.ok) throw new ApiError("http", `Request failed with ${response.status}`, response.status);
    const parsed = schema.safeParse(await response.json());
    if (!parsed.success) throw new ApiError("parse", "The response did not match the expected shape");
    return parsed.data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (signal?.aborted) throw new ApiError("aborted", "Request cancelled");
    if (timeout.signal.aborted) throw new ApiError("timeout", "Request timed out");
    throw new ApiError("network", "Network error");
  } finally {
    clearTimeout(timer);
    signal?.removeEventListener("abort", onAbort);
  }
}
