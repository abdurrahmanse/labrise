export type ApiErrorCode = "network" | "timeout" | "http" | "parse" | "aborted";

const STATUS_MESSAGES: Record<number, string> = {
  400: "The request was not valid.",
  401: "Please sign in to continue.",
  403: "You do not have access to this.",
  404: "We could not find what you asked for.",
  408: "The request took too long. Try again.",
  409: "This conflicts with something that already exists.",
  422: "Some of the information was not valid.",
  429: "Too many requests. Wait a moment and try again."
};

/** Every failure from the API client is one of these, so callers can handle them in one place. */
export class ApiError extends Error {
  constructor(
    public readonly code: ApiErrorCode,
    message: string,
    public readonly status?: number
  ) {
    super(message);
    this.name = "ApiError";
  }

  /** Client errors (4xx) will not succeed on retry, except timeouts and rate limits. */
  get retryable() {
    if (this.code === "aborted" || this.code === "parse") return false;
    if (this.status === 408 || this.status === 429) return true;
    return !(this.status && this.status >= 400 && this.status < 500);
  }

  get isNotFound() {
    return this.status === 404;
  }

  get isUnauthorized() {
    return this.status === 401 || this.status === 403;
  }
}

export const isApiError = (error: unknown): error is ApiError => error instanceof ApiError;

/** One readable message for any thrown value, for use in error states. */
export function errorMessage(error: unknown): string {
  if (!isApiError(error)) return "Something went wrong. Try again.";
  if (error.code === "network") return "You appear to be offline. Check your connection and try again.";
  if (error.code === "timeout") return "The server took too long to answer. Try again.";
  if (error.code === "parse") return "The server sent data we could not read.";
  if (error.status && STATUS_MESSAGES[error.status]) return STATUS_MESSAGES[error.status];
  if (error.status && error.status >= 500) return "The server had a problem. Try again shortly.";
  return "Something went wrong. Try again.";
}
