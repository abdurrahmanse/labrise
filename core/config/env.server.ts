import "server-only";
import { publicEnv, resolveDataProvider } from "./env";

const trimSlash = (url: string | undefined) => (url ?? "").replace(/\/$/, "");

/**
 * Server-only configuration. Secrets live here and are never sent to the browser.
 * - API_BASE_URL: backend used while rendering on the server (falls back to the public one).
 * - API_TOKEN: bearer token the server sends to the backend.
 * - REVALIDATE_SECRET: shared secret that protects POST /api/revalidate.
 */
export const serverEnv = {
  apiBaseUrl: trimSlash(process.env.API_BASE_URL) || publicEnv.apiBaseUrl,
  apiToken: process.env.API_TOKEN,
  revalidateSecret: process.env.REVALIDATE_SECRET
};

/** Which provider the server renders with. */
export const serverDataProvider = resolveDataProvider(publicEnv.dataProvider, serverEnv.apiBaseUrl);

export function serverAuthHeaders(): Record<string, string> {
  return serverEnv.apiToken ? { Authorization: `Bearer ${serverEnv.apiToken}` } : {};
}
