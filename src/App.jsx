import React, { useEffect } from "react";
import "./App.css";
import "./css/Viewer.css";
import "./css/Home.css";
import Home from "./components/Home.jsx";
import Viewer from "./components/Viewer.jsx";
import Navbar from "./components/Navbar.jsx";
// import Remove from "./components/Remove.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      <div className="no-select">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/viewer" element={<Viewer />} />
            {/* <Route path="/remove" element={<Remove />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
