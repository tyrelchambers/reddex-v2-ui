import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faInputText } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import { formatSiteUrl } from "../utils/formatSiteUrl";
import Form from "./Form";
import Textarea from "../components/Textarea/Textarea";
import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: ${(props) => props.theme.backgroundSecondary};
  width: 100%;
  aspect-ratio: 16/9;

  p {
    color: ${(props) => props.theme.textSuperLight};
  }
`;

const SiteBuilderGeneralForm = () => {
  return (
    <Form>
      <InputWrapper label="Subdomain" htmlFor="subdomain">
        <Input
          customIcon={<p className="font-bold">https://</p>}
          placeholder="your_domain"
        />
      </InputWrapper>

      <p className="text">
        <FontAwesomeIcon icon={faGlobe} className="text-accent-primary mr-2" />
        {formatSiteUrl("storiesaftermidnight")}
      </p>

      <InputWrapper label="Site Name" htmlFor="siteName" className="mt-6">
        <Input icon={faInputText} placeholder="Stories After Midnight" />
      </InputWrapper>

      <InputWrapper label="Site Description" htmlFor="siteDescription">
        <Textarea placeholder="Who are you and what do you do?" />
      </InputWrapper>

      <InputWrapper label="Banner Image">
        <StyledBanner className="banner-image rounded-lg flex items-center justify-center">
          <p className="font-bold">Upload a banner</p>
        </StyledBanner>
      </InputWrapper>
    </Form>
  );
};

export default SiteBuilderGeneralForm;
