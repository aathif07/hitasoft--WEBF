"use client";

import { FormEvent, useState } from "react";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const Check = () => <span className="check" aria-hidden="true">✓</span>;

const PlayIcon = () => <span className="play-icon" aria-hidden="true">▶</span>;

export default function Home() {
  const [mode, setMode] = useState<"demo" | "video">("demo");
  const [activeTab, setActiveTab] = useState("Create");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

  function submitUrl(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(url.trim() ? "Your workspace is ready — let’s build your first Arcade." : "Paste a product link to get started.");
  }

  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Arcade home">
            <span className="brand-mark"><i /><i /><i /></span>
            <span>Arcade</span>
          </a>
          <div className="nav-links">
            <a href="#platform">Platform <span>⌄</span></a>
            <a href="#solutions">Solutions <span>⌄</span></a>
            <a href="#resources">Resources <span>⌄</span></a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-actions">
            <a className="text-link" href="#login">Log in</a>
            <a className="button button-ghost nav-sales" href="mailto:sales@arcade.so">Talk to sales</a>
            <a className="button button-primary" href="#create">Start for free</a>
          </div>
          <a className="mobile-cta" href="#create">Start free</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="ripple ripple-one" />
        <div className="ripple ripple-two" />
        <div className="ripple ripple-three" />
        <div className="hero-content">
          <a className="announcement" href="#resources">
            <strong>Meet Arcades for teams</strong><span /><em>Explore what’s new</em><Arrow />
          </a>
          <p className="eyebrow">Interactive product storytelling</p>
          <h1>Show your product.<br />Make it <span>unforgettable.</span></h1>
          <p className="hero-copy">Create interactive demos that explain your product in seconds — beautiful, personal, and built to convert.</p>

          <div className="mode-switch" role="group" aria-label="Choose content type">
            <button className={mode === "demo" ? "active" : ""} onClick={() => setMode("demo")}><span>◫</span> Interactive demo</button>
            <button className={mode === "video" ? "active" : ""} onClick={() => setMode("video")}><span>▷</span> Product video</button>
          </div>

          <form className="url-form" id="create" onSubmit={submitUrl}>
            <label className="sr-only" htmlFor="product-url">Product URL</label>
            <input id="product-url" value={url} onChange={(event) => setUrl(event.target.value)} placeholder={mode === "demo" ? "Paste your product URL" : "Paste a video or product URL"} />
            <button aria-label="Create your Arcade" type="submit"><Arrow /></button>
          </form>
          <p className="form-note" aria-live="polite">{message || "Free forever · No credit card required"}</p>

          <div className="hero-demo-wrap">
            <div className="float-card float-left">
              <span className="mini-icon">✦</span>
              <div><b>AI-powered</b><small>Built in moments</small></div>
            </div>
            <div className="browser-frame">
              <div className="browser-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <div className="browser-address"><span>⌁</span> arcade.software/share/product-tour</div>
                <div className="browser-more">•••</div>
              </div>
              <div className="demo-screen">
                <aside className="demo-sidebar">
                  <div className="demo-logo"><span className="brand-mark small"><i /><i /><i /></span></div>
                  <button className="side-active">⌂</button><button>▦</button><button>◫</button><button>◇</button>
                  <div className="side-bottom">⚙</div>
                </aside>
                <div className="demo-main">
                  <div className="demo-top"><div><small>Workspaces / Growth</small><b>Q3 product launch</b></div><button>Share</button></div>
                  <div className="demo-canvas">
                    <div className="canvas-head"><span>PROJECT OVERVIEW</span><button>+ Add view</button></div>
                    <h3>Everything your team needs,<br />in one clear view.</h3>
                    <div className="mini-stats"><div><small>Active projects</small><b>24</b><em>↑ 12%</em></div><div><small>Tasks completed</small><b>1,842</b><em>↑ 18%</em></div><div><small>Team velocity</small><b>94%</b><em>↑ 8%</em></div></div>
                    <div className="chart-card"><div className="chart-head"><b>Product adoption</b><span>Last 30 days⌄</span></div><div className="chart-bars">{[34,52,44,70,62,82,72,93,85,100,92,110].map((height, index) => <i key={index} style={{height}} />)}</div></div>
                    <button className="hotspot"><PlayIcon /></button>
                    <div className="tooltip-card"><b>Start with your overview</b><p>See your team’s progress at a glance.</p><span>1 of 4 <strong>Next →</strong></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-card metric-float"><span className="trend">↗</span><div><b>38% more signups</b><small>From one interactive demo</small></div></div>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Customer logos">
        <p>Loved by modern teams at</p>
        <div><b>Atlassian</b><b>Notion</b><b>Webflow</b><b>Zapier</b><b>Mercury</b><b>Dropbox</b></div>
      </section>

      <section className="section intro-section" id="platform">
        <div className="section-heading">
          <p className="eyebrow">The platform</p>
          <h2>Your product deserves<br />more than a screenshot.</h2>
          <p>Build engaging, on-brand experiences that help every buyer understand the value — before they ever book a call.</p>
        </div>
        <div className="pill-tabs" role="tablist" aria-label="Platform features">
          {["Create", "Personalize", "Share", "Measure"].map((tab) => (
            <button key={tab} role="tab" aria-selected={activeTab === tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className="feature-panel">
          <div className="feature-copy">
            <span className="step-number">01</span>
            <h3>{activeTab} in minutes, not days.</h3>
            <p>{activeTab === "Create" ? "Capture your product as you click. Arcade automatically turns each step into a polished, guided story." : activeTab === "Personalize" ? "Adapt every story to the audience, account, or campaign without rebuilding your demo." : activeTab === "Share" ? "Publish everywhere your buyers are — from your website and emails to social and sales rooms." : "See exactly where viewers engage, hesitate, and convert so your next story performs even better."}</p>
            <div className="check-grid"><span><Check />No-code editor</span><span><Check />Brand themes</span><span><Check />AI copy polish</span><span><Check />Instant publishing</span></div>
            <a className="inline-link" href="#create">Start creating <Arrow /></a>
          </div>
          <div className="feature-visual">
            <div className="editor-shell">
              <div className="editor-top"><span>My product tour</span><div><button>Preview</button><button>Publish</button></div></div>
              <div className="editor-body"><aside><b>Steps</b>{[1,2,3,4].map(n => <div className={n === 2 ? "selected" : ""} key={n}><i>{n}</i><span /></div>)}</aside><div className="editor-preview"><div className="preview-nav"><i /><i /><i /></div><div className="preview-card"><small>STEP 2</small><h4>Guide attention with hotspots.</h4><p>Add context exactly where it matters.</p><button>Got it</button></div><span className="pulse-dot" /></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alternate" id="solutions">
        <div className="section-heading compact">
          <p className="eyebrow">Built for every go-to-market team</p>
          <h2>One product. A hundred stories.</h2>
          <p>Give every team a better way to show, explain, and sell what you’ve built.</p>
        </div>
        <div className="use-case-grid">
          <article className="use-card large"><div className="card-art sales-art"><div className="message m1"><i>MM</i><span><b>Maya Miller</b><small>Shared an Arcade with Acme</small></span></div><div className="message m2"><span className="play-badge">▶</span><span><b>See how your team can save 8 hours</b><small>Personalized for acme.co</small></span></div><div className="message m3"><span>Viewed 6 minutes ago</span><b>87% completed</b></div></div><span className="card-label">For sales</span><h3>Turn every follow-up into a product moment.</h3><p>Personalize demos for every prospect and let your product move deals forward.</p><a href="#create">Explore sales <Arrow /></a></article>
          <article className="use-card"><div className="card-art marketing-art"><div className="campaign"><small>CAMPAIGN PERFORMANCE</small><b>12.4k</b><span>Interactive views</span><div className="sparkline"><i/><i/><i/><i/><i/><i/></div><em>+28.4%</em></div></div><span className="card-label">For marketing</span><h3>Make campaigns people want to click.</h3><p>Bring launches, websites, and social to life with immersive product stories.</p><a href="#create">Explore marketing <Arrow /></a></article>
          <article className="use-card"><div className="card-art enablement-art"><div className="course-list"><div><span>01</span><b>Workspace basics</b><em>Complete</em></div><div className="current"><span>02</span><b>Build your first flow</b><em>6 min</em></div><div><span>03</span><b>Invite your team</b><em>4 min</em></div></div></div><span className="card-label">For enablement</span><h3>Teach once. Let people learn by doing.</h3><p>Replace long docs and training calls with guided, self-serve experiences.</p><a href="#create">Explore enablement <Arrow /></a></article>
        </div>
      </section>

      <section className="section proof-section" id="resources">
        <div className="proof-grid">
          <blockquote><span className="quote-mark">“</span><p>Arcade has fundamentally changed how we show our product. Our demos feel premium, our team ships faster, and buyers finally get it right away.</p><footer><div className="avatar">AL</div><div><b>Alex Lee</b><small>VP of Marketing, Daylight</small></div></footer></blockquote>
          <div className="proof-stats"><div><b>3.2×</b><span>more engaged visitors</span></div><div><b>42%</b><span>shorter sales cycle</span></div><div><b>10 min</b><span>average time to publish</span></div><div><b>12k+</b><span>teams creating with Arcade</span></div></div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="final-cta">
          <div className="cta-ripple one" /><div className="cta-ripple two" />
          <p className="eyebrow light">Ready when you are</p>
          <h2>Let your product<br />do the talking.</h2>
          <p>Build your first interactive demo in minutes. Share it everywhere. See what clicks.</p>
          <div className="cta-actions"><a className="button button-white" href="#create">Start creating for free <Arrow /></a><a className="button button-dark-ghost" href="mailto:sales@arcade.so">Talk to sales</a></div>
          <small>No credit card required · Free forever plan</small>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><i /><i /><i /></span><span>Arcade</span></a><p>Your product, beautifully explained.</p><div className="footer-links"><a href="#platform">Platform</a><a href="#solutions">Solutions</a><a href="#pricing">Pricing</a><a href="#resources">Resources</a></div></div>
        <div className="footer-bottom"><span>© 2026 Arcade Software, Inc.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#security">Security</a><a href="#status">Status</a></div><span className="socials">in&nbsp;&nbsp;𝕏</span></div>
      </footer>
    </main>
  );
}
