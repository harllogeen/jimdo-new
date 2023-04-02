import React from "react";

const BoldArrowUpRed = ({ className, onClick }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={className}
        onClick={onClick}
      >
        <g
          id="vuesax_bold_arrow-up"
          data-name="vuesax/bold/arrow-up"
          transform="translate(-172 -252)"
        >
          <g id="arrow-up">
            <path
              id="Vector"
              d="M13.677,5.8l-3.21-3.21L8.507.623a2.131,2.131,0,0,0-3.01,0L.317,5.8a1.079,1.079,0,0,0,.76,1.84h11.84A1.077,1.077,0,0,0,13.677,5.8Z"
              transform="translate(177.003 260.177)"
              fill="#2db9a0"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,0H24V24H0Z"
              transform="translate(196 276) rotate(180)"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BoldArrowUpRed;
