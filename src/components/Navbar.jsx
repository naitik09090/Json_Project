import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [jsonData, setJsonData] = useState(""); // Shared JSON state
  return (
    <div className="container-fluid">
      <ul className="nav justify-content-start border p-2">
          <li className="nav-item">
            <Link to="/viewer" className="nav-link">Viewer</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Text</Link>
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
