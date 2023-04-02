import React from "react";
import { classNames } from './Utils'

const Button = ({ className, onClick, type, children }) => {
  return (
    <div>
      <button className={className} onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  );
};

export default Button;

export function SecondaryButton({ children, className, ...rest }) {
  return (
    <div
      type="text"
      className={
        classNames(
          "bg-transparent border-2 border-primary w-96 px-2 py-4  text-primary  font-GilroySemiBold cursor-pointer  text-xl my-5 text-center hover:border-2 border-fcGray hover:bg-primary hover:text-white",
          className
        )}
      {...rest}
    >
      {children}
    </div>
  )
}