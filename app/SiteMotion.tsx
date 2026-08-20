"use client";

import { useEffect } from "react";

/**
 * One motion runtime for the whole page.
 *
 * Nothing here is required for the page to be readable — markup renders in its
 * final state and this component only opts the document in to motion
 * (`html[data-motion="on"]`) once JS is running and the visitor has not asked
 * for reduced motion. Every listener is passive and torn down on unmount.
 */
export function SiteMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const cleanups: Array<() => void> = [];

    if (reduced.matches) {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.setAttribute("data-revealed", "");
      });
      return;
    }

    root.setAttribute("data-motion", "on");
    cleanups.push(() => root.removeAttribute("data-motion"));

    /* ---------------------------------------------------------------- reveal */
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const groupCounters = new Map<Element, number>();

    revealTargets.forEach((el) => {
      const parent = el.parentElement ?? document.body;
      const index = groupCounters.get(parent) ?? 0;
      groupCounters.set(parent, index + 1);
      el.style.setProperty("--reveal-i", String(index));
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "");
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
    cleanups.push(() => revealObserver.disconnect());

    /* ------------------------------------------------------------ count-up */
    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          countObserver.unobserve(el);
          animateCount(el);
        });
      },
      { threshold: 0.6 },
    );

    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => countObserver.observe(el));
    cleanups.push(() => countObserver.disconnect());

    /* --------------------------------------------------- marquee visibility */
    const marquees = Array.from(document.querySelectorAll<HTMLElement>("[data-marquee]"));
    const marqueeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.removeAttribute("data-paused");
          else entry.target.setAttribute("data-paused", "");
        });
      },
      { threshold: 0 },
    );

    marquees.forEach((el) => marqueeObserver.observe(el));
    cleanups.push(() => marqueeObserver.disconnect());

    /* -------------------------------------------------- pointer card glow */
    if (finePointer.matches) {
      let pointerFrame = 0;
      let pending: { el: HTMLElement; x: number; y: number } | null = null;

      const applyPointer = () => {
        pointerFrame = 0;
        if (!pending) return;
        const { el, x, y } = pending;
        el.style.setProperty("--mx", `${x}px`);
        el.style.setProperty("--my", `${y}px`);
        pending = null;
      };

      const onPointerMove = (event: PointerEvent) => {
        const card = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-card]");
        if (!card) return;
        const rect = card.getBoundingClientRect();
        pending = { el: card, x: event.clientX - rect.left, y: event.clientY - rect.top };
        if (!pointerFrame) pointerFrame = requestAnimationFrame(applyPointer);
      };

      document.addEventListener("pointermove", onPointerMove, { passive: true });
      cleanups.push(() => {
        document.removeEventListener("pointermove", onPointerMove);
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
      });
    }

    /* --------------------------------------- scroll: header, hero, progress */
    const hero = document.querySelector<HTMLElement>(".hero");
    const wordmark = document.querySelector<HTMLElement>(".footer-wordmark");
    const progressTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));

    let scrollFrame = 0;
    let pointerX = 0;
    let pointerY = 0;
    let easedX = 0;
    let easedY = 0;
    let heroFrame = 0;

    const onScroll = () => {
      scrollFrame = 0;
      const y = window.scrollY;

      if (y > 40) root.setAttribute("data-scrolled", "");
      else root.removeAttribute("data-scrolled");

      if (hero) {
        const heroHeight = hero.offsetHeight || 1;
        hero.style.setProperty("--scroll", clamp(y / heroHeight, 0, 1).toFixed(3));
      }

      progressTargets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const span = rect.height - window.innerHeight;
        const progress = span > 0 ? clamp(-rect.top / span, 0, 1) : clamp(1 - rect.top / window.innerHeight, 0, 1);
        el.style.setProperty("--progress", progress.toFixed(3));
      });

      if (wordmark) {
        const rect = wordmark.getBoundingClientRect();
        const seen = clamp(1 - rect.top / window.innerHeight, 0, 1);
        wordmark.style.setProperty("--drift", seen.toFixed(3));
      }
    };

    const requestScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(onScroll);
    };

    onScroll();
    window.addEventListener("scroll", requestScroll, { passive: true });
    window.addEventListener("resize", requestScroll);
    cleanups.push(() => {
      window.removeEventListener("scroll", requestScroll);
      window.removeEventListener("resize", requestScroll);
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    });

    /* ------------------------------------------------ hero pointer parallax */
    if (hero && finePointer.matches) {
      const settle = () => {
        heroFrame = 0;
        easedX += (pointerX - easedX) * 0.08;
        easedY += (pointerY - easedY) * 0.08;
        hero.style.setProperty("--px", easedX.toFixed(4));
        hero.style.setProperty("--py", easedY.toFixed(4));
        if (Math.abs(pointerX - easedX) > 0.001 || Math.abs(pointerY - easedY) > 0.001) {
          heroFrame = requestAnimationFrame(settle);
        }
      };

      const onHeroPointer = (event: PointerEvent) => {
        const rect = hero.getBoundingClientRect();
        pointerX = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5) * 2;
        pointerY = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5) * 2;
        if (!heroFrame) heroFrame = requestAnimationFrame(settle);
      };

      const onHeroLeave = () => {
        pointerX = 0;
        pointerY = 0;
        if (!heroFrame) heroFrame = requestAnimationFrame(settle);
      };

      hero.addEventListener("pointermove", onHeroPointer, { passive: true });
      hero.addEventListener("pointerleave", onHeroLeave, { passive: true });
      cleanups.push(() => {
        hero.removeEventListener("pointermove", onHeroPointer);
        hero.removeEventListener("pointerleave", onHeroLeave);
        if (heroFrame) cancelAnimationFrame(heroFrame);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/** Counts an element's numeric prefix up from zero, keeping its suffix intact. */
function animateCount(el: HTMLElement) {
  const raw = el.dataset.count ?? el.textContent ?? "";
  const match = raw.match(/^([\d.]+)([\s\S]*)$/);
  if (!match) return;

  const target = Number.parseFloat(match[1]);
  if (!Number.isFinite(target)) return;

  const decimals = (match[1].split(".")[1] ?? "").length;
  const pad = match[1].startsWith("0") ? match[1].split(".")[0].length : 0;
  const suffix = match[2];
  const duration = 1100;
  const start = performance.now();

  const step = (now: number) => {
    const t = clamp((now - start) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    const value = (target * eased).toFixed(decimals);
    el.textContent = (pad ? value.padStart(pad, "0") : value) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}
