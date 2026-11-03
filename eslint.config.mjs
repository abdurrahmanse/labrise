import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/**
 * Module boundaries. A module's public API is its index.ts (plus server.ts for server-only reads).
 * Code outside the module must import from there, never from its inner folders.
 * Wiring code (core, infrastructure, API routes, tests) implements the module contracts, so it may reach inside.
 */
const publicEntry = {
  group: ["@/modules/*/*", "!@/modules/*/server"],
  message: 'Import from "@/modules/<name>" (its public API), or "@/modules/<name>/server" for server-only reads. Not from inner files.'
};

const wiring = ["core/**", "infrastructure/**", "app/api/**", "**/*.test.ts", "**/*.test.tsx"];

const modulePatterns = [publicEntry];

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx}"],
    ignores: wiring,
    rules: { "no-restricted-imports": ["error", { patterns: modulePatterns }] }
  },
  {
    // Library only needs directory's HTTP client. Importing the directory barrel would make the two modules import each other.
    files: ["modules/library/components/SavedBrowser.tsx"],
    rules: { "no-restricted-imports": "off" }
  },
  {
    // Layering: shared infrastructure never depends on feature code. (Repeats modulePatterns: the last matching block wins.)
    files: ["shared/api/**", "shared/data/**", "shared/query/**", "core/config/**"],
    rules: {
      "no-restricted-imports": [
        "error",
        { patterns: [...modulePatterns, { group: ["@/modules/*", "@/components/*"], message: "Shared infrastructure must not import feature code." }] }
      ]
    }
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
]);

export default eslintConfig;
