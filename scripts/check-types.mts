import ts from "typescript";
import { resolve } from "node:path";

// Reports exported interfaces and type aliases that no code references, using the compiler's own symbol table
// (so a word in a string or comment does not count). Re-exports in a module's index.ts count as references:
// they are that module's declared public API.
const root = resolve(import.meta.dirname, "..");
const configPath = ts.findConfigFile(root, ts.sys.fileExists, "tsconfig.json")!;
const config = ts.getParsedCommandLineOfConfigFile(configPath, {}, { ...ts.sys, onUnRecoverableConfigFileDiagnostic: () => undefined })!;
const program = ts.createProgram(config.fileNames, config.options);
const checker = program.getTypeChecker();
const isProject = (f: ts.SourceFile) => !f.isDeclarationFile && !f.fileName.includes("node_modules") && !f.fileName.includes("/.next/");

const declared = new Map<ts.Symbol, { file: string; name: string }>();
for (const file of program.getSourceFiles().filter(isProject)) {
  for (const stmt of file.statements) {
    if ((ts.isInterfaceDeclaration(stmt) || ts.isTypeAliasDeclaration(stmt)) && stmt.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)) {
      const symbol = checker.getSymbolAtLocation(stmt.name);
      if (symbol) declared.set(symbol, { file: file.fileName.replace(`${root}/`, ""), name: stmt.name.text });
    }
  }
}

const used = new Set<ts.Symbol>();
const visit = (node: ts.Node, file: ts.SourceFile) => {
  if (ts.isIdentifier(node)) {
    let symbol = checker.getSymbolAtLocation(node);
    if (symbol && symbol.flags & ts.SymbolFlags.Alias) symbol = checker.getAliasedSymbol(symbol);
    // The declaration's own name is not a use.
    const parent = node.parent;
    const isOwnName = (ts.isInterfaceDeclaration(parent) || ts.isTypeAliasDeclaration(parent)) && parent.name === node;
    if (symbol && declared.has(symbol) && !isOwnName) used.add(symbol);
  }
  ts.forEachChild(node, (child) => visit(child, file));
};
for (const file of program.getSourceFiles().filter(isProject)) visit(file, file);

const unused = [...declared].filter(([symbol]) => !used.has(symbol)).map(([, info]) => `${info.file}: ${info.name}`).sort();
if (unused.length) {
  console.error(`${unused.length} exported type(s) nothing references:\n${unused.map((u) => `  ${u}`).join("\n")}`);
  process.exit(1);
}
console.log(`All ${declared.size} exported types are referenced.`);
