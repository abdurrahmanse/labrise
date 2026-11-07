import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

// A page or layout must not read `params` or `searchParams` before its first <Suspense> boundary.
// Next.js flags that in development ("URL data outside of Suspense"). Pages use <WithParams> instead.
// generateMetadata may await params; the check only looks at the default export.
const files = execSync("git ls-files -co --exclude-standard app", { encoding: "utf8" })
  .split("\n")
  .filter((f) => /\/(page|layout)\.tsx$/.test(f));

const problems: string[] = [];
for (const file of files) {
  const source = readFileSync(file, "utf8");
  const start = source.search(/export\s+default\s+async\s+function/);
  if (start === -1) continue;
  const body = source.slice(start);
  if (/await\s+(params|searchParams)\b|await\s+props\.(params|searchParams)\b/.test(body)) problems.push(file);
}

if (problems.length) {
  console.error("These routes read URL data outside a <Suspense> boundary. Wrap them in <WithParams>:");
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`Route check passed (${files.length} pages and layouts).`);
