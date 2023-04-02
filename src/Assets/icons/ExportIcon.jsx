import React from "react";

const ExportIcon = ({ className, onClick }) => {
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
          id="vuesax_bold_export"
          data-name="vuesax/bold/export"
          transform="translate(-556)"
        >
          <g id="export" transform="translate(556)">
            <path
              id="Vector"
              d="M12.333,0H8.958V5.208a.625.625,0,1,1-1.25,0V0H4.333A4.027,4.027,0,0,0,0,4.333V6.492a4.029,4.029,0,0,0,4.333,4.342h7.992A4.027,4.027,0,0,0,16.658,6.5V4.333A4.016,4.016,0,0,0,12.333,0Z"
              transform="translate(1.667 7.5)"
              fill="#2a2e43"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M4.04,2.131,5.765,3.856a.624.624,0,0,0,.883,0,.629.629,0,0,0,0-.883L3.856.181a.629.629,0,0,0-.883,0L.181,2.973a.625.625,0,0,0,.883.883L2.79,2.131v3.7H4.04Z"
              transform="translate(6.585 1.669)"
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

export default ExportIcon;
