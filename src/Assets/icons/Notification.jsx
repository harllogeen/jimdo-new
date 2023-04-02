import React from "react";

const Notification = ({ className, onClick }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        className={`text-fcWhite ${className}`}
        onClick={onClick}
      >
        <g
          id="vuesax_linear_notification"
          data-name="vuesax/linear/notification"
          transform="translate(-171 -188)"
        >
          <g id="notification" transform="translate(171 188)">
            <path
              id="Vector"
              d="M8.716,0a6.505,6.505,0,0,0-6.5,6.5V9.631A5.177,5.177,0,0,1,1.6,11.863L.353,13.932a2.079,2.079,0,0,0,1.17,3.174,22.665,22.665,0,0,0,14.376,0,2.169,2.169,0,0,0,1.17-3.174l-1.246-2.069a5.32,5.32,0,0,1-.607-2.232V6.5A6.519,6.519,0,0,0,8.716,0Z"
              transform="translate(4.305 3.153)"
              fill="currentColor"
              stroke="rgba(42,46,67,0.8)"
              stroke-linecap="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M4.008,1.365a6.559,6.559,0,0,0-1.04-.217A7.317,7.317,0,0,0,0,1.365a2.154,2.154,0,0,1,4.008,0Z"
              transform="translate(11.017 2.102)"
              fill="currentColor"
              stroke="rgba(42,46,67,0.8)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M6.5,0A3.26,3.26,0,0,1,3.25,3.25,3.261,3.261,0,0,1,.953,2.3,3.261,3.261,0,0,1,0,0"
              transform="translate(9.772 20.648)"
              fill="currentColor"
              stroke="rgba(42,46,67,0.8)"
              stroke-width="1.5"
            />
            <path
              id="Vector-4"
              data-name="Vector"
              d="M0,0H26V26H0Z"
              fill="currentColor"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default Notification;
