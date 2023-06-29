import React from "react";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>404 Not Found</h1>
      <p className="text-lg">
        Oops! The page you're looking for does not exist.
      </p>
    </div>
  );
};

export default NotFoundPage;
