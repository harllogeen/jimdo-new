import React from "react";

const SmallHeartIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="Group_51582"
        data-name="Group 51582"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Path_39288"
          data-name="Path 39288"
          d="M0,0H20V20H0Z"
          fill="none"
        />
        <path
          id="Path_39289"
          data-name="Path 39289"
          d="M16.748,12.141l-6.25,6.19-2.413-2.39m-5.1-6.753A4.167,4.167,0,0,1,10.5,6.67a4.167,4.167,0,1,1,6.25,5.477"
          transform="translate(-0.498 -0.831)"
          fill="none"
          stroke="#0075ea"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Path_39290"
          data-name="Path 39290"
          d="M3,12.5H4.667L6.333,15,8,10l.833,2.5h2.5"
          transform="translate(-0.5 -1.667)"
          fill="none"
          stroke="#0075ea"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
      </svg>
    </>
  );
};

export default SmallHeartIcon;
