import React from "react";

const LongWhiteArrowDown = ({ className, onClick }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="76"
        viewBox="0 0 48 76"
        className={className}
        onClick={onClick}
      >
        <g
          id="vuesax_linear_arrow-down"
          data-name="vuesax/linear/arrow-down"
          transform="translate(-108 -252)"
        >
          <g id="arrow-down" transform="translate(108 252)">
            <path
              id="Vector"
              d="M24.28,0,12.14,12.14,0,0"
              transform="translate(11.86 62.86)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,0V74"
              transform="translate(24 1)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H48V48H0Z"
              transform="translate(48 48) rotate(180)"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default LongWhiteArrowDown;
