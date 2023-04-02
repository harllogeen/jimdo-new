import React from "react";
import { classNames } from './Utils'

const Title = ({ children, ...rest }) => {
  return <div {...rest} className="text-fcDark text-5xl font-semibold">{children}</div>;
};

export default Title;




export function BigTitle({ children, className, ...rest }) {
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
      {children}
    </div>
  )
}

export function BlogTitle({ children, className, ...rest }) {
  return (
    <div
      type="text"
      className={
        classNames(
          "text-4xl font-extrabold text-fcNavy6",
          className
        )}
      {...rest}
    >
      {children}
    </div>
  )
}
