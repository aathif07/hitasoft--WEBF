"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Card } from "./card";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "./carousel";

const portfolioCases = [
  { number: "01", category: "Enterprise AI · Operations", title: "AI operations platform", description: "One intelligent operating layer for signals, incidents, decisions, and response.", metric: "42%", outcome: "faster incident resolution", surface: "from-sky-500/35 via-slate-950 to-black" },
  { number: "02", category: "Retail · Intelligence", title: "Commerce intelligence engine", description: "Personalized decisions connected across campaigns, products, and customer moments.", metric: "3.4×", outcome: "faster campaign activation", surface: "from-blue-600/50 via-slate-950 to-black" },
  { number: "03", category: "Healthcare · Workflow", title: "Clinical workflow copilot", description: "Trusted assistance designed around care teams, patient context, and compliance.", metric: "68%", outcome: "less administrative handling", surface: "from-cyan-500/35 via-slate-950 to-black" },
  { number: "04", category: "Logistics · Prediction", title: "Supply-chain control tower", description: "Predictive visibility for inventory, routes, exceptions, and operational risk.", metric: "31%", outcome: "fewer critical exceptions", surface: "from-indigo-500/40 via-slate-950 to-black" },
  { number: "05", category: "Finance · Automation", title: "Intelligent document operations", description: "Secure extraction, review, and decision workflows for regulated financial teams.", metric: "7.2×", outcome: "faster document review", surface: "from-violet-500/40 via-slate-950 to-black" },
  { number: "06", category: "Manufacturing · Vision", title: "Visual quality intelligence", description: "Real-time inspection and root-cause signals integrated with production systems.", metric: "54%", outcome: "lower inspection effort", surface: "from-emerald-500/35 via-slate-950 to-black" },
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
    const timer = window.setTimeout(() => api.scrollNext(), 2600);
    return () => window.clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full" aria-label="Selected portfolio case studies">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="items-stretch">
          {portfolioCases.map((item) => (
            <CarouselItem className="basis-[88%] sm:basis-[66%] lg:basis-[44%] xl:basis-[34%]" key={item.number}>
              <Card className={`group relative min-h-[410px] overflow-hidden rounded-[28px] border-white/15 bg-gradient-to-br ${item.surface} p-7 text-white transition-transform duration-300 hover:-translate-y-1 sm:min-h-[460px] sm:p-8`}>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,.07)_1px,transparent_1px)] bg-[size:52px_52px] opacity-60" aria-hidden="true" />
                {item.number === "01" && <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,8,16,.15),rgba(2,8,16,.78)),url('/images/ai-team-collaboration.jpg')] bg-cover bg-center opacity-55" aria-hidden="true" />}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-white/10 text-[10px] font-bold">{item.number}</span>
                  <small className="text-[9px] font-bold uppercase tracking-[.16em] text-sky-100/70">{item.category}</small>
                </div>
                <div className="relative z-10 mt-28 sm:mt-36">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[.15em] text-sky-300">Selected system</p>
                  <h3 className="max-w-md text-3xl font-medium leading-[1.02] tracking-[-.045em] sm:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
                <div className="absolute bottom-7 left-7 right-7 z-10 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                  <div><b className="block text-3xl font-medium tracking-[-.04em]">{item.metric}</b><span className="text-[10px] text-slate-300">{item.outcome}</span></div>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 transition-colors group-hover:bg-white group-hover:text-slate-950"><ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mt-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">
        <span>{String(current + 1).padStart(2, "0")} / {String(portfolioCases.length).padStart(2, "0")}</span>
        <span>Drag or use arrow keys</span>
      </div>
    </div>
  );
}

export { Case };
