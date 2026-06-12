import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLink = (path) => ({
    background: location.pathname === path ? "#ffffff" : "transparent",
    color: "#1e293b",
    borderRadius: "6px",
    border: location.pathname === path ? "1px solid #d1d5db" : "1px solid transparent",
    fontWeight: location.pathname === path ? 600 : 400,
    padding: "15px 12px",
    textDecoration: "none",
    display: "inline-block",
    transition: "all 0.15s ease",
  });

  const links = [
    { label: "Text", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Privacy Policy", to: "/privacy-policy" },

    { label: "Terms", to: "/terms" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div
      className="mobile-nav-container navbar-mobile-row-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 24px",
        backgroundColor: "#f8fafc",
        borderBottom: "1px solid #e2e8f0"
      }}
    >
      <Link className="mobile-logo-link" to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} title="JSONVIEW.ME Home">
        <img src="/logo.svg" alt="JSONVIEW.ME Logo" height="36" style={{ objectFit: 'contain' }} />
      </Link>
      <ul
        className="nav navbar-mobile-row"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: 0,
          padding: "8px 0",
          listStyle: "none"
        }}
      >
        {links.map((link) => (
          <li key={link.to} style={{ margin: 0 }}>
            <Link
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "nav-link-active" : ""}`}
              style={navLink(link.to)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
