"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

type Props<E extends keyof JSX.IntrinsicElements = "span"> = {
  text: string;
  as?: E;
  className?: string;
  style?: React.CSSProperties;
  amplitude?: number; // px to move up
  duration?: number; // seconds for full up-and-down cycle
  stagger?: number; // seconds between character starts
  stackWords?: boolean; // render each word on its own line
} & Omit<JSX.IntrinsicElements[E], "children" | "className" | "style">;

export default function HoverBounceText<E extends keyof JSX.IntrinsicElements = "span">(
  {
    text,
    as,
    className,
    style,
    amplitude = 8,
    duration = 0.45,
    stagger = 0.02,
    stackWords = false,
    ...rest
  }: Props<E>
) {
  const Tag = (as ?? "span") as any;
  const [hovered, setHovered] = useState(false);

  const renderWord = (word: string, wordIdx: number) => {
    const chars = Array.from(word);
    return (
      <span key={wordIdx} className={stackWords ? "block" : undefined}>
        {chars.map((ch, i) => (
          <motion.span
            key={`${wordIdx}-${i}`}
            aria-hidden
            style={{ display: "inline-block" }}
            animate={hovered ? { y: [0, -amplitude, 0] } : { y: 0 }}
            transition={{
              duration,
              ease: "easeOut",
              times: [0, 0.5, 1],
              delay: hovered ? (wordIdx * chars.length + i) * stagger : 0,
            }}
          >
            {ch}
          </motion.span>
        ))}
        {!stackWords && <span> </span>}
      </span>
    );
  };

  const words = text.split(" ");

  return (
    <Tag
      {...(rest as any)}
      className={className}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      {words.map((w, idx) => renderWord(w, idx))}
    </Tag>
  );
}

