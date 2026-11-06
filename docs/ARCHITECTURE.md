# Architecture

One Next.js app, organised as a modular monolith: features are vertical slices (`modules/`), everything else is
feature-agnostic code that they share.

## Project structure

```
scholarship-roadmap/
├── app/                        Routes only: pages, layouts, metadata files, and app/api (the built-in backend)
├── modules/                    Features, one folder each (anatomy below)
├── shared/                     Feature-agnostic building blocks
│   ├── ui/                     Design-system primitives: Button, Tabs, hero, cards
│   ├── components/             Composite UI many features use: PageShell, DataRenderer, Flag
│   ├── hooks/                  Generic hooks
│   ├── utils/                  Pure helpers: cn, percentOf
│   ├── api/                    HTTP client, interceptors, error types, response helpers
│   ├── query/                  TanStack Query client, keys, cache times
│   ├── data/                   Generic data access: Collection, repositories, endpoints
│   ├── progress/               Saved checklist progress (zustand)
│   ├── illustrations/          Decorative SVG components
│   └── types/                  The few app-wide types (Region)
├── core/                       App-wide wiring
│   ├── config/                 Environment: public and server-only
│   ├── container/              Composition roots: which implementation backs each contract
│   ├── layout/                 Site shell (header, footer)
│   └── providers/              App-wide React providers (theme, query, URL state)
├── infrastructure/             Repository implementations: bundled data (mock) and REST
├── content/                    Bundled content and UI copy, grouped by domain
│   ├── text/                   UI copy
│   └── roadmap/ countries/ documents/ faqs/ professors/ scholarships/ site/
├── public/                     Static files served as-is
├── docs/                       This document
├── scripts/                    Repository checks (see "Checks") and the responsive audit
├── .env.example                Every environment variable, documented
└── eslint.config.mjs · next.config.ts · tsconfig.json · package.json
```

Dependencies point one way:
`app` → `modules` → `shared` · `core` wires `modules` to `infrastructure` · `infrastructure` implements contracts that `modules` own.
`shared/` and `core/config` never import a module or the site layout; ESLint fails if they do.

### Module anatomy

A module holds everything about one feature. A folder is created when its first file needs it, never empty.

**Depth rule: a file is at most `modules/<feature>/<folder>/<file>`. Folders never contain folders.**
When a module has a lot of UI, each kind of UI gets its own folder beside the layers (for example `modules/directory/cards/`,
`modules/directory/lists/`, `modules/roadmap/widgets/`) instead of a second level under `components/`.
To find a file, look for the folder named after what it is: a card, a list, a detail page, a section, a filter.

```
modules/<feature>/
├── index.ts          Public API: what other modules may import
├── components/       UI that does not need a folder of its own (feature-specific)
├── <ui-folder>/      One folder per kind of UI when there is a lot of it: cards/, lists/, detail/, sections/, widgets/...
├── hooks/            One hook, one responsibility
├── store/            Browser state (zustand)
├── services/         Use cases: pure, they only know the repository contract
├── repositories/     Contracts (interfaces). Implementations live in infrastructure/
├── queries/          TanStack Query definitions: key + fetcher + cache time
├── types/            Domain entities (hand-written interfaces)
├── schemas/          Zod schemas: wire format (DTO) and request params
├── dto/              DTO types, inferred from the schemas
├── mappers/          toX(dto) and toXDto(entity)
├── utils/            Pure helpers: filtering, sorting, validation, formatting
├── <logic-folder>/   A group of related pure logic with its own folder, such as directory's connections/ and lookups/
├── constants.ts      Lists and limits used by types, schemas and UI
└── data/             Records that belong to this module only
```

Extra entries beside `index.ts`, chosen by weight so a page only loads what it uses:
`server.ts` (cached server reads), `catalog.ts` (records), `contracts.ts` (types, DTOs, mappers), `cards.ts` (cards other modules reuse),
`client.ts` (search results hook). ESLint allows exactly these.

## Data flow

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

## Types and data contracts

Every module owns the types of its domain and exposes only the ones other modules need.

Flow: backend JSON -> schema validates the DTO -> mapper turns it into an entity -> hooks and components only see entities.
The built-in `/api` routes run the same mappers the other way (`toXDto`), so they send exactly what a real backend must send.
If a backend names a field differently, change that one mapper; nothing else moves. Every mapper lists every field,
so a field added on one side is a compile error.

- `modules/content`: country guides, documents, FAQs. `registry.ts` ties each collection name to its entity and DTO.
- `modules/scholarships`: the `Scholarship` entity and its DTO/mappers, exposed through `contracts.ts`.
  The directory lists scholarships as entries, so its `ScholarshipEntry` is an alias of this entity.
- `modules/directory`: entries (`types.ts`), DTOs, mappers, and `api/resources.ts`, which pairs each directory type with its schema and mappers.
- `modules/search`: `SearchResult` / `SearchPage` entities, `SearchResponseDto`, `mappers/searchMapper.ts`.
- `modules/roadmap`, `professors`, `scholarships`: entities for their content (`types/`).
- View models stay separate from DTOs: `library/utils/entryView.ts` turns an `EntryResult` into the `EntryView` the saved list shows.
- `shared/types/region.ts` and `shared/api/types.ts` are the only shared types (a region, a paginated response, an API error body).
  Anything with business meaning belongs in a module.
- UI copy typed next to its file in `content/` (page copy, hero text) stays there: those shapes describe static text, not domain entities.

## Module boundaries

Enforced by ESLint (`eslint.config.mjs`):

- Between modules, import `@/modules/<name>` (or one of its listed entries), never inner files.
- Route files (`app/**`) may import a component file directly from a module's UI folders (`components/` and the folders listed as `uiFolders` in `eslint.config.mjs`, such as `cards/` or `lists/`): a page then loads only what it renders.
- `core/`, `infrastructure/`, `app/api` and tests may reach inside a module, because they implement its contracts.
- A file re-exported through an `index.ts` that uses client-only code (stores, hooks) must start with `"use client"`.

## Keeping bundles small

Measured with `next analyze`: a plain page used to ship ~945 KB of JavaScript (raw) because the header pulled in the whole directory.

- **Entries are split by weight** (see "Module anatomy"). Import the lightest one that has what you need.
- **Barrels must not mix data and client components.** A server page that imports a barrel re-exporting `"use client"` files
  puts all of them in that page's client manifest, rendered or not. Bundlers also cannot drop unused re-exports of modules
  that run code at load time (the data files do).
- **Heavy, rarely-used UI loads on demand.** The search dialog is a `next/dynamic` import opened by the header button or Ctrl/Cmd+K.
- **Shared UI lives in `shared/`.** `Flag` and `ProgressBadge` are used by several features, so they live in no single one of them.

## Connecting a backend

1. Set `NEXT_PUBLIC_API_BASE_URL` (browser) and `API_BASE_URL` (server), and `API_TOKEN` if it needs a bearer token. See `.env.example`.
2. Make the backend return the JSON that the mappers expect (the DTO schemas are in each module's `schemas/`):
   - `GET /api/content/{country-guides|documents|faqs}` -> `Dto[]`, and `/{id}` -> `Dto` (404 when missing)
   - `GET /api/scholarships?q&country&level&region&sort&page&pageSize` -> `{ items, total, page, pageSize, pageCount }`
   - `GET /api/scholarships/featured?limit`, `GET /api/scholarships/{slug}`
   - `GET /api/directory/{type}` -> `Dto[]`, `GET /api/directory/{type}/{slug}` -> `{ type, slug, entry, related }`
   - `GET /api/search?q&page` -> `{ query, total, items, nextPage }`
   - errors: `{ "error": { "status": 404, "message": "..." } }`
3. Different paths? Change them only in `shared/data/endpoints.ts`.
4. Different field names? Change the module's mapper. Schemas keep validating the result.
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

| Command | Fails when |
| :--- | :--- |
| `npx tsc --noEmit` | A type error |
| `npx eslint .` | A lint error or a broken module boundary |
| `npm test` | A test fails (node:test through tsx) |
| `npm run check:cycles` | Files import each other in a loop |
| `npm run check:unused` | A file is unreachable from a route or a module's `index.ts` |
| `npm run check:types` | An exported type nothing references (uses the compiler, so a word in a string does not count) |
| `npm run check:data` | Directory data has duplicate slugs, bad links or broken references |
| `npm run build` | The production build fails |
