import type { PreparedRequest } from "./types";

type TokenProvider = () => string | null | undefined | Promise<string | null | undefined>;
let tokenProvider: TokenProvider | null = null;

/** Registers where the browser gets its auth token from. Every request then carries `Authorization: Bearer …`. */
export function setAuthTokenProvider(provider: TokenProvider | null) {
  tokenProvider = provider;
}

/** Adds the bearer token from the registered provider, unless the request already carries an Authorization header. */
export async function applyAuthToken(request: PreparedRequest): Promise<PreparedRequest> {
  if (!tokenProvider || request.headers.Authorization) return request;
  const token = await tokenProvider();
  return token ? { ...request, headers: { ...request.headers, Authorization: `Bearer ${token}` } } : request;
}
