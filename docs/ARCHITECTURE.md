# Data architecture

One Next.js app (modular monolith). Data reaches the UI through one path, whatever the source.

```
UI / Server Components
   -> hooks (modules/*/hooks)  or  cached server reads (modules/*/server.ts)
   -> queries (TanStack Query options)           browser only
   -> services (modules/*/services)              use cases, no I/O
   -> repository contracts (modules/*/repositories)
   -> implementations (infrastructure/*)         mock (bundled data) | REST
   -> apiClient (shared/api/client.ts)           REST only
   -> backend / built-in /api routes
```

The composition roots decide which implementation backs each contract:
`core/container/server.ts` (server) and `core/container/client.ts` (browser).

## Folders

| Folder | Holds |
| :--- | :--- |
| `app/` | Thin routes. `app/api/**` is the built-in backend used in mock mode. |
| `modules/<feature>/` | One feature: its `components/`, hooks, services, repositories (contracts), queries, schemas, types, utils, constants. Public API = `index.ts` (+ the extra entries below). |
| `components/ui/` | Design-system primitives (buttons, tabs, hero, cards) with no feature knowledge. |
| `components/header`, `components/footer` | The site shell rendered by `app/layout.tsx`. Not a feature. |
| `shared/` | Code with no business meaning: API client, query client, hooks, generic UI such as `Flag`, `DataRenderer`. |
| `core/` | Configuration (`core/config`) and composition roots (`core/container`). |
| `infrastructure/` | Concrete repositories (mock, REST). The only code that knows a data source. |
| `data/` | Bundled content and UI copy, the mock data the repositories serve. |

Feature UI lives in its module: `modules/countries`, `faqs`, `professors`, `scholarships`, `roadmap` (overview, step cards),
level, phase and widget screens (in `modules/roadmap/components`), `home`, `documents`, `guides`, and so on.

Folders such as `entities/`, `DTOs/`, `mappers/`, `adapters/`, `actions/` are not created empty. Add one inside a module when
the first file needs it (for example `mappers/` when a backend's field names differ from the schema).

## Keeping bundles small

Measured with `next analyze`: a plain page used to ship ~945 KB of JavaScript (raw) because the header pulled in the whole directory.
Rules that keep it small:

- **Module entries are split by weight.** `directory` has `index.ts` (UI components), `cards.ts` (cards other modules reuse),
  `contracts.ts` (types, schemas, slugs, API client) and `catalog.ts` (the records). Import the lightest one that has what you need.
  `search` has `index.ts` (header button only) and `client.ts` (results hook). ESLint allows exactly these extra entries.
- **Barrels must not mix data and client components.** A server page that imports a barrel re-exporting `"use client"` files
  puts all of them in that page's client manifest, rendered or not. Bundlers also cannot drop unused re-exports of modules
  that run code at load time (the data files do).
- **Heavy, rarely-used UI loads on demand.** The search dialog is a `next/dynamic` import opened by the header button or Ctrl/Cmd+K.
- **Shared UI lives in `shared/`.** `Flag` and `ProgressBadge` are used by several features, so they must not live in (or import) one of them.

Boundaries are enforced by ESLint (`eslint.config.mjs`) for every module: between modules, import `@/modules/<name>` (or `/server`, or one of the entries listed above), never inner files.
Route files (`app/**`) are the exception for UI: a page imports the exact component file it renders (`@/modules/<name>/components/...`). A barrel that re-exports client components makes every page importing it ship all of them, so barrels stay as the module's public API for other modules while pages stay narrow.
Core, infrastructure, API routes and tests may reach inside because they implement the module contracts. A file re-exported through an `index.ts` that uses client-only code (stores, hooks) must start with `"use client"`, or server pages importing the barrel fail to build.
Import cycles are checked by `npm run check:cycles`; files nothing reaches (from a route or a module's `index.ts`) by `npm run check:unused`.

## Modules on the new flow

- `modules/content`: country guides, documents, FAQs (`useCountryGuides`, `useDocuments`, `useFaqs`; server `getCountryGuide`, ...).
- `modules/scholarships`: `useScholarships`, `useInfiniteScholarships`, `useScholarshipDetails`, `useFeaturedScholarships`,
  `useScholarshipSearch`, `useScholarshipFilters` (URL state). Search, filter, sort and paging run in the repository, not in the browser.
- `modules/directory`: already had hooks + API routes; it keeps its own `api/` layer and is the next to migrate.

## Connecting a backend

1. Set `NEXT_PUBLIC_API_BASE_URL` (browser) and `API_BASE_URL` (server), and `API_TOKEN` if it needs a bearer token. See `.env.example`.
2. Make the backend return the JSON in `shared/data/endpoints.ts`:
   - `GET /api/content/{country-guides|documents|faqs}` -> `Item[]`, and `/{id}` -> `Item` (404 when missing)
   - `GET /api/scholarships?q&country&level&region&sort&page&pageSize` -> `{ items, total, page, pageSize, pageCount }`
   - `GET /api/scholarships/featured?limit`, `GET /api/scholarships/{slug}`
   - errors: `{ "error": { "status": 404, "message": "..." } }`
3. Different paths? Change them only in `shared/data/endpoints.ts`.
4. Different field names? Add `mappers/` in the module and map inside the REST repository. Schemas keep validating the result.
5. After the database changes, refresh cached pages: `POST /api/revalidate`, header `x-revalidate-secret: $REVALIDATE_SECRET`, body `{"collection":"faqs"}`.
6. A database (Prisma, Supabase, SQL) instead of REST: write a repository in `infrastructure/` that satisfies the module's contract and bind it in `core/container/server.ts`. Pages and hooks do not change. Keep the browser on REST: expose the data through route handlers that call that repository.

## Environment variables

| Variable | Where | Meaning |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_API_BASE_URL` | browser + server | Backend URL. Empty = built-in `/api` routes. |
| `NEXT_PUBLIC_DATA_PROVIDER` | browser + server | `mock` or `rest`. Empty = `rest` if a base URL is set, else `mock`. |
| `NEXT_PUBLIC_APP_ENV` | browser + server | `development`, `staging`, `production`. |
| `API_BASE_URL` | server only | Backend for server rendering. Falls back to the public URL. |
| `API_TOKEN` | server only | Bearer token sent by the server. |
| `REVALIDATE_SECRET` | server only | Protects `POST /api/revalidate`. |

`NEXT_PUBLIC_*` values are inlined at build time: rebuild after changing them.

## Checks

`npx tsc --noEmit`, `npx eslint .`, `npm test` (node:test via tsx), `npm run check:data`, `npm run check:cycles`, `npm run check:unused`, `npm run build`.
