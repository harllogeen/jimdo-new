import React from "react";

const TrashIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="trash"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M15,.417C12.225.142,9.433,0,6.65,0A49.224,49.224,0,0,0,1.7.25L0,.417"
          transform="translate(2.5 4.567)"
          fill="none"
          stroke="#f70000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,2.475.183,1.383C.317.592.417,0,1.825,0H4.008C5.417,0,5.525.625,5.65,1.392l.183,1.083"
          transform="translate(7.083 1.667)"
          fill="none"
          stroke="#f70000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M11.417,0l-.542,8.392c-.092,1.308-.167,2.325-2.492,2.325H3.033C.708,10.717.633,9.7.542,8.392L0,0"
          transform="translate(4.292 7.617)"
          fill="none"
          stroke="#f70000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M0,0H2.775"
          transform="translate(8.608 13.75)"
          fill="none"
          stroke="#f70000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-5"
          data-name="Vector"
          d="M0,0H4.167"
          transform="translate(7.917 10.417)"
          fill="none"
          stroke="#f70000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-6"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default TrashIcon;
