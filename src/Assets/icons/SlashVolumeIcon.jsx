import React from "react";

const SlashVolumeIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="volume-slash"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M10.833,3.51v-.8C10.833.226,9.108-.724,7.008.593L4.575,2.118a1.747,1.747,0,0,1-.883.25H2.5A2.21,2.21,0,0,0,0,4.868V8.2a2.21,2.21,0,0,0,2.5,2.5H4.167"
          transform="translate(1.667 3.465)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M0,5.15c2.1,1.317,3.825.358,3.825-2.117V0"
          transform="translate(8.675 10.792)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M.675,0A5.561,5.561,0,0,1,0,5.483"
          transform="translate(15 7.85)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M1.1,0A9.017,9.017,0,0,1,0,8.917"
          transform="translate(16.525 6.5)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-5"
          data-name="Vector"
          d="M16.667,0,0,16.667"
          transform="translate(1.667 1.667)"
          fill="none"
          stroke="#2a2e43"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-6"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default SlashVolumeIcon;
