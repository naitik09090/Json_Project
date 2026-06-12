import React, { useEffect } from "react";
import "../css/StaticPages.css";

const sections = [
  {
    icon: "🚫", title: "Data Zero Collection",
    content: "We do not transmit, store, or see any JSON data you process. All operations happen 100% locally in your browser memory.",
  },
  {
    icon: "💾", title: "Secure Local Storage",
    content: "We use browser storage only to persist your editor state between refreshes. This data never leaves your device.",
  },
  {
    icon: "📊", title: "Anonymized Analytics",
    content: "We may collect basic usage metrics (page views) to optimize performance, but this never includes your JSON content.",
  },
  {
    icon: "🍪", title: "Cookie Policy",
    content: "JSONVIEW.ME does not set first-party cookies. Any analytics cookies are handled by third-party providers with anonymization enabled.",
  },
  {
    icon: "🔗", title: "External Links",
    content: "We may link to external tools or documentation. We are not responsible for their independent privacy practices.",
  },
  {
    icon: "🔄", title: "Policy Updates",
    content: "We may update this policy periodically. Significant changes will be clearly marked with a new effective date.",
  },
];

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy - JSONVIEW.ME | Secure & Anonymous";
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="static-page">
      <header className="static-hero">
        <h1>Privacy Policy</h1>
        <p>Your data is your business. We've built JSONVIEW.ME to be a completely blind, local-only processing environment.</p>
      </header>

      <div className="static-body">
        <section className="static-section">
          <blockquote className="static-highlight">
            "Your JSON content never leaves your browser. We collect zero personal data — period."
          </blockquote>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">Common Privacy Questions</h2>
          <div className="static-grid">
            {sections.map((sec, i) => (
              <div key={i} className="static-card">
                <span className="static-card-icon">{sec.icon}</span>
                <h3 className="static-card-title">{sec.title}</h3>
                <p className="static-card-desc">{sec.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">What We Do NOT Collect</h2>
          <ul className="static-list">
            <li><strong>No JSON Content:</strong> Your data is parsed locally and never sent to any server.</li>
            <li><strong>No User Accounts:</strong> No sign-ups, no emails, no profiling.</li>
            <li><strong>No Tracking:</strong> We do not use invasive tracking or fingerprinting techniques.</li>
            <li><strong>No Storage:</strong> We do not store any of your files or inputs on our backend.</li>
          </ul>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">Contact</h2>
          <p className="static-text">
            For any privacy-related inquiries or technical questions regarding data handling, please reach out to us at{" "}
            <a href="mailto:support@jsonview.me" style={{ color: "#6366f1", fontWeight: 700, textDecoration: "none" }}>
              support@jsonview.me
            </a>
          </p>
        </section>
      </div>

      <footer className="static-footer">
        © {new Date().getFullYear()} JSONVIEW.ME — All Rights Reserved.
      </footer>
    </div>
  );
}