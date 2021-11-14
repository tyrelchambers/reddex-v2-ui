import React from "react";

const InputWrapper = ({ label, htmlFor, children }) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold text-gray-700 mb-2 " htmlFor={htmlFor}>
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
