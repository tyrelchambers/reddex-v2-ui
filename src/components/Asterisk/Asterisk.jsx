import React from "react";
import styled from "styled-components";

const Styled = styled.p`
  color: ${(props) => props.theme.accentPrimary};
`;

const Asterisk = () => {
  return <Styled className="mr-2">*</Styled>;
};

export default Asterisk;
