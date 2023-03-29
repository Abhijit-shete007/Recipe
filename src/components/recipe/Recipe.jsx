import React from "react";
import "./Recipe.scss";

export default function recipe(props) {
  return (
    <div className="recipe">
      <img src={props.image} width="190px" alt="" />
      <h2>{props.title}</h2>
      <p>{props.kitchen}</p>
    </div>
  );
}
