import React from "react";

const BoldAngleArrowRight = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="arrow-right"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M0,13.2,5.433,7.767a1.655,1.655,0,0,0,0-2.333L0,0"
          transform="translate(7.425 3.4)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          transform="translate(20 20) rotate(180)"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default BoldAngleArrowRight;
