import React from "react";
import styled from "styled-components";
import { getStringLength } from "../../utils/getStringLength";

const StyledWrapper = styled.div`
  p {
    color: ${(props) =>
      props.strLength > props.maxLength ? "red" : props.theme.textSuperLight};
  }
`;

const StringCount = ({ str, maxLength }) => {
  return (
    <StyledWrapper
      strLength={str.length}
      maxLength={maxLength}
      className="mt-2"
    >
      <p>{getStringLength(str, maxLength)}</p>
    </StyledWrapper>
  );
};

export default StringCount;
