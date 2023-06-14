import React from "react";

const ProgressBar = ({ width }) => {
  return (
    <div style={{ border: "2px solid black", width: "100%" }}>
      <div
        style={{
          backgroundColor: "grey",
          width: `${width}%`,
          height: "18px",
        }}
      >
        {width}%
      </div>
    </div>
  );
};

export default ProgressBar;
