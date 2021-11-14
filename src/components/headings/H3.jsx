import React from "react";

export const H3 = ({ children, className = "", ...props }) => (
  <h3
    className={`font-bold text-md text-primary-black  ${className}`}
    {...props}
  >
    {children}
  </h3>
);
