import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, normalize } from "node:path";

// Lists source files that nothing can reach. Entry points: everything under app/ (pages, layouts, routes, metadata files)
// and each module's index.ts, which is its public API for other modules even when no route imports it yet.
// Tests and scripts are not entries, so a file only a test imports is reported too.
const roots = "app components shared core infrastructure modules data lib";
const files = execSync(`git ls-files -co --exclude-standard ${roots}`, { encoding: "utf8" })
  .split("\n")
  .filter((f) => /\.tsx?$/.test(f) && !/\.test\.tsx?$/.test(f));
const known = new Set(files);

function resolve(from: string, spec: string) {
  const base = spec.startsWith("@/") ? spec.slice(2) : spec.startsWith(".") ? normalize(`${dirname(from)}/${spec}`) : null;
  if (!base) return null;
  return [base, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`, `${base}/index.tsx`].find((c) => known.has(c) && existsSync(c)) ?? null;
}

// Static imports, re-exports and dynamic import("...") calls.
const importRe = /(?:^|\n)\s*(?:import|export)\s+[^;"]*?from\s+"([^"]+)"|(?:^|\n)\s*import\s+"([^"]+)"|import\(\s*"([^"]+)"\s*\)/g;
const reached = new Set<string>();
const queue = files.filter((f) => f.startsWith("app/") || /^modules\/[^/]+\/index\.ts$/.test(f));
for (const f of queue) reached.add(f);
while (queue.length) {
  const file = queue.pop()!;
  for (const m of readFileSync(file, "utf8").matchAll(importRe)) {
    const target = resolve(file, m[1] ?? m[2] ?? m[3]);
    if (target && !reached.has(target)) {
      reached.add(target);
      queue.push(target);
    }
  }
}

const unused = files.filter((f) => !reached.has(f));
if (unused.length) {
  console.error(`${unused.length} file(s) nothing can reach:\n${unused.map((f) => `  ${f}`).join("\n")}`);
  process.exit(1);
}
console.log(`All ${files.length} files are reachable from a route or a module's public API.`);
