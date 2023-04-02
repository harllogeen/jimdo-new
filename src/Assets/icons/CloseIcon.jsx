import React from "react";

const CloseIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="Group_52592"
        data-name="Group 52592"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Path_11657"
          data-name="Path 11657"
          d="M0,0H20V20H0Z"
          fill="none"
        />
        <line
          id="Line_227"
          data-name="Line 227"
          x1="10"
          y2="10"
          transform="translate(5 5)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <line
          id="Line_228"
          data-name="Line 228"
          x2="10"
          y2="10"
          transform="translate(5 5)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </svg>
    </>
  );
};

export default CloseIcon;
