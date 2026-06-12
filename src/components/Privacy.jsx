import React, { useEffect } from "react";
import "../css/StaticPages.css";

const pillars = [
  { icon: "🚫", title: "Zero Data Collection", desc: "We do not transmit, store, log, or inspect any JSON data you process. Every formatting, validation, and tree-rendering operation executes 100% locally inside your browser's JavaScript engine. Your data never touches our infrastructure." },
  { icon: "💾", title: "Local-Only Processing", desc: "JSONVIEW.ME uses the browser's built-in JSON.parse() and JSON.stringify() APIs. No server, no cloud function, no edge worker ever receives your input. The processing chain begins and ends entirely on your device." },
  { icon: "🛡️", title: "No User Profiling", desc: "We do not build behavioral profiles, track individual sessions, or correlate your usage patterns over time. There are no persistent identifiers, fingerprinting scripts, or cross-site tracking mechanisms on JSONVIEW.ME." },
  { icon: "🍪", title: "Cookie-Free by Design", desc: "JSONVIEW.ME does not set first-party tracking or advertising cookies. We do not use cookies to identify you, remember your account, or display personalized advertisements. Any temporary browser storage (localStorage) is used only to preserve your in-editor session for your convenience." },
  { icon: "📊", title: "Privacy-Safe Analytics", desc: "We collect only basic, anonymized, aggregated page view metrics (e.g., total daily visitors, most visited pages) for the sole purpose of optimizing site performance. This data contains no personal identifiers, no IP address logging, and no individual tracking." },
  { icon: "🔗", title: "Third-Party Responsibility", desc: "JSONVIEW.ME may contain links to external documentation, GitHub repositories, and developer resources. We are not responsible for the privacy practices of those external websites. We recommend reviewing their individual privacy policies before sharing data with them." },
];

const rights = [
  { title: "Right to Know", desc: "You have the right to know what data we hold about you. The short answer: none. We collect zero personal identifiable information about our users." },
  { title: "Right to Access", desc: "Since we store no personal data, there is no data to access or download. Your JSON content processed on JSONVIEW.ME never persists beyond your browser session." },
  { title: "Right to Erasure", desc: "Your browser's local storage (which stores only your editor state preferences) can be cleared at any time through your browser settings. Doing so removes all JSONVIEW.ME data from your device." },
  { title: "Right to Object", desc: "If you object to even the minimal anonymized analytics we collect, you can use a browser extension to block analytics scripts, or use our tool with JavaScript analytics blocked — the core JSON tools will continue to function normally." },
];

const dataTypes = [
  { category: "JSON Editor Content", collected: "Never", storage: "Browser Memory Only", purpose: "Local processing" },
  { category: "IP Address", collected: "Never", storage: "Not stored", purpose: "Not collected" },
  { category: "Page Views (anonymized)", collected: "Aggregated totals only", storage: "Analytics provider", purpose: "Site performance" },
  { category: "LocalStorage (editor state)", collected: "Device-local only", storage: "Your browser only", purpose: "Session convenience" },
  { category: "Cookies", collected: "None set", storage: "N/A", purpose: "N/A" },
  { category: "Personal Info", collected: "Never", storage: "Not stored", purpose: "Not collected" },
];

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — JSONVIEW.ME | Zero Data Collection, 100% Private JSON Tool";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "JSONVIEW.ME Privacy Policy — We collect zero personal data. All JSON processing runs 100% locally in your browser. No server uploads, no tracking, no cookies. Full GDPR & CCPA compatible.");
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="static-page">
      <header className="static-hero">
        <div className="hero-decor-line"></div>
        <h1>Privacy Policy</h1>
        <p>
          Your data belongs to you — not us. JSONVIEW.ME is architecturally designed to collect zero 
          personal data. Every operation runs locally in your browser, with nothing sent to any server.
        </p>
      </header>

      <div className="static-body">

        {/* ── Effective Date & Overview ── */}
        <section className="static-section">
          <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginBottom: "24px", fontWeight: 600 }}>
            Effective Date: June 12, 2026 &nbsp;|&nbsp; Last Updated: June 12, 2026
          </p>

          <blockquote className="static-highlight">
            "Your JSON content never leaves your browser. JSONVIEW.ME collects zero personal data — 
            period. This is not just a policy promise; it is a technical guarantee enforced by our architecture."
          </blockquote>

          <p className="static-text">
            This Privacy Policy describes how <strong>JSONVIEW.ME</strong> ("we," "our," or "the Service") 
            handles information when you access or use our online JSON formatting, validation, and 
            visualization tool at <strong>jsonview.me</strong>. We are committed to absolute transparency 
            about our data practices, which is why this document is comprehensive, plain-language, 
            and updated whenever our practices change.
          </p>
          <p className="static-text">
            The fundamental principle governing every decision at JSONVIEW.ME is simple: 
            <strong> we cannot misuse data we never collect.</strong> By designing our system so that 
            all JSON processing occurs exclusively within your browser's JavaScript runtime, we have 
            structurally eliminated the risk of data breaches, unauthorized access, or misuse of your 
            sensitive payloads — because they never reach our infrastructure.
          </p>
        </section>

        {/* ── Core Privacy Pillars ── */}
        <section className="static-section">
          <h2 className="static-section-title">Our Six Privacy Pillars</h2>
          <p className="static-text">
            Our commitment to privacy is built on six non-negotiable principles. These are not aspirational 
            goals — they are technical realities enforced by how JSONVIEW.ME is architected and deployed.
          </p>
          <div className="static-grid">
            {pillars.map((p, i) => (
              <div key={i} className="static-card">
                <span className="static-card-icon">{p.icon}</span>
                <h3 className="static-card-title">{p.title}</h3>
                <p className="static-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── What We Do NOT Collect ── */}
        <section className="static-section">
          <h2 className="static-section-title">What We Do Not Collect — Ever</h2>
          <p className="static-text">
            To be completely transparent, here is an explicit enumeration of every category of data 
            that JSONVIEW.ME does <strong>not</strong> collect, store, or process on our end:
          </p>
          <ul className="static-list">
            <li><strong>Your JSON content:</strong> The text you paste or type into our editor is parsed locally by your browser. We have no mechanism — technical or otherwise — to read, capture, or log your JSON input or output.</li>
            <li><strong>Your IP address:</strong> Our application layer does not log IP addresses associated with individual tool usage sessions. Standard CDN infrastructure may temporarily process connection metadata, but this is not retained or linked to individual users.</li>
            <li><strong>Your identity:</strong> We do not require, request, or infer your name, email address, employer, location, or any other personal identifying information. JSONVIEW.ME works anonymously by design.</li>
            <li><strong>Your device fingerprint:</strong> We do not use browser fingerprinting techniques (canvas fingerprinting, WebGL fingerprinting, font enumeration, etc.) to identify or track individual users across sessions.</li>
            <li><strong>Your browsing history:</strong> We do not track which other websites you visit before or after using JSONVIEW.ME, and we do not embed third-party tracking pixels or social media beacons.</li>
            <li><strong>Your behavioral patterns:</strong> We do not record what you type, how long you spend on individual features, your mouse movement patterns, or any behavioral telemetry that could be used to profile you.</li>
            <li><strong>File uploads or downloads:</strong> JSONVIEW.ME does not have a file upload endpoint. All JSON processing is client-side. There are no files stored on our servers originating from user input.</li>
          </ul>
        </section>

        {/* ── Data Table ── */}
        <section className="static-section">
          <h2 className="static-section-title">Data Processing Summary Table</h2>
          <p className="static-text">
            The following table provides a transparent summary of all data types our tool interacts with 
            and how each is handled:
          </p>
          <div style={{ overflowX: "auto", maxWidth: "100%", border: "1px solid #e2e8f0", borderRadius: "12px", marginTop: "24px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e2e8f0" }}>Data Category</th>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e2e8f0" }}>Collected?</th>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e2e8f0" }}>Storage Location</th>
                  <th style={{ padding: "14px 18px", textAlign: "left", fontWeight: 700, color: "#0f172a", borderBottom: "1px solid #e2e8f0" }}>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {dataTypes.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < dataTypes.length - 1 ? "1px solid #e2e8f0" : "none" }}>
                    <td style={{ padding: "14px 18px", fontWeight: 600, color: "#1e293b" }}>{row.category}</td>
                    <td style={{ padding: "14px 18px", color: row.collected === "Never" || row.collected === "None set" ? "#16a34a" : "#475569", fontWeight: row.collected === "Never" || row.collected === "None set" ? 700 : 400 }}>{row.collected}</td>
                    <td style={{ padding: "14px 18px", color: "#475569" }}>{row.storage}</td>
                    <td style={{ padding: "14px 18px", color: "#475569" }}>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Browser Local Storage ── */}
        <section className="static-section">
          <h2 className="static-section-title">Browser Local Storage</h2>
          <p className="static-text">
            To improve your experience, JSONVIEW.ME may use your browser's <strong>localStorage API</strong> 
            to preserve your editor state between page refreshes. This means your last JSON input, 
            indentation preference, or view mode (text vs. tree) may be retained locally so you do not 
            lose your work if you accidentally refresh the page.
          </p>
          <p className="static-text">
            This data lives exclusively on your device. It is not transmitted to any server. It is not 
            accessible to any other website. You can inspect exactly what is stored by opening your 
            browser's Developer Tools and navigating to Application → Local Storage → jsonview.me. 
            You can delete this stored data at any time through your browser's settings, or by clearing 
            the site data for jsonview.me.
          </p>
          <p className="static-text">
            We do <strong>not</strong> use sessionStorage, IndexedDB, or any other persistent client-side 
            storage mechanism beyond the minimal localStorage entries described above.
          </p>
        </section>

        {/* ── Compliance ── */}
        <section className="static-section">
          <h2 className="static-section-title">Regulatory Compliance</h2>
          <p className="static-text">
            Because JSONVIEW.ME is architecturally designed to collect zero personal data, we are 
            inherently aligned with the world's leading data protection regulations:
          </p>
          <ul className="static-list">
            <li><strong>GDPR (General Data Protection Regulation — EU/UK):</strong> We have no personal data processing activities that require consent, legitimate interest assessments, or Data Processing Agreements. Our zero-collection model means GDPR Article 6 lawful basis requirements do not apply to us for user data.</li>
            <li><strong>CCPA (California Consumer Privacy Act):</strong> We do not sell, share, or disclose personal information about California residents because we collect no such information. CCPA opt-out rights are fully satisfied by default.</li>
            <li><strong>HIPAA (Health Insurance Portability and Accountability Act):</strong> While we are not a covered healthcare entity, our local-only processing model means HIPAA-governed health data processed on JSONVIEW.ME never leaves the user's environment — making it safe for healthcare developers to inspect JSON structures containing PHI for development and debugging purposes.</li>
            <li><strong>COPPA (Children's Online Privacy Protection Act):</strong> We do not collect any information from users of any age. Our tool is safe to use for educational contexts involving minors.</li>
          </ul>
        </section>

        {/* ── Your Rights ── */}
        <section className="static-section">
          <h2 className="static-section-title">Your Privacy Rights</h2>
          <p className="static-text">
            Under various data protection frameworks, you have specific rights regarding your personal 
            data. Here is how those rights apply in the context of JSONVIEW.ME:
          </p>
          <div className="static-grid">
            {rights.map((r, i) => (
              <div key={i} className="static-card">
                <h3 className="static-card-title">{r.title}</h3>
                <p className="static-card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Security ── */}
        <section className="static-section">
          <h2 className="static-section-title">Security Measures</h2>
          <p className="static-text">
            Although we collect virtually no data, we take the security of the JSONVIEW.ME application 
            itself seriously to protect the integrity of the tool our users rely on:
          </p>
          <ul className="static-list">
            <li><strong>HTTPS Everywhere:</strong> JSONVIEW.ME is served exclusively over HTTPS with TLS 1.3, ensuring that all communication between your browser and our CDN is encrypted in transit.</li>
            <li><strong>Content Security Policy (CSP):</strong> We implement strict Content Security Policy headers to prevent cross-site scripting (XSS) attacks and unauthorized script injection.</li>
            <li><strong>Subresource Integrity:</strong> All third-party scripts loaded by JSONVIEW.ME are verified with cryptographic integrity hashes to prevent supply-chain tampering.</li>
            <li><strong>No Dynamic Server-Side Code:</strong> JSONVIEW.ME is a static web application hosted on a global CDN. There is no server-side application code, no database, and no dynamic request handling that could be compromised to expose user data.</li>
            <li><strong>Regular Dependency Audits:</strong> We regularly audit our npm dependency tree using automated security scanners to identify and patch known vulnerabilities in third-party libraries.</li>
          </ul>
        </section>

        {/* ── Policy Changes ── */}
        <section className="static-section">
          <h2 className="static-section-title">Changes to This Privacy Policy</h2>
          <p className="static-text">
            We may update this Privacy Policy from time to time to reflect changes in our practices, 
            the features we offer, or applicable legal requirements. When we make material changes, we 
            will update the "Last Updated" date at the top of this page. We encourage you to review 
            this policy periodically to stay informed.
          </p>
          <p className="static-text">
            Our fundamental commitment — that JSONVIEW.ME will never collect, transmit, or store your 
            JSON content — is a permanent architectural constraint, not a policy choice that can be 
            reversed by a future policy update. Changes to this policy will never weaken our core 
            privacy guarantee.
          </p>
        </section>

        {/* ── Contact ── */}
        <section className="static-section">
          <h2 className="static-section-title">Contact Us About Privacy</h2>
          <p className="static-text">
            If you have any questions, concerns, or requests related to this Privacy Policy or our 
            data handling practices, please contact our privacy team directly. We are committed to 
            responding to all privacy inquiries within 48 hours.
          </p>
          <div className="static-card" style={{ padding: "32px" }}>
            <p style={{ margin: 0, fontSize: "1rem", color: "#475569", lineHeight: "1.7" }}>
              📧 <strong>Privacy Inquiries:</strong>{" "}
              <a href="mailto:support@jsonview.me" style={{ color: "#6366f1", fontWeight: 700, textDecoration: "none" }}>
                support@jsonview.me
              </a>
              <br />
              <span style={{ fontSize: "0.9rem", marginTop: "8px", display: "block", color: "#64748b" }}>
                Please include "Privacy Policy" in your email subject line. We respond within 2 business days.
              </span>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}