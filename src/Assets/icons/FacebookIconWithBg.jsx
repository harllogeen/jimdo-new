import React from "react";

const FacebookIconWithBg = ({ className, onClick }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        className={className}
        onClick={onClick}
      >
        <g
          id="icons8-facebook_2_"
          data-name="icons8-facebook (2)"
          transform="translate(-6 -6)"
        >
          <path
            id="Path_2873"
            data-name="Path 2873"
            d="M38,33.556A4.444,4.444,0,0,1,33.556,38H10.444A4.444,4.444,0,0,1,6,33.556V10.444A4.444,4.444,0,0,1,10.444,6H33.556A4.444,4.444,0,0,1,38,10.444Z"
            fill="#3f51b5"
          />
          <path
            id="Path_2874"
            data-name="Path 2874"
            d="M33.1,23.667H30.111V35.222H25.667V23.667H23V20.111h2.667V17.969c0-3.118,1.3-4.969,4.971-4.969h3.029v3.556H31.634c-1.43,0-1.523.533-1.523,1.532v2.024h3.556Z"
            transform="translate(-1.889 -0.778)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default FacebookIconWithBg;
