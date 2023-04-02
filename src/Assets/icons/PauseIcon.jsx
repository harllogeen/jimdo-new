import React from "react";

const PauseIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className={className}
        onClick={onClick}
      >
        <g id="pause-circle" transform="translate(-556 -384)">
          <path
            id="Vector"
            d="M83.333,41.667A41.667,41.667,0,1,1,41.667,0,41.667,41.667,0,0,1,83.333,41.667Z"
            transform="translate(564.208 392.333)"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
          />
          <g
            id="Group_51884"
            data-name="Group 51884"
            transform="translate(556 384)"
          >
            <path
              id="Vector-2"
              data-name="Vector"
              d="M11.333,23.875V2.792C11.333.792,10.5,0,8.375,0H2.958C.833,0,0,.792,0,2.792V23.875c0,2,.833,2.792,2.958,2.792H8.333C10.5,26.667,11.333,25.875,11.333,23.875Z"
              transform="translate(33.333 36.67)"
              fill="#fff"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M11.292,23.875V2.792c0-2-.833-2.792-2.958-2.792H2.958C.833,0,0,.792,0,2.792V23.875c0,2,.833,2.792,2.958,2.792H8.333C10.458,26.667,11.292,25.875,11.292,23.875Z"
              transform="translate(55.375 36.67)"
              fill="#fff"
            />
            <path
              id="Vector-4"
              data-name="Vector"
              d="M0,0H100V100H0Z"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default PauseIcon;
