import React from "react";

export const H2 = ({ children, className = "", ...props }) => (
  <h2
    className={`font-bold text-xl text-primary-black ${className}`}
    {...props}
  >
    {children}
  </h2>
);
