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
