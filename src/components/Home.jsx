import React, { useEffect, useState } from "react";
import { MdFormatAlignLeft } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import JSON5 from 'json5';
import { Link, useLocation } from "react-router-dom";

function Home() {
  const [jsonData, setJsonData] = useState("");
  const [lineNumbers, setLineNumbers] = useState([]);

  useEffect(() => {
    // Update line numbers whenever jsonData changes
    const lines = jsonData.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1));
  }, [jsonData]);

  useEffect(() => {
    const saved = localStorage.getItem("jsonData");
    if (saved) {
      setJsonData(saved);
    }
  }, []);
  // useEffect(() => {
  //   localStorage.removeItem("jsonData");  // Clear the localStorage item
  //   setJsonData("");  // Reset the state to empty
  // }, []);
  const handleFormatClick = () => {
    if (!jsonData || jsonData.trim() === '') {
      alert("Please Enter Your JsonData.");
      return;
    }

    let fixedJson = jsonData.trim();
    fixedJson = fixedJson.replace(/[^ -~\t\n\r]/g, '');

    fixedJson = fixedJson.replace(/([{[,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
    fixedJson = fixedJson.replace(/'([^']+)'/g, '"$1"');
    fixedJson = fixedJson.replace(/,(\s*[}\]])/g, '$1');
    try {
      const parsed = JSON5.parse(fixedJson);
      const formatted = JSON.stringify(parsed, null, 2);

      setJsonData(formatted);
    } catch (error) {
      console.error("JSON Invalid", error);
      alert(`Invalid JSON! Please check your syntax.Error: ${error.message} `);
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

  const btn = (name) => ({
    background: activeBtn === name ? "#ffffff" : "transparent",
    color: "#1e293b",
    borderRadius: "6px",
    border: activeBtn === name ? "1px solid #d1d5db" : "1px solid transparent",
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Toolbar */}
      <div className="container-fluid" style={{ flexShrink: 0 }}>
        <ul className="nav justify-content-start border p-2 flex-wrap gap-2 toolbar-mobile-row">
          <li className="nav-item">
            <Link to="/" className={`nav-link px-2 ${activeBtn === "format" ? "toolbar-btn-active" : ""}`} style={btn("format")} onClick={() => { setActiveBtn("format"); handleFormatClick(); }}>
              <MdFormatAlignLeft /> Format
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={`nav-link px-2 ${activeBtn === "whitespace" ? "toolbar-btn-active" : ""}`} style={btn("whitespace")} onClick={() => { setActiveBtn("whitespace"); handleFormatClick1(); }}>
              <MdOutlineFormatListBulleted /> Remove Whitespace
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className={`nav-link px-2 ${activeBtn === "clear" ? "toolbar-btn-active" : ""}`} style={btn("clear")} onClick={() => { setActiveBtn("clear"); handleFormatClick2(); }}>
              <HiTrash /> Clear
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewer" className={`nav-link px-2 ${isViewer ? "toolbar-btn-active" : ""}`} style={isViewer ? { background: "#ffffff", color: "#000", borderRadius: "6px", border: "1px solid #d1d5db" } : { color: "#1e293b" }}>Viewer</Link>
          </li>
        </ul>
      </div>

      {/* Editor row — grows to fill remaining height */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        <div
          id="lineNumbers"
          style={{
            backgroundColor: "#f4f4f4",
            borderRight: "1px solid #ccc",
            padding: "5px 2px",
            textAlign: "right",
            fontFamily: "Courier New, monospace",
            fontSize: "16px",
            userSelect: "none",
            color: "#666",
            height: "100%",
            overflow: "hidden",
            minWidth: "50px",
            flexShrink: 0,
          }}
        >
          {lineNumbers.map((n) => (
            <div key={n}>{n}</div>
          ))}
        </div>

        <textarea
          className="form-control p-2"
          style={{
            height: "100%",
            width: "100%",
            fontFamily: "Courier New, monospace",
            fontSize: "16px",
            resize: "none",
            borderLeft: "none",
            overflow: "auto",
            borderRadius: 0,
            boxShadow: "none",
            outline: "none",
          }}
          placeholder="Paste your JSON data here..."
          value={jsonData}
          onChange={(e) => {
            setJsonData(e.target.value);
            localStorage.setItem("jsonData", e.target.value);
          }}
          onScroll={(e) => {
            document.getElementById("lineNumbers").scrollTop = e.target.scrollTop;
          }}
        ></textarea>
      </div>
    </div>
  );
}

export default Home;
