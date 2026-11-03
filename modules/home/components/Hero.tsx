import { FlagMarquee } from "./hero/FlagMarquee";
import { HeroActions } from "./hero/HeroActions";
import { HeroHeadline } from "./hero/HeroHeadline";
import { HeroStage } from "./hero/HeroStage";
import { HeroStats } from "./hero/HeroStats";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent)] pointer-events-none" />
      <div className="relative mx-auto grid grid-cols-1 max-w-7xl gap-14 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
        <div className="space-y-8">
          <HeroHeadline />
          <HeroActions />
          <HeroStats />
        </div>
        <HeroStage />
      </div>
      <FlagMarquee />
    </section>
  );
}
