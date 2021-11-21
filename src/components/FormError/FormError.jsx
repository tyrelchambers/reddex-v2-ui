import { faFaceThinking } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FormError = ({ message }) => {
  return (
    <div className="bg-red-500 px-3 py-2 rounded-md mt-2">
      <p className="text-white">
        <FontAwesomeIcon icon={faFaceThinking} className="mr-4" /> {message}
      </p>
    </div>
  );
};

export default FormError;
