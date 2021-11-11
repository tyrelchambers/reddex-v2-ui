import React from "react";

const Form = ({ className = "", children }) => {
  return <form className={`flex flex-col ${className}`}>{children}</form>;
};

export default Form;
