import React from "react";

const LikeIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="like"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M0,13.085l2.583,2a2.564,2.564,0,0,0,1.583.5H7.333a2.5,2.5,0,0,0,2.333-1.75l2-6.083a1.561,1.561,0,0,0-1.583-2.167H6.75a.841.841,0,0,1-.833-1l.417-2.667A1.644,1.644,0,0,0,5.25.085,1.664,1.664,0,0,0,3.417.668L0,5.752"
          transform="translate(6.233 2.207)"
          fill="currentColor"
          stroke="#2a2e43"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,9.75V1.583C0,.417.5,0,1.667,0H2.5C3.667,0,4.167.417,4.167,1.583V9.75c0,1.167-.5,1.583-1.667,1.583H1.667C.5,11.333,0,10.917,0,9.75Z"
          transform="translate(1.983 5.542)"
          fill="currentColor"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          fill="currentColor"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default LikeIcon;
