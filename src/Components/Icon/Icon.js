import React from "react";

export default function Icon({ name = "", extention="png", style }) {

    let img = require(`../../Assets/icons/m_icon_${name}.${extention}`)
  return (
    <img style={style} className="icon" src={img} alt={"icon-" + name} />
  );
}
