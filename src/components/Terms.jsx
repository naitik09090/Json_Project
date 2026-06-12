import React, { useEffect, useState } from "react";
import "../css/StaticPages.css";

const termSummaryCards = [
  { icon: "📜", title: "1. Acceptance of Terms", desc: "By accessing or using JSONVIEW.ME in any capacity, you confirm you have read, understood, and agreed to be bound by these Terms and Conditions in their entirety." },
  { icon: "⚙️", title: "2. Permitted Use", desc: "Use JSONVIEW.ME only for lawful development, debugging, and data inspection purposes. Automated scraping, service disruption, and commercial resale of our services are prohibited." },
  { icon: "🏛️", title: "3. Intellectual Property", desc: "All source code, design systems, UI components, documentation, and branding of JSONVIEW.ME are protected intellectual property. Unauthorized reproduction or redistribution is strictly prohibited." },
  { icon: "🛡️", title: "4. Data & Privacy", desc: "We do not store or transmit your JSON content. All processing is browser-local. Your data never leaves your device. See our full Privacy Policy for complete details." },
  { icon: "⚠️", title: "5. Disclaimer of Warranties", desc: "JSONVIEW.ME is provided 'as is' without warranties of any kind. Always independently validate critical JSON output before production deployment or data migration." },
  { icon: "⚖️", title: "6. Limitation of Liability", desc: "JSONVIEW.ME and its operators shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from use or inability to use the service." },
];

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: `By accessing, browsing, or using the JSONVIEW.ME website and its associated tools (collectively, the "Service"), you acknowledge that you have read, fully understood, and agree to be legally bound by these Terms and Conditions ("Terms"), our Privacy Policy, and any other policies or guidelines published on the Service. These Terms constitute a binding legal agreement between you ("User," "you," or "your") and JSONVIEW.ME ("we," "us," "our," or the "Company").

If you do not agree to these Terms in their entirety, you must immediately cease all use of the Service. By continuing to use JSONVIEW.ME after the publication of revised Terms, you accept the updated Terms as binding. We recommend checking this page periodically for changes.

These Terms apply to all visitors, registered users (if applicable in future), and any other parties who access or use the Service in any manner, including through any mobile application, API integration, or embedded tool.`
  },
  {
    id: "service-description",
    title: "Description of Service",
    content: `JSONVIEW.ME provides a browser-based JSON formatting, validation, beautification, minification, and interactive tree visualization tool (the "Tool"). The Service allows users to input raw JSON strings and receive formatted, validated, or structurally explored output — all processed locally within the user's browser environment.

The Service is provided free of charge to the general public. We reserve the right to modify, suspend, enhance, or discontinue any aspect of the Service at any time with or without notice. We may also introduce premium features or subscription tiers in the future, which will be governed by additional terms presented at the time of introduction.

JSONVIEW.ME does not provide backend API services, JSON storage, user account management, or any form of persistent data processing unless explicitly stated in updated Terms. The primary purpose of the Service is client-side JSON utility for developer productivity.`
  },
  {
    id: "permitted-use",
    title: "Permitted and Prohibited Use",
    content: `You are granted a limited, non-exclusive, non-transferable, revocable license to use the JSONVIEW.ME Service for personal, educational, and professional development purposes in accordance with these Terms.

You agree to use the Service only for lawful purposes. Specifically, you agree NOT to:

• Attempt to reverse-engineer, decompile, disassemble, or extract the source code of the JSONVIEW.ME application beyond what is publicly available in our open repositories.
• Use automated scripts, bots, or crawlers to scrape, stress-test, or abuse the Service's web infrastructure in a way that disrupts availability for other users.
• Frame, mirror, or embed the JSONVIEW.ME interface in another website or application without explicit written permission from us.
• Use the Service as a component in a competing commercial product without a commercial license agreement.
• Attempt to introduce malicious code, vulnerabilities, or exploits targeting the JSONVIEW.ME infrastructure or its users.
• Violate any applicable local, national, or international laws or regulations in connection with your use of the Service.
• Process, transmit, or attempt to use the Service with content that is illegal, harmful, defamatory, obscene, or violates the rights of any third party.

We reserve the right to terminate or restrict your access to the Service, without notice or liability, if we reasonably believe you have violated these Terms.`
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property Rights",
    content: `All content on JSONVIEW.ME — including but not limited to the source code, compiled JavaScript bundles, React component architecture, CSS design system, UI/UX layouts, typography choices, color schemes, logo, brand name, icons, documentation, blog articles, and all other creative and technical work product — is the exclusive intellectual property of JSONVIEW.ME and its contributors, and is protected by applicable copyright, trademark, trade secret, and other intellectual property laws.

You may not copy, reproduce, distribute, publish, display, modify, create derivative works from, or commercially exploit any portion of JSONVIEW.ME's intellectual property without our prior written consent, except as expressly permitted in these Terms.

You may share links to JSONVIEW.ME, embed our public blog articles with appropriate attribution, or reference our tool in documentation, tutorials, or educational material, provided you clearly attribute the source and do not misrepresent ownership or affiliation.

Any feedback, suggestions, bug reports, or feature requests you submit to us may be used by JSONVIEW.ME to improve the Service without compensation or attribution to you, unless separately agreed in writing.`
  },
  {
    id: "data-privacy",
    title: "Data Processing and Privacy",
    content: `JSONVIEW.ME is engineered with a privacy-by-design architecture. All JSON formatting, validation, beautification, minification, and tree rendering operations are executed exclusively within your local browser environment using client-side JavaScript. Your JSON data — including any sensitive information it may contain such as API keys, personal records, database outputs, or proprietary business data — is never transmitted to any JSONVIEW.ME server, stored in any database, or logged in any system we control.

You acknowledge and agree that:

• You are solely responsible for the content you input into the JSONVIEW.ME editor.
• JSONVIEW.ME assumes no responsibility for the security of your data on your local device or network.
• You should not use JSONVIEW.ME on untrusted or shared public computers when processing sensitive or confidential JSON data.
• While JSONVIEW.ME's architecture prevents us from accessing your data, your local browser may cache content in ways governed by your browser's own policies.

For complete details on how JSONVIEW.ME handles data (including localStorage usage and anonymized analytics), please review our Privacy Policy, which is incorporated into these Terms by reference.`
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    content: `THE JSONVIEW.ME SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

To the maximum extent permitted by applicable law, JSONVIEW.ME expressly disclaims all warranties, including but not limited to:

• IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
• WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
• WARRANTIES REGARDING THE ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF THE SERVICE'S OUTPUT.

While we strive for 100% accuracy in our JSON parsing engine, JSONVIEW.ME does not warrant that its formatting, validation, or minification output is error-free. You are strongly encouraged to independently verify critical JSON structures before using them in production systems, database migrations, or data pipelines where errors could have material consequences.

We do not warrant that the Service will meet your specific requirements or that any defects will be corrected within a specific timeframe.`
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: `TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, JSONVIEW.ME AND ITS OWNERS, OPERATORS, EMPLOYEES, CONTRACTORS, AND AGENTS SHALL NOT BE LIABLE FOR ANY:

• DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES.
• LOSS OF PROFITS, REVENUE, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL.
• COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES.
• DAMAGES ARISING FROM UNAUTHORIZED ACCESS, SECURITY BREACHES, OR DATA LOSS.

THIS LIMITATION APPLIES WHETHER THE CLAIM IS BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT JSONVIEW.ME HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

In jurisdictions that do not allow the exclusion or limitation of liability for incidental or consequential damages, JSONVIEW.ME's liability will be limited to the maximum extent permitted by law.

If you are dissatisfied with the Service or these Terms, your sole and exclusive remedy is to discontinue use of JSONVIEW.ME.`
  },
  {
    id: "third-party",
    title: "Third-Party Links and Services",
    content: `JSONVIEW.ME may contain hyperlinks to third-party websites, tools, documentation, GitHub repositories, npm packages, or other online resources that are not owned or controlled by us. These links are provided for informational and convenience purposes only.

JSONVIEW.ME has no control over, and assumes no responsibility for, the content, privacy practices, terms of service, or availability of any third-party website. The inclusion of any link to a third-party resource does not imply endorsement, sponsorship, or affiliation with that resource or its operators.

We strongly encourage you to read the terms of service and privacy policies of any third-party website you visit through links on JSONVIEW.ME. Your use of third-party services is governed entirely by their own terms and policies.`
  },
  {
    id: "modifications",
    title: "Modifications to Terms",
    content: `JSONVIEW.ME reserves the right to revise, update, or replace these Terms at any time at our sole discretion. When material changes are made, we will update the "Last Updated" date at the top of this page. We may also provide additional notice through website banners or other communication channels for significant changes.

Your continued use of JSONVIEW.ME after any revision to these Terms constitutes your binding acceptance of the revised Terms. If you do not agree to the revised Terms, you must immediately stop using the Service.

We recommend that you review these Terms periodically — at minimum, whenever you notice the "Last Updated" date has changed — to ensure you remain informed of your rights and obligations as a user of the Service.`
  },
  {
    id: "governing-law",
    title: "Governing Law and Dispute Resolution",
    content: `These Terms and any disputes arising from or related to these Terms or your use of the JSONVIEW.ME Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.

Before initiating any formal legal proceeding, you agree to first attempt to resolve any dispute informally by contacting us at support@jsonview.me with a written description of the dispute, your proposed resolution, and your contact information. We will attempt to respond within 30 days.

If informal resolution fails, both parties agree to attempt mediation before litigation or arbitration. Nothing in this clause prevents either party from seeking emergency injunctive relief from a court of competent jurisdiction to prevent irreparable harm pending dispute resolution.

If any provision of these Terms is found to be invalid, illegal, or unenforceable under applicable law, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it enforceable, or removed if modification is not possible.`
  },
];

export default function Terms() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    document.title = "Terms & Conditions — JSONVIEW.ME | Usage Policy & Legal Agreement";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "JSONVIEW.ME Terms and Conditions. Read our full legal terms covering acceptable use, intellectual property, privacy, liability disclaimers, and dispute resolution for our free JSON formatting tool.");
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <div className="static-page">
      <header className="static-hero">
        <div className="hero-decor-line"></div>
        <h1>Terms &amp; Conditions</h1>
        <p>
          Your complete guide to using JSONVIEW.ME responsibly. Please read these terms carefully —
          they define your rights, our obligations, and the rules that keep our platform fair for everyone.
        </p>
      </header>

      <div className="static-body">

        {/* ── Effective Date ── */}
        <section className="static-section">
          <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginBottom: "24px", fontWeight: 600 }}>
            Effective Date: June 12, 2026 &nbsp;|&nbsp; Last Updated: June 12, 2026
          </p>

          <blockquote className="static-highlight">
            "These Terms govern your use of JSONVIEW.ME. They are written in plain language to be
            clear and fair. If you have any questions about what they mean, please contact us before
            continuing to use the Service."
          </blockquote>

          <p className="static-text">
            JSONVIEW.ME is a free, browser-based JSON developer tool. These Terms and Conditions ("Terms")
            form a legally binding agreement between you and JSONVIEW.ME governing your access to and use
            of our website, tools, blog content, and all associated services. We have written these Terms
            to be as clear and comprehensive as possible, covering everything from acceptable use policies
            and intellectual property rights to liability limitations and dispute resolution procedures.
          </p>
          <p className="static-text">
            We encourage you to read the full document below. The Summary Cards section gives you a
            quick overview, while the Full Legal Terms section provides the complete, binding text.
          </p>
        </section>

        {/* ── Summary Cards ── */}
        <section className="static-section">
          <h2 className="static-section-title">Terms at a Glance</h2>
          <p className="static-text">
            The following cards summarize the key points of our Terms. These summaries are provided for
            convenience only and do not replace the full legal text of each section below.
          </p>
          <div className="static-grid">
            {termSummaryCards.map((c, i) => (
              <div key={i} className="static-card">
                <span className="static-card-icon">{c.icon}</span>
                <h3 className="static-card-title">{c.title}</h3>
                <p className="static-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Quick Navigation ── */}
        <section className="static-section">
          <h2 className="static-section-title">Table of Contents</h2>
          <div style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "24px 32px",
          }}>
            <ol style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", }}>
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: activeSection === s.id ? "#4f46e5" : "#6366f1",
                      fontWeight: activeSection === s.id ? 700 : 600,
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      padding: 0,
                      textDecoration: "underline",
                      textUnderlineOffset: "3px",
                      textAlign: "left",
                    }}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Full Legal Terms ── */}
        <section className="static-section">
          <h2 className="static-section-title">Full Legal Terms</h2>
          <p className="static-text">
            The following sections constitute the complete, legally binding Terms and Conditions
            for JSONVIEW.ME. All sections apply equally and are enforceable to the full extent
            permitted by applicable law.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {sections.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="static-card"
                style={{ padding: "36px 40px", scrollMarginTop: "24px" }}
              >
                <h3 style={{
                  fontSize: "1.2rem",
                  fontWeight: "800",
                  color: "#0f172a",
                  marginBottom: "20px",
                  paddingBottom: "16px",
                  borderBottom: "2px solid #e0e7ff",
                }}>
                  {s.title}
                </h3>
                {s.content.split("\n\n").map((para, i) => {
                  if (para.startsWith("•")) {
                    const items = para.split("\n").filter(l => l.startsWith("•"));
                    return (
                      <ul key={i} className="static-list" style={{ marginBottom: "16px" }}>
                        {items.map((item, j) => (
                          <li key={j} style={{ marginBottom: "10px" }}>{item.replace(/^•\s*/, "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (para.trim().toUpperCase() === para.trim() && para.length > 20) {
                    return (
                      <p key={i} className="static-text" style={{ fontWeight: 700, color: "#1e293b", marginBottom: "16px" }}>
                        {para}
                      </p>
                    );
                  }
                  return (
                    <p key={i} className="static-text" style={{ marginBottom: "16px" }}>
                      {para}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section className="static-section">
          <h2 className="static-section-title">Questions About These Terms?</h2>
          <p className="static-text">
            If you have any questions, concerns, or requests for clarification regarding these Terms
            and Conditions, we encourage you to reach out to us directly. Our team reviews all
            legal inquiries and aims to respond within 2 business days.
          </p>
          <div className="static-card" style={{ padding: "32px", display: "flex", alignItems: "flex-start", gap: "20px" }}>
            <span style={{ fontSize: "2.5rem", flexShrink: 0 }}>⚖️</span>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>Legal & Terms Inquiries</h3>
              <p style={{ color: "#475569", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "12px" }}>
                For all questions related to these Terms, acceptable use policies, intellectual property
                licensing, or dispute resolution, please contact us at:
              </p>
              <a
                href="mailto:support@jsonview.me"
                style={{ color: "#6366f1", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}
              >
                support@jsonview.me
              </a>
              <p style={{ fontSize: "0.85rem", color: "#94a3b8", marginTop: "8px", marginBottom: 0 }}>
                Please include "Terms of Service" in your email subject line.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
