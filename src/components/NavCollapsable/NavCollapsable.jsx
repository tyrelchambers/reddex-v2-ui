import { faChevronRight } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const StyledCollapsable = styled.details`
  summary {
    list-style-type: none;
    transition: all 0.2s ease-in-out;
  } /* Firefox */
  summary::-webkit-details-marker {
    display: none;
  } /* Chrome */
  summary::marker {
    display: none;
  }
`;

const NavCollapsable = ({ header, body, className = "" }) => {
  const [state, setState] = useState(false);
  return (
    <StyledCollapsable
      className={className}
      toggled={state}
      onToggle={() => setState(!state)}
    >
      <summary className="flex items-center justify-between p-4">
        <span className="text-gray-600">{header}</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="transition-all"
          style={{
            transform: state ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      </summary>
      {state && <div className="collapsable-body">{body}</div>}
    </StyledCollapsable>
  );
};

export default NavCollapsable;
