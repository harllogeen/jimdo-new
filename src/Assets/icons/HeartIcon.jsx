import React from "react";

const HeartIcon = ({className, onClick}) => {
  return (
    <>
      <svg
        id="heart"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M8.85,14.758a1.817,1.817,0,0,1-1.033,0C5.4,13.933,0,10.492,0,4.658A4.645,4.645,0,0,1,4.633,0a4.6,4.6,0,0,1,3.7,1.867,4.622,4.622,0,0,1,8.333,2.792C16.667,10.492,11.267,13.933,8.85,14.758Z"
          transform="translate(1.667 2.583)"
          fill="currentColor"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          fill="currentColor"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default HeartIcon;
