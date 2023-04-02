import React from "react";

const SendIcon = ({className, onClick}) => {
  return (
    <>
      <svg
        id="send"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M5.384,1.024l7.133,3.567c3.2,1.6,3.2,4.217,0,5.817L5.384,13.974c-4.8,2.4-6.758.433-4.358-4.358L1.75,8.174a1.705,1.705,0,0,0,0-1.342l-.725-1.45C-1.375.591.592-1.376,5.384,1.024Z"
          transform="translate(2.541 2.501)"
          fill="none"
          stroke="#ff603e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0H4.5"
          transform="translate(4.533 10)"
          fill="none"
          stroke="#ff603e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default SendIcon;
