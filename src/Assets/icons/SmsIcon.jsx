import React from "react";

const SmsIcon = ({ className, onClick }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className={className}
        onClick={onClick}
      >
        <g id="icons8-messages" transform="translate(-6 -6)">
          <path
            id="Path_2864"
            data-name="Path 2864"
            d="M31.778,6H12.222A6.222,6.222,0,0,0,6,12.222V31.778A6.222,6.222,0,0,0,12.222,38H31.778A6.222,6.222,0,0,0,38,31.778V12.222A6.222,6.222,0,0,0,31.778,6Z"
            fill="#00de00"
          />
          <path
            id="Path_2865"
            data-name="Path 2865"
            d="M22.556,12C16.173,12,11,16.378,11,21.778c0,3.621,2.332,6.775,5.789,8.465a10.452,10.452,0,0,1-2.234,3.091,14.076,14.076,0,0,0,5.277-2.062,13.511,13.511,0,0,0,2.723.284c6.382,0,11.556-4.378,11.556-9.778S28.938,12,22.556,12Z"
            transform="translate(-0.556 -0.667)"
            fill="#fff"
          />
        </g>
      </svg>
    </>
  );
};

export default SmsIcon;
