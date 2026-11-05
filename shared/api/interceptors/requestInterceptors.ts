import type { PreparedRequest, RequestInterceptor } from "./types";

const requestInterceptors = new Set<RequestInterceptor>();

/** Runs on every request, for example to add headers or log. Returns a function that removes it. */
export function addRequestInterceptor(interceptor: RequestInterceptor) {
  requestInterceptors.add(interceptor);
  return () => void requestInterceptors.delete(interceptor);
}

/** Passes the request through every registered request interceptor, in registration order. */
export async function runRequestInterceptors(request: PreparedRequest): Promise<PreparedRequest> {
  let current = request;
  for (const interceptor of requestInterceptors) current = await interceptor(current);
  return current;
}
