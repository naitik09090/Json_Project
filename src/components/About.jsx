import React from "react";

const S = {
  page: {
    minHeight: "100%",
    background: "#f1f5f9",
    fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    color: "#1e293b",
  },
  hero: {
    background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0284c7 100%)",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    color: "#fff",
    width: "100%",
    textAlign: "center",
  },
  heroLabel: {
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    opacity: 0.7,
    marginBottom: "0.5rem",
    fontWeight: 600,
  },
  heroTitle: {
    fontSize: "2.4rem",
    fontWeight: 800,
    margin: "0 0 0.75rem",
    letterSpacing: "-0.5px",
  },
  heroSub: {
    fontSize: "1rem",
    opacity: 0.85,
    maxWidth: "520px",
    lineHeight: 1.7,
    margin: "0 auto",
  },
  body: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "2.5rem 2rem",
  },
  sectionTitle: {
    fontSize: "1rem",
    fontWeight: 700,
    color: "#1e40af",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    borderLeft: "4px solid #38bdf8",
    paddingLeft: "0.65rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  p: {
    fontSize: "0.95rem",
    lineHeight: 1.8,
    color: "#475569",
    margin: "0 0 0.5rem",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #e2e8f0",
    margin: "2rem 0",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  card: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    padding: "1.1rem 1.2rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
  },
  cardIcon: { fontSize: "1.5rem", marginBottom: "0.5rem" },
  cardTitle: { fontWeight: 700, fontSize: "0.88rem", color: "#0f172a", marginBottom: "0.25rem" },
  cardDesc: { fontSize: "0.82rem", color: "#64748b", lineHeight: 1.6, margin: 0 },
  ol: {
    paddingLeft: "1.4rem",
    color: "#475569",
    fontSize: "0.95rem",
    lineHeight: 2.1,
    margin: 0,
  },
  highlight: {
    background: "linear-gradient(90deg, #eff6ff, #f0f9ff)",
    border: "1px solid #bfdbfe",
    borderRadius: "10px",
    padding: "1.25rem 1.5rem",
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#1e40af",
    fontWeight: 600,
    lineHeight: 1.7,
  },
  footer: {
    borderTop: "1px solid #e2e8f0",
    background: "#fff",
    textAlign: "center",
    padding: "1rem 2rem",
    fontSize: "0.82rem",
    color: "#94a3b8",
  },
};

const features = [
  { icon: "🔍", title: "Instant Parsing", desc: "Parse and format any JSON in milliseconds — valid or slightly malformed." },
  { icon: "🌳", title: "Tree Explorer", desc: "Navigate deeply nested JSON with an interactive, collapsible tree." },
  { icon: "✏️", title: "Format & Minify", desc: "Beautify with proper indentation or collapse to a single compact line." },
  { icon: "🗑️", title: "Remove Whitespace", desc: "Strip all whitespace for compact, API-ready JSON." },
  { icon: "🔒", title: "100% Private", desc: "All processing is local — your JSON never leaves your device." },
  { icon: "🆓", title: "Always Free", desc: "No subscriptions, no limits, no sign-up. Ever." },
];

export default function About() {
  return (
    <div style={S.page}>

      {/* ── Hero ── */}
      <div style={S.hero}>
        <h1 style={S.heroTitle}>About</h1>
        <p style={S.heroSub}>A fast, free, and privacy-first tool to format, validate, and explore JSON — right in your browser.</p>
      </div>

      {/* ── Body ── */}
      <div style={S.body}>

        {/* What is it */}
        <section style={{ marginBottom: "1.8rem" }}>
          <h2 style={S.sectionTitle}>What is JSON Viewer?</h2>
          <p style={S.p}><strong>JSON Viewer</strong> is a lightweight, browser-based tool designed to help developers, analysts, and curious minds work with JSON data quickly and easily.</p>
          <p style={S.p}>No sign-up. No installation. No server uploads. Just paste your JSON and get instant results — beautified, validated, and ready to explore.</p>
        </section>

        <hr style={S.divider} />

        {/* Features */}
        <section style={{ marginBottom: "1.8rem" }}>
          <h2 style={S.sectionTitle}>Features</h2>
          <div style={S.grid}>
            {features.map((f, i) => (
              <div key={i} style={S.card}>
                <div style={S.cardIcon}>{f.icon}</div>
                <div style={S.cardTitle}>{f.title}</div>
                <p style={S.cardDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={S.divider} />

        {/* Mission */}
        <section style={{ marginBottom: "1.8rem" }}>
          <h2 style={S.sectionTitle}>Our Mission</h2>
          <div style={S.highlight}>
            "To make JSON data instantly readable, explorable, and understandable — for everyone, in every browser, for free."
          </div>
          <p style={{ ...S.p, marginTop: "1rem" }}>We built JSON Viewer because developers deserve tools that just work. No bloat, no paywalls, no accounts — just the fastest path from raw JSON to human-readable clarity.</p>
        </section>

        <hr style={S.divider} />

        {/* How to Use */}
        <section style={{ marginBottom: "1rem" }}>
          <h2 style={S.sectionTitle}>How to Use</h2>
          <ol style={S.ol}>
            <li>Paste your raw JSON into the <strong>Text</strong> editor on the home page.</li>
            <li>Click <strong>Format</strong> to beautify and validate it.</li>
            <li>Switch to <strong>Viewer</strong> for an interactive tree explorer.</li>
            <li>Use <strong>Remove Whitespace</strong> to minify, or <strong>Clear</strong> to start fresh.</li>
          </ol>
        </section>

      </div>

      {/* ── Footer ── */}
      <footer style={S.footer}>
        © {new Date().getFullYear()} JSON Viewer — All Rights Reserved.
      </footer>

    </div>
  );
}