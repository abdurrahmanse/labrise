import type { PreparedRequest, ResponseInterceptor } from "./types";

const responseInterceptors = new Set<ResponseInterceptor>();

/** Runs on every response, for example to react to a 401. Returns a function that removes it. */
export function addResponseInterceptor(interceptor: ResponseInterceptor) {
  responseInterceptors.add(interceptor);
  return () => void responseInterceptors.delete(interceptor);
}

/** Passes the response through every registered response interceptor, in registration order. */
export async function runResponseInterceptors(response: Response, request: PreparedRequest): Promise<Response> {
  let current = response;
  for (const interceptor of responseInterceptors) current = await interceptor(current, request);
  return current;
}
