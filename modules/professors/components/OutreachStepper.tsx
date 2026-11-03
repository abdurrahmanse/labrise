"use client";

import { professorOutreachWorkflow } from "@/data/professorsData";
import { professorsHubText as t } from "@/data/text/professorsHub";
import { AccordionStep } from "@/shared/components/AccordionStep";
import { Body } from "@/shared/components/Text";
import { ProgressPanel } from "@/shared/components/ProgressPanel";
import { useProgress } from "@/shared/progress/useProgress";
import { useOutreachProgress } from "../store/useOutreachProgress";

const IDS = professorOutreachWorkflow.map((s) => s.stepNumber);

export function OutreachStepper() {
  const { isDone, toggle, done, total, percent, reset } = useProgress(useOutreachProgress, IDS);

  return (
    <div className="space-y-4">
      <ProgressPanel label={t.workflow.title} summary={t.workflow.progress(done, total)} percent={percent} onReset={() => reset(true)} canReset={done > 0} note={t.workflow.saved} />
      <ol className="space-y-3">
        {professorOutreachWorkflow.map((step) => (
          <AccordionStep key={step.stepNumber} number={step.stepNumber} title={step.title} summary={step.shortDesc} done={isDone(step.stepNumber)} onToggle={() => toggle(step.stepNumber)} toggleLabel={isDone(step.stepNumber) ? t.workflow.markUndone : t.workflow.markDone}>
            <Body tone="strong">{step.detailedProtocol}</Body>
          </AccordionStep>
        ))}
      </ol>
    </div>
  );
}
