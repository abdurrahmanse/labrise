import type { z } from "zod";
import { publicEnv } from "@/core/config/env";
import { ApiError } from "./errors";
import { applyAuthToken, runRequestInterceptors, runResponseInterceptors, type HttpMethod, type PreparedRequest } from "./interceptors";
import type { ApiErrorBody } from "./types";

type Params = Record<string, string | number | boolean | undefined>;

export interface RequestOptions<S extends z.ZodType> {
  /** Validates the response so a bad payload fails loudly instead of rendering garbage. */
  schema: S;
  params?: Params;
  /** JSON body for POST, PUT and PATCH. */
  body?: unknown;
  /** Passed in by TanStack Query so a replaced query cancels its request. */
  signal?: AbortSignal;
  timeoutMs?: number;
  /** Overrides the default backend. The server passes its own; the browser uses the public one. */
  baseUrl?: string;
  /** Extra headers, for example the server's bearer token. */
  headers?: Record<string, string>;
  /** Extra attempts after a network error, timeout, 5xx, 408 or 429. Only GET retries by default. */
  retries?: number;
}

const DEFAULT_TIMEOUT = 10_000;
const DEFAULT_GET_RETRIES = 2;
const RETRY_BASE_DELAY = 300;

function withParams(path: string, params?: Params) {
  if (!params) return path;
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) if (value !== undefined && value !== "") search.set(key, String(value));
  const query = search.toString();
  return query ? `${path}?${query}` : path;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function prepare(method: HttpMethod, path: string, options: RequestOptions<z.ZodType>): Promise<PreparedRequest> {
  const headers: Record<string, string> = { Accept: "application/json", ...options.headers };
  if (options.body !== undefined) headers["Content-Type"] = "application/json";

  const request: PreparedRequest = {
    url: `${options.baseUrl ?? publicEnv.apiBaseUrl}${withParams(path, options.params)}`,
    method,
    headers,
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  };
  return runRequestInterceptors(await applyAuthToken(request));
}

async function readError(response: Response): Promise<ApiError> {
  let message = `Request failed with ${response.status}`;
  try {
    const body = (await response.json()) as Partial<ApiErrorBody>;
    if (typeof body.error?.message === "string") message = body.error.message;
  } catch {
    // The body was not JSON; the status message above is enough.
  }
  return new ApiError("http", message, response.status);
}

async function attempt<S extends z.ZodType>(method: HttpMethod, path: string, options: RequestOptions<S>): Promise<z.infer<S>> {
  const timeout = new AbortController();
  const timer = setTimeout(() => timeout.abort(), options.timeoutMs ?? DEFAULT_TIMEOUT);
  const onAbort = () => timeout.abort();
  options.signal?.addEventListener("abort", onAbort);

  try {
    const request = await prepare(method, path, options);
    const response = await runResponseInterceptors(
      await fetch(request.url, { method, headers: request.headers, body: request.body, signal: timeout.signal }),
      request
    );
    if (!response.ok) throw await readError(response);
    if (response.status === 204) return options.schema.parse(undefined);
    const parsed = options.schema.safeParse(await response.json());
    if (!parsed.success) throw new ApiError("parse", "The response did not match the expected shape");
    return parsed.data;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (options.signal?.aborted) throw new ApiError("aborted", "Request cancelled");
    if (timeout.signal.aborted) throw new ApiError("timeout", "Request timed out");
    throw new ApiError("network", "Network error");
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener("abort", onAbort);
  }
}

/** One request with timeout, cancellation, schema validation and, for safe methods, retries with backoff. */
async function request<S extends z.ZodType>(method: HttpMethod, path: string, options: RequestOptions<S>): Promise<z.infer<S>> {
  const retries = options.retries ?? (method === "GET" ? DEFAULT_GET_RETRIES : 0);
  for (let tries = 0; ; tries++) {
    try {
      return await attempt(method, path, options);
    } catch (error) {
      const canRetry = error instanceof ApiError && error.retryable && tries < retries;
      if (!canRetry) throw error;
      await sleep(RETRY_BASE_DELAY * 2 ** tries);
    }
  }
}

type BodyOptions<S extends z.ZodType> = Omit<RequestOptions<S>, "body">;

/** The HTTP client. Components never call this; repositories do. Throws ApiError only. */
export const apiClient = {
  get: <S extends z.ZodType>(path: string, options: RequestOptions<S>) => request("GET", path, options),
  post: <S extends z.ZodType>(path: string, body: unknown, options: BodyOptions<S>) => request("POST", path, { ...options, body }),
  put: <S extends z.ZodType>(path: string, body: unknown, options: BodyOptions<S>) => request("PUT", path, { ...options, body }),
  patch: <S extends z.ZodType>(path: string, body: unknown, options: BodyOptions<S>) => request("PATCH", path, { ...options, body }),
  delete: <S extends z.ZodType>(path: string, options: BodyOptions<S>) => request("DELETE", path, options)
};

/** Shortcut kept for existing callers. */
export const apiGet = apiClient.get;
