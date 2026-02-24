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
  ul: {
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

const sections = [
  {
    icon: "🚫", title: "Data We Do NOT Collect",
    content: "We do not collect, store, or transmit any JSON data you paste into the editor. All processing happens entirely in your browser.",
    list: [
      "No JSON content is sent to any server.",
      "No user accounts or sign-ups required.",
      "No passwords or personal data collected.",
      "No uploaded files stored anywhere.",
    ],
  },
  {
    icon: "💾", title: "Local Storage",
    content: "JSON Viewer uses your browser's localStorage solely to remember your JSON between page refreshes. This data is stored locally on your device only and is never sent to us. Clear it anytime using the Clear button.",
  },
  {
    icon: "📊", title: "Usage Analytics",
    content: "We may collect anonymized usage data (e.g. page views, browser type) to help improve the app. This data does not include any JSON content and cannot identify you personally.",
  },
  {
    icon: "🍪", title: "Cookies",
    content: "JSON Viewer itself does not use cookies. If analytics are active, third-party scripts may set cookies per their own privacy policies. You may disable cookies through your browser settings.",
  },
  {
    icon: "🔗", title: "Third-Party Links",
    content: "Our site may contain links to external websites. We are not responsible for their content or privacy practices.",
  },
  {
    icon: "🔄", title: "Changes to This Policy",
    content: "We may update this Privacy Policy from time to time. Significant changes will be reflected with a new Effective Date.",
  },
];

export default function Privacy() {
  return (
    <div style={S.page}>

      {/* ── Hero ── */}
      <div style={S.hero}>
        <h1 style={S.heroTitle}>Privacy Policy</h1>
        <p style={S.heroSub}>Your data stays on your device. All processing happens 100% locally in your browser.</p>
      </div>

      {/* ── Body ── */}
      <div style={S.body}>

        {/* Highlight banner */}
        <div style={{ ...S.highlight, marginBottom: "2rem" }}>
          "Your JSON data never leaves your browser. We collect nothing — period."
        </div>

        {/* Policy cards in 3-column grid */}
        <section style={{ marginBottom: "1.8rem" }}>
          <h2 style={S.sectionTitle}>Our Privacy Commitments</h2>
          <div style={S.grid}>
            {sections.map((sec, i) => (
              <div key={i} style={S.card}>
                <div style={S.cardIcon}>{sec.icon}</div>
                <div style={S.cardTitle}>{sec.title}</div>
                <p style={S.cardDesc}>{sec.content}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={S.divider} />

        {/* What we DO NOT collect detail */}
        <section style={{ marginBottom: "1.8rem" }}>
          <h2 style={S.sectionTitle}>Data We Do NOT Collect</h2>
          <p style={S.p}>We want to be crystal clear about what we do not collect when you use JSON Viewer:</p>
          <ul style={S.ul}>
            <li>No JSON content is ever sent to any server.</li>
            <li>No user accounts or sign-ups are required.</li>
            <li>No passwords or personal data are collected.</li>
            <li>No uploaded files are stored anywhere.</li>
          </ul>
        </section>

        <hr style={S.divider} />

        {/* Contact */}
        <section style={{ marginBottom: "1rem" }}>
          <h2 style={S.sectionTitle}>Contact</h2>
          <p style={S.p}>
            If you have any privacy-related questions, please contact us at{" "}
            <a href="mailto:support@jsonviewer.app" style={{ color: "#1e40af", fontWeight: 700, textDecoration: "none" }}>
              support@jsonviewer.app
            </a>
          </p>
        </section>

      </div>

      {/* ── Footer ── */}
      <footer style={S.footer}>
        © {new Date().getFullYear()} JSON Viewer — All Rights Reserved.
      </footer>

    </div>
  );
}