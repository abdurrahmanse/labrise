import type { Metadata } from "next";
import { ScholarshipFinderView } from "@/components/scholarships/ScholarshipFinderView";
import { scholarshipsMetadata } from "@/data/metadata";
import { scholarshipsHub } from "@/data/text/hubs";
import { HubHeader } from "@/shared/components/HubHeader";

export const metadata: Metadata = scholarshipsMetadata;

export default function ScholarshipsPage() {
  return (
    <main className="min-h-screen bg-canvas-base py-12 text-slate-100 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HubHeader hub={scholarshipsHub} />
        <ScholarshipFinderView />
      </div>
    </main>
  );
}
