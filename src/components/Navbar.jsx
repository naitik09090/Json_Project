import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";

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
          <img src="/jsonview.png" alt="JSONVIEW.ME Logo" className="header-logo" />
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
          {isOpen ? <HiXMark size={24} /> : <HiBars3 size={24} />}
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
