import React, { useEffect, useState } from "react";
import { MdFormatAlignLeft, MdOutlineFormatListBulleted, MdSearch, MdClose } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";

const JsonTreeMap = ({ handleFormatClick, handleFormatClick1, handleFormatClick2 }) => {
  const [parsedData, setParsedData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("jsonData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setParsedData(parsed);
      } catch (error) {
        alert("Failed to parse JSON data", error);
      }
    }
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
            style={{ cursor: "pointer" }}
          >
            <span className="toggle-icon">{collapsed ? "➕" : "➖"}</span>
            <strong>{label}</strong>
            <span className="type-icon">
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
      <div className="json-leaf">
        <strong>{label}:</strong>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            autoFocus
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            style={{
              padding: "2px 4px",
              borderRadius: "4px",
              border: "1px solid #007bff",
              marginLeft: "5px",
              width: "auto",
            }}
          />
        ) : (
          <span
            onDoubleClick={handleDoubleClick}
            style={{
              marginLeft: "10px",
              backgroundColor: matchesSearch(label, data)
                ? "transparent"
                : "transparent",
              cursor: "pointer",
            }}
            title="Double-click to edit"
          >
            {String(data)}
          </span>
        )}
      </div>
    );
  };

  const activeStyle = { background: "#ffffff", color: "#000", borderRadius: "6px" };
  const inactiveStyle = { color: "#1e293b" };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Toolbar */}
      <div className="container-fluid" style={{ flexShrink: 0 }}>
        <ul className="nav justify-content-start border p-2 flex-wrap gap-2 toolbar-mobile-row">
          <li className="nav-item">
            <Link to="/" className="nav-link px-2" style={inactiveStyle} onClick={handleFormatClick}>
              <MdFormatAlignLeft /> Format
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2" style={inactiveStyle} onClick={handleFormatClick1}>
              <MdOutlineFormatListBulleted /> Remove Whitespace
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link px-2" style={inactiveStyle} onClick={handleFormatClick2}>
              <HiTrash /> Clear
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/viewer" className="nav-link px-2 toolbar-btn-active" style={activeStyle}>Viewer</Link>
          </li>
        </ul>
      </div>

      {/* ── Premium Search Bar ── */}
      <div style={{
        flexShrink: 0,
        background: "#E5E5E5",
        color: "#000",
        borderBottom: "1px solid rgba(99,102,241,0.3)",
        padding: "10px 16px",
        position: "relative",
        overflow: "hidden",
        width: "20%",
      }}>

        {/* Dot-grid background texture */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }} />

        {/* Top shimmer line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)",
        }} />

        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "10px" }}>

          {/* Search pill input */}
          <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(99,102,241,0.35)",
            borderRadius: "999px",
            padding: "0 14px",
            gap: "8px",
            boxShadow: searchQuery
              ? "0 0 0 2px rgba(99,102,241,0.4), 0 0 20px rgba(99,102,241,0.2)"
              : "none",
            transition: "box-shadow 0.25s ease",
          }}>
            <MdSearch style={{ color: "#6366f1", fontSize: "1.15rem", flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search keys or values…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#000",
                fontSize: "0.84rem",
                padding: "8px 0",
                fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                letterSpacing: "0.02em",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "none",
                  borderRadius: "50%",
                  width: 20, height: 20,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  padding: 0, flexShrink: 0,
                  color: "#94a3b8",
                  transition: "background 0.15s",
                }}
                aria-label="Clear search"
              >
                <MdClose style={{ fontSize: "0.85rem" }} />
              </button>
            )}
          </div>

          {/* Live result badge */}
          {/* {searchQuery && (
            <div style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              color: "#fff",
              borderRadius: "999px",
              padding: "4px 12px",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              boxShadow: "0 0 12px rgba(99,102,241,0.45)",
              flexShrink: 0,
            }}>
              Searching…
            </div>
          )} */}

        </div>
      </div>

      {/* JSON Tree — fills remaining screen */}
      <div className="json-viewer" style={{ flex: 1, height: "auto" }}>
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