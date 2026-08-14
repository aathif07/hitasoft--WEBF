"use client";

import { useEffect, useRef } from "react";

export function ScrollRevealHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateReveal = () => {
      frame = 0;

      if (reducedMotion.matches) {
        heading.style.setProperty("--impact-reveal", "1");
        return;
      }

      const { top } = heading.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.92;
      const finish = viewportHeight * 0.3;
      const progress = Math.min(1, Math.max(0, (start - top) / (start - finish)));

      heading.style.setProperty("--impact-reveal", progress.toFixed(3));
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
      <span className="impact-reveal-copy">
        We help ambitious companies turn complex technology into{" "}
        <span className="impact-reveal-accent">clear, useful, and lasting products.</span>
      </span>
    </h2>
  );
}
