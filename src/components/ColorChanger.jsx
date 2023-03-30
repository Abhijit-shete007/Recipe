import React, { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("green");

  const handleClick = () => {
    setColor(color === "green" ? "orange" : "green");
  };
  return (
    <div>
      <h2>Color Changer</h2>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        Change Me !!
      </div>
      <button onClick={() => handleClick()}>Click me</button>
    </div>
  );
}
