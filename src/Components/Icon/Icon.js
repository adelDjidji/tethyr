import React from "react";

export default function Icon({ name = "", extention="png" }) {

    let img = require(`../../Assets/icons/m_icon_${name}.${extention}`)
  return (
    <img className="icon" src={img} alt={"icon-" + name} />
  );
}
