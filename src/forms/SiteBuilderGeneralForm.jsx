import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck, faInputText } from "@fortawesome/pro-duotone-svg-icons";
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

  .domain-check {
    background-color: ${(props) => props.theme.backgroundSecondary};
  }
`;

const SiteBuilderGeneralForm = ({ state, dispatch }) => {
  return (
    <Form>
      <InputWrapper label="Subdomain" htmlFor="subdomain">
        <Input
          customIcon={<p className="font-bold">https://</p>}
          placeholder="your_domain"
          value={state.general.domain}
          onInput={(e) =>
            dispatch({
              type: "SET_GENERAL",
              field: "domain",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <p className="text flex items-center gap-6 text-xs">
        <span className="flex items-center">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-accent-primary mr-2"
          />
          {formatSiteUrl(state.general.domain)}
        </span>

        <span className="domain-check flex items-center">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-green-500 mr-2"
          />
          <p className="text-green-500 text-xs">domain available</p>
        </span>
      </p>

      <InputWrapper label="Site Name" htmlFor="siteName" className="mt-6">
        <Input
          icon={faInputText}
          placeholder="Your site's headline"
          value={state.general.siteName}
          onInput={(e) =>
            dispatch({
              type: "SET_GENERAL",
              field: "siteName",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Site Description" htmlFor="siteDescription">
        <Textarea
          placeholder="Who are you and what do you do?"
          value={state.general.description}
          onInput={(e) =>
            dispatch({
              type: "SET_GENERAL",
              field: "description",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Logo">
        <StyledBanner className="logo-image rounded-lg flex items-center justify-center">
          <p className="font-bold">Upload a logo</p>
        </StyledBanner>
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
