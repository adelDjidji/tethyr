import React from "react";
import "./Arrownavigation.css";


export default function ArrowNavigation({
  direction = "right",
  active = true,
}) {
  if (direction === "right")
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14L14 8L8 2"
          stroke={active ?"white" : "#ffffff85"}
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    );
  else
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14L2 8L8 2"
          stroke={active ?"white" : "#ffffff85"}
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    );
}
