# Scholarship Roadmap

A step-by-step guide for students who want a fully funded Master's or PhD abroad. It covers the roadmap, every document and test, and a directory of countries, universities, scholarships and professors.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
| :--- | :--- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

---

## What is inside

| Area | Routes |
| :--- | :--- |
| Home | `/` |
| 6-step roadmap | `/steps` |
| Profile checklist | `/profile` |
| Guides (25 topics, grouped) | `/guides`, `/guides/[id]` |
| Directory | `/directory`, `/directory/[type]`, `/directory/[type]/[slug]` where `type` is `countries`, `universities`, `scholarships` or `professors` |
| Common problems | `/problems` |
| Older detailed pages | `/roadmap`, `/countries`, `/scholarships`, `/professors`, `/documents`, `/faqs` |
| JSON API | `/api/directory/[type]` |
| SEO | `/sitemap.xml`, `/robots.txt`, `/opengraph-image` |

Every list links to a detail page, and every detail page links onward (country to universities to professors, guide to next guide).

---

## Tech stack

- **Next.js 16** (App Router), **React 19**, **TypeScript**
- **Tailwind CSS 4**, **shadcn/ui-style components** (`cva`, `cn`, Radix `Slot`)
- **TanStack Query**: directory lists render from bundled data first, then refresh from `/api/directory/[type]`
- **TanStack Table**: sortable directory tables
- **Zustand**: remembered region filter and guide checklists (persisted in the browser)
- **Zod**: validates the API type and payload
- **next-themes**: light (default) and dark theme with a toggle in the header
- **schema-dts**: typed JSON-LD (HowTo, BreadcrumbList, CollegeOrUniversity, Person, WebSite)
- **lucide-react** icons

---

## Folder structure

New code is a modular monolith: each feature owns its data, components, hooks and store.

```text
app/                     routes, API handler, sitemap, robots, OG image
modules/
  directory/             countries, universities, scholarships, professors
    data/  lib/  api/  hooks/  store/  components/ (columns/, detail/)
  guides/                25 guides: data/details/<id>.ts, components, store
  roadmap/               steps, profile checklist, common problems
  home/                  hero and the two home sections
  seo/                   buildMetadata, JsonLd, schema builders
  theme/                 ThemeProvider, ThemeToggle
shared/                  PageShell, Block, Facts, Chips, StepList, providers, hooks
components/              older pages and the header/footer (not yet migrated)
data/                    older page data
lib/utils.ts             cn() helper
```

Each file does one small job. To add a guide, create `modules/guides/data/details/<id>.ts`, register it in `details/index.ts` and `data/topics.ts`, and add its id to `data/groups.ts`.

---

## Design system

Minimalism, brutalism and glassmorphism, with an academic palette and the **Rajdhani** font (unchanged).

- **Minimal:** quiet navy-tinted neutrals, one scholarly blue accent and a small gold highlight. Lines are kept to faint hairlines.
- **Brutalist:** square corners and hard, flat offset shadows.
- **Glass:** frosted translucent surfaces (`backdrop-blur`) over soft colour washes.
- **Type scale:** one body size for all paragraph and detail text, one label size, and separate card and page title sizes. They are set as CSS variables in `app/globals.css` (`--text-body`, `--text-label`, `--text-card-title`).
- **Theming:** the dark palette is the base. `.light` swaps the neutral scale and overlays so utilities flip without component changes.

---

## Data policy

- Professor emails are included **only** when an official university or institute page (or its directory entry) lists them. Others are left empty and link to a search for the official page. Add one with `email: "..."` in `modules/directory/data/professors.ts`.
- People move. Professors who were retired, on leave or whose affiliation was unclear were removed, and `Richard Zemel` is listed at Columbia University.
- Deadlines, stipends, fees and scholarship terms are typical ranges and change every cycle. Each page tells the reader to confirm on the official source.
- Last email verification pass: November 2026.

---

## License

[MIT](LICENSE)
