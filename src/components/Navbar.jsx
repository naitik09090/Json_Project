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
    { label: "About", to: "/about" },
    { label: "PrivacyPolicy", to: "/privacy-policy" },
    { label: "Terms", to: "/terms" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="container-fluid mobile-nav-container" style={{ padding: 0 }}>
      <ul className="nav justify-content-start border p-2 navbar-mobile-row" style={{ gap: "4px" }}>
        {links.map((link) => (
          <li className="nav-item" key={link.to}>
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
