import React from "react";

const DiscoverIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="discover"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M17.19.181,6.432,2.878A5.354,5.354,0,0,0,2.879,6.432L.181,17.189c-.813,3.25,1.181,5.254,4.442,4.442l10.757-2.687a5.4,5.4,0,0,0,3.553-3.553l2.7-10.768C22.444,1.372,20.44-.632,17.19.181Z"
          transform="translate(2.094 2.094)"
          fill="currentColor"
          stroke="rgba(42,46,67,0.8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M7.583,3.792A3.792,3.792,0,1,1,3.792,0,3.792,3.792,0,0,1,7.583,3.792Z"
          transform="translate(9.208 9.208)"
          fill="currentColor"
          stroke="rgba(42,46,67,0.8)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H26V26H0Z"
          fill="currentColor"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default DiscoverIcon;
