import React, { useEffect, useState } from "react";

const JsonTreeMap = () => {
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
                  <JsonNode
                    data={data[key]}
                    label={key}
                    search={search}
                    onChange={onChange}
                    path={[...path, key]}
                  />
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
      onChange(path, editValue); // ✅ FIXED: don't append label
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        setIsEditing(false);
        onChange(path, editValue); // ✅ FIXED: don't append label
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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 border p-3 json-viewer">
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
      <div className="row mb-3">
        <div className="col-md-12">
          <input
            className="form-control"
            type="text"
            placeholder="Search JSON data..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ maxWidth: "300px", marginBottom: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default JsonTreeMap;
