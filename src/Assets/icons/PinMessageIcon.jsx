import React from "react";

const PinMessageIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="Group_28746"
        data-name="Group 28746"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Path_20095"
          data-name="Path 20095"
          d="M0,0H20V20H0Z"
          fill="none"
        />
        <path
          id="Path_20096"
          data-name="Path 20096"
          d="M12.286,4.5,9.429,7.357,6.571,8.429,5.5,9.5l5,5,1.071-1.071,1.071-2.857L15.5,7.714"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <line
          id="Line_206"
          data-name="Line 206"
          x1="4.5"
          y2="4.5"
          transform="translate(3.577 11.923)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <line
          id="Line_207"
          data-name="Line 207"
          x2="5.5"
          y2="5.5"
          transform="translate(11.365 3.135)"
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

export default PinMessageIcon;
