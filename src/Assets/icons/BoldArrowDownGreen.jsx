import React from "react";

const BoldArrowDownGreen = ({ className, onClick }) => {
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
        <g
          id="vuesax_bold_arrow-down"
          data-name="vuesax/bold/arrow-down"
          transform="translate(-236 -252)"
        >
          <g id="arrow-down">
            <path
              id="Vector"
              d="M12.919,0H1.079a1.077,1.077,0,0,0-.76,1.84L5.5,7.02a2.131,2.131,0,0,0,3.01,0l1.97-1.97,3.21-3.21A1.082,1.082,0,0,0,12.919,0Z"
              transform="translate(241.001 260.18)"
              fill="#f70000"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,0H24V24H0Z"
              transform="translate(260 276) rotate(180)"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default BoldArrowDownGreen;
