import React, { useState } from "react";

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
    label: {
        fontSize: "0.85rem",
        fontWeight: 700,
        display: "block",
        marginBottom: "0.35rem",
        color: "#374151",
    },
    input: {
        width: "100%",
        padding: "0.55rem 0.8rem",
        fontSize: "0.93rem",
        border: "1px solid #e2e8f0",
        borderRadius: "6px",
        outline: "none",
        background: "#f8fafc",
        color: "#1e293b",
        fontFamily: "inherit",
        boxSizing: "border-box",
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

const infoCards = [
    { icon: "📧", title: "Email", desc: "support@jsonviewer.app" },
    { icon: "⏰", title: "Response Time", desc: "1–2 business days" },
    { icon: "🔒", title: "Privacy", desc: "Data stays on your device" },
    { icon: "🆓", title: "Service", desc: "Free, no account needed" },
    { icon: "🌐", title: "Platform", desc: "Works in any modern browser" },
    { icon: "💬", title: "Support", desc: "Bug reports & feature requests welcome" },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div style={S.page}>

            {/* ── Hero ── */}
            <div style={S.hero}>
                <h1 style={S.heroTitle}>Contact</h1>
                <p style={S.heroSub}>Have a question, found a bug, or want to share feedback? We'd love to hear from you.</p>
            </div>

            {/* ── Body ── */}
            <div style={S.body}>

                {/* Info Cards */}
                <section style={{ marginBottom: "1.8rem" }}>
                    <h2 style={S.sectionTitle}>Contact Information</h2>
                    <div style={S.grid}>
                        {infoCards.map((c, i) => (
                            <div key={i} style={S.card}>
                                <div style={S.cardIcon}>{c.icon}</div>
                                <div style={S.cardTitle}>{c.title}</div>
                                <p style={S.cardDesc}>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <hr style={S.divider} />

                {/* Send Message */}
                <section style={{ marginBottom: "1rem" }}>
                    <h2 style={S.sectionTitle}>Send a Message</h2>

                    {sent && (
                        <div style={{ ...S.highlight, marginBottom: "1.25rem", fontStyle: "normal" }}>
                            ✅ Thank you! Your message has been sent. We'll get back to you soon.
                        </div>
                    )}

                    <div style={S.card}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                <div>
                                    <label style={S.label} htmlFor="c-name">Full Name</label>
                                    <input id="c-name" type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required style={S.input} />
                                </div>
                                <div>
                                    <label style={S.label} htmlFor="c-email">Email Address</label>
                                    <input id="c-email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required style={S.input} />
                                </div>
                                <div style={{ gridColumn: "1 / -1" }}>
                                    <label style={S.label} htmlFor="c-subject">Subject</label>
                                    <input id="c-subject" type="text" name="subject" placeholder="e.g. Bug report, Feature request" value={form.subject} onChange={handleChange} required style={S.input} />
                                </div>
                                <div style={{ gridColumn: "1 / -1" }}>
                                    <label style={S.label} htmlFor="c-message">Message</label>
                                    <textarea id="c-message" name="message" rows="5" placeholder="Describe your question or feedback..." value={form.message} onChange={handleChange} required style={{ ...S.input, resize: "vertical" }} />
                                </div>
                                <div style={{ gridColumn: "1 / -1" }}>
                                    <button type="submit" style={{ background: "linear-gradient(135deg, #1e3a8a, #0284c7)", color: "#fff", border: "none", borderRadius: "8px", padding: "0.65rem 2rem", fontSize: "0.93rem", fontWeight: 700, cursor: "pointer", letterSpacing: "0.03em" }}>
                                        Send Message →
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

            </div>

            {/* ── Footer ── */}
            <footer style={S.footer}>
                © {new Date().getFullYear()} JSON Viewer — All Rights Reserved.
            </footer>

        </div>
    );
}
