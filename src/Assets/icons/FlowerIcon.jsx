import React from "react";

const FlowerIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="Group_51581"
        data-name="Group 51581"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Path_39286"
          data-name="Path 39286"
          d="M0,0H20V20H0Z"
          fill="none"
        />
        <path
          id="Path_39287"
          data-name="Path 39287"
          d="M11,10.667C12.667,8.2,11,4.833,10.167,4a6.817,6.817,0,0,1-2.5,5A6.291,6.291,0,0,0,6,13.167a5,5,0,0,0,10,0A7.822,7.822,0,0,0,14.333,9C12.845,11.5,12.007,11.5,11,10.667Z"
          transform="translate(-1 -0.667)"
          fill="none"
          stroke="#ff1515"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </svg>
    </>
  );
};

export default FlowerIcon;
