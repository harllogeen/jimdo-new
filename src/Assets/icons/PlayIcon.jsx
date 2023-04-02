import React from "react";

const PlayIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="video-circle"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M0,15.07V8.9C0,.945,5.625-2.264,12.5,1.695l5.333,3.083,5.333,3.083c6.875,3.958,6.875,10.458,0,14.417l-5.333,3.083L12.5,28.445C5.625,32.4,0,29.153,0,21.236Z"
          transform="translate(37.917 34.93)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M83.333,41.667A41.667,41.667,0,1,1,41.667,0,41.667,41.667,0,0,1,83.333,41.667Z"
          transform="translate(8.333 8.333)"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,0H100V100H0Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default PlayIcon;
