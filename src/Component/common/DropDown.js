import React from "react";

const DropDown = ({ show, children, className }) => {
  if (!show) return null;

  return (
    <div className={className}>
      <div className="shadow-lg rounded-md p-6 ">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DropDown;
