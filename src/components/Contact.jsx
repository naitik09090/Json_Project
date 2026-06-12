import React, { useState, useEffect } from "react";
import "../css/StaticPages.css";

const infoCards = [
  { icon: "📧", title: "Email Address", desc: "support@jsonview.me" },
  { icon: "⏰", title: "Response Time", desc: "1–2 business days" },
  { icon: "🔒", title: "Data Privacy", desc: "Your data stays on your machine" },
  { icon: "🆕", title: "Service", desc: "Always free, no signup required" },
  { icon: "🏗️", title: "Platform", desc: "Optimized for all modern browsers" },
  { icon: "💬", title: "Feedback", desc: "We love hearing from you" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact Us - JSONVIEW.ME | Support & Feedback";
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="static-page">
      <header className="static-hero">
        <h1>Contact Us</h1>
        <p>Have a question or a feedback? Our team is dedicated to providing the best possible support to the developer community.</p>
      </header>

      <div className="static-body">
        <section className="static-section">
          <h2 className="static-section-title">Support Information</h2>
          <div className="static-grid">
            {infoCards.map((c, i) => (
              <div key={i} className="static-card">
                <span className="static-card-icon">{c.icon}</span>
                <h3 className="static-card-title">{c.title}</h3>
                <p className="static-card-desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">Send a Message</h2>
          {sent && (
            <div className="static-highlight">
              ✅ Thank you! Your message has been sent. We'll get back to you soon.
            </div>
          )}
          <div className="static-card" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <form onSubmit={handleSubmit}>
              <div className="static-grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "24px", marginTop: 0 }}>
                <div className="static-form-group">
                  <label className="static-label">Full Name</label>
                  <input type="text" name="name" className="static-input" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="static-form-group">
                  <label className="static-label">Email Address</label>
                  <input type="email" name="email" className="static-input" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="static-form-group" style={{ gridColumn: "1 / -1" }}>
                <label className="static-label">Subject</label>
                <input type="text" name="subject" className="static-input" placeholder="e.g. Bug report, Feature request" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="static-form-group" style={{ gridColumn: "1 / -1" }}>
                <label className="static-label">Message</label>
                <textarea name="message" rows="5" className="static-textarea" placeholder="Describe your question or feedback..." value={form.message} onChange={handleChange} required style={{ resize: "vertical" }} />
              </div>
              <button type="submit" className="static-btn">Send Message →</button>
            </form>
          </div>
        </section>
      </div>

      <footer className="static-footer">
        © {new Date().getFullYear()} JSONVIEW.ME — All Rights Reserved.
      </footer>
    </div>
  );
}
