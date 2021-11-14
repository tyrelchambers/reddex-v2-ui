import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";

const StyledDropdown = styled.details`
  summary {
    list-style-type: none;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) =>
      props.toggled ? props.theme.accent2 : props.theme.backgroundMain};
    border-radius: 0.5rem;
    padding: 1rem;
    border: 2px solid
      ${(props) =>
        props.toggled ? props.theme.accent2 : props.theme.accentPrimary};
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

const StyledNav = styled.details`
  summary {
    list-style-type: none;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) =>
      props.toggled ? props.theme.accentPrimary : props.theme.backgroundMain};
    border-radius: 0.5rem 0.5em 0 0;
    padding: 0.5em 1em;
    * {
      color: ${(props) =>
        props.toggled ? "white !important" : props.theme.text};
    }
  } /* Firefox */
  summary::-webkit-details-marker {
    display: none;
  } /* Chrome */
  summary::marker {
    display: none;
  }

  .collapsable-body {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.accentPrimaryLight};
    color: ${(props) => props.theme.text};
    border-radius: 0 0 0.5rem 0.5rem;
    font-weight: 300;
  }
`;

const Collapsable = ({ header, body, className = "", isNav }) => {
  const [state, setState] = useState(false);
  const StyledCollapsable = isNav ? StyledNav : StyledDropdown;

  return (
    <StyledCollapsable
      className={className}
      toggled={state}
      onToggle={() => setState(!state)}
    >
      <summary className="flex items-center justify-between">
        <span className="text-gray-600 flex items-center">{header}</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="transition-all text-sm"
          style={{
            transform: state ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      </summary>
      {state && <div className="collapsable-body">{body}</div>}
    </StyledCollapsable>
  );
};

export default Collapsable;
