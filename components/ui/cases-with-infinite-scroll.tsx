"use client";

import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Card } from "./card";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "./carousel";

const portfolioCases = [
  { number: "01", category: "Enterprise AI · Operations", title: "AI operations platform", description: "One intelligent operating layer for signals, incidents, decisions, and response.", metric: "42%", outcome: "faster incident resolution", tone: "sky", tags: ["Signal orchestration", "Incident automation"] },
  { number: "02", category: "Retail · Intelligence", title: "Commerce intelligence engine", description: "Personalized decisions connected across campaigns, products, and customer moments.", metric: "3.4×", outcome: "faster campaign activation", tone: "blue", tags: ["Personalization", "Campaign intelligence"] },
  { number: "03", category: "Healthcare · Workflow", title: "Clinical workflow copilot", description: "Trusted assistance designed around care teams, patient context, and compliance.", metric: "68%", outcome: "less administrative handling", tone: "cyan", tags: ["Clinical workflows", "Responsible AI"] },
  { number: "04", category: "Logistics · Prediction", title: "Supply-chain control tower", description: "Predictive visibility for inventory, routes, exceptions, and operational risk.", metric: "31%", outcome: "fewer critical exceptions", tone: "indigo", tags: ["Predictive visibility", "Exception handling"] },
  { number: "05", category: "Finance · Automation", title: "Intelligent document operations", description: "Secure extraction, review, and decision workflows for regulated financial teams.", metric: "7.2×", outcome: "faster document review", tone: "violet", tags: ["Document intelligence", "Human review"] },
  { number: "06", category: "Manufacturing · Vision", title: "Visual quality intelligence", description: "Real-time inspection and root-cause signals integrated with production systems.", metric: "54%", outcome: "lower inspection effort", tone: "green", tags: ["Computer vision", "Quality operations"] },
];

/** Counts the metric up the first time its slide becomes the active one. */
function countUp(node: HTMLElement, value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return;

  const target = Number.parseFloat(match[1]);
  const decimals = (match[1].split(".")[1] ?? "").length;
  const suffix = match[2];
  const start = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - start) / 900);
    const eased = 1 - Math.pow(1 - t, 3);
    node.textContent = (target * eased).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const counted = useRef(new Set<number>());

  /* Slides recede as they leave the centre — driven by Embla's scroll
     progress rather than hover, so drag and autoplay both feel the same. */
  const tweenSlides = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return;
    const progress = carouselApi.scrollProgress();
    const snaps = carouselApi.scrollSnapList();

    carouselApi.slideNodes().forEach((node, index) => {
      let diff = snaps[index] - progress;

      try {
        const engine = carouselApi.internalEngine();
        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (index !== loopItem.index || target === 0) return;
            diff = target < 0 ? snaps[index] - (1 + progress) : snaps[index] + (1 - progress);
          });
        }
      } catch {
        /* Older engine shape — the un-looped diff is still a good approximation. */
      }

      const t = Math.max(0, Math.min(1, 1 - Math.abs(diff) * 2.4));
      node.style.setProperty("--t", t.toFixed(3));
    });
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    const onScroll = () => tweenSlides(api);

    onSelect();
    onScroll();
    api.on("select", onSelect);
    api.on("scroll", onScroll);
    api.on("reInit", onScroll);

    return () => {
      api.off("select", onSelect);
      api.off("scroll", onScroll);
      api.off("reInit", onScroll);
    };
  }, [api, tweenSlides]);

  /* Metric count-up, once per card. */
  useEffect(() => {
    if (!api || counted.current.has(current)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const node = api.slideNodes()[current]?.querySelector<HTMLElement>(".case-study-art b");
    if (!node) return;

    counted.current.add(current);
    countUp(node, portfolioCases[current % portfolioCases.length].metric);
  }, [api, current]);

  /* Autoplay pauses on hover, on focus, and while the tab is hidden. */
  useEffect(() => {
    if (!api || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      if (!document.hidden) api.scrollNext();
    }, 4200);

    return () => window.clearTimeout(timer);
  }, [api, current, paused]);

  const width = 100 / portfolioCases.length;

  return (
    <div
      className="w-full"
      aria-label="Selected portfolio case studies"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="items-stretch">
          {portfolioCases.map((item) => (
            <CarouselItem className="case-slide basis-[92%] sm:basis-[72%] lg:basis-[48%] xl:basis-[43%]" key={item.number}>
              <Card className={`case-study-card case-tone-${item.tone}`} data-card>
                <div className="case-study-visual">
                  <div className="case-study-meta"><span>{item.number}</span><small>{item.category}</small></div>
                  <div className="case-study-art" aria-hidden="true"><b>{item.metric}</b></div>
                </div>
                <div className="case-study-body">
                  <p className="case-study-kicker">Selected system</p>
                  <h3>{item.title}</h3>
                  <p className="case-study-description">{item.description}</p>
                  <div className="case-study-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="case-study-result">
                    <div><small>Measured outcome</small><strong>{item.metric}</strong><span>{item.outcome}</span></div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="case-study-controls">
        <span>{String(current + 1).padStart(2, "0")} / {String(portfolioCases.length).padStart(2, "0")}</span>
        <div className="case-progress" role="presentation">
          <i style={{ "--w": `${width}%`, "--x": `${current * 100}%` } as CSSProperties} />
        </div>
        <div>
          <button type="button" onClick={() => api?.scrollPrev()} aria-label="Previous case study"><ArrowLeft /></button>
          <button type="button" onClick={() => api?.scrollNext()} aria-label="Next case study"><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
}

export { Case };
