import type { Metadata } from "next";
import { ProfessorOutreachView } from "@/components/professors/ProfessorOutreachView";
import { professorsMetadata } from "@/data/metadata";
import { professorsHub } from "@/data/text/hubs";
import { HubHeader } from "@/shared/components/HubHeader";

export const metadata: Metadata = professorsMetadata;

export default function ProfessorsPage() {
  return (
    <main className="min-h-screen bg-canvas-base py-12 text-slate-100 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HubHeader hub={professorsHub} />
        <ProfessorOutreachView />
      </div>
    </main>
  );
}
