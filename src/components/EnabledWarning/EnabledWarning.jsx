import { faDiamondExclamation } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const EnabledWarning = () => {
  return (
    <StyledDiv className="p-4 rounded-lg ">
      <p className="text-light">
        <FontAwesomeIcon
          icon={faDiamondExclamation}
          className="text-yellow-500 mr-4"
        />{" "}
        Please enable your site
      </p>
    </StyledDiv>
  );
};

export default EnabledWarning;
