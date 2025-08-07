import React, { useState, useEffect } from "react";

function Theme() {
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Define theme styles
  const lightStyles = {
    backgroundColor: "#ffffff",
    color: "#000000",
  };

  const darkStyles = {
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  };

  const appStyles = {
    minHeight: "100vh",
    padding: "2rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    ...(theme === "light" ? lightStyles : darkStyles),
  };

  const buttonStyles = {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "1rem",
    border: "none",
    borderRadius: "5px",
    backgroundColor: theme === "light" ? "#000000" : "#ffffff",
    color: theme === "light" ? "#ffffff" : "#000000",
  };

  return (
    <div style={appStyles}>
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button style={buttonStyles} onClick={toggleTheme}>
        Toggle Theme
      </button>
      <p>This is a simple theme toggle example without custom CSS.</p>
    </div>
  );
}

export default Theme;
