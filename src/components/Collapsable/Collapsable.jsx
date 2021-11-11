import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const StyledCollapsable = styled.details`
  summary {
    list-style-type: none;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) =>
      props.toggled ? "var(--accent-primary)" : "transparent"};
    border-radius: 0.5rem;
    border: 2px solid
      ${(props) => (props.toggled ? "var(--accent-primary)" : "var(--gray)")};
    * {
      color: ${(props) => (props.toggled ? "white" : "var(--accent-primary)")};
    }
  } /* Firefox */
  summary::-webkit-details-marker {
    display: none;
  } /* Chrome */
  summary::marker {
    display: none;
  }
`;

const Collapsable = ({ header, body, className = "" }) => {
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
      {state && <>{body}</>}
    </StyledCollapsable>
  );
};

export default Collapsable;
