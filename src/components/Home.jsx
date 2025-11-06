import React, { useEffect, useState } from "react";
import { MdFormatAlignLeft } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";
import JSON5 from 'json5';

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
      alert(`Invalid JSON! Please check your syntax. Error: ${error.message}`);
    }
  };

  const handleFormatClick1 = () => {
    try {
      const parsed = JSON.parse(jsonData);
      const compact = JSON.stringify(parsed);
      setJsonData(compact);
    } catch (error) {
      console.error("JSON Whitespace Remove Error:", error);
      alert(`Invalid JSON! Please check your syntax. Error: ${error.message}`);
    }
  };

  const handleFormatClick2 = () => {
    try {
      setJsonData("");
    } catch (error) {
      alert("Invalid JSON! Please check your input.", error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <ul className="nav justify-content-start border p-2 flex-wrap gap-2">
          <li className="nav-item">
            <a className="nav-link px-2 text-black" onClick={handleFormatClick}>
              <MdFormatAlignLeft /> Format
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-black" onClick={handleFormatClick1}>
              <MdOutlineFormatListBulleted /> Remove Whitespace
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-black" onClick={handleFormatClick2}>
              <HiTrash /> Clear
            </a>
          </li>
        </ul>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start" }}>
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
            height: "595px",
            overflow: "hidden",
            minWidth: "50px",
          }}
        >
          {lineNumbers.map((n) => (
            <div key={n}>{n}</div>
          ))}
        </div>

        <textarea
          className="form-control mb-3 p-2"
          style={{
            minHeight: "600px",
            fontFamily: "Courier New, monospace",
            fontSize: "16px",
            minWidth: "1850px",
            resize: "none",
            borderLeft: "none",
            overflow: "auto",
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

    </>
  );
}

export default Home;
