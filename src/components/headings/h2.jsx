import React from "react";

export const H2 = ({ children, className = "", ...props }) => (
  <h2
    className={`font-black text-xl text-primary-black ${className}`}
    {...props}
  >
    {children}
  </h2>
);
