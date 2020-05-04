import React from "react";
import "./author.min.css"

export default function Author({ name = "", picture = "", className="" }) {
    let img = require("../../Assets/images/"+ picture)
  return (
    <div className="author-item">
      <img
        className="author-image"
        src={img}
        alt=""
      />
      <p className={"author-name "+ className}>{name} </p>
    </div>
  );
}
