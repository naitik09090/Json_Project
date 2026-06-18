import React, { useEffect, useState } from "react";
import "../css/Home.css";
import { MdFormatAlignLeft } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import JSON5 from 'json5';
import { Link, useLocation, useNavigate } from "react-router-dom";
// import AdComponent from "./AdComponent.jsx";

function Home() {
  const [jsonData, setJsonData] = useState("");
  const [lineCount, setLineCount] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    // Update line count whenever jsonData changes
    const lines = jsonData.split("\n").length;
    setLineCount(lines || 1);
  }, [jsonData]);

  // Debounced localStorage save
  useEffect(() => {
    const timer = setTimeout(() => {
      if (jsonData) {
        localStorage.setItem("jsonData", jsonData);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [jsonData]);

  useEffect(() => {
    document.title = "JSONVIEW.ME — Format, Validate & Explore JSON Online";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Free online JSON viewer and formatter. Paste your JSON to instantly beautify, validate, minify, and explore it as an interactive tree — no sign-up, no server uploads, 100% private.");
    }
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
      mainContent.style.overflowY = "hidden";
    }

    const saved = localStorage.getItem("jsonData");
    if (saved) {
      setJsonData(saved);
      // Check if we should auto-format (coming from Tree Viewer)
      const shouldFormat = localStorage.getItem("formatOnLoad");
      const shouldMinify = localStorage.getItem("minifyOnLoad");
      const shouldClear = localStorage.getItem("clearOnLoad");

      if (shouldFormat === "true") {
        localStorage.removeItem("formatOnLoad");
        setTimeout(() => handleFormatAuto(saved), 100);
      } else if (shouldMinify === "true") {
        localStorage.removeItem("minifyOnLoad");
        setTimeout(() => handleMinifyAuto(saved), 100);
      } else if (shouldClear === "true") {
        localStorage.removeItem("clearOnLoad");
        setTimeout(() => handleClearAuto(), 100);
      }
    }

    return () => {
      if (mainContent) {
        mainContent.style.overflowY = "auto";
      }
    };
  }, []);

  const handleMinifyAuto = (data) => {
    if (!data || data.trim() === '') return;
    try {
      const parsed = JSON.parse(data);
      const compact = JSON.stringify(parsed);
      setJsonData(compact);
      setActiveBtn("whitespace");
    } catch (error) {
      console.error("Auto Minify Error", error);
    }
  };

  const handleClearAuto = () => {
    setJsonData("");
    localStorage.removeItem("jsonData");
    setActiveBtn("clear");
  };

  const handleFormatAuto = (data) => {
    if (!data || data.trim() === '') return;
    try {
      let parsed;
      try {
        parsed = JSON.parse(data);
      } catch (e) {
        let fixedJson = data.trim();
        fixedJson = fixedJson.replace(/([{[,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
        fixedJson = fixedJson.replace(/'([^']+)'/g, '"$1"');
        fixedJson = fixedJson.replace(/,(\s*[}\]])/g, '$1');
        parsed = JSON5.parse(fixedJson);
      }
      const formatted = JSON.stringify(parsed, null, 2);
      setJsonData(formatted);
      setActiveBtn("format");
    } catch (error) {
      console.error("Auto Format Error", error);
    }
  };
  // useEffect(() => {
  //   localStorage.removeItem("jsonData");  // Clear the localStorage item
  //   setJsonData("");  // Reset the state to empty
  // }, []);
  const handleFormatClick = () => {
    if (!jsonData || jsonData.trim() === '') {
      alert("Please Enter Your JsonData.");
      return;
    }

    try {
      // 1. First attempt: Standard JSON.parse for speed if valid
      let parsed;
      try {
        parsed = JSON.parse(jsonData);
      } catch (e) {
        // 2. Second attempt: JSON5 parsing for lenient/fixing
        let fixedJson = jsonData.trim();
        // Quote unquoted keys
        fixedJson = fixedJson.replace(/([{[,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
        // Convert single quotes to double quotes (careful with existing double quotes)
        fixedJson = fixedJson.replace(/'([^']+)'/g, '"$1"');
        // Remove trailing commas
        fixedJson = fixedJson.replace(/,(\s*[}\]])/g, '$1');

        parsed = JSON5.parse(fixedJson);
      }

      const formatted = JSON.stringify(parsed, null, 2);
      setJsonData(formatted);
    } catch (error) {
      console.error("JSON Invalid", error);
      alert(`Invalid JSON! Please check your syntax.\nError: ${error.message}`);
    }
  };

  const handleFormatClick1 = () => {
    try {
      const parsed = JSON.parse(jsonData);
      const compact = JSON.stringify(parsed);
      setJsonData(compact);
    } catch (error) {
      console.error("JSON Whitespace Remove Error:", error);
      alert(`Invalid JSON! Please check your syntax.Error: ${error.message} `);
    }
  };

  const handleFormatClick2 = () => {
    try {
      setJsonData("");
      localStorage.removeItem("jsonData");
    } catch (error) {
      alert("Something went wrong!", error);
    }
  };


  const location = useLocation();
  const isViewer = location.pathname === "/viewer";
  const [activeBtn, setActiveBtn] = useState(null);

  const handleViewerClick = (e) => {
    e.preventDefault();
    if (!jsonData || jsonData.trim() === "") {
      alert("Please Enter Your JSON Data.");
      return;
    }

    try {
      // Validate JSON before moving
      try {
        JSON.parse(jsonData);
      } catch (e) {
        JSON5.parse(jsonData);
      }
      // Save data immediately before navigating
      localStorage.setItem("jsonData", jsonData);
      navigate("/viewer");
    } catch (error) {
      alert(`Invalid JSON! Please check your syntax.\nError: ${error.message}`);
    }
  };


  return (
    <div
      className="app-page-container"
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minHeight: 0,
        padding: "16px 20px",
        gap: "12px",
        backgroundColor: "#f8fafc",
        boxSizing: "border-box"
      }}
    >
      {/* Toolbar */}
      <div
        style={{
          flexShrink: 0,
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          padding: "8px 16px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.025)",
          border: "1px solid #e2e8f0"
        }}
      >
        <ul className="nav d-flex align-items-center flex-nowrap gap-2 toolbar-mobile-row" style={{ margin: 0, padding: 0, overflowX: "auto" }}>
          <li className="nav-item">
            <Link
              className={`nav-link px-3 py-2 d-flex align-items-center ${activeBtn === "format" ? "toolbar-btn-active" : ""}`}
              onClick={() => { setActiveBtn("format"); handleFormatClick(); }}
            >
              <MdFormatAlignLeft style={{ marginRight: '6px' }} /> Format
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link px-3 py-2 d-flex align-items-center ${activeBtn === "whitespace" ? "toolbar-btn-active" : ""}`}
              onClick={() => { setActiveBtn("whitespace"); handleFormatClick1(); }}
            >
              <MdOutlineFormatListBulleted style={{ marginRight: '6px' }} /> Remove Whitespace
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link px-3 py-2 d-flex align-items-center ${activeBtn === "clear" ? "toolbar-btn-active" : ""}`}
              onClick={() => { setActiveBtn("clear"); handleFormatClick2(); }}
            >
              <HiTrash style={{ marginRight: '6px' }} /> Clear
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewer"
              onClick={handleViewerClick}
              className={`nav-link px-3 py-2 d-flex align-items-center ${isViewer ? "toolbar-btn-active" : ""}`}
            >
              Viewer →
            </Link>
          </li>
        </ul>
      </div>

      {/* Home Top Ad */}
      {/* <div style={{ background: "transparent", borderBottom: "none" }}>
        <AdComponent adSlot="HOME_TOP_SLOT_ID" />
      </div> */}

      {/* Editor row — grows to fill remaining height */}
      <div
        className="editor-container"
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          border: "1px solid #e2e8f0"
        }}
      >
        <div
          id="lineNumbers"
          style={{
            backgroundColor: "#f8fafc",
            borderRight: "1px solid #e2e8f0",
            padding: "16px 8px 40px 8px", // Increased bottom padding
            textAlign: "right",
            fontFamily: "Courier New, monospace",
            fontSize: "15px",
            userSelect: "none",
            color: "#94a3b8",
            minWidth: "48px",
            width: "auto",
            height: "100%",
            overflow: "hidden",
            flexShrink: 0,
            boxSizing: "border-box"
          }}
        >
          {Array.from({ length: lineCount }, (_, i) => (
            <div key={i + 1} style={{ lineHeight: "1.5" }}>{i + 1}</div>
          ))}
        </div>

        <textarea
          className="form-control"
          style={{
            height: "100%",
            width: "100%",
            fontFamily: "Courier New, monospace",
            fontSize: "15px",
            lineHeight: "1.5",
            padding: "16px 16px 40px 16px", // Increased bottom padding
            resize: "none",
            border: "none",
            overflow: "auto",
            borderRadius: 0,
            boxShadow: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "#1e293b",
            boxSizing: "border-box"
          }}
          placeholder="Paste your JSON data here..."
          value={jsonData}
          wrap={lineCount > 1 ? "off" : "soft"}
          onChange={(e) => {
            setJsonData(e.target.value);
          }}
          onScroll={(e) => {
            const lineNumbers = document.getElementById("lineNumbers");
            if (lineNumbers) {
              lineNumbers.scrollTop = e.target.scrollTop;
            }
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default Home;
