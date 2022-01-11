import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background: ${(props) => props.theme.backgroundSecondary};
  border-color: ${(props) => props.theme.border};
`;

const OpenSearch = ({ open, setOpen }) => {
  return (
    <StyledWrapper
      className="lg:hidden flex items-center justify-between p-2 rounded-md border-2  mb-4"
      onClick={() => setOpen(!open)}
    >
      <p className="text-light font-bold text-sm">Open search options</p>
      <FontAwesomeIcon
        icon={faChevronRight}
        className={`text-light transition-all  ${open && "rotate-90"}`}
      />
    </StyledWrapper>
  );
};

export default OpenSearch;
