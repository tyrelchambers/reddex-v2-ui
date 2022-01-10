import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OpenSearch = ({ open, setOpen }) => {
  return (
    <div
      className="md:hidden flex items-center justify-between border-b-2 border-gray-100 pb-4 mb-4"
      onClick={() => setOpen(!open)}
    >
      <p className="text-light">Open search options</p>
      <FontAwesomeIcon
        icon={faChevronRight}
        className={`text-light transition-all  ${open && "rotate-90"}`}
      />
    </div>
  );
};

export default OpenSearch;
