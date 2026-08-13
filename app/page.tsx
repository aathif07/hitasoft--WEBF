const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const capabilities = [
  ["01", "AI products", "Agents, copilots, RAG systems, and intelligent workflows grounded in your business data."],
  ["02", "Digital platforms", "Fast, accessible web and mobile products built around real user behavior and measurable outcomes."],
  ["03", "Cloud systems", "Secure cloud architecture, DevOps automation, observability, and infrastructure engineered for scale."],
  ["04", "Data intelligence", "Modern data pipelines, analytics platforms, forecasting, and decision systems that create clarity."],
  ["05", "Cybersecurity", "Zero-trust architecture, application security, compliance, and continuous threat monitoring."],
  ["06", "Systems integration", "APIs, legacy modernization, and connected operational systems that remove fragmented workflows."],
];

const delivery = [
  ["Discover", "Map the opportunity, users, data, risks, and the fastest path to meaningful value."],
  ["Design", "Shape the experience and technical architecture as one coherent production system."],
  ["Build", "Ship in focused releases with automated quality, security, and observability built in."],
  ["Scale", "Optimize performance, extend capabilities, and evolve the platform with your business."],
];

export default function Home() {
  return (
    <main className="neo-site">
      <header className="neo-header">
        <nav className="neo-nav" aria-label="Primary navigation">
          <a className="neo-brand" href="#top" aria-label="Hitasoft home">
            <span className="neo-mark"><i /><i /><i /></span><span>Hitasoft</span>
          </a>
          <div className="neo-links">
            <a href="#intelligence">Intelligence</a><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#company">Company</a>
          </div>
          <a className="neo-nav-cta" href="mailto:hello@hitasoft.com">Start a project <Arrow diagonal /></a>
        </nav>
      </header>

      <section className="neo-hero" id="top">
        <div className="neo-grid" />
        <div className="neo-glow glow-a" /><div className="neo-glow glow-b" />
        <div className="neo-hero-inner">
          <div className="neo-badge"><i /> AI engineering for ambitious products</div>
          <h1>Build what&apos;s next.<br /><span>Make it intelligent.</span></h1>
          <p>Hitasoft turns ambitious ideas into secure AI products, modern software, and resilient cloud systems engineered for the real world.</p>
          <div className="neo-actions">
            <a className="neo-button light" href="mailto:hello@hitasoft.com">Start building <Arrow /></a>
            <a className="neo-button glass" href="#intelligence">Explore Hitasoft <Arrow diagonal /></a>
          </div>

          <div className="ai-console" aria-label="Visual representation of the Hitasoft AI platform">
            <div className="console-top"><span><i /><i /><i /></span><code>hitasoft.intelligence / production</code><b>LIVE</b></div>
            <div className="console-body">
              <div className="console-rail"><b>H</b><i className="active" /><i /><i /><i /><span /></div>
              <div className="console-code">
                <small>AI ORCHESTRATION</small>
                <h3>From raw data to<br />reliable intelligence.</h3>
                <div className="code-lines">
                  <code><em>01</em> ingest.context(&#123; source: <span>&quot;enterprise&quot;</span> &#125;)</code>
                  <code><em>02</em> reason.with(<span>&quot;guardrails&quot;</span>)</code>
                  <code><em>03</em> deploy.system(&#123; observable: <b>true</b> &#125;)</code>
                </div>
                <div className="console-status"><i /> Production pipeline healthy <span>18ms</span></div>
              </div>
              <div className="core-visual">
                <div className="core-ring ring-one" /><div className="core-ring ring-two" /><div className="core-ring ring-three" />
                <div className="core-orb"><span>AI</span></div>
                <i className="node n1" /><i className="node n2" /><i className="node n3" /><i className="node n4" />
                <small>SECURE · ADAPTIVE · OBSERVABLE</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="neo-trust" aria-label="Technology disciplines">
        <p>Engineering across the systems that move modern business</p>
        <div><b>OpenAI</b><b>Azure</b><b>AWS</b><b>Google Cloud</b><b>Cloudflare</b><b>PostgreSQL</b></div>
      </section>

      <section className="neo-manifesto" id="intelligence">
        <div className="manifesto-copy">
          <p className="neo-kicker">INTELLIGENCE, ENGINEERED</p>
          <h2>AI is only powerful when the <span>whole system works.</span></h2>
          <p>Models are one piece of the product. Hitasoft connects data, interfaces, infrastructure, security, and operations into one dependable architecture—from first experiment to production scale.</p>
        </div>
        <div className="signal-core" aria-hidden="true">
          <div className="signal-halo h1" /><div className="signal-halo h2" /><div className="signal-halo h3" />
          <div className="signal-object"><i /><i /><i /></div>
          <span className="signal-label sl1">DATA</span><span className="signal-label sl2">MODELS</span><span className="signal-label sl3">PRODUCT</span><span className="signal-label sl4">CLOUD</span>
        </div>
      </section>

      <section className="neo-capabilities" id="capabilities">
        <div className="neo-section-head">
          <div><p className="neo-kicker">WHAT WE BUILD</p><h2>Every layer required<br />to ship with confidence.</h2></div>
          <p>One focused engineering team for the complete product lifecycle—strategy, experience, software, AI, data, cloud, and security.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map(([number,title,description], index) => (
            <article className={index === 0 ? "featured" : ""} key={title}>
              <div className="cap-top"><span>{number}</span><i>↗</i></div>
              {index === 0 && <div className="mini-network" aria-hidden="true"><i /><i /><i /><i /><span /><span /><span /></div>}
              <h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="architecture-section">
        <div className="architecture-stage">
          <div className="arch-grid" />
          <div className="arch-copy left"><p className="neo-kicker">HITASOFT CORE</p><h2>One architecture.<br />Infinite applications.</h2><p>A modular foundation for AI applications, digital platforms, and connected operations.</p></div>
          <div className="arch-object" aria-hidden="true"><div /><div /><div /><span /></div>
          <div className="arch-copy right"><h3>Production intelligence</h3><p>Secure by design, observable by default, and ready to evolve as your data and business change.</p><a href="#approach">See how we deliver <Arrow /></a></div>
        </div>
      </section>

      <section className="neo-process" id="approach">
        <div className="neo-section-head process-head">
          <div><p className="neo-kicker">FROM PROTOTYPE TO PRODUCTION</p><h2>A clear path from<br />possibility to performance.</h2></div>
          <p>Small senior teams, visible progress, and production discipline from day one.</p>
        </div>
        <div className="process-line">
          {delivery.map(([title,description], index) => <article key={title}><span>0{index + 1}</span><i /><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>

      <section className="neo-proof" id="company">
        <div className="proof-copy"><p className="neo-kicker">BUILT FOR THE REAL WORLD</p><h2>Move faster.<br />Operate smarter.<br /><span>Scale securely.</span></h2><p>We bring product thinking and deep engineering together, so your technology creates value long after launch.</p><a className="neo-button light" href="mailto:hello@hitasoft.com">Work with Hitasoft <Arrow /></a></div>
        <div className="metric-stack">
          <article><span>01</span><div><b>Production first</b><p>Architecture designed for reliability, security, and scale—not demo-day shortcuts.</p></div></article>
          <article><span>24/7</span><div><b>Always observable</b><p>Know how every critical system performs and where improvement creates the most value.</p></div></article>
          <article><span>∞</span><div><b>Built to evolve</b><p>Modular platforms that adapt as your users, operations, and intelligence needs grow.</p></div></article>
        </div>
      </section>

      <section className="neo-cta">
        <div className="cta-grid" />
        <p className="neo-kicker">YOUR NEXT SYSTEM STARTS HERE</p>
        <h2>Turn a bold idea into<br /><span>production intelligence.</span></h2>
        <p>Tell us what you&apos;re building. We&apos;ll help shape the fastest responsible path forward.</p>
        <div className="neo-actions"><a className="neo-button light" href="mailto:hello@hitasoft.com">Start a conversation <Arrow /></a><a className="neo-button glass" href="#capabilities">Explore capabilities</a></div>
      </section>

      <footer className="neo-footer">
        <div><a className="neo-brand" href="#top"><span className="neo-mark"><i /><i /><i /></span><span>Hitasoft</span></a><p>Technology that thinks, performs, and scales.</p></div>
        <div className="footer-nav"><a href="#intelligence">Intelligence</a><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="mailto:hello@hitasoft.com">Contact</a></div>
        <div className="footer-meta"><span>© 2026 Hitasoft Technologies</span><span>India · Building globally</span><span>Privacy · Terms</span></div>
      </footer>
    </main>
  );
}
