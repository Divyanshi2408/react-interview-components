import React, { useState, useEffect } from "react";

const SearchWithDebounce = () => {
  const [inputValue, setInputValue] = useState("");      // user typing
  const [searchTerm, setSearchTerm] = useState("");      // debounced value

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue); // update debounced searchTerm after 500ms
    }, 500);

    // Clear the timer if inputValue changes before 500ms
    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>🔍 Debounced Search</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <p style={{ marginTop: "20px" }}>
        <strong>Search Term:</strong> {searchTerm}
      </p>
    </div>
  );
};

export default SearchWithDebounce;
