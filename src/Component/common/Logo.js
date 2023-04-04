import React from "react";
import jimdo from "../../Assets/Img/Jimdo-Logo.webp";
import { classNames } from './Utils'
import White from "../../Assets/Img/whiteLogo.svg"

const Logo = () => {
  return (
    <div className="cursor-pointer">
     
        <img src={jimdo} alt="jimdo" />
      
    </div>
  );
};

export default Logo;


export function WhiteLogo({ children, className, ...rest }) {
  return (
    <div
      type="text"
      className={
        classNames(
          "text-6xl font-extrabold text-fcNavy6 ",
          className
        )}
      {...rest}
    >
      <img src={White} alt="whitelogo" />
    </div>
  )
}
