"use client";

import { useEffect, useRef } from "react";

const words = [
  { text: "We", accent: false },
  { text: "help", accent: false },
  { text: "ambitious", accent: false },
  { text: "companies", accent: false },
  { text: "turn", accent: false },
  { text: "complex", accent: false },
  { text: "technology", accent: false },
  { text: "into", accent: false },
  { text: "clear,", accent: true },
  { text: "useful,", accent: true },
  { text: "and", accent: true },
  { text: "lasting", accent: true },
  { text: "products.", accent: true },
];

export function ScrollRevealHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wordElements = Array.from(
      heading.querySelectorAll<HTMLElement>(".impact-reveal-word-copy"),
    );
    let frame = 0;

    const updateReveal = () => {
      frame = 0;

      if (reducedMotion.matches) {
        wordElements.forEach((word) => word.style.setProperty("--word-reveal", "1"));
        return;
      }

      const { top } = heading.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.92;
      const finish = viewportHeight * 0.3;
      const progress = Math.min(1, Math.max(0, (start - top) / (start - finish)));

      wordElements.forEach((word, index) => {
        const staggerStart = (index / Math.max(1, wordElements.length - 1)) * 0.64;
        const wordProgress = Math.min(1, Math.max(0, (progress - staggerStart) / 0.36));
        word.style.setProperty("--word-reveal", wordProgress.toFixed(3));
      });
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateReveal);
    };

    heading.dataset.scrollReveal = "ready";
    updateReveal();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <h2 id="impact-title" ref={headingRef}>
      {words.map((word, index) => (
        <span className="impact-reveal-slot" key={`${word.text}-${index}`}>
          <span className={`impact-reveal-word${word.accent ? " impact-reveal-word--accent" : ""}`}>
            <span className="impact-reveal-word-copy">{word.text}</span>
          </span>{index < words.length - 1 ? " " : null}
        </span>
      ))}
    </h2>
  );
}
