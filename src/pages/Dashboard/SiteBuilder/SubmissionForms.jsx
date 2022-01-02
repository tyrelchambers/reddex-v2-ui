import React, { useContext } from "react";
import styled from "styled-components";
import EnabledWarning from "../../../components/EnabledWarning/EnabledWarning";
import { H2 } from "../../../components/headings/h2";
import { WebsiteContext } from "../../../contexts/websiteContext";
import SiteBuilderSubmissonForm from "../../../forms/SiteBuilderSubmissonForm";

const StyledWrapper = styled.section`
  .headline {
    color: ${({ theme }) => theme.text};
  }

  .subtitle {
    color: ${({ theme }) => theme.textLight};
  }
`;

const SubmissionForms = () => {
  const [state, dispatch] = useContext(WebsiteContext);

  return (
    <StyledWrapper>
      <H2>Submission Form</H2>
      <SiteBuilderSubmissonForm state={state} dispatch={dispatch} />
    </StyledWrapper>
  );
};

export default SubmissionForms;
