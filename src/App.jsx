import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import "./css/Viewer.css";
import "./css/Home.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
// import AdComponent from "./components/AdComponent.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ── Lazy-load each page so Vite splits them into separate chunks ──
const Home = lazy(() => import("./components/Home.jsx"));
const Viewer = lazy(() => import("./components/Viewer.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Privacy = lazy(() => import("./components/Privacy.jsx"));
const Terms = lazy(() => import("./components/Terms.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Blog = lazy(() => import("./components/Blog.jsx"));
const BlogDetails = lazy(() => import("./components/BlogDetails.jsx"));


// ── Minimal fallback shown while a chunk loads ──
const PageLoader = () => (
  <div style={{
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f1f5f9",
  }}>
    <div style={{
      width: 36,
      height: 36,
      border: "4px solid #e2e8f0",
      borderTop: "4px solid #1e40af",
      borderRadius: "50%",
      animation: "spin 0.7s linear infinite",
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  useEffect(() => {
    const noSelectElements = document.querySelectorAll(".no-select");
    noSelectElements.forEach((el) => {
      el.style.userSelect = "none";
      el.style.webkitUserSelect = "none";
      el.style.mozUserSelect = "none";
      el.style.msUserSelect = "none";
    });
  }, []);

  return (
    <div
      className="no-select"
      style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}
    >
      <Router>
        <header role="banner">
          <Navbar />
        </header>

        {/* Top Ad Banner - Space on all 4 sides */}
        {/* <div
          className="ad-container"
          style={{
            margin: "15px 15px",
            padding: "16px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            border: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90px"
          }}
        >
          <AdComponent adSlot="TOP_BANNER_SLOT_ID" />
        </div> */}

        {/* Flex container for Left Ad, Main Content, and Right Ad */}
        <div style={{ display: "flex", flexDirection: "row", flex: 1, minHeight: 0, overflow: "hidden", gap: "15px" }}>

          {/* Left Ad Banner */}
          {/* <div
            className="ad-container d-none d-md-flex"
            style={{
              margin: "0 0 0 15px",
              padding: "16px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              border: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "160px",
              flexShrink: 0
            }}
          >
            <AdComponent adSlot="LEFT_BANNER_SLOT_ID" />
          </div> */}

          <main
            id="main-content"
            role="main"
            style={{ flex: 1, minHeight: 0, overflowY: "auto", display: "flex", flexDirection: "column" }}
          >
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/viewer" element={<Viewer />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
              </Routes>
            </Suspense>
            <Footer />
          </main>

          {/* Right Ad Banner */}
          {/* <div
            className="ad-container d-none d-md-flex"
            style={{
              margin: "0 15px 0 0",
              padding: "16px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              border: "1px solid #e2e8f0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "160px",
              flexShrink: 0
            }}
          >
            <AdComponent adSlot="RIGHT_BANNER_SLOT_ID" />
          </div> */}
        </div>

        {/* Bottom Ad Banner - Space on all 4 sides */}
        {/* <div
          className="ad-container"
          style={{
            margin: "15px 15px",
            padding: "16px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            border: "1px solid #e2e8f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "90px",
            flexShrink: 0
          }}
        >
          <AdComponent adSlot="BOTTOM_BANNER_SLOT_ID" />
        </div> */}
      </Router>
    </div>
  );
}

export default App;
