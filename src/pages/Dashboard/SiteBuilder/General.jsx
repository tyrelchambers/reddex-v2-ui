import React, { useContext } from "react";
import styled from "styled-components";
import SiteBuilderGeneralForm from "../../../forms/SiteBuilderGeneralForm";
import { H2 } from "../../../components/headings/h2";
import Subtitle from "../../../components/Subtitle/Subtitle";
import SiteBuilderSocialForm from "../../../forms/SiteBuilderSocialForm";
import Form from "../../../forms/Form";
import { Button } from "../../../components/Button/Button";
import EnabledWarning from "../../../components/EnabledWarning/EnabledWarning";
import { WebsiteContext } from "../../../contexts/websiteContext";

const StyledWrapper = styled.section`
  .text {
    color: ${(props) => props.theme.textLight};
  }
`;

const General = () => {
  const [state, dispatch] = useContext(WebsiteContext);

  return (
    <StyledWrapper>
      <SiteBuilderGeneralForm state={state} dispatch={dispatch} />
      <hr className="mt-10 mb-10" />
      <H2>Social Media</H2>
      <Subtitle>
        The links below will appear as social icons on your site. These are not
        required, and the icons will not appear on your site if you leave them
        blank.
      </Subtitle>
      <div className="mt-10">
        <SiteBuilderSocialForm state={state} dispatch={dispatch} />
      </div>
      <hr className="mt-10 mb-10" />
      <H2 className="mt-10">Delete Website</H2>
      <Subtitle>
        This action is permanent. This will delete your website forever.
      </Subtitle>
      <Form>
        <Button variant="danger" className="w-full mt-6">
          Delete Website
        </Button>
      </Form>
    </StyledWrapper>
  );
};

export default General;
