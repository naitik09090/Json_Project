import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" title="JSONVIEW.ME Home">
            <picture>
              <source srcSet="/jsonview-1x.webp 1x, /jsonview.webp 2x" type="image/webp" />
              <img src="/jsonview-1x.png" srcSet="/jsonview-1x.png 1x, /jsonview.png 2x" alt="JSONVIEW.ME Logo" width="206" height="36" />
            </picture>
          </Link>
          <p className="footer-tagline">
            Fast, secure, and offline-first JSON tools for developers. Paste, format, validate, and tree-explore your JSON data in real-time.
          </p>
        </div>

        <div className="footer-col">
          <h3>Tools</h3>
          <ul>
            <li>
              <Link to="/">JSON Formatter</Link>
            </li>
            <li>
              <Link to="/viewer">JSON Viewer</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} JSONVIEW.ME. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
