import React from "react";

const PlusIcon = ({className, onClick}) => {
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
          id="vuesax_linear_add"
          data-name="vuesax/linear/add"
          transform="translate(-492 -252)"
        >
          <g id="add" transform="translate(492 252)">
            <path
              id="Vector"
              d="M0,0H13.2"
              transform="translate(3.4 10)"
              fill="none"
              stroke="#2a2e43"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M0,13.2V0"
              transform="translate(10 3.4)"
              fill="none"
              stroke="#2a2e43"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H20V20H0Z"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default PlusIcon;
