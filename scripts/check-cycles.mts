import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, normalize } from "node:path";

// Finds import cycles between source files (type-only imports are ignored: they vanish at build time).
const roots = "app shared core infrastructure modules content";
const files = execSync(`git ls-files -co --exclude-standard ${roots}`, { encoding: "utf8" }).split("\n").filter((f) => /\.tsx?$/.test(f));
const known = new Set(files);

function resolve(from: string, spec: string) {
  const base = spec.startsWith("@/") ? spec.slice(2) : spec.startsWith(".") ? normalize(`${dirname(from)}/${spec}`) : null;
  if (!base) return null;
  return [base, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`, `${base}/index.tsx`].find((c) => known.has(c) && existsSync(c)) ?? null;
}

const importRe = /(?:^|\n)\s*(?:import|export)\s+(?!type\b)[^;"]*?from\s+"([^"]+)"|(?:^|\n)\s*import\s+"([^"]+)"/g;
const graph = new Map<string, string[]>();
for (const file of files) {
  const targets = [...readFileSync(file, "utf8").matchAll(importRe)].map((m) => resolve(file, m[1] ?? m[2])).filter((t): t is string => !!t);
  graph.set(file, targets);
}

const state = new Map<string, 1 | 2>();
const stack: string[] = [];
const cycles = new Set<string>();
const visit = (node: string) => {
  state.set(node, 1);
  stack.push(node);
  for (const next of graph.get(node) ?? []) {
    if (state.get(next) === 1) cycles.add([...stack.slice(stack.indexOf(next)), next].join(" -> "));
    else if (!state.has(next)) visit(next);
  }
  stack.pop();
  state.set(node, 2);
};
for (const file of files) if (!state.has(file)) visit(file);

if (cycles.size) {
  console.error(`Found ${cycles.size} import cycle(s):\n${[...cycles].map((c) => `  ${c}`).join("\n")}`);
  process.exit(1);
}
console.log(`No import cycles in ${files.length} files.`);
