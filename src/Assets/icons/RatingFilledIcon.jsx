import React from "react";

const RatingFilledIcon = ({className, onClick}) => {
  return (
    <>
      <svg
        id="Group_12555"
        data-name="Group 12555"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className={className}
        onClick={onClick}
      >
        <path
          id="Path_18659"
          data-name="Path 18659"
          d="M0,0H16V16H0Z"
          fill="none"
        />
        <path
          id="Path_18660"
          data-name="Path 18660"
          d="M8.669,12.5,4.554,14.664l.786-4.582L2.007,6.837l4.6-.667L8.664,2l2.057,4.169,4.6.667-3.333,3.245.786,4.582Z"
          transform="translate(-0.669 -0.667)"
          fill="#ff8710"
        />
      </svg>
    </>
  );
};

export default RatingFilledIcon;
