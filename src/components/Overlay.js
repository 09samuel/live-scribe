import React from "react";

const Overlay = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "24px",
      pointerEvents: "none", // Prevents interactions
    }}>
      System Overlay Active
    </div>
  );
};

export default Overlay;
