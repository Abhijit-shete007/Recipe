import React from "react";
import "./Recipe.scss";

export default function recipe({ image, title, kitchen }) {
  return (
    <div className="recipe">
      <img src={image} width="190px" alt="" />
      <h2>{title}</h2>
      <p>{kitchen}</p>
    </div>
  );
}
