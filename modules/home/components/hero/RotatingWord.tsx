"use client";

import { useEffect, useState } from "react";

const WORDS = ["Master's", "PhD", "Research career", "New country"];

/** Swaps the highlighted word every few seconds. */
export function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <span key={WORDS[index]} className="inline-block animate-word-in text-indigo-400">
      {WORDS[index]}
    </span>
  );
}
