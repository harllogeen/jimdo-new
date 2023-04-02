import React from "react";

const FriendsIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="profile-2user"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M4.983,9.609a1.969,1.969,0,0,0-.358,0,4.815,4.815,0,1,1,.358,0Z"
          transform="translate(4.94 2.167)"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M.141,0A3.789,3.789,0,0,1,3.932,3.792,3.8,3.8,0,0,1,.282,7.583a1.224,1.224,0,0,0-.282,0"
          transform="translate(17.637 4.333)"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M1.966,1.487C-.655,3.242-.655,6.1,1.966,7.846a10.58,10.58,0,0,0,10.844,0c2.622-1.755,2.622-4.615,0-6.359A10.63,10.63,0,0,0,1.966,1.487Z"
          transform="translate(2.54 14.286)"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M0,6.5a5.24,5.24,0,0,0,2.123-.943,2.744,2.744,0,0,0,0-4.626A5.388,5.388,0,0,0,.033,0"
          transform="translate(19.868 15.167)"
          fill="currentColor"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-5"
          data-name="Vector"
          d="M0,0H26V26H0Z"
          transform="translate(26 26) rotate(180)"
          fill="currentColor"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default FriendsIcon;
