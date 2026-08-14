"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Logo {
  src?: string;
  alt: string;
  gradient: { from: string; via: string; to: string };
}

interface MarqueeLogoScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  logos: Logo[];
  speed?: "normal" | "slow" | "fast";
}

const MarqueeLogoScroller = React.forwardRef<HTMLDivElement, MarqueeLogoScrollerProps>(
  ({ title, description, logos, speed = "normal", className, ...props }, ref) => {
    const animationDuration = { normal: "34s", slow: "64s", fast: "12s" }[speed];

    return (
      <section ref={ref} aria-label={title} className={cn("marquee-logo-scroller", className)} {...props}>
        <div className="marquee-logo-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="marquee-logo-window">
          <div className="marquee-logo-track" style={{ animationDuration }}>
            {[...logos, ...logos].map((logo, index) => {
              const duplicate = index >= logos.length;
              const gradientStyle = {
                "--logo-from": logo.gradient.from,
                "--logo-via": logo.gradient.via,
                "--logo-to": logo.gradient.to,
              } as React.CSSProperties;

              return (
                <div
                  key={`${logo.alt}-${index}`}
                  className={cn("marquee-logo-item", duplicate && "marquee-logo-copy")}
                  style={gradientStyle}
                  aria-hidden={duplicate || undefined}
                >
                  <span className="marquee-logo-index" aria-hidden="true">
                    {String((index % logos.length) + 1).padStart(2, "0")}
                  </span>
                  {logo.src ? <img src={logo.src} alt={logo.alt} /> : <strong>{logo.alt}</strong>}
                  <span className="marquee-logo-arrow" aria-hidden="true">↗</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  },
);

MarqueeLogoScroller.displayName = "MarqueeLogoScroller";

export { MarqueeLogoScroller };
export type { Logo, MarqueeLogoScrollerProps };
