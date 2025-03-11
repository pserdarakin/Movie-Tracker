import React from "react";

function UnderConstruction() {
  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "0.5rem",
          color: "white",
        }}
      >
        🚧 Under Construction 🚧
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "2rem",
          maxWidth: "600px",
        }}
      >
        We're working hard to bring you something awesome! Please check back
        later.
      </p>
    </div>
  );
}

export default UnderConstruction;