import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 items-center justify-center">
      <input
        className={`form-control  w-full  h-12 opacity-100 bg-[#F7F7F7]  pl-14 text-sm mb-1 items-center justify-center  outline-none shadow-none ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />

      <ErrorMessage
        component="div"
        name={field.name}
        className="text-fcred font-bold max-w-xs text-[12px]"
      />
    </div>
  );
};
