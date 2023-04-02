import React from "react";

const MessageIcon = ({className, onClick}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        className={className}
        onClick={onClick}
      >
        <g
          id="vuesax_linear_message-2"
          data-name="vuesax/linear/message-2"
          transform="translate(-492 -314)"
        >
          <g id="message-2" transform="translate(492 314)">
            <path
              id="Vector"
              d="M0,0H7.583"
              transform="translate(9.208 11.375)"
              fill="none"
              stroke="rgba(42,46,67,0.8)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M5.417,17.333H9.75l4.821,3.207a1.08,1.08,0,0,0,1.679-.9V17.333a5.118,5.118,0,0,0,5.417-5.417v-6.5A5.118,5.118,0,0,0,16.25,0H5.417A5.118,5.118,0,0,0,0,5.417v6.5A5.118,5.118,0,0,0,5.417,17.333Z"
              transform="translate(2.167 2.632)"
              fill="none"
              stroke="rgba(42,46,67,0.8)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H26V26H0Z"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default MessageIcon;
