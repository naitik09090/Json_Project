import React, { useEffect, useState } from "react";
import { MdFormatAlignLeft } from "react-icons/md";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { HiTrash } from "react-icons/hi2";

function Home() {
  const [jsonData, setJsonData] = useState("");

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

  const handleFormatClick1 = () => {
    try {
      // Parse and remove all whitespace
      const parsed = JSON.parse(jsonData);
      const compact = JSON.stringify(parsed); // no spaces, no indentation
      setJsonData(compact);
    } catch (error) {
      alert("Invalid JSON! Please check your input.", error);
    }
  };

  const handleFormatClick = () => {
    try {
      // JSON parse and format
      const parsed = JSON.parse(jsonData);
      const formatted = JSON.stringify(parsed, null, 2); // 2 space indentation
      setJsonData(formatted);
    } catch (error) {
      alert("Invalid JSON! Please check your input.", error);
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

      {/* Textarea Section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <textarea
                  className="form-control mb-3 p-2"
                  style={{ minHeight: "600px", fontFamily: "Courier New, monospace", fontSize: "16px" ,width:"100%"}}
                  placeholder="Paste your JSON data here..."
                  value={jsonData}
                  onChange={(e) => {
                    setJsonData(e.target.value);
                    localStorage.setItem("jsonData", e.target.value);
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
