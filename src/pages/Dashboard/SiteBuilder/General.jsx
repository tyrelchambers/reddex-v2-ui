import React from "react";
import styled from "styled-components";
import SiteBuilderGeneralForm from "../../../forms/SiteBuilderGeneralForm";

const StyledWrapper = styled.section`
  .text {
    color: ${(props) => props.theme.textLight};
  }
`;

const General = () => {
  return (
    <StyledWrapper className="max-w-xl">
      <SiteBuilderGeneralForm />
    </StyledWrapper>
  );
};

export default General;
