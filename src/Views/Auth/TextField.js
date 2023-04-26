import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    
    <div className="mb-2 items-center justify-center group">
      <input
        className={`form-control border-2  w-full h-12 pl-14 text-sm mb-1 items-center justify-center outline-primary  shadow-none ${
          meta.touched && meta.error ? 'border-fcred' : "border-fcGray4"
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
