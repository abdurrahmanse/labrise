# FundedCS

A free roadmap to a fully funded Master's or PhD in **AI/ML research and engineering**, for Computer Science students.

---

## About

FundedCS shows Computer Science students how to win a funded research place abroad, step by step. It brings the plan, the guides and a directory of AI/ML professors, universities and funders into one simple site. It covers AI/ML research and engineering only, not other fields.

## Mission

Make funded AI/ML research study abroad clear and fair for every Computer Science student, whatever their background.

## Vision

A world where a good student never misses a funded research place because they did not know where to look or what to do next.

---

## Overview

| What | Where |
| :--- | :--- |
| 6-step roadmap | `/steps` |
| Profile checklist | `/profile` |
| How to apply | `/apply` |
| 27 guides (CV, SOP, IELTS, visa and more) | `/guides` |
| Countries, universities, AI/ML professors, funders, scholarships | `/directory` |
| Common problems and fixes | `/problems` |
| Contact and corrections | `/contact` |

**In numbers:** 38 countries, about 345 universities, about 745 professors, about 110 funders, 44 scholarships.

Every country links to its universities, professors and funders. Every entry has its own page.

## Who it is for

Computer Science students who want a funded Master's or PhD in AI/ML research or engineering abroad and need a clear path.

## Our promise

- **Real data only.** Entries come from official pages, and the links and professor affiliations are re-checked with `npm run verify:links` and `npm run verify:professors`.
- **No made-up emails.** A professor's email is shown only if an official page lists it.
- **Always check the source.** Each page shows its review date and a link to the official site.
- **Free and private.** No account. Your notes stay in your browser.

## Contact

Found a mistake or want to suggest an entry? Use the contact page or write to abdurrahmansoftw@gmail.com.

Based in Dhaka, Bangladesh.

---

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). It runs on the bundled data, with no backend needed.

## Project structure

```
app/              Routes (pages, layouts, API routes)
modules/          Features: components, hooks, types, schemas, mappers, services per feature
shared/           Feature-agnostic UI, hooks, utils, API client, query setup
core/             Config, composition roots, site layout, providers
infrastructure/   Data sources: bundled data and REST
content/          Bundled content and UI copy
```

How the pieces connect, how to plug in a backend, and the rules the linter enforces are in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

Before pushing: `npx tsc --noEmit && npx eslint . && npm test && npm run build`.

## License

[MIT](LICENSE)
