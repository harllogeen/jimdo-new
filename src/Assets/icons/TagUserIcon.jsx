import React from "react";

const TagUserIcon = ({ className, onClick }) => {
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
          id="vuesax_linear_tag-user"
          data-name="vuesax/linear/tag-user"
          transform="translate(-556 -252)"
        >
          <g id="tag-user" transform="translate(556 252)">
            <path
              id="Vector"
              d="M12.5,14.05h-.633a2.49,2.49,0,0,0-1.767.725L8.675,16.183a1.685,1.685,0,0,1-2.358,0L4.892,14.775a2.5,2.5,0,0,0-1.767-.725H2.5A2.486,2.486,0,0,1,0,11.575v-9.1A2.486,2.486,0,0,1,2.5,0h10A2.486,2.486,0,0,1,15,2.475v9.092A2.493,2.493,0,0,1,12.5,14.05Z"
              transform="translate(2.5 1.667)"
              fill="none"
              stroke="#ff603e"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
            <g id="Group" transform="translate(6.877 4.208)">
              <path
                id="Vector-2"
                data-name="Vector"
                d="M1.692,3.25H1.567A1.626,1.626,0,1,1,3.25,1.625,1.6,1.6,0,0,1,1.692,3.25Z"
                transform="translate(1.49)"
                fill="none"
                stroke="#ff603e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
              <path
                id="Vector-3"
                data-name="Vector"
                d="M.831.625a1.505,1.505,0,0,0,0,2.692,4.475,4.475,0,0,0,4.583,0,1.505,1.505,0,0,0,0-2.692A4.514,4.514,0,0,0,.831.625Z"
                transform="translate(0 5.133)"
                fill="none"
                stroke="#ff603e"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              />
            </g>
            <path
              id="Vector-4"
              data-name="Vector"
              d="M0,0H20V20H0Z"
              fill="none"
              opacity="0"
            />
          </g>
        </g>
      </svg>
    </>
  );
};

export default TagUserIcon;
