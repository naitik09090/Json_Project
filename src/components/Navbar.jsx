import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Text", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "About", to: "/about" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms", to: "/terms" },
    { label: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar-wrapper" style={{ position: "relative", zIndex: 1000 }}>
      <div className="mobile-nav-container navbar-mobile-row-container header-navbar">
        <Link className="mobile-logo-link header-logo-link" to="/" title="JSONVIEW.ME Home" onClick={handleLinkClick}>
          <picture>
            <source srcSet="/jsonview-1x.webp 1x, /jsonview.webp 2x" type="image/webp" />
            <img src="/jsonview-1x.png" srcSet="/jsonview-1x.png 1x, /jsonview.png 2x" alt="JSONVIEW.ME Logo" className="header-logo" width="183" height="32" />
          </picture>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav header-nav-links d-none-mobile">
          {links.map((link) => (
            <li key={link.to} style={{ margin: 0 }}>
              <Link
                to={link.to}
                className={`nav-link header-nav-item ${location.pathname === link.to ? "nav-link-item-active header-nav-item-active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mobile-dropdown-menu">
          <ul className="mobile-dropdown-list">
            {links.map((link) => (
              <li key={link.to} className="mobile-dropdown-item">
                <Link
                  to={link.to}
                  onClick={handleLinkClick}
                  className={`mobile-dropdown-link ${location.pathname === link.to ? "mobile-dropdown-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
