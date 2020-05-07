import React ,{useState, useEffect} from "react";
import "./Arrownavigation.css";

export default function ArrowNavigation({
  direction = "right",
  active = true,
  dark = false,
}) {
  const [isDark, setisDark] = useState(dark)
  useEffect(() => {
    setisDark(dark)
  }, [dark])

  if (direction === "right")
    return (
      <svg
        className="middle"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isDark ? (
          <path
            d="M7.65674 13L13.3136 7.34315L7.65674 1.68629"
            stroke={active ? "#707683" : "#9297A3"}
            stroke-width="2"
            stroke-linecap="round"
          />
        ) : (
          <path
            d="M8 14L14 8L8 2"
            stroke={active ? "white" : "#ffffff85"}
            stroke-width="2"
            stroke-linecap="round"
          />
        )}
      </svg>
    );
  else
    return (
      <svg
        className="middle"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isDark ? (
          <path
            d="M7.65674 13L1.99988 7.34315L7.65674 1.68629"
            stroke={active ? "#707683" : "#9297A3"}
            stroke-width="2"
            stroke-linecap="round"
          />
        ) : (
          <path
            d="M8 14L2 8L8 2"
            stroke={active ? "white" : "#ffffff85"}
            stroke-width="2"
            stroke-linecap="round"
          />
        )}
      </svg>
    );
}
