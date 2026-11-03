import { GuideExample } from "./GuideExample";
import { GuideIntroCards } from "./GuideIntroCards";
import { GuideMistakes } from "./GuideMistakes";
import { GuideSections } from "./GuideSections";
import { GuideSidebar } from "./GuideSidebar";
import type { GuideDetail } from "../types";
import type { GuideTopic } from "../data/topics";

interface GuideBodyProps {
  guideId: string;
  detail: GuideDetail;
  related: GuideTopic[];
}

/** Two columns: the guide content on the left, checklist and links on the right. */
export function GuideBody({ guideId, detail, related }: GuideBodyProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div className="space-y-10 min-w-0">
        <GuideIntroCards why={detail.why} timeline={detail.timeline} />
        <GuideSections sections={detail.sections} />
        {detail.example && <GuideExample label={detail.example.label} text={detail.example.text} />}
        <GuideMistakes mistakes={detail.mistakes} />
      </div>
      <GuideSidebar guideId={guideId} detail={detail} related={related} />
    </div>
  );
}
