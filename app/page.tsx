import { ScrollRevealHeading } from "./ScrollRevealHeading";
import { MarqueeLogoScroller } from "@/components/ui/marquee-logo-scroller";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const aiCapabilities = [
  "AI consulting", "Product engineering", "Generative AI", "AI agents", "Assistants & chatbots",
  "Enterprise integration", "AI cybersecurity", "AIOps", "AI copilots",
];

const navMenus = [
  { label: "Hitasoft AI", href: "#solutions", heading: "Enterprise intelligence, engineered for production.", columns: [
    { title: "AI services", items: ["AI consulting", "AI development", "AI integration", "AI governance"] },
    { title: "Generative AI", items: ["Generative AI", "AI agents", "Enterprise RAG", "AI copilots"] },
    { title: "Applied intelligence", items: ["Machine learning", "Computer vision", "Voice AI", "Intelligent automation"] },
  ] },
  { label: "About", href: "#about", heading: "A senior technology team built around outcomes.", columns: [
    { title: "Company", items: ["About Hitasoft", "How we work", "Leadership", "Careers"] },
    { title: "Confidence", items: ["Client stories", "Engineering principles", "Security", "Compliance"] },
  ] },
  { label: "Services", href: "#solutions", heading: "Technical foundations for adaptive products.", columns: [
    { title: "Applied AI", items: ["AI beyond the prototype", "Agents, RAG & automation"] },
    { title: "Cloud", items: ["99.99% infrastructure availability", "Performance under pressure"] },
    { title: "Security", items: ["Protection in every layer", "Secure delivery by design"] },
    { title: "Integration", items: ["One connected ecosystem", "Models, data & software"] },
  ] },
  { label: "Industries", href: "#industries", heading: "Technology shaped around real operating environments.", columns: [
    { title: "Regulated", items: ["Healthcare", "Financial services", "Insurance", "Energy"] },
    { title: "Connected", items: ["Logistics", "Automotive", "Manufacturing", "Telecom"] },
    { title: "Experience-led", items: ["Retail & commerce", "Education", "Travel", "Media"] },
  ] },
  { label: "Portfolio", href: "#about", heading: "Selected systems designed to perform and evolve.", columns: [
    { title: "Work", items: ["AI platforms", "Enterprise products", "Mobile experiences", "Cloud transformation"] },
    { title: "Outcomes", items: ["Product launches", "Workflow automation", "Data intelligence", "Platform modernization"] },
  ] },
  { label: "Resources", href: "#resources", heading: "Practical thinking for technology leaders.", columns: [
    { title: "Explore", items: ["AI insights", "Engineering guides", "Technology briefs", "FAQs"] },
    { title: "Connect", items: ["Project discovery", "Architecture review", "AI readiness", "Contact our team"] },
  ] },
];

const industries = [
  ["01", "Healthcare", "Compliant platforms, clinical workflows, patient experiences, and decision-support systems built for trusted care."],
  ["02", "Financial Services", "Secure banking, payments, risk, lending, and intelligence platforms designed for regulated growth."],
  ["03", "Logistics & Supply Chain", "Predictive operations, fleet visibility, warehouse automation, and connected supply-chain systems."],
  ["04", "Retail & Commerce", "Unified commerce, personalization, inventory intelligence, and digital experiences that convert."],
  ["05", "Manufacturing", "Industry 4.0 platforms, computer vision, predictive maintenance, and real-time production intelligence."],
  ["06", "Automotive & Mobility", "Connected mobility products, operational platforms, and intelligent systems across the vehicle lifecycle."],
  ["07", "Education", "Adaptive learning, content intelligence, administrative automation, and accessible digital learning products."],
  ["08", "Travel & Hospitality", "Booking ecosystems, intelligent assistance, operations software, and seamless guest experiences."],
];

const deliveryStages = [
  { alt: "Strategy & Discovery", icon: "⌁", gradient: { from: "#d9efff", via: "#8fd2ff", to: "#3d9fdf" } },
  { alt: "Experience Design", icon: "✦", gradient: { from: "#e1ddff", via: "#aaa2ff", to: "#6860ce" } },
  { alt: "Product Engineering", icon: "⌘", gradient: { from: "#d2f4ef", via: "#7ed8cc", to: "#2e9f96" } },
  { alt: "Cloud Delivery", icon: "☁", gradient: { from: "#dce8ff", via: "#8fb3ff", to: "#446fc8" } },
  { alt: "Security & Trust", icon: "◇", gradient: { from: "#e3f7d4", via: "#9edc77", to: "#4b9f48" } },
  { alt: "Scale & Optimize", icon: "↗", gradient: { from: "#ffe6ce", via: "#ffb66f", to: "#d77437" } },
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
              {navMenus.map((menu) => (
                <div className="nav-item" key={menu.label}>
                  <a href={menu.href}>{menu.label} <span>⌄</span></a>
                  <div className="mega-menu">
                    <div className="mega-intro"><small>HITASOFT</small><strong>{menu.heading}</strong><a href={menu.href}>Explore {menu.label} <Arrow /></a></div>
                    <div className="mega-columns">
                      {menu.columns.map((column) => <div key={column.title}><b>{column.title}</b>{column.items.map((item) => <a href={menu.href} key={item}>{item}<span>→</span></a>)}</div>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a className="mobile-cta" href="mailto:hello@hitasoft.com">Contact</a>
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
          <div className="hero-actions">
            <a className="hero-contact" href="mailto:hello@hitasoft.com">Talk to our team <Arrow /></a>
            <a className="hero-explore" href="#solutions">Explore AI services</a>
          </div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Full delivery lifecycle">
        <MarqueeLogoScroller
          title="One technology partner across the full delivery lifecycle"
          description="A connected senior team from first decision through secure, production-scale delivery."
          logos={deliveryStages}
          speed="normal"
        />
      </section>

      <section className="impact-section" id="about" aria-labelledby="impact-title">
        <div className="impact-intro">
          <ScrollRevealHeading />
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

      <section className="section alternate ai-services-section" id="solutions">
        <div className="ai-services-shell">
          <div className="ai-spectrum" aria-hidden="true"><i /><i /><i /></div>
          <div className="ai-services-head">
            <div>
              <p className="eyebrow">Hitasoft AI / Full lifecycle delivery</p>
              <h2>End-to-end AI<br /><span>development services.</span></h2>
            </div>
            <div className="ai-services-intro">
              <span>FROM FIRST IDEA TO PRODUCTION INTELLIGENCE</span>
              <p>One senior team brings together strategy, product engineering, data, models, integrations, security, and operations—so your AI moves beyond the prototype and creates measurable value.</p>
              <a href="mailto:hello@hitasoft.com">Plan an AI initiative <Arrow diagonal /></a>
            </div>
          </div>
          <div className="ai-feature-grid">
            <article className="ai-feature-card ai-feature-image">
              <div className="ai-card-top"><span>01</span><small>Strategy to scale</small></div>
              <div className="ai-image-copy"><strong>One senior team.<br />Every AI layer.</strong><p>Strategy, data, models, product, security, and operations—connected from day one.</p></div>
              <a href="mailto:hello@hitasoft.com" aria-label="Start an AI project">Start a project <Arrow diagonal /></a>
            </article>
            <article className="ai-feature-card ai-feature-editorial">
              <div className="ai-card-top"><span>02</span><small>Production mindset</small></div>
              <div className="ai-orbit" aria-hidden="true"><i /><i /><i /></div>
              <blockquote>“We engineer the system around the model—so it stays useful, secure, and reliable in the real world.”</blockquote>
              <div className="ai-card-signoff"><span className="avatar">HI</span><span><b>Hitasoft Engineering</b><small>Applied AI & systems</small></span></div>
            </article>
            <article className="ai-feature-card ai-feature-blue">
              <div className="ai-card-top"><span>03</span><small>Connected capability</small></div><strong className="ai-stat">9<span>+</span></strong><p>AI capabilities, delivered as one integrated practice.</p><div className="ai-card-arrow" aria-hidden="true">↗</div>
            </article>
            <article className="ai-feature-card ai-feature-black">
              <div className="ai-card-top"><span>04</span><small>Beyond launch</small></div><strong className="ai-stat">24<span>/7</span></strong><p>Monitoring and operational support for production AI systems.</p><div className="ai-pulse" aria-hidden="true"><i /><i /><i /><i /></div>
            </article>
          </div>
          <div className="ai-capability-list" aria-label="AI development capabilities">{aiCapabilities.map((capability, index) => <a href="mailto:hello@hitasoft.com" key={capability}><span>{String(index + 1).padStart(2, "0")}</span>{capability}<Arrow diagonal /></a>)}</div>
          <div className="ai-delivery-band">
            <span>How we deliver</span>
            <div><b>Discover</b><i>→</i><b>Design</b><i>→</i><b>Build</b><i>→</i><b>Integrate</b><i>→</i><b>Operate</b></div>
          </div>
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="industries-head">
          <div><p className="eyebrow">Industry-focused engineering</p><h2>Built for the realities<br />of your industry.</h2></div>
          <p>Deep technology capability matters most when it understands the environment around it. Hitasoft combines engineering discipline with domain-aware workflows, security, compliance, and customer expectations.</p>
        </div>
        <div className="industries-grid">
          {industries.map(([number, title, description]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><a href="mailto:hello@hitasoft.com" aria-label={`Discuss ${title} solutions`}>Discuss your project <Arrow /></a></article>)}
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
