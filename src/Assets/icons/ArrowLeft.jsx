import React from "react";

const ArrowLeft = ({className}) => {
  return (
    <>
      <svg
        id="arrow-left"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
      >
        <path
          id="Vector"
          d="M5.058,0,0,5.058l5.058,5.058"
          transform="translate(2.917 4.942)"
          fill="currentColor"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M14.025,0H0"
          transform="translate(3.058 10)"
          fill="currentColor"
          stroke="#292d32"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          transform="translate(20 20) rotate(180)"
          fill="currentColor"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default ArrowLeft;
