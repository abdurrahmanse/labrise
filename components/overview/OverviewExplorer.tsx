"use client";

import React, { useMemo, useState } from "react";
import { Download, ExternalLink, Search } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";
import { TabsContainer, TabItem } from "@/components/ui/Tabs";
import Link from "next/link";
import {
  countries,
  countrySlug,
  professors,
  professorSlug,
  universities,
  universitySlug
} from "@/data/overviewData";

export type ExplorerMode = "countries" | "universities" | "professors";
type Mode = ExplorerMode;

const REGIONS = ["All", "Europe", "North America", "Asia", "Oceania", "Middle East"];

const officialSearch = (query: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(query)}`;

// Professors carry no region of their own, so derive it from the matching university.
const regionOfProfessor = (university: string) =>
  universities.find((u) => university.includes(u.name.split(" / ")[0]))?.region;

function downloadTracker() {
  const header = ["Name", "University", "Country", "Group", "Official email", "Date sent", "Reply", "Follow-up"];
  const rows = professors.map((p) => [p.name, p.university, p.country, p.group, "", "", "", ""]);
  const csv = [header, ...rows]
    .map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "professor-outreach-tracker.csv";
  a.click();
  URL.revokeObjectURL(url);
}

export function OverviewExplorer({ fixedMode }: { fixedMode: ExplorerMode }) {
  const mode: Mode = fixedMode;
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filteredUniversities = useMemo(
    () =>
      universities.filter(
        (u) =>
          (region === "All" || u.region === region) &&
          (!q || `${u.name} ${u.country} ${u.funding}`.toLowerCase().includes(q))
      ),
    [region, q]
  );

  const filteredProfessors = useMemo(
    () =>
      professors.filter(
        (p) =>
          (region === "All" || regionOfProfessor(p.university) === region) &&
          (!q || `${p.name} ${p.university} ${p.country} ${p.group}`.toLowerCase().includes(q))
      ),
    [region, q]
  );

  const filteredCountries = useMemo(
    () =>
      countries.filter(
        (c) =>
          (region === "All" || c.region === region) &&
          (!q || `${c.country} ${c.routes} ${c.funding}`.toLowerCase().includes(q))
      ),
    [region, q]
  );

  const count =
    mode === "countries"
      ? filteredCountries.length
      : mode === "universities"
        ? filteredUniversities.length
        : filteredProfessors.length;

  return (
    <div className="space-y-5">
      <div className="flex">
        <SearchInput
          className="w-full lg:max-w-sm"
          value={query}
          onChange={setQuery}
          placeholder={mode === "professors" ? "Search name, group, country…" : "Search university, country, funding…"}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <TabsContainer variant="pills" size="xs">
          {REGIONS.map((r) => (
            <TabItem key={r} active={region === r} onClick={() => setRegion(r)}>
              {r}
            </TabItem>
          ))}
        </TabsContainer>
        <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
          <span>{count} shown</span>
          {mode === "professors" && (
            <button
              type="button"
              onClick={downloadTracker}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-white/60 text-slate-100 hover:bg-white hover:text-black cursor-pointer uppercase tracking-wider"
            >
              <Download className="w-3.5 h-3.5" /> Tracker CSV
            </button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto border-2 border-white/30 bg-[#121214]/60 backdrop-blur-xl">
        {mode === "countries" ? (
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.06] text-slate-300 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Funded routes</th>
                <th className="px-4 py-3">What you get</th>
                <th className="px-4 py-3">Professor first?</th>
                <th className="px-4 py-3">App fee</th>
              </tr>
            </thead>
            <tbody>
              {filteredCountries.map((c) => (
                <tr key={c.country} className="border-t border-white/10 hover:bg-white/[0.04]">
                  <td className="px-4 py-3 font-bold"><Link href={`/directory/countries/${countrySlug(c)}`} className="text-white hover:text-indigo-300 underline decoration-white/30 underline-offset-4">{c.country}</Link></td>
                  <td className="px-4 py-3 text-slate-300">{c.routes}</td>
                  <td className="px-4 py-3 text-slate-300">{c.funding}</td>
                  <td className="px-4 py-3 text-slate-300">{c.supervisor}</td>
                  <td className="px-4 py-3 text-slate-300">{c.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : mode === "universities" ? (
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.06] text-slate-300 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">University</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Funding</th>
                <th className="px-4 py-3">Deadline</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {filteredUniversities.map((u) => (
                <tr key={u.name} className="border-t border-white/10 hover:bg-white/[0.04]">
                  <td className="px-4 py-3 font-bold"><Link href={`/directory/universities/${universitySlug(u)}`} className="text-white hover:text-indigo-300 underline decoration-white/30 underline-offset-4">{u.name}</Link></td>
                  <td className="px-4 py-3 text-slate-300">{u.country}</td>
                  <td className="px-4 py-3 text-slate-300">{u.funding}</td>
                  <td className="px-4 py-3 text-slate-300">{u.deadline}</td>
                  <td className="px-4 py-3">
                    <a href={u.site} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-200">
                      Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.06] text-slate-300 font-mono text-xs uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">Professor</th>
                <th className="px-4 py-3">University</th>
                <th className="px-4 py-3">Country</th>
                <th className="px-4 py-3">Group</th>
                <th className="px-4 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredProfessors.map((p) => (
                <tr key={p.name} className="border-t border-white/10 hover:bg-white/[0.04]">
                  <td className="px-4 py-3 font-bold"><Link href={`/directory/professors/${professorSlug(p)}`} className="text-white hover:text-indigo-300 underline decoration-white/30 underline-offset-4">{p.name}</Link></td>
                  <td className="px-4 py-3 text-slate-300">{p.university}</td>
                  <td className="px-4 py-3 text-slate-300">{p.country}</td>
                  <td className="px-4 py-3 text-slate-300">{p.group}</td>
                  <td className="px-4 py-3">
                    {p.email ? (
                      <a href={`mailto:${p.email}`} className="text-indigo-400 hover:text-indigo-200 break-all">
                        {p.email}
                      </a>
                    ) : (
                    <a
                      href={officialSearch(`${p.name} ${p.university} faculty page email`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-200"
                    >
                      <Search className="w-3.5 h-3.5" /> Find official
                    </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {count === 0 && <p className="p-6 text-center text-slate-400">No matches. Clear the search or region filter.</p>}
      </div>
    </div>
  );
}

export default OverviewExplorer;
