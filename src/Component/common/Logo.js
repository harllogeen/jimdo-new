import React from "react";
import jimdo from "../../Assets/Img/Jimdo-Logo.webp";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="cursor-pointer">
      <Link to="/">
        <img src={jimdo} alt="jimdo" />
      </Link>
    </div>
  );
};

export default Logo;
