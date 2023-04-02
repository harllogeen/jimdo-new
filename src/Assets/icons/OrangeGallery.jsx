import React from "react";

const OrangeGallery = ({ className, onClick }) => {
  return (
    <>
      <svg
        id="gallery"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className={className}
        onClick={onClick}
      >
        <path
          id="Vector"
          d="M5.833,16.667h5c4.167,0,5.833-1.667,5.833-5.833v-5C16.667,1.667,15,0,10.833,0h-5C1.667,0,0,1.667,0,5.833v5C0,15,1.667,16.667,5.833,16.667Z"
          transform="translate(1.667 1.667)"
          fill="none"
          stroke="#ff603e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M3.333,1.667A1.667,1.667,0,1,1,1.667,0,1.667,1.667,0,0,1,3.333,1.667Z"
          transform="translate(5.833 5)"
          fill="none"
          stroke="#ff603e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-3"
          data-name="Vector"
          d="M0,5.794,4.108,3.035a1.878,1.878,0,0,1,2.2.117l.275.242a1.858,1.858,0,0,0,2.35,0L12.4.419a1.858,1.858,0,0,1,2.35,0l1.358,1.167"
          transform="translate(2.225 9.998)"
          fill="none"
          stroke="#ff603e"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        />
        <path
          id="Vector-4"
          data-name="Vector"
          d="M0,0H20V20H0Z"
          fill="none"
          opacity="0"
        />
      </svg>
    </>
  );
};

export default OrangeGallery;
