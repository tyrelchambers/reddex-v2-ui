import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React from "react";

const StyledLoader = styled.div`
  color: ${(props) => props.theme.accentPrimary};
`;

const Loader = ({ size }) => {
  return (
    <StyledLoader className="w-full flex justify-center mt-10 ">
      <FontAwesomeIcon icon={faSpinnerThird} className="fa-spin" size={size} />
    </StyledLoader>
  );
};

export default Loader;
