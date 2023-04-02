import React from "react";

const LogoutIcon = ({ className, onClick }) => {
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
          id="vuesax_bold_logout"
          data-name="vuesax/bold/logout"
          transform="translate(-748 -444)"
        >
          <g id="logout" transform="translate(748 444)">
            <path
              id="Vector"
              d="M6.5,0H4.333A4.027,4.027,0,0,0,0,4.333V7.708H5.208a.625.625,0,0,1,0,1.25H0v3.375a4.027,4.027,0,0,0,4.333,4.333H6.492a4.027,4.027,0,0,0,4.333-4.333v-8A4.016,4.016,0,0,0,6.5,0Z"
              transform="translate(7.5 1.667)"
              fill="#2a2e43"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M2.131,2.79,3.856,1.065A.618.618,0,0,0,4.04.623.6.6,0,0,0,3.856.181a.629.629,0,0,0-.883,0L.181,2.973a.629.629,0,0,0,0,.883L2.973,6.648a.625.625,0,0,0,.883-.883L2.131,4.04h3.7V2.79Z"
              transform="translate(1.669 6.585)"
              fill="#2a2e43"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H20V20H0Z"
              transform="translate(20 20) rotate(180)"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default LogoutIcon;
