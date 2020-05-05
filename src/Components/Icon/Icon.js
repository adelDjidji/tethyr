import React from "react";

export default function Icon({ name = "", extention="png", style, onClick }) {

    let img = require(`../../Assets/icons/m_icon_${name}.${extention}`)
  return (
    <img onClick={onClick} style={style} className="icon" src={img} alt={"icon-" + name} />
  );
}
