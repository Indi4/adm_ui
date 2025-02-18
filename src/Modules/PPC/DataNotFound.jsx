// DataNotFound.js
import React from "react";

const DataNotFound = ({ message = "Data Not Found" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "250px",
        fontSize: "18px",
        color: "#666",
      }}
    >
      {message}
    </div>
  );
};

export default DataNotFound;
