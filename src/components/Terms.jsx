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

const termCards = [
  { icon: "✅", title: "1. Acceptance", desc: "By using JSON Viewer, you agree to these Terms & Conditions." },
  { icon: "⚙️", title: "2. Use of Service", desc: "Use only for lawful purposes. No illegal content, no abuse, no reverse engineering." },
  { icon: "🏛️", title: "3. Intellectual Property", desc: "All code, design, and content belong to JSON Viewer and are protected by law." },
  { icon: "🔒", title: "4. Your Data & Privacy", desc: "We do not store or transmit your JSON. All processing is local. See our Privacy Policy." },
  { icon: "⚠️", title: "5. No Warranties", desc: "Provided \"as is\". Verify JSON output before using in production environments." },
  { icon: "⚖️", title: "6. Liability", desc: "We are not liable for damages arising from your use of this service." },
];

export default function Terms() {
  return (
    <div style={S.page}>

      {/* ── Hero ── */}
      <div style={S.hero}>
        <h1 style={S.heroTitle}>Terms & Conditions</h1>
        <p style={S.heroSub}>Please read these terms carefully before using JSON Viewer.</p>
      </div>

      {/* ── Body ── */}
      <div style={S.body}>

        {/* Terms overview cards */}
        <section style={{ marginBottom: "1.8rem" }}>
          <h2 style={S.sectionTitle}>Terms Overview</h2>
          <div style={S.grid}>
            {termCards.map((c, i) => (
              <div key={i} style={S.card}>
                <div style={S.cardIcon}>{c.icon}</div>
                <div style={S.cardTitle}>{c.title}</div>
                <p style={S.cardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr style={S.divider} />

        {/* Full Terms */}
        <section style={{ marginBottom: "1.8rem" }}>
          <h2 style={S.sectionTitle}>Full Terms</h2>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b" }}>1. Acceptance of Terms</p>
          <p style={S.p}>By accessing or using JSON Viewer, you agree to be bound by these Terms & Conditions. If you do not agree, please stop using the service immediately.</p>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b", marginTop: "1rem" }}>2. Use of the Service</p>
          <p style={S.p}>JSON Viewer is a free, browser-based tool. You agree to use it only for lawful purposes. You must not:</p>
          <ul style={S.ul}>
            <li>Use the tool to process or distribute illegal or harmful content.</li>
            <li>Attempt to reverse-engineer, modify, or disrupt the service.</li>
            <li>Use automated scripts to abuse or overload the service.</li>
          </ul>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b", marginTop: "1rem" }}>3. Intellectual Property</p>
          <p style={S.p}>All code, design, branding, and content on this website is the property of JSON Viewer and protected by applicable intellectual property laws.</p>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b", marginTop: "1rem" }}>4. Your Data & Privacy</p>
          <p style={S.p}>
            JSON Viewer does not store or transmit your JSON. All processing is local. See our{" "}
            <a href="/privacy-policy" style={{ color: "#1e40af", fontWeight: 700, textDecoration: "none" }}>Privacy Policy</a>.
          </p>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b", marginTop: "1rem" }}>5. No Warranties</p>
          <p style={S.p}>JSON Viewer is provided "as is" without any warranties. Verify any JSON output before using it in production environments.</p>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b", marginTop: "1rem" }}>6. Limitation of Liability</p>
          <p style={S.p}>To the maximum extent permitted by law, JSON Viewer and its developers shall not be liable for any damages arising from your use of this service.</p>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b", marginTop: "1rem" }}>7. Third-Party Services</p>
          <p style={S.p}>We may use third-party services such as Google Analytics for anonymized usage insights, operating under their own privacy policies.</p>

          <p style={{ ...S.p, fontWeight: 700, color: "#1e293b", marginTop: "1rem" }}>8. Changes to These Terms</p>
          <p style={S.p}>We reserve the right to update these Terms at any time. Continued use after changes constitutes acceptance of the updated terms.</p>
        </section>

        <hr style={S.divider} />

        {/* Contact */}
        <section style={{ marginBottom: "1rem" }}>
          <h2 style={S.sectionTitle}>Questions?</h2>
          <p style={S.p}>
            For any questions about these Terms, contact us at{" "}
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
