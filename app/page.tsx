"use client";

import { FormEvent, useState } from "react";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const Check = () => <span className="check" aria-hidden="true">✓</span>;

const PlayIcon = () => <span className="play-icon" aria-hidden="true">▶</span>;

const services = [
  ["01", "Website Development", "Build fast, secure, and scalable websites engineered to deliver seamless user experiences and measurable business growth."],
  ["02", "Artificial Intelligence Solutions", "Use AI-powered systems to automate processes, uncover insights, and enable better data-driven decisions."],
  ["03", "Mobile Application Development", "Design and develop high-performance mobile apps that engage users, streamline operations, and scale with your business."],
  ["04", "Cloud Infrastructure Solutions", "Deploy secure, scalable cloud environments that improve flexibility, optimize costs, and support rapid growth."],
  ["05", "Custom Software Development", "Create software tailored to your workflows—improving efficiency, automation, flexibility, and long-term productivity."],
  ["06", "Cybersecurity Services", "Safeguard your digital ecosystem with advanced security frameworks, proactive threat monitoring, and risk mitigation."],
  ["07", "Data Analytics", "Transform raw data into actionable intelligence that drives strategic planning and competitive advantage."],
  ["08", "UI/UX Design", "Craft intuitive, visually compelling interfaces that elevate user satisfaction and strengthen brand perception."],
  ["09", "Server Maintenance & Development", "Ensure maximum uptime and performance with reliable server management, monitoring, and continuous optimization."],
];

export default function Home() {
  const [mode, setMode] = useState<"demo" | "video">("demo");
  const [activeTab, setActiveTab] = useState("Software");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  function submitUrl(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(url.trim() ? "Thank you — our team will get in touch to discuss your project." : "Enter your work email to start a conversation.");
  }

  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Hitasoft home">
            <span className="brand-mark"><i /><i /><i /></span>
            <span>Hitasoft</span>
          </a>
          <div className="nav-links">
            <a href="#platform">What we do</a>
            <a href="#solutions">Services <span>⌄</span></a>
            <a href="#resources">Why Hitasoft</a>
            <a href="#pricing">Engagement</a>
          </div>
          <div className="nav-actions">
            <a className="button button-ghost nav-sales" href="mailto:hello@hitasoft.com">Talk to our team</a>
            <a className="button button-primary" href="#create">Start a project</a>
          </div>
          <a className="mobile-cta" href="#create">Start a project</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="ripple ripple-one" />
        <div className="ripple ripple-two" />
        <div className="ripple ripple-three" />
        <div className="hero-content">
          <a className="announcement" href="#resources">
            <strong>Prototype to production</strong><span /><em>Built for ambitious teams</em><Arrow />
          </a>
          <p className="eyebrow">What we do</p>
          <h1>Unlock the power of<br /><span>young innovators.</span></h1>
          <p className="hero-copy">Accelerate your journey from prototype to production. From early technical errors to production-critical challenges, Hitasoft ensures seamless execution at every stage.</p>

          <div className="mode-switch" role="group" aria-label="Choose project stage">
            <button className={mode === "demo" ? "active" : ""} onClick={() => setMode("demo")}><span>◫</span> Prototype support</button>
            <button className={mode === "video" ? "active" : ""} onClick={() => setMode("video")}><span>▷</span> Production scale</button>
          </div>

          <form className="url-form" id="create" onSubmit={submitUrl}>
            <label className="sr-only" htmlFor="product-url">Work email</label>
            <input id="product-url" type="email" value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Enter your work email" />
            <button aria-label="Start a conversation with Hitasoft" type="submit"><Arrow /></button>
          </form>
          <p className="form-note" aria-live="polite">{message || "A focused engineering team · Clear delivery from day one"}</p>

          <div className="hero-demo-wrap">
            <div className="float-card float-left">
              <span className="mini-icon">✦</span>
              <div><b>Production ready</b><small>Engineered to scale</small></div>
            </div>
            <div className="browser-frame">
              <div className="browser-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <div className="browser-address"><span>⌁</span> console.hitasoft.com/project-health</div>
                <div className="browser-more">•••</div>
              </div>
              <div className="demo-screen">
                <aside className="demo-sidebar">
                  <div className="demo-logo"><span className="brand-mark small"><i /><i /><i /></span></div>
                  <button className="side-active">⌂</button><button>▦</button><button>◫</button><button>◇</button>
                  <div className="side-bottom">⚙</div>
                </aside>
                <div className="demo-main">
                  <div className="demo-top"><div><small>Delivery / Production</small><b>Project health dashboard</b></div><button>Deploy</button></div>
                  <div className="demo-canvas">
                    <div className="canvas-head"><span>PROJECT OVERVIEW</span><button>+ Add view</button></div>
                    <h3>From prototype uncertainty<br />to production confidence.</h3>
                    <div className="mini-stats"><div><small>Release score</small><b>73/100</b><em>↑ Stable</em></div><div><small>Systems online</small><b>24</b><em>100% uptime</em></div><div><small>Delivery velocity</small><b>94%</b><em>↑ 8%</em></div></div>
                    <div className="chart-card"><div className="chart-head"><b>Infrastructure performance</b><span>Last 30 days⌄</span></div><div className="chart-bars">{[34,52,44,70,62,82,72,93,85,100,92,110].map((height, index) => <i key={index} style={{height}} />)}</div></div>
                    <button className="hotspot"><PlayIcon /></button>
                    <div className="tooltip-card"><b>Production confidence</b><p>Monitor performance, security, and delivery in one place.</p><span>Live <strong>View report →</strong></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card metric-float"><span className="trend">↗</span><div><b>Faster time to market</b><small>Prototype to production</small></div></div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Customer logos">
        <p>One technology partner across the full delivery lifecycle</p>
        <div><b>Strategy</b><b>Design</b><b>Build</b><b>Cloud</b><b>Security</b><b>Scale</b></div>
      </section>

      <section className="section intro-section" id="platform">
        <div className="section-heading">
          <p className="eyebrow">End-to-end IT solutions</p>
          <h2>Technology services<br />designed for your growth.</h2>
          <p>We deliver innovative, scalable, and reliable IT solutions that help businesses operate smarter, grow faster, and stay competitive in a rapidly evolving digital world.</p>
        </div>
        <div className="pill-tabs" role="tablist" aria-label="Core service areas">
          {["Software", "Cloud", "Security", "Integration"].map((tab) => (
            <button key={tab} role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className="feature-panel">
          <div className="feature-copy">
            <span className="step-number">01</span>
            <h3>{activeTab} built around your goals.</h3>
            <p>{activeTab === "Software" ? "We design and build scalable, high-performance software tailored to your business goals—enabling flexibility, efficiency, and long-term growth." : activeTab === "Cloud" ? "Transform your operations with secure, scalable cloud architecture that improves performance while reducing operational complexity." : activeTab === "Security" ? "Protect your digital assets with advanced security frameworks, proactive monitoring, and compliance-driven strategies." : "Connect your platforms, tools, and data into a unified ecosystem that improves collaboration and operational efficiency."}</p>
            <div className="check-grid"><span><Check />Scalable architecture</span><span><Check />Reliable delivery</span><span><Check />Security by design</span><span><Check />Long-term support</span></div>
            <a className="inline-link" href="#create">Discuss your project <Arrow /></a>
          </div>
          <div className="feature-visual">
            <div className="editor-shell">
              <div className="editor-top"><span>Hitasoft delivery workspace</span><div><button>Review</button><button>Deploy</button></div></div>
              <div className="editor-body"><aside><b>Stages</b>{[1,2,3,4].map(n => <div className={n === 2 ? "selected" : ""} key={n}><i>{n}</i><span /></div>)}</aside><div className="editor-preview"><div className="preview-nav"><i /><i /><i /></div><div className="preview-card"><small>PRODUCTION READINESS</small><h4>Built to perform under pressure.</h4><p>Architecture, security, and monitoring aligned for launch.</p><button>View report</button></div><span className="pulse-dot" /></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alternate" id="solutions">
        <div className="section-heading compact">
          <p className="eyebrow">Let’s see what we can do</p>
          <h2>One team. Every technology challenge.</h2>
          <p>From strategy to deployment, we deliver reliable solutions that scale with your business and adapt to tomorrow’s challenges.</p>
        </div>
        <div className="services-grid">
          {services.map(([number, title, description]) => <article className="service-card" key={title}><div className="service-number">{number}</div><h3>{title}</h3><p>{description}</p><a href="#create" aria-label={`Discuss ${title}`}>Explore service <Arrow /></a></article>)}
        </div>
      </section>

      <section className="section proof-section" id="resources">
        <div className="proof-grid">
          <blockquote><span className="quote-mark">“</span><p>We work for passion, not only for money. Every engagement is approached with ownership, technical curiosity, and a commitment to delivering real business value.</p><footer><div className="avatar">HI</div><div><b>Hitasoft Engineering</b><small>Your technology partner from idea to scale</small></div></footer></blockquote>
          <div className="proof-stats"><div><b>01</b><span>team from prototype to production</span></div><div><b>24/7</b><span>monitoring and dependable support</span></div><div><b>100%</b><span>solutions aligned to your goals</span></div><div><b>∞</b><span>built to adapt as you grow</span></div></div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="final-cta">
          <div className="cta-ripple one" /><div className="cta-ripple two" />
          <p className="eyebrow light">Choose the right team and plan</p>
          <h2>Scale your company.<br />Not your complexity.</h2>
          <p>Choose an engagement that fits your needs today and scales effortlessly with your company and project scope.</p>
          <div className="cta-actions"><a className="button button-white" href="#create">Start a project <Arrow /></a><a className="button button-dark-ghost" href="mailto:hello@hitasoft.com">Talk to our team</a></div>
          <small>Flexible engagement · Transparent delivery · Long-term partnership</small>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><i /><i /><i /></span><span>Hitasoft</span></a><p>Technology engineered for growth.</p><div className="footer-links"><a href="#platform">What we do</a><a href="#solutions">Services</a><a href="#pricing">Engagement</a><a href="#resources">Why Hitasoft</a></div></div>
        <div className="footer-bottom"><span>© 2026 Hitasoft Technologies. All rights reserved.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#security">Security</a><a href="mailto:hello@hitasoft.com">Contact</a></div><span className="socials">in&nbsp;&nbsp;𝕏</span></div>
      </footer>
    </main>
  );
}
