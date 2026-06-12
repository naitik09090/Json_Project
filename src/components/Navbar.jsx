import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = [
    { label: "Text", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms", to: "/terms" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <div className="mobile-nav-container navbar-mobile-row-container header-navbar">
      <Link className="mobile-logo-link header-logo-link" to="/" title="JSONVIEW.ME Home">
        <img src="/jsonview.png" alt="JSONVIEW.ME Logo" className="header-logo" />
      </Link>
      <ul className="nav navbar-mobile-row header-nav-links">
        {links.map((link) => (
          <li key={link.to} style={{ margin: 0 }}>
            <Link
              to={link.to}
              className={`nav-link header-nav-item ${location.pathname === link.to ? "nav-link-active header-nav-item-active" : ""}`}
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
