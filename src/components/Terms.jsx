import React, { useEffect } from "react";
import "../css/StaticPages.css";

const termCards = [
  { icon: "📜", title: "1. Acceptance", desc: "By using JSONVIEWER, you agree to be bound by these formal terms and conditions." },
  { icon: "⚙️", title: "2. Proper Use", desc: "Use the tool only for lawful purposes. No malicious scripts or automated abuse allowed." },
  { icon: "🏛️", title: "3. Ownership", desc: "All code, design, and branding are the property of JSONVIEWER and protected by law." },
  { icon: "🛡️", title: "4. Data Privacy", desc: "We do not store or transmit your JSON content. Processing is 100% local." },
  { icon: "⚠️", title: "5. No Warranty", desc: "Provided 'as is'. Always verify your JSON output before production deployment." },
  { icon: "⚖️", title: "6. Liability", desc: "We are not liable for any damages resulting from the use or misuse of this application." },
];

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions - JSONVIEWER.io | Usage Policy";
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="static-page">
      <header className="static-hero">
        <h1>Terms & Conditions</h1>
        <p>Your guide to using JSONVIEWER responsibly and understanding our operational policies.</p>
      </header>

      <div className="static-body">
        <section className="static-section">
          <h2 className="static-section-title">Common Terms</h2>
          <div className="static-grid">
            {termCards.map((c, i) => (
              <div key={i} className="static-card">
                <span className="static-card-icon">{c.icon}</span>
                <h3 className="static-card-title">{c.title}</h3>
                <p className="static-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">Full Legal Terms</h2>
          
          <div className="static-card" style={{ padding: "40px" }}>
            <h3 style={{ marginBottom: "16px", color: "#0f172a" }}>1. Acceptance of Terms</h3>
            <p className="static-text">
              By accessing and using JSONVIEWER.io, you acknowledge that you have read, understood, and agree to be bound by these terms. 
              If you do not agree, please discontinue use of the service immediately.
            </p>

            <h3 style={{ margin: "32px 0 16px", color: "#0f172a" }}>2. Use of Service</h3>
            <p className="static-text">
              JSONVIEWER is a free service provided to the developer community. You agree not to:
            </p>
            <ul className="static-list">
              <li>Upload or process illegal, harmful, or offensive content.</li>
              <li>Attempt to reverse-engineer or disrupt the operation of the site.</li>
              <li>Use the service for bulk processing via automated scripts without permission.</li>
            </ul>

            <h3 style={{ margin: "32px 0 16px", color: "#0f172a" }}>3. Intellectual Property</h3>
            <p className="static-text">
              The intellectual property including the source code, design elements, and documentation of JSONVIEWER.io remains the 
              exclusive property of the site owners.
            </p>

            <h3 style={{ margin: "32px 0 16px", color: "#0f172a" }}>4. Accuracy of Data</h3>
            <p className="static-text">
              While we strive for 100% accuracy in our parsing and formatting engines, JSONVIEWER is provided "as is". 
              Users are encouraged to verify critical data before production implementation.
            </p>
          </div>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">Questions?</h2>
          <p className="static-text">
            If you have any questions regarding these terms, please contact us at{" "}
            <a href="mailto:support@jsonviewer.io" style={{ color: "#6366f1", fontWeight: 700, textDecoration: "none" }}>
              support@jsonviewer.io
            </a>
          </p>
        </section>
      </div>

      <footer className="static-footer">
        © {new Date().getFullYear()} JSONVIEWER.io — All Rights Reserved.
      </footer>
    </div>
  );
}
