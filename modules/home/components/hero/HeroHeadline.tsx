import { RotatingWord } from "./RotatingWord";

export function HeroHeadline() {
  return (
    <div className="space-y-6">
      <p className="inline-flex items-center gap-2 bg-indigo-600/10 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-indigo-300">
        <span className="relative flex h-2 w-2">
          <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
        </span>
        Free guide · No sign-up
      </p>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] text-white">
        Your path to a fully funded <RotatingWord />
      </h1>
      <p className="max-w-xl text-lg text-slate-300 font-sans font-normal">
        Six clear steps, ten ready guides, and a real directory of countries, universities, scholarships and professors.
      </p>
    </div>
  );
}
