import React, { useEffect } from "react";
import "./App.css";
import "./css/Viewer.css";
import "./css/Home.css";
import Home from "./components/Home.jsx";
import Viewer from "./components/Viewer.jsx";
import Navbar from "./components/Navbar.jsx";
import Privacy from "./components/Privacy.jsx";
import About from "./components/About.jsx";
import Terms from "./components/Terms.jsx";
import Contact from "./components/Contact.jsx";
// import Remove from "./components/Remove.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Format from "./components/Format.jsx";

function App() {
  useEffect(() => {
    // Disable text selection for elements
    // with class "no-select"
    const noSelectElements = document.querySelectorAll(".no-select");
    noSelectElements.forEach((element) => {
      element.style.webkitUserSelect = "none";
      element.style.mozUserSelect = "none";
      element.style.msUserSelect = "none";
      element.style.userSelect = "none";
    });
  }, []);
  return (
    <>
      <div className="no-select" style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <Router>
          <Navbar />
          <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/viewer" element={<Viewer />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/about" element={<About />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
