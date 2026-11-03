interface HeroBackdropProps {
  spotlight: string;
  orbLeft: string;
  orbRight: string;
}

const GRID_MASK = "radial-gradient(ellipse 65% 55% at 50% 20%, #000 30%, transparent 85%)";

/** Decorative layers behind the hero: horizon line, spotlight, grid and glow orbs. Carries no content. */
export function HeroBackdrop({ spotlight, orbLeft, orbRight }: HeroBackdropProps) {
  return (
    <>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[500px] pointer-events-none" style={{ background: spotlight }} />
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          WebkitMaskImage: GRID_MASK,
          maskImage: GRID_MASK
        }}
      />
      <div className={`absolute top-1/4 -left-16 w-80 sm:w-[420px] h-80 sm:h-[420px] ${orbLeft} blur-[100px] pointer-events-none rounded-full`} />
      <div className={`absolute top-8 -right-16 w-96 sm:w-[480px] h-96 sm:h-[480px] ${orbRight} blur-[110px] pointer-events-none rounded-full`} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(650px,90vw)] h-[220px] bg-cyan-400/10 blur-[85px] pointer-events-none rounded-full" />
    </>
  );
}
