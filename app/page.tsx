const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const services = [
  { number: "01", label: "Strategy", title: "AI Consulting", description: "Identify high-value AI opportunities, assess data readiness, and define a practical roadmap for responsible adoption.", outcomes: ["Use-case discovery", "AI readiness roadmap"] },
  { number: "02", label: "Product", title: "AI Product Engineering", description: "Engineer complete AI products—from architecture and model development to deployment, monitoring, and scale.", outcomes: ["Product architecture", "Production deployment"] },
  { number: "03", label: "Generative AI", title: "Generative AI Development", description: "Build secure LLM, multimodal, fine-tuned, and retrieval-augmented applications around your enterprise knowledge.", outcomes: ["Enterprise RAG", "Custom model workflows"] },
  { number: "04", label: "Automation", title: "AI Agent Development", description: "Create context-aware agents that automate multi-step work, coordinate tools, and support real-time decisions.", outcomes: ["Agentic workflows", "Tool orchestration"] },
  { number: "05", label: "Experience", title: "AI Assistants & Chatbots", description: "Develop conversational systems that understand intent, context, and sentiment across customer and internal workflows.", outcomes: ["Smart assistants", "Conversational interfaces"] },
  { number: "06", label: "Integration", title: "Enterprise AI Integration", description: "Connect intelligent capabilities to existing software, data, and operations without disrupting critical business systems.", outcomes: ["System integration", "Data connectivity"] },
  { number: "07", label: "Trust", title: "AI Cybersecurity", description: "Protect AI environments with anomaly detection, pipeline monitoring, risk controls, and compliance-focused safeguards.", outcomes: ["AI risk controls", "Continuous monitoring"] },
  { number: "08", label: "Operations", title: "AIOps", description: "Use operational intelligence to reduce alert noise, predict incidents, automate monitoring, and accelerate root-cause analysis.", outcomes: ["Predictive operations", "Incident automation"] },
  { number: "09", label: "Productivity", title: "AI Copilot Solutions", description: "Equip teams with role-aware copilots for knowledge search, workflow assistance, recommendations, and faster decisions.", outcomes: ["Role-aware copilots", "Knowledge intelligence"] },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <header className="site-header">
          <nav className="nav-shell" aria-label="Primary navigation">
            <a className="brand" href="#top" aria-label="Hitasoft home">
              <span className="brand-mark"><i /><i /><i /></span>
              <span>Hitasoft</span>
            </a>
            <div className="nav-links">
              <a href="#top">Hitasoft AI <span>⌄</span></a>
              <a href="#resources">About <span>⌄</span></a>
              <a href="#solutions">Services <span>⌄</span></a>
              <a href="#platform">Industries <span>⌄</span></a>
              <a href="#resources">Portfolio <span>⌄</span></a>
              <a href="#pricing">Resources <span>⌄</span></a>
            </div>
            <div className="nav-actions">
              <a className="button button-ghost nav-sales" href="#resources">Principles</a>
              <a className="button button-primary" href="mailto:hello@hitasoft.com">Start a project</a>
            </div>
            <a className="mobile-cta" href="#platform">Capabilities</a>
          </nav>
        </header>
        <div className="ripple ripple-one" />
        <div className="ripple ripple-two" />
        <div className="ripple ripple-three" />
        <div className="hero-content">
          <a className="announcement" href="#resources">
            <strong>AI-native engineering</strong><span /><em>Reliable by design</em><Arrow />
          </a>
          <p className="eyebrow">Applied intelligence · production infrastructure</p>
          <h1>Engineering intelligence<br />for <span>real-world systems.</span></h1>
          <p className="hero-copy">Hitasoft builds secure AI platforms, adaptive software, and resilient cloud systems—from first model to production-scale intelligence.</p>


        </div>
      </section>

      <section className="logo-strip" aria-label="Customer logos">
        <p>One technology partner across the full delivery lifecycle</p>
        <div><b>Strategy</b><b>Design</b><b>Build</b><b>Cloud</b><b>Security</b><b>Scale</b></div>
      </section>

      <section className="impact-section" aria-labelledby="impact-title">
        <div className="impact-intro">
          <h2 id="impact-title">We help ambitious companies turn complex technology into <span>clear, useful, and lasting products.</span></h2>
          <p>Making technology matter</p>
        </div>
        <div className="impact-card">
          <div className="impact-stars" />
          <div className="impact-arc one" /><div className="impact-arc two" />
          <h3>Every project is a fusion of<br />strategy, engineering,<br />and human insight.</h3>
          <p className="impact-label">How we measure impact</p>
          <div className="impact-metrics">
            <article><b>200+</b><span>product releases<br />delivered</span><a href="#solutions" aria-label="Explore product releases">→</a></article>
            <article><b>99.99%</b><span>availability designed<br />for critical systems</span><a href="#platform" aria-label="Explore infrastructure">→</a></article>
            <article><b>10×</b><span>faster paths from<br />prototype to production</span><a href="#resources" aria-label="Explore our approach">→</a></article>
          </div>
        </div>
        <div className="evolution-row">
          <div><strong>Built for<br />what&apos;s next</strong><small>2026 and beyond</small></div>
          <p>We support your evolution by strengthening <span>what works today</span> and engineering what your business can become tomorrow.</p>
          <small>Clear strategy · senior engineering · continuous improvement</small>
        </div>
      </section>

      <section className="section intro-section" id="platform">
        <div className="service-mosaic">
          <article className="mosaic-intro">
            <div><p className="eyebrow">Intelligent systems, end to end</p><h2>Technical foundations<br />for adaptive products.</h2></div>
            <p>We connect models, data, software, and infrastructure into dependable systems engineered to learn, perform, and scale in production.</p>
          </article>
          <article className="mosaic-card mosaic-software">
            <div className="mosaic-topline"><span className="mosaic-icon">H</span><span>APPLIED AI</span></div>
            <div className="software-mark"><i /><i /><i /></div>
            <div><h3>AI that works beyond the prototype.</h3><p>Production-grade agents, retrieval systems, automation, and decision intelligence grounded in your data.</p></div>
          </article>
          <article className="mosaic-card mosaic-cloud">
            <div className="mosaic-topline"><span className="mosaic-icon">☁</span><span>CLOUD</span></div>
            <div className="cloud-visual"><span>99.99%</span><small>Infrastructure availability</small><div>{[38,55,47,72,66,90,78].map((height,index)=><i key={index} style={{height:`${height}%`}} />)}</div></div>
            <h3>Cloud infrastructure that performs under pressure.</h3>
          </article>
          <article className="mosaic-card mosaic-security">
            <div className="mosaic-topline"><span className="mosaic-icon">◇</span><span>SECURITY</span></div>
            <h3>Protection designed into every layer.</h3>
          </article>
          <article className="mosaic-card mosaic-integration">
            <div className="mosaic-topline"><span className="mosaic-icon">⌁</span><span>INTEGRATION</span></div>
            <h3>One connected technology ecosystem.</h3>
          </article>
        </div>
      </section>

      <section className="section alternate ai-services-section" id="solutions">
        <div className="ai-services-shell">
          <div className="ai-services-head">
            <div>
              <p className="eyebrow">End-to-end AI development services</p>
              <h2>Enterprise AI,<br /><span>from strategy to scale.</span></h2>
            </div>
            <div className="ai-services-intro">
              <span>HITASOFT / AI PRACTICE</span>
              <p>We combine strategy, product engineering, data, models, integrations, security, and operations to deliver resilient AI systems across complex business environments.</p>
            </div>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-meta"><span>{service.number}</span><small>{service.label}</small></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-outcomes">{service.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="ai-delivery-band">
            <span>How we deliver</span>
            <div><b>Discover</b><i>→</i><b>Design</b><i>→</i><b>Build</b><i>→</i><b>Integrate</b><i>→</i><b>Operate</b></div>
          </div>
        </div>
      </section>

      <section className="section proof-section" id="resources">
        <div className="proof-grid">
          <blockquote><span className="quote-mark">“</span><p>Intelligence is only valuable when the system around it is observable, secure, and reliable. We engineer all four as one production architecture.</p><footer><div className="avatar">HI</div><div><b>Hitasoft Engineering</b><small>Applied AI and systems architecture</small></div></footer></blockquote>
          <div className="proof-stats"><div><b>01</b><span>architecture from model to production</span></div><div><b>24/7</b><span>observability across every service</span></div><div><b>100%</b><span>security designed into the stack</span></div><div><b>∞</b><span>systems built to learn and adapt</span></div></div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="final-cta">
          <div className="cta-ripple one" /><div className="cta-ripple two" />
          <p className="eyebrow light">Production intelligence</p>
          <h2>Build intelligence<br />into every layer.</h2>
          <p>Explore the architectures, platforms, and engineering disciplines behind reliable AI-enabled products.</p>
          <div className="cta-actions"><a className="button button-white" href="#platform">Review AI systems <Arrow /></a><a className="button button-dark-ghost" href="#resources">Engineering approach</a></div>
          <small>Observable systems · Secure infrastructure · Responsible AI</small>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="brand" href="#top"><span className="brand-mark"><i /><i /><i /></span><span>Hitasoft</span></a><p>Intelligence engineered for production.</p><div className="footer-links"><a href="#platform">AI systems</a><a href="#solutions">Capabilities</a><a href="#pricing">Approach</a><a href="#resources">Engineering</a></div></div>
        <div className="footer-bottom"><span>© 2026 Hitasoft Technologies. All rights reserved.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><a href="#security">Security</a><a href="mailto:hello@hitasoft.com">Contact</a></div><span className="socials">in&nbsp;&nbsp;𝕏</span></div>
      </footer>
    </main>
  );
}
