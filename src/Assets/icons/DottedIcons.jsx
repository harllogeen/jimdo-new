import React from "react";

const DottedIcons = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="more-circle"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M10.833,21.667A10.833,10.833,0,1,0,0,10.833,10.865,10.865,0,0,0,10.833,21.667Z"
          transform="translate(2.167 2.167)"
          fill="none"
          stroke="rgba(42,46,67,0.8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M.495.5H.5"
          transform="translate(16.835 12.5)"
          fill="none"
          stroke="rgba(42,46,67,0.8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M.495.5H.5"
          transform="translate(12.501 12.5)"
          fill="none"
          stroke="rgba(42,46,67,0.8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M.495.5H.5"
          transform="translate(8.166 12.5)"
          fill="none"
          stroke="rgba(42,46,67,0.8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
        <path
          id="Vector-5"
          data-name="Vector"
          d="M0,0H26V26H0Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default DottedIcons;
