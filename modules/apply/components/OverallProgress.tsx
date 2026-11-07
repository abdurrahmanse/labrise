"use client";

import { ArrowRight } from "lucide-react";
import { applyHubText as t } from "@/content/text/apply";
import { Button } from "@/shared/ui/Button";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { useProgress } from "@/shared/progress/useProgress";
import { applyTracks } from "../data/tracks";
import { stepKeys, useApplyProgress } from "../store/useApplyProgress";

const allKeys = applyTracks.flatMap((track) => stepKeys(track.id, track.steps.length));

/** Progress over both routes at once, with a button back to the route the student started. */
export function OverallProgress() {
  const { done, total, percent, isDone } = useProgress(useApplyProgress, allKeys);
  const started = applyTracks.find((track) => stepKeys(track.id, track.steps.length).some(isDone));

  return (
    <div className="space-y-4">
      <ProgressPanel bare label={t.overall.title} summary={t.done(done, total)} percent={percent} note={t.overall.saved} />
      {started && done > 0 && (
        <Button href={`/apply/${started.id}`} rightIcon={<ArrowRight className="h-4 w-4" aria-hidden />}>
          {t.overall.resume(started.title)}
        </Button>
      )}
    </div>
  );
}
