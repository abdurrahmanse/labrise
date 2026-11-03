import { QueryCache, QueryClient } from "@tanstack/react-query";
import { isApiError } from "../api/errors";
import { gcTimes } from "./staleTimes";

const MAX_RETRIES = 2;

/** The API client already retries safe requests, so only unknown errors are retried here. */
export function shouldRetry(failureCount: number, error: unknown) {
  if (failureCount >= MAX_RETRIES) return false;
  return !isApiError(error);
}

export function createQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        // Only background refreshes are logged: if data is already shown, the user is not blocked.
        if (query.state.data !== undefined) console.warn("Background refresh failed", query.queryKey, error);
      }
    }),
    defaultOptions: {
      queries: {
        retry: shouldRetry,
        retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 8000),
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        gcTime: gcTimes.default
      }
    }
  });
}
