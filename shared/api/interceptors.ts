export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/** What interceptors see and may change before the request is sent. */
export interface PreparedRequest {
  url: string;
  method: HttpMethod;
  headers: Record<string, string>;
  body?: string;
}

export type RequestInterceptor = (request: PreparedRequest) => PreparedRequest | Promise<PreparedRequest>;
export type ResponseInterceptor = (response: Response, request: PreparedRequest) => Response | Promise<Response>;

const requestInterceptors = new Set<RequestInterceptor>();
const responseInterceptors = new Set<ResponseInterceptor>();

/** Runs on every request, for example to add headers or log. Returns a function that removes it. */
export function addRequestInterceptor(interceptor: RequestInterceptor) {
  requestInterceptors.add(interceptor);
  return () => void requestInterceptors.delete(interceptor);
}

/** Runs on every response, for example to react to a 401. Returns a function that removes it. */
export function addResponseInterceptor(interceptor: ResponseInterceptor) {
  responseInterceptors.add(interceptor);
  return () => void responseInterceptors.delete(interceptor);
}

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

/** Passes the request through every registered request interceptor, in registration order. */
export async function runRequestInterceptors(request: PreparedRequest): Promise<PreparedRequest> {
  let current = request;
  for (const interceptor of requestInterceptors) current = await interceptor(current);
  return current;
}

/** Passes the response through every registered response interceptor, in registration order. */
export async function runResponseInterceptors(response: Response, request: PreparedRequest): Promise<Response> {
  let current = response;
  for (const interceptor of responseInterceptors) current = await interceptor(current, request);
  return current;
}
