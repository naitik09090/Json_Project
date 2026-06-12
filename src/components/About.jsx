import React, { useEffect } from "react";
import "../css/StaticPages.css";

const features = [
  { icon: "⚡", title: "Instant Parsing", desc: "Format and validate even massive JSON files in milliseconds. Our browser-native engine handles payloads of any size without lag or timeouts." },
  { icon: "🌳", title: "Interactive Tree View", desc: "Navigate deeply nested objects and arrays with our intuitive, collapsible tree explorer. Expand, collapse, and search nodes with a single click." },
  { icon: "✏️", title: "JSON Beautifier", desc: "Transform compact, unreadable strings into clean, properly indented code in one click. Choose custom indentation levels (2 or 4 spaces)." },
  { icon: "🗜️", title: "JSON Minifier", desc: "Strip all unnecessary whitespace and produce ultra-compact strings optimized for API transmission, caching, and network bandwidth savings." },
  { icon: "🔒", title: "100% Private & Secure", desc: "Every parsing, formatting, and validation operation runs entirely inside your browser. Your data never touches our servers — ever." },
  { icon: "🛠️", title: "Error Detection", desc: "Real-time syntax linting highlights malformed JSON instantly. Pinpoint trailing commas, missing quotes, and invalid values in seconds." },
  { icon: "📋", title: "One-Click Copy", desc: "Copy formatted or minified JSON to your clipboard with a single button press — no manual selection required." },
  { icon: "🆓", title: "Completely Free", desc: "No subscriptions, no rate limits, no sign-up or login required. JSONVIEW.ME is a free tool for every developer, forever." },
];

const useCases = [
  { icon: "🧑‍💻", title: "Frontend Developers", desc: "Debug REST API responses, inspect GraphQL payloads, and format fetch() results without switching out of your workflow." },
  { icon: "🔧", title: "Backend Engineers", desc: "Validate microservice request/response schemas, troubleshoot webhook payloads, and inspect database query outputs." },
  { icon: "📊", title: "Data Analysts", desc: "Explore deeply nested JSON exports from analytics tools, data warehouses, and third-party platforms with zero code required." },
  { icon: "🔐", title: "Security Researchers", desc: "Inspect JWT token payloads, API authentication responses, and encoded data structures in a completely private environment." },
  { icon: "🎓", title: "Students & Learners", desc: "Understand JSON structure visually. The tree viewer makes it easy to learn how objects, arrays, and nested values relate to each other." },
  { icon: "⚙️", title: "DevOps Engineers", desc: "Parse Kubernetes manifests, Docker configs, Terraform outputs, and CI/CD pipeline JSON configs quickly and accurately." },
];

// const stats = [
//   { value: "1M+", label: "JSON Files Processed" },
//   { value: "50K+", label: "Monthly Active Developers" },
//   { value: "0 bytes", label: "Data Sent to Servers" },
//   { value: "100%", label: "Free Forever" },
// ];

const faqs = [
  {
    q: "Is JSONVIEW.ME completely free to use?",
    a: "Yes. JSONVIEW.ME is entirely free with no hidden costs. There are no premium tiers, no API rate limits, and no registration required. You can use all features — formatting, validation, minification, and tree exploration — without any restrictions."
  },
  {
    q: "Is my JSON data safe when I use JSONVIEW.ME?",
    a: "Absolutely. All JSON parsing and processing runs exclusively in your browser using JavaScript's native engine. Your data never leaves your device. We have no backend server receiving your input, so there is zero risk of data exposure or interception."
  },
  {
    q: "What is the maximum JSON size JSONVIEW.ME can handle?",
    a: "There is no hard limit enforced by our platform. The practical limit depends on your device's available browser memory. Most modern computers can comfortably handle JSON files up to several hundred megabytes directly in the browser."
  },
  {
    q: "Does JSONVIEW.ME support JSON5 or other JSON variants?",
    a: "Our core validator enforces the RFC 8259 standard JSON specification. For JSON5 support (which allows comments and trailing commas), we provide repair utilities that attempt to convert relaxed formats into valid standard JSON automatically."
  },
  {
    q: "Can I use JSONVIEW.ME offline?",
    a: "Once the page is loaded, the core formatting and validation tools work without any network connection since all processing is handled client-side. Full offline PWA support is on our development roadmap."
  },
  {
    q: "How is JSONVIEW.ME different from other JSON formatters?",
    a: "Most JSON formatters send data to a remote server for processing — creating security and privacy risks. JSONVIEW.ME processes everything locally in your browser, combining zero data collection with a premium UI, an interactive tree viewer, and real-time error detection in one integrated platform."
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About JSONVIEW.ME | Free Online JSON Formatter, Validator & Tree Viewer";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Learn about JSONVIEW.ME — the free, private, browser-based JSON formatter, validator, beautifier, and interactive tree viewer trusted by 50,000+ developers worldwide.");
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="static-page">
      <header className="static-hero">
        <div className="hero-decor-line"></div>
        <h1>About JSONVIEW</h1>
        <p>
          The free, privacy-first JSON tool that developers trust — built to format, validate, and explore
          JSON data instantly without ever sending your data to a server.
        </p>
      </header>

      <div className="static-body">

        {/* ── Mission Section ── */}
        <section className="static-section">
          <h2 className="static-section-title">Our Mission: Making JSON Effortless</h2>
          <p className="static-text">
            <strong>JSONVIEW.ME</strong> was founded on a single, clear principle: developers deserve a fast,
            private, and reliable JSON tool that respects their data. In an era where even simple utility
            websites collect personal information, track usage patterns, and upload files to remote servers,
            we chose a radically different approach — every single operation on JSONVIEW.ME happens
            <strong> entirely inside your browser</strong>.
          </p>
          <p className="static-text">
            JSON (JavaScript Object Notation) is the backbone of modern software development. REST APIs,
            configuration files, NoSQL databases, web storage, and data pipelines all rely on JSON as their
            universal language. Yet working with raw JSON strings — especially large, deeply nested, or
            malformed payloads — remains a daily frustration for developers at every experience level.
            A missing comma, an extra bracket, or a misplaced quotation mark can cause runtime exceptions
            that take hours to debug.
          </p>
          <p className="static-text">
            JSONVIEW.ME eliminates that frustration. Paste your JSON. In under a millisecond, our
            browser-native engine validates the syntax, highlights any errors with precise location
            information, and formats the output into clean, human-readable code with proper indentation.
            You can then explore the entire data structure in our interactive tree view — expanding and
            collapsing objects and arrays at any depth — or minify the JSON back into a compact string
            optimized for API requests and network transmission.
          </p>

          <blockquote className="static-highlight">
            "To simplify data visualization and empower every developer with the world's most accessible,
            secure, and powerful JSON interface — completely free, forever."
          </blockquote>

          <p className="static-text">
            We believe that great developer tools should be invisible: fast, always available, and requiring
            zero friction to use. No sign-up screens. No paywalls. No server round-trips. Just copy, paste,
            and get immediate, actionable results. That philosophy drives every design and engineering
            decision we make at JSONVIEW.ME.
          </p>
        </section>

        {/* ── Stats Bar ── */}
        {/* <section className="static-section">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "24px",
            background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
            borderRadius: "20px",
            padding: "40px 32px",
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.4rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.03em" }}>{s.value}</div>
                <div style={{ fontSize: "0.9rem", color: "#c7d2fe", fontWeight: "600", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section> */}

        {/* ── Features Section ── */}
        <section className="static-section">
          <h2 className="static-section-title">Everything You Need to Work with JSON</h2>
          <p className="static-text">
            JSONVIEW.ME is not a single-purpose formatter. It is a comprehensive JSON workspace with a
            suite of tools designed to cover every stage of your JSON workflow — from initial validation
            and debugging through exploration, editing, and production-ready minification.
          </p>
          <div className="static-grid">
            {features.map((f, i) => (
              <div key={i} className="static-card">
                <span className="static-card-icon">{f.icon}</span>
                <h3 className="static-card-title">{f.title}</h3>
                <p className="static-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="static-section">
          <h2 className="static-section-title">How JSONVIEW.ME Works</h2>
          <p className="static-text">
            The core engine of JSONVIEW.ME is built on the browser's native <code style={{ background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px", color: "#e11d48", fontWeight: 600 }}>JSON.parse()</code> API,
            augmented with our own custom error-recovery and formatting layer. This means parsing is
            not only zero-latency (no network round-trip required), but it is also perfectly accurate —
            matching the same specification your actual JavaScript runtime uses to process JSON.
          </p>
          <p className="static-text">
            When you paste JSON into our editor, the following happens in real time:
          </p>
          <ol className="static-list">
            <li><strong>Tokenization:</strong> The raw string is scanned character by character to identify structural tokens — objects <code style={{ background: "#f1f5f9", padding: "2px 4px", borderRadius: "4px", color: "#e11d48", fontSize: "0.9em" }}>{"{}"}</code>, arrays <code style={{ background: "#f1f5f9", padding: "2px 4px", borderRadius: "4px", color: "#e11d48", fontSize: "0.9em" }}>{"[]"}</code>, strings, numbers, booleans, and null values.</li>
            <li><strong>Validation:</strong> The parser checks the token stream against the JSON specification (RFC 8259). Any violation — such as a trailing comma, unquoted key, or JavaScript comment — triggers an annotated error message pointing to the exact character position.</li>
            <li><strong>Formatting:</strong> Valid JSON is reconstructed with normalized whitespace and consistent indentation. You can choose between 2-space and 4-space indent styles.</li>
            <li><strong>Tree Construction:</strong> A traversal algorithm walks the parsed object graph to build the interactive tree view, with lazy rendering for performance on large payloads.</li>
            <li><strong>Minification:</strong> The reverse operation — stripping all whitespace tokens — produces the most compact valid representation of your data.</li>
          </ol>
          <p className="static-text">
            The entire pipeline runs synchronously in your browser's main thread for small inputs, and
            switches to a Web Worker thread for large payloads to keep the UI responsive. No data is
            transmitted, cached on a CDN, or logged at any point.
          </p>
        </section>

        {/* ── Who Uses JSONVIEW.ME ── */}
        <section className="static-section">
          <h2 className="static-section-title">Who Uses JSONVIEW.ME?</h2>
          <p className="static-text">
            Our tool serves a broad, global community of technical professionals. From solo indie
            developers to engineering teams at enterprise software companies, the need to quickly
            inspect and validate JSON is universal across every software discipline.
          </p>
          <div className="static-grid">
            {useCases.map((u, i) => (
              <div key={i} className="static-card">
                <span className="static-card-icon">{u.icon}</span>
                <h3 className="static-card-title">{u.title}</h3>
                <p className="static-card-desc">{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Privacy Commitment ── */}
        <section className="static-section">
          <h2 className="static-section-title">Our Privacy Commitment</h2>
          <p className="static-text">
            Privacy is not an afterthought at JSONVIEW.ME — it is the architectural foundation of
            the product. Unlike competing tools that process your JSON on remote servers (creating
            data exposure, compliance, and latency risks), we built JSONVIEW.ME to operate with
            <strong> zero data transmission</strong>.
          </p>
          <p className="static-text">
            This is particularly important for enterprise developers who work with JSON payloads
            containing sensitive information: customer records, financial transactions, healthcare data,
            authentication tokens, internal API keys, and proprietary business logic. With JSONVIEW.ME,
            you can safely inspect and format these payloads knowing that the data never leaves your
            local environment.
          </p>
          <ul className="static-list">
            <li><strong>No Server Upload:</strong> Your JSON is parsed by the JavaScript engine in your browser tab — the same engine that runs your web applications.</li>
            <li><strong>No Account Required:</strong> We collect zero personal information. There are no email addresses, user profiles, or authentication tokens on our systems associated with your usage.</li>
            <li><strong>No Persistent Logging:</strong> We do not log or store JSON inputs, outputs, or any content you interact with in the editor.</li>
            <li><strong>No Third-Party Data Sharing:</strong> We do not sell, share, or transfer any usage data to third-party advertising or analytics platforms.</li>
            <li><strong>GDPR-Compatible Architecture:</strong> Because we collect zero personal data, our tool is inherently compatible with GDPR, CCPA, HIPAA, and other data protection frameworks by design.</li>
          </ul>
        </section>

        {/* ── FAQ Section ── */}
        <section className="static-section">
          <h2 className="static-section-title">Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="static-card" style={{ padding: "28px 32px" }}>
                <h3 style={{ fontSize: "1.05rem", fontWeight: "700", color: "#0f172a", marginBottom: "10px" }}>
                  {faq.q}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.7", margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technology Stack ── */}
        <section className="static-section">
          <h2 className="static-section-title">Built with Modern Web Technology</h2>
          <p className="static-text">
            JSONVIEW.ME is built as a modern Single Page Application (SPA) using <strong>React 18</strong>
            for the component layer, <strong>Vite</strong> for ultra-fast bundling and hot module
            replacement during development, and <strong>React Router</strong> for client-side navigation.
            The JSON processing engine uses the browser's native <code style={{ background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px", color: "#e11d48", fontWeight: 600 }}>JSON.parse()</code> and
            <code style={{ background: "#f1f5f9", padding: "2px 6px", borderRadius: "4px", color: "#e11d48", fontWeight: 600 }}>JSON.stringify()</code> APIs for maximum performance and spec compliance.
          </p>
          <p className="static-text">
            The interactive tree viewer is powered by a custom recursive rendering component with
            virtualization for large payloads. All CSS is hand-crafted vanilla CSS with no external
            framework dependencies, keeping our bundle size minimal and performance optimal.
            JSONVIEW.ME consistently scores in the <strong>95+ range on Google Lighthouse</strong>
            for Performance, Accessibility, Best Practices, and SEO.
          </p>
          <p className="static-text">
            The site is deployed on a global CDN with automatic edge caching, ensuring that the
            application assets load in under 200ms from any location worldwide. Combined with our
            zero-server-round-trip processing model, this makes JSONVIEW.ME one of the fastest
            JSON tools available on the web today.
          </p>
        </section>

        {/* ── CTA Section ── */}
        <section className="static-section" style={{ textAlign: "center" }}>
          <div style={{
            background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
            border: "1px solid #e0e7ff",
            borderRadius: "24px",
            padding: "60px 40px",
          }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "800", color: "#0f172a", marginBottom: "16px", letterSpacing: "-0.02em" }}>
              Start Formatting JSON Instantly
            </h2>
            <p style={{ fontSize: "1.1rem", color: "#475569", marginBottom: "32px", maxWidth: "560px", margin: "0 auto 32px" }}>
              No account needed. No data uploaded. Just paste your JSON and get beautiful, validated results in milliseconds.
            </p>
            <a
              href="/"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #6366f1, #4f46e5)",
                color: "#fff",
                padding: "16px 40px",
                borderRadius: "12px",
                fontWeight: "700",
                fontSize: "1.05rem",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(99,102,241,0.35)",
                transition: "all 0.2s",
              }}
            >
              Open JSON Formatter →
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}