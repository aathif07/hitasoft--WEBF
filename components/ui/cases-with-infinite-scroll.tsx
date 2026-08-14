"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

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

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => { api.off("select", onSelect); };
  }, [api]);

  useEffect(() => {
    if (!api || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => api.scrollNext(), 4200);
    return () => window.clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full" aria-label="Selected portfolio case studies">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="items-stretch">
          {portfolioCases.map((item) => (
            <CarouselItem className="basis-[92%] sm:basis-[72%] lg:basis-[48%] xl:basis-[43%]" key={item.number}>
              <Card className={`case-study-card case-tone-${item.tone}`}>
                <div className="case-study-visual">
                  <div className="case-study-meta"><span>{item.number}</span><small>{item.category}</small></div>
                  <div className="case-study-art" aria-hidden="true"><i /><i /><i /><b>{item.metric}</b></div>
                </div>
                <div className="case-study-body">
                  <p className="case-study-kicker">Selected system</p>
                  <h3>{item.title}</h3>
                  <p className="case-study-description">{item.description}</p>
                  <div className="case-study-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="case-study-result"><div><small>Measured outcome</small><strong>{item.metric}</strong><span>{item.outcome}</span></div><a href="mailto:hello@hitasoft.com" aria-label={`Discuss the ${item.title} case study`}>View case <ArrowUpRight /></a></div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="case-study-controls">
        <span>{String(current + 1).padStart(2, "0")} / {String(portfolioCases.length).padStart(2, "0")}</span>
        <small>Drag or use arrow keys</small>
        <div><button type="button" onClick={() => api?.scrollPrev()} aria-label="Previous case study"><ArrowLeft /></button><button type="button" onClick={() => api?.scrollNext()} aria-label="Next case study"><ArrowRight /></button></div>
      </div>
    </div>
  );
}

export { Case };
