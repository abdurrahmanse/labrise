// Prints which funders the site shows for each country, so wrong links are easy to spot. Run: npx tsx scripts/audit-funders.mts
import { countries, providers } from "../modules/directory/data/index";
import { fundersOfCountry } from "../modules/directory/utils/connections";
for (const c of countries) {
  const f = fundersOfCountry(c.country);
  console.log(`\n== ${c.country} (${f.length})`);
  for (const p of f) console.log(`   ${p.country === c.country ? " " : "~"} ${p.name}  [${p.country}; ${p.kind}]`);
}
console.log("\nTotal providers:", providers.length);
