import { ScrollRevealHeading } from "./ScrollRevealHeading";
import { MarqueeLogoScroller } from "../components/ui/marquee-logo-scroller";
import { Case } from "../components/ui/cases-with-infinite-scroll";

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>
);

const specialistCapabilities = [
  { title: "AI consulting", label: "Strategy", description: "Find the strongest use cases, assess readiness, and turn ambition into a practical AI roadmap." },
  { title: "Product engineering", label: "Build", description: "Design and engineer dependable AI products from architecture through production release." },
  { title: "Generative AI", label: "Models", description: "Build secure LLM and multimodal experiences grounded in enterprise knowledge." },
  { title: "AI agents", label: "Automation", description: "Create context-aware agents that coordinate tools and automate complex workflows." },
  { title: "Assistants & chatbots", label: "Experience", description: "Deliver conversational systems that understand intent, context, and user needs." },
  { title: "Enterprise integration", label: "Connect", description: "Connect models to governed data, APIs, software, and critical business workflows." },
  { title: "AI cybersecurity", label: "Trust", description: "Protect AI applications, models, data flows, and access across every delivery layer." },
  { title: "AIOps", label: "Operations", description: "Reduce alert noise, predict incidents, and accelerate root-cause analysis and recovery." },
  { title: "AI copilots", label: "Productivity", description: "Equip teams with role-aware support for knowledge, recommendations, and decisions." },
];

const specialistRows = [specialistCapabilities.slice(0, 5), specialistCapabilities.slice(5)];

const navMenus = [
  { label: "Hitasoft AI", href: "#solutions", heading: "Enterprise intelligence, engineered for production.", columns: [
    { title: "AI services", items: [["AI consulting", "#capability-ai-consulting"], ["AI development", "#capability-product-engineering"], ["AI integration", "#capability-enterprise-integration"], ["AI governance", "#capability-ai-cybersecurity"]] },
    { title: "Generative AI", items: [["Generative AI", "#capability-generative-ai"], ["AI agents", "#capability-ai-agents"], ["Enterprise RAG", "#capability-generative-ai"], ["AI copilots", "#capability-ai-copilots"]] },
    { title: "Applied intelligence", items: [["Machine learning", "#solutions"], ["Computer vision", "#solutions"], ["Voice AI", "#capability-assistants-chatbots"], ["Intelligent automation", "#capability-ai-agents"]] },
  ] },
  { label: "About", href: "#about", heading: "A senior technology team built around outcomes.", columns: [
    { title: "Company", items: [["About Hitasoft", "#about"], ["How we work", "#about"], ["Leadership", "#about"], ["Careers", "mailto:hello@hitasoft.com?subject=Careers%20at%20Hitasoft"]] },
    { title: "Confidence", items: [["Client stories", "#portfolio"], ["Engineering principles", "#resources"], ["Security", "#capability-ai-cybersecurity"], ["Compliance", "#industries"]] },
  ] },
  { label: "Services", href: "#solutions", heading: "Technical foundations for adaptive products.", columns: [
    { title: "Applied AI", items: [["AI beyond the prototype", "#solutions"], ["Agents, RAG & automation", "#capability-ai-agents"]] },
    { title: "Cloud", items: [["99.99% infrastructure availability", "#about"], ["Performance under pressure", "#capability-aiops"]] },
    { title: "Security", items: [["Protection in every layer", "#capability-ai-cybersecurity"], ["Secure delivery by design", "#resources"]] },
    { title: "Integration", items: [["One connected ecosystem", "#capability-enterprise-integration"], ["Models, data & software", "#capability-product-engineering"]] },
  ] },
  { label: "Industries", href: "#industries", heading: "Technology shaped around real operating environments.", columns: [
    { title: "Regulated", items: [["Healthcare", "#industry-healthcare"], ["Financial services", "#industry-financial-services"], ["Insurance", "#industries"], ["Energy", "#industries"]] },
    { title: "Connected", items: [["Logistics", "#industry-logistics-supply-chain"], ["Automotive", "#industry-automotive-mobility"], ["Manufacturing", "#industry-manufacturing"], ["Telecom", "#industries"]] },
    { title: "Experience-led", items: [["Retail & commerce", "#industry-retail-commerce"], ["Education", "#industry-education"], ["Travel", "#industry-travel-hospitality"], ["Media", "#industries"]] },
  ] },
  { label: "Portfolio", href: "#portfolio", heading: "Selected systems designed to perform and evolve.", columns: [
    { title: "Work", items: [["AI platforms", "#portfolio"], ["Enterprise products", "#portfolio"], ["Mobile experiences", "#portfolio"], ["Cloud transformation", "#portfolio"]] },
    { title: "Outcomes", items: [["Product launches", "#portfolio"], ["Workflow automation", "#portfolio"], ["Data intelligence", "#portfolio"], ["Platform modernization", "#portfolio"]] },
  ] },
  { label: "Resources", href: "#resources", heading: "Practical thinking for technology leaders.", columns: [
    { title: "Explore", items: [["AI insights", "#resources"], ["Engineering guides", "#resources"], ["Technology briefs", "#resources"], ["FAQs", "#resources"]] },
    { title: "Connect", items: [["Project discovery", "mailto:hello@hitasoft.com?subject=Project%20discovery"], ["Architecture review", "mailto:hello@hitasoft.com?subject=Architecture%20review"], ["AI readiness", "mailto:hello@hitasoft.com?subject=AI%20readiness"], ["Contact our team", "mailto:hello@hitasoft.com"]] },
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
                      {menu.columns.map((column) => <div key={column.title}><b>{column.title}</b>{column.items.map(([item, href]) => <a href={href} key={item}>{item}<span>→</span></a>)}</div>)}
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
          <div className="ai-dilemma">
            <div className="ai-dilemma-head">
              <div><span>Enterprise AI, made practical</span><h3>How we solve your<br />enterprise AI dilemma.</h3></div>
              <p>We combine focused strategy, production engineering, and specialist AI capability to improve performance, reduce complexity, and accelerate responsible adoption.</p>
            </div>
            <div className="ai-dilemma-grid">
              <article className="dilemma-card dilemma-foundation" aria-label="Enterprise AI computing foundation" />
              <article className="dilemma-card dilemma-cost">
                <p>We reduce the cost and complexity of developing <strong>in-house AI solutions</strong></p>
                <div className="dilemma-bars" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><span>₹</span></div>
              </article>
              <article className="dilemma-card dilemma-optimize">
                <p>We optimize your <strong>value chains and business processes</strong></p>
                <div className="dilemma-switch" aria-hidden="true"><i /><span>↗</span></div>
              </article>
              <article className="dilemma-card dilemma-adoption">
                <div className="dilemma-bridge" aria-hidden="true"><i /><span>ϟ</span><i /></div>
                <p>We remove barriers to slow AI adoption caused by <strong>scalability and customization</strong></p>
              </article>
              <article className="dilemma-card dilemma-integration">
                <p>We bring certified expertise to <strong>integrate AI into existing workflows</strong></p>
                <div className="dilemma-code" aria-hidden="true">10110010<br />01100101<br />11001010<br />00110110<br />10101101</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio" aria-labelledby="portfolio-title">
        <div className="portfolio-head">
          <div>
            <p className="eyebrow">Selected work / Measurable outcomes</p>
            <h2 id="portfolio-title">Systems built to perform<br />in the real world.</h2>
          </div>
          <div>
            <p>From intelligent operations to customer-facing products, we turn complex requirements into secure, scalable platforms that teams can trust and grow.</p>
            <a href="mailto:hello@hitasoft.com">Discuss your project <Arrow diagonal /></a>
          </div>
        </div>
        <div className="portfolio-cases"><Case /></div>
      </section>

      <section className="specialist-section" id="specialist-capabilities" aria-labelledby="specialist-title">
        <div className="specialist-head">
          <div><p>Specialist capability</p><h2 id="specialist-title">Everything needed to move<br />AI into production.</h2></div>
          <p>Engage one service or bring the full practice together. Every capability connects cleanly with the next—from strategy and models to integration, security, and operations.</p>
        </div>
        <div className="specialist-marquee" aria-label="AI specialist capabilities">
          {specialistRows.map((row, rowIndex) => (
            <div className={`specialist-row specialist-row-${rowIndex + 1}`} key={rowIndex}>
              <div className="specialist-track">
                {[false, true].map((duplicate) => (
                  <div className="specialist-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
                    {row.map((capability, index) => (
                      <a className="specialist-card" id={duplicate ? undefined : `capability-${capability.title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} href="mailto:hello@hitasoft.com" key={`${capability.title}-${duplicate}`}>
                        <div><span>{String(rowIndex * 5 + index + 1).padStart(2, "0")}</span><small>{capability.label}</small><i aria-hidden="true">↗</i></div>
                        <h3>{capability.title}</h3>
                        <p>{capability.description}</p>
                        <strong>Explore capability <Arrow diagonal /></strong>
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="industries-head">
          <div><p className="eyebrow">Industry-focused engineering</p><h2>Built for the realities<br />of your industry.</h2></div>
          <p>Deep technology capability matters most when it understands the environment around it. Hitasoft combines engineering discipline with domain-aware workflows, security, compliance, and customer expectations.</p>
        </div>
        <div className="industries-grid">
          {industries.map(([number, title, description]) => <article id={`industry-${title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} key={title}><span>{number}</span><h3>{title}</h3><p>{description}</p><a href="mailto:hello@hitasoft.com" aria-label={`Discuss ${title} solutions`}>Discuss your project <Arrow /></a></article>)}
        </div>
      </section>

      <section className="section proof-section" id="resources">
        <div className="proof-grid">
          <blockquote><span className="quote-mark">“</span><p>Intelligence is only valuable when the system around it is observable, secure, and reliable. We engineer all four as one production architecture.</p><footer><div className="avatar">HI</div><div><b>Hitasoft Engineering</b><small>Applied AI and systems architecture</small></div></footer></blockquote>
          <div className="proof-stats"><div><b>01</b><span>architecture from model to production</span></div><div><b>24/7</b><span>observability across every service</span></div><div><b>100%</b><span>security designed into the stack</span></div><div><b>∞</b><span>systems built to learn and adapt</span></div></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-cta">
          <p>BUILD WHAT COMES NEXT</p>
          <h2>Turn your boldest idea into<br />a production-ready <em>AI system.</em></h2>
          <span>One senior engineering team for strategy, product, models, security, integration, and operations.</span>
          <div>
            <a className="footer-primary-button" href="mailto:hello@hitasoft.com">Start a project <Arrow /></a>
            <a className="footer-secondary-button" href="#portfolio">Explore our work <Arrow /></a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand" href="#top"><span className="brand-mark"><i /><i /><i /></span><span>Hitasoft</span></a>
            <p>We engineer practical AI products and resilient digital systems that create measurable business value.</p>
            <div className="footer-trust"><b>9+</b><span>connected AI capabilities<br />from one delivery team</span></div>
            <div className="footer-socials" aria-label="Hitasoft social channels"><span>in</span><span>𝕏</span><a href="mailto:hello@hitasoft.com" aria-label="Email Hitasoft">@</a></div>
          </div>

          <nav className="footer-link-column" aria-label="Company links">
            <strong>Company</strong>
            <a href="#top">About us</a><a href="#portfolio">Selected work</a><a href="#resources">Engineering</a><a href="mailto:hello@hitasoft.com">Contact</a>
          </nav>
          <nav className="footer-link-column" aria-label="Services links">
            <strong>Services</strong>
            <a href="#solutions">AI consulting</a><a href="#solutions">Product engineering</a><a href="#solutions">Generative AI</a><a href="#solutions">AI agents</a>
          </nav>

          <form className="footer-contact" action="mailto:hello@hitasoft.com" method="post" encType="text/plain">
            <strong>Tell us what you are building</strong>
            <input name="name" aria-label="Full name" placeholder="Full name" />
            <input name="email" type="email" aria-label="Email address" placeholder="Work email" />
            <textarea name="message" aria-label="Project message" placeholder="Project details" rows={4} />
            <button type="submit">Send message <Arrow /></button>
          </form>
        </div>
        <div className="footer-legal"><span>© 2026 Hitasoft Technologies. All rights reserved.</span><div><a href="#terms">Terms</a><a href="#privacy">Privacy</a><a href="#security">Security</a></div></div>
        <div className="footer-wordmark" aria-hidden="true">hitasoft</div>
      </footer>
    </main>
  );
}
