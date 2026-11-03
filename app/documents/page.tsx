import type { Metadata } from "next";
import { DocumentsGuideView } from "@/components/documents/DocumentsGuideView";
import { documentsMetadata } from "@/data/metadata";
import { documentsHub } from "@/data/text/hubs";
import { HubHeader } from "@/shared/components/HubHeader";

export const metadata: Metadata = documentsMetadata;

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-canvas-base py-12 text-slate-100 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HubHeader hub={documentsHub} />
        <DocumentsGuideView />
      </div>
    </main>
  );
}
