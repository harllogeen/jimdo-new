import React from "react";

const FlashIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="flash"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M1.482,12.221H4.83v7.8c0,1.82.986,2.188,2.188.823l8.2-9.317c1.007-1.137.585-2.08-.943-2.08H10.929v-7.8c0-1.82-.986-2.188-2.188-.823L.54,10.141C-.457,11.289-.034,12.221,1.482,12.221Z"
          transform="translate(5.115 2.166)"
          fill="none"
          stroke="rgba(42,46,67,0.8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,0H26V26H0Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default FlashIcon;
