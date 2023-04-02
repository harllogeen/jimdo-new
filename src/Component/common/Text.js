import React from "react";
import { classNames } from './Utils'

export function PrimaryText({ children, className, ...rest }) {
    return (
      <div
        type="text"
        className={
          classNames(
            "text-xl font-thin text-fcDark ",
            className
          )}
        {...rest}
      >
        {children}
      </div>
    )
  }

  export function SecondaryText({ children, className, ...rest }) {
    return (
      <div
        type="text"
        className={
          classNames(
            "text-xl font-GilroyRegular text-fcDark py-6 ",
            className
          )}
        {...rest}
      >
        {children}
      </div>
    )
  }