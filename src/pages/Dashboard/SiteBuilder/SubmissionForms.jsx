import React from "react";
import styled from "styled-components";
import { H2 } from "../../../components/headings/h2";
import SiteBuilderSubmissonForm from "../../../forms/SiteBuilderSubmissonForm";

const StyledWrapper = styled.section`
  .headline {
    color: ${({ theme }) => theme.text};
  }

  .subtitle {
    color: ${({ theme }) => theme.textLight};
  }
`;

const SubmissionForms = (props) => {
  return (
    <StyledWrapper>
      <H2>Submission Form</H2>
      <SiteBuilderSubmissonForm {...props} />
    </StyledWrapper>
  );
};

export default SubmissionForms;
