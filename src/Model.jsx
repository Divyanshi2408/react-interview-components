import React, { useState, useEffect, useRef } from "react";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  // ESC key handler
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Click outside to close
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleOutsideClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <h2>Modal Title</h2>
        <p>This is modal content</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function Model() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Modal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default Model;
