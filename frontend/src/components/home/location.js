import React, { useState } from "react";
import { FaSearch, FaMapPin } from 'react-icons/fa';

const Location = ({ setConfirmedCountry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setConfirmedCountry(inputValue.trim()); // Only update when Enter is pressed
    }
  };

  return (
    <div style={{ padding: "20px", marginTop: "40px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "10px 20px",
          border: "1px solid #ddd",
          borderRadius: "30px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <FaSearch style={{ fontSize: "20px", color: "#888" }} />
        <input
          type="text"
          placeholder="Search the Country..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown} // Listen for Enter key press
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            padding: "8px",
            fontSize: "16px",
            backgroundColor: "transparent",
          }}
        />
        <FaMapPin style={{ fontSize: "20px", color: "#888" }} />
      </div>
    </div>
  );
};

export default Location;
