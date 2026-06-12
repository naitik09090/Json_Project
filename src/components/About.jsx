import React, { useEffect } from "react";
import "../css/StaticPages.css";

const features = [
  { icon: "⚡", title: "Instant Parsing", desc: "Format and validate even massive JSON files in milliseconds." },
  { icon: "🌳", title: "Tree Explorer", desc: "Navigate deep objects with our intuitive, collapsible tree viewer." },
  { icon: "✏️", title: "Beautifier", desc: "Turn messy strings into clean, readable code with one click." },
  { icon: "🗜️", title: "Minifier", desc: "Instantly strip all whitespace for efficient API transmission." },
  { icon: "🔒", title: "100% Private", desc: "All data stays in your browser. No server uploads, ever." },
  { icon: "🆓", title: "Always Free", desc: "No subscriptions, no limits, no sign-up required. Completely free tool." },
];

export default function About() {
  useEffect(() => {
    document.title = "About Us - JSONVIEW.ME | Fast & Private JSON Tool";
    const mainContent = document.getElementById("main-content");
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="static-page">
      <header className="static-hero">
        <h1>About JSONVIEW.ME</h1>
        <p>A high-performance, privacy-first tool designed to help developers master their data structures instantly.</p>
      </header>

      <div className="static-body">
        <section className="static-section">
          <h2 className="static-section-title">What is JSONVIEW.ME?</h2>
          <p className="static-text">
            <strong>JSONVIEW.ME</strong> is a lightweight, browser-based tool designed for modern developers and architects. 
            We provide a fast path from raw, unreadable strings to structured, human-readable clarity.
          </p>
          <p className="static-text">
            Our tool was built with simplicity in mind. No complex installations, no login screens—just a 
            powerful editor and an interactive tree viewer that makes exploring JSON payloads effortless.
          </p>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">Powerful Features</h2>
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

        <section className="static-section">
          <h2 className="static-section-title">Our Vision</h2>
          <blockquote className="static-highlight">
            "To simplify data visualization and empower developers with the world's most accessible JSON interface."
          </blockquote>
          <p className="static-text">
            We believe that great tools should be invisible—fast, reliable, and always there when you need them. 
            JSONVIEW.ME is our contribution to the developer community, helping thousands of people debug and explore their data every day.
          </p>
        </section>

        <section className="static-section">
          <h2 className="static-section-title">How to Use</h2>
          <ul className="static-list">
            <li><strong>Text View:</strong> Paste your raw JSON and click "Format" to beautify and validate.</li>
            <li><strong>Interactive Viewer:</strong> Switch to the viewer tab to explore your data as an interactive tree.</li>
            <li><strong>API Ready:</strong> Use the "Minify" function to generate compact strings for your production requests.</li>
            <li><strong>Private & Safe:</strong> Rest assured knowing all processing is local to your machine.</li>
          </ul>
        </section>
      </div>

      <footer className="static-footer">
        © {new Date().getFullYear()} JSONVIEW.ME — All Rights Reserved.
      </footer>
    </div>
  );
}