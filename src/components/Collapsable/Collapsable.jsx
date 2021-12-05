import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledDropdown = styled.section`
  .collapse-header {
    list-style-type: none;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) =>
      props.toggled ? props.theme.accent2 : "transparent"};
    padding: 1rem;
    border-radius: ${(props) => (props.toggled ? "0.5em" : "0")};
    cursor: pointer;
    * {
      color: ${(props) => (props.toggled ? "white" : "var(--accent-primary)")};
    }

    &:hover {
      background-color: ${(props) =>
        !props.toggled ? props.theme.backgroundSecondary : "accent2"};
    }
  }
`;

const StyledNav = styled.section`
  .collapse-header {
    list-style-type: none;
    transition: all 0.2s ease-in-out;
    background-color: ${(props) =>
      props.toggled ? props.theme.accentPrimary : "transparent"};
    border-radius: 0.5rem 0.5em 0 0;
    padding: 0.5em 1em;
    * {
      color: ${(props) =>
        props.toggled ? "white !important" : props.theme.text};
    }
  }

  .collapsable-body {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.accentPrimaryLight};
    border-radius: 0 0 0.5rem 0.5rem;
    font-weight: 300;
  }
`;

const Collapsable = ({
  header,
  className = "",
  isNav,
  isActive,
  children,
  onClick,
}) => {
  const [state, setState] = useState(isActive);
  const StyledCollapsable = isNav ? StyledNav : StyledDropdown;

  useEffect(() => {
    setState(isActive);
  }, [isActive]);

  return (
    <StyledCollapsable className={className} toggled={state}>
      <div
        className="flex items-center justify-between collapse-header"
        onClick={() => {
          setState(!state);
          if (onClick) onClick();
        }}
      >
        <span className="text-gray-600 flex items-center">{header}</span>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="transition-all text-sm"
          style={{
            transform: state ? "rotate(90deg)" : "rotate(0deg)",
          }}
        />
      </div>
      {state && <div className="collapsable-body">{children}</div>}
    </StyledCollapsable>
  );
};

export default Collapsable;
