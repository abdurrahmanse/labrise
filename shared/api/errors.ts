export type ApiErrorCode = "network" | "timeout" | "http" | "parse" | "aborted";

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

  /** Client errors (4xx) will not succeed on retry. */
  get retryable() {
    return this.code !== "aborted" && !(this.status && this.status >= 400 && this.status < 500);
  }
}

export const isApiError = (error: unknown): error is ApiError => error instanceof ApiError;
