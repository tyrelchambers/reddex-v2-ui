import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Input = ({ type = "text", className = "", icon, ...props }) => (
  <div className="flex items-center w-full h-12 rounded-md overflow-hidden">
    {typeof icon === "string" && (
      <div className="w-16 h-full bg-primary-dark-blue flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-white text-xl" />
      </div>
    )}
    {typeof icon === "object" && (
      <div className="w-16 h-full bg-primary-dark-blue flex items-center justify-center">
        {icon}
      </div>
    )}
    <input
      type={type}
      className={`bg-gray-100 px-4 h-full  w-full ${className}`}
      {...props}
    />
  </div>
);

export default Input;
