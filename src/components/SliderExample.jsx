import React, { useState } from "react";

export default function SliderExample() {
  const [value, setValue] = useState("80");
  return (
    <div>
      <h2>Slider Example</h2>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
