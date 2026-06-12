import React, { useEffect, useState } from "react";
import { MdFormatAlignLeft, MdOutlineFormatListBulleted, MdSearch, MdClose } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";
import JSON5 from 'json5';
// import AdComponent from "./AdComponent.jsx";

const JsonTreeMap = ({ handleFormatClick, handleFormatClick1, handleFormatClick2 }) => {
  const [parsedData, setParsedData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "JSON Viewer - JSONVIEW.ME | Interactive Tree Explorer";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore, search, and edit your JSON data interactively as an intuitive, expandable tree structure. 100% secure and runs entirely in your browser.");
    }
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "smooth" });
      mainContent.style.overflowY = "hidden";
    }

    const savedData = localStorage.getItem("jsonData");
    if (savedData) {
      try {
        let parsed;
        try {
          parsed = JSON.parse(savedData);
        } catch (e) {
          // Attempt to fix common issues like JSON5 does
          let fixedJson = savedData.trim();
          fixedJson = fixedJson.replace(/([{[,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
          fixedJson = fixedJson.replace(/'([^']+)'/g, '"$1"');
          fixedJson = fixedJson.replace(/,(\s*[}\]])/g, '$1');
          parsed = JSON5.parse(fixedJson);
        }
        setParsedData(parsed);
      } catch (error) {
        console.error("Parse Error:", error);
        // We don't alert here to avoid annoying the user if they are just typing
      }
    }

    return () => {
      if (mainContent) {
        mainContent.style.overflowY = "auto";
      }
    };
  }, []);

  const handleUpdateValue = (path, newValue) => {
    if (!parsedData) return;

    console.log("Update path:", path);
    console.log("New value:", newValue);

    const updatedData = JSON.parse(JSON.stringify(parsedData));
    let current = updatedData;

    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      if (current[key] === undefined) return console.warn("Invalid path:", key);
      current = current[key];
    }

    const lastKey = path[path.length - 1];

    // Type conversion (string → number/boolean)
    let finalValue = newValue;
    if (newValue === "true") finalValue = true;
    else if (newValue === "false") finalValue = false;
    else if (!isNaN(newValue) && newValue.trim() !== "") finalValue = Number(newValue);

    current[lastKey] = finalValue;

    setParsedData(updatedData);
    localStorage.setItem("jsonData", JSON.stringify(updatedData));
  };

  const JsonNode = ({ data, label, search, onChange, path = [] }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(String(data));

    useEffect(() => {
      setEditValue(String(data));
    }, [data]);

    const isObject = typeof data === "object" && data !== null;

    const toggle = () => setCollapsed((prev) => !prev);

    const matchesSearch = (key, value) => {
      const query = search.toLowerCase();
      return (
        key?.toString().toLowerCase().includes(query) ||
        value?.toString().toLowerCase().includes(query)
      );
    };

    const hasMatchingChild = (obj) => {
      if (typeof obj !== "object" || obj === null) return false;
      return Object.entries(obj).some(([key, value]) => {
        if (matchesSearch(key, value)) return true;
        if (typeof value === "object") return hasMatchingChild(value);
        return false;
      });
    };

    const shouldRender = matchesSearch(label, data) || hasMatchingChild(data);
    if (!shouldRender) return null;

    if (isObject) {
      const isArray = Array.isArray(data);
      const keys = Object.keys(data);

      return (
        <div className="json-node">
          <div
            className="json-label"
            onClick={toggle}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "2px 0"
            }}
          >
            <span className="toggle-icon" style={{ fontSize: "0.75rem", color: "#6366f1" }}>{collapsed ? "▶" : "▼"}</span>
            <strong style={{ color: "#4f46e5", fontWeight: "600" }}>{label}</strong>
            <span className="type-icon" style={{ fontSize: "0.75rem", color: "#94a3b8", fontStyle: "italic" }}>
              {isArray ? `[${data.length}]` : `{${keys.length}}`}
            </span>
          </div>




          {!collapsed && (
            <ul className="json-children" style={{ listStyle: "none" }}>
              {keys.map((key) => (
                <ul key={key}>
                  <li style={{ listStyle: "none" }}>
                    <JsonNode
                      data={data[key]}
                      label={key}
                      search={search}
                      onChange={onChange}
                      path={[...path, key]}
                    />
                  </li>
                </ul>
              ))}
            </ul>
          )}
        </div>
      );
    }

    // Leaf node - Editable on double-click
    const handleDoubleClick = () => {
      setIsEditing(true);
    };

    const handleChange = (e) => {
      setEditValue(e.target.value);
    };

    const handleBlur = () => {
      setIsEditing(false);
      onChange(path, editValue);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setIsEditing(true);
        onChange(path, editValue);
      }
    };

    return (
      <div className="json-leaf" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "2px 0" }}>
        <strong style={{ color: "#4f46e5", fontWeight: "600" }}>{label}:</strong>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
              padding: "2px 8px",
              borderRadius: "4px",
              border: "1px solid #6366f1",
              outline: "none",
              background: "#ffffff",
              color: "#1e293b",
              fontSize: "0.85rem",
              width: "auto",
            }}
          />
        ) : (
          <span
            onDoubleClick={handleDoubleClick}
            style={{
              color: typeof data === "string" ? "#16a34a" :
                typeof data === "number" || typeof data === "boolean" ? "#ea580c" :
                  data === null ? "#94a3b8" : "#1e293b",
              fontWeight: "500",
              cursor: "pointer",
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: "0.85rem"
            }}
            title="Double-click to edit"
          >
            {typeof data === "string" ? `"${data}"` : String(data)}
          </span>
        )}
      </div>



    );
  };

  const activeStyle = { background: "#ffffff", color: "#1e293b", borderRadius: "6px", border: "1px solid #d1d5db", fontWeight: 600, transition: "all 0.15s ease", boxShadow: "none" };
  const inactiveStyle = { background: "transparent", color: "#1e293b", borderRadius: "6px", border: "1px solid transparent", fontWeight: 400, transition: "all 0.15s ease", boxShadow: "none" };

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
            <Link to="/" className="nav-link px-3 py-2 d-flex align-items-center" onClick={() => { localStorage.setItem("formatOnLoad", "true"); }}>
              <MdFormatAlignLeft style={{ marginRight: '6px' }} /> Format
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-3 py-2 d-flex align-items-center" onClick={() => { localStorage.setItem("minifyOnLoad", "true"); }}>
              <MdOutlineFormatListBulleted style={{ marginRight: '6px' }} /> Remove Whitespace
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-3 py-2 d-flex align-items-center" onClick={() => { localStorage.setItem("clearOnLoad", "true"); }}>
              <HiTrash style={{ marginRight: '6px' }} /> Clear
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewer" className="nav-link px-3 py-2 d-flex align-items-center toolbar-btn-active" style={{ fontWeight: 600 }}>Viewer</Link>
          </li>
          <li className="nav-item ms-auto" style={{ minWidth: "220px", display: "flex", alignItems: "center" }}>
            <div style={{
              position: "relative",
              background: "#f1f5f9",
              borderRadius: "8px",
              padding: "0 10px",
              border: "1px solid #e2e8f0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              width: "100%",
              height: "38px", // Matches the height of the toolbar buttons
              boxShadow: searchQuery ? "0 0 0 2px rgba(99,102,241,0.2)" : "none",
              transition: "all 0.2s ease",
            }}>
              <MdSearch style={{ color: "#6366f1", fontSize: "1.1rem", flexShrink: 0 }} />
              <input
                type="text"
                placeholder="Search…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  color: "#1e293b",
                  fontSize: "0.85rem",
                  padding: "0",
                  width: "100%"
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    color: "#94a3b8"
                  }}
                >
                  <MdClose style={{ fontSize: "1rem" }} />
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>



      {/* Viewer Top Ad */}
      {/* <div style={{ background: "transparent", borderBottom: "none" }}>
        <AdComponent adSlot="VIEWER_TOP_SLOT_ID" />
      </div> */}

      {/* JSON Tree — fills remaining screen */}
      <div className="json-viewer" style={{
        flex: 1,
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        padding: "24px",
        boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.025)",
        border: "1px solid #e2e8f0",
        overflow: "auto",
        boxSizing: "border-box"
      }}>



        {parsedData ? (
          <div className="json-tree">
            <JsonNode
              data={parsedData}
              label="JSON"
              search={searchQuery}
              onChange={handleUpdateValue}
            />
          </div>
        ) : (
          <p>No JSON data available. Please input data from the Text page.</p>
        )}
      </div>

    </div>
  );
};

export default JsonTreeMap;