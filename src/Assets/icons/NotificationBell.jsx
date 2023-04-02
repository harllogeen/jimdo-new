import React from "react";

const NotificationBell = ({ className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        className={className}
      >
        <g
          id="vuesax_bold_notification"
          data-name="vuesax/bold/notification"
          transform="translate(-172 -188)"
        >
          <g id="notification" transform="translate(172 188)">
            <path
              id="Vector"
              d="M40.078,33.307,37.412,28.88a9.907,9.907,0,0,1-1.067-3.947V18.187A15.758,15.758,0,0,0,27.358,3.973,7.8,7.8,0,0,0,20.478,0a7.9,7.9,0,0,0-6.907,4.053,15.809,15.809,0,0,0-8.8,14.133v6.747a9.669,9.669,0,0,1-1.067,3.92L1.012,33.307A6.233,6.233,0,0,0,4.505,42.72a49.874,49.874,0,0,0,16.053,2.613,50.585,50.585,0,0,0,16.053-2.587,6.431,6.431,0,0,0,3.467-9.44Z"
              transform="translate(11.495 5.333)"
              fill="currentColor"
            />
            <path
              id="Vector-2"
              data-name="Vector"
              d="M15.067.027A8.039,8.039,0,0,1,7.52,5.333,7.907,7.907,0,0,1,1.867,2.96,7.363,7.363,0,0,1,0,0C.347.053.693.08,1.067.133,1.68.213,2.32.293,2.96.347,4.48.48,6.027.56,7.573.56c1.52,0,3.04-.08,4.533-.213.56-.053,1.12-.08,1.653-.16C14.187.133,14.613.08,15.067.027Z"
              transform="translate(24.48 53.333)"
              fill="currentColor"
            />
            <path
              id="Vector-3"
              data-name="Vector"
              d="M0,0H64V64H0Z"
              transform="translate(64 64) rotate(180)"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default NotificationBell;
