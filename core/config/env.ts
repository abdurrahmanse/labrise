/**
 * Public configuration, safe to import anywhere (browser included).
 * Only NEXT_PUBLIC_* variables are read here; they are inlined into the browser bundle at build time.
 */
const trimSlash = (url: string | undefined) => (url ?? "").replace(/\/$/, "");

export type AppEnv = "development" | "staging" | "production";
export type DataProviderKind = "mock" | "rest";

const appEnv = process.env.NEXT_PUBLIC_APP_ENV;

export const publicEnv = {
  appEnv: (appEnv === "staging" || appEnv === "production" ? appEnv : "development") as AppEnv,
  /** Backend used by the browser. Empty means the site's own /api routes. */
  apiBaseUrl: trimSlash(process.env.NEXT_PUBLIC_API_BASE_URL),
  /** "mock" reads the bundled data, "rest" calls the backend. Unset means: rest when a base URL exists, otherwise mock. */
  dataProvider: process.env.NEXT_PUBLIC_DATA_PROVIDER
} as const;

export const resolveDataProvider = (explicit: string | undefined, baseUrl: string): DataProviderKind =>
  explicit === "mock" || explicit === "rest" ? explicit : baseUrl ? "rest" : "mock";
