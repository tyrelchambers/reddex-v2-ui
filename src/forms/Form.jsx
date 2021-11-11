import React from "react";

const Form = ({ className = "", children }) => {
  return <form className={`flex flex-col gap-4 ${className}`}>{children}</form>;
};

export default Form;
