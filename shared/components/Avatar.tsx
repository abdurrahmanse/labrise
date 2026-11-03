const PALETTES = [
  ["#3a5fe0", "#7f9bff"],
  ["#805c13", "#e0b53e"],
  ["#0f766e", "#5eead4"],
  ["#7c3aed", "#c4b5fd"],
  ["#be123c", "#fda4af"],
  ["#1d4ed8", "#38bdf8"]
] as const;

const hash = (text: string) => [...text].reduce((sum, ch) => (sum * 31 + ch.charCodeAt(0)) >>> 0, 7);

const initialsOf = (name: string) => {
  const parts = name.replace(/[^\p{L}\s-]/gu, "").split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
};

interface AvatarProps {
  name: string;
  size?: number;
  square?: boolean;
}

/** Generated avatar: initials on a gradient picked from the name, so each person looks distinct. */
export function Avatar({ name, size = 56, square = false }: AvatarProps) {
  const [from, to] = PALETTES[hash(name) % PALETTES.length];

  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, background: `linear-gradient(135deg, ${from}, ${to})`, fontSize: size * 0.38 }}
      className={`flex shrink-0 items-center justify-center font-bold tracking-wide text-white ${square ? "" : "rounded-full"}`}
    >
      {initialsOf(name)}
    </span>
  );
}
