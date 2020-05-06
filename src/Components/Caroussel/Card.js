import React from "react";
import Icon from "../Icon/Icon";

export default function Card({
  image,
  link,
  title = "new",
  youtube,
  viemeo,
  duration = "00:00",
}) {
  let img = require("../../Assets/images/"+ image);
  return (
    <div className="slider-card">
      <a href={link} className="slider-card-image">
        <Icon name={youtube?"youtube":"vimeo"} />
        <img src={img} alt={title} />
      </a>
      <p className="duration">{duration}</p>
    </div>
  );
}
