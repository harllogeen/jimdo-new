import React from "react";

const VolumeIcon = ({className, onClick}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={className}
        onClick={onClick}
      >
        <g id="volume-high" transform="translate(-684 -188)">
          <path
            id="Vector"
            d="M0,5.842v4a2.652,2.652,0,0,0,3,3H4.43a2.1,2.1,0,0,1,1.06.3l2.92,1.83c2.52,1.58,4.59.43,4.59-2.54V3.252c0-2.98-2.07-4.12-4.59-2.54L5.49,2.542a2.1,2.1,0,0,1-1.06.3H3A2.652,2.652,0,0,0,0,5.842Z"
            transform="translate(686 192.158)"
            fill="currentColor"
            stroke="#fff"
            stroke-width="1.5"
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M0,0A6.66,6.66,0,0,1,0,8"
            transform="translate(702 196)"
            fill="currentColor"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M0,0A10.83,10.83,0,0,1,0,13"
            transform="translate(703.83 193.5)"
            fill="currentColor"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
          <path
            id="Vector-4"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            transform="translate(684 188)"
            fill="currentColor"
            opacity="0"
          />
        </g>
      </svg>
    </>
  );
};

export default VolumeIcon;
