import React from "react";

const MapIcon = ({ className, onClick}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <g
          id="vuesax_linear_map"
          data-name="vuesax/linear/map"
          transform="translate(-492 -252)"
        >
          <g id="map" transform="translate(492 252)">
            <path
              id="Vector"
              d="M6.667,2.275v5c0,2.083-.417,3.542-1.35,4.483L0,6.442,6.442,0A10.252,10.252,0,0,1,6.667,2.275Z"
              transform="translate(11.667 5.225)"
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M16.442,3.558,3.558,16.442C1.05,15.867,0,14.133,0,10.833v-5C0,1.667,1.667,0,5.833,0h5C14.133,0,15.867,1.05,16.442,3.558Z"
              transform="translate(1.667 1.667)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M11.758,5.317c-.942.933-2.4,1.35-4.483,1.35h-5A10.252,10.252,0,0,1,0,6.442L6.442,0Z"
              transform="translate(5.225 11.667)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-4"
              data-name="Vector"
              d="M.071,1.831a2.488,2.488,0,0,1,4.8,0A3.7,3.7,0,0,1,3.5,5.231a1.5,1.5,0,0,1-2.067,0A3.684,3.684,0,0,1,.071,1.831Z"
              transform="translate(5.129 4.819)"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              id="Vector-5"
              data-name="Vector"
              d="M0,0H20V20H0Z"
              fill="none"
              opacity="0"
            />
            <path
              id="Vector-6"
              data-name="Vector"
              d="M.495.5H.5"
              transform="translate(7.084 6.75)"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default MapIcon;
