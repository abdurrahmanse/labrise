import { HeartHandshake } from "lucide-react";
import { supportPageText as t, supportPlans } from "@/content/text/support";
import { Block } from "@/shared/components/Block";
import { SupportPlanCard } from "./SupportPlanCard";

/** Section 1: the three levels of help side by side. */
export function SupportPlans() {
  return (
    <Block title={t.plans.title} icon={HeartHandshake}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {supportPlans.map((plan) => (
          <SupportPlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </Block>
  );
}
