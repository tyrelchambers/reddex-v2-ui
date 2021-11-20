import React from "react";
import Input from "../components/Input/Input";
import InputWrapper from "../components/InputWrapper/InputWrapper";
import Form from "./Form";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faPatreon,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

const SiteBuilderSocialForm = () => {
  return (
    <Form>
      <InputWrapper label="Twitter">
        <Input icon={faTwitter} placeholder="@username" />
      </InputWrapper>

      <InputWrapper label="Instagram">
        <Input icon={faInstagram} placeholder="@username" />
      </InputWrapper>

      <InputWrapper label="Facebook Link">
        <Input icon={faFacebook} placeholder="Facebook link" />
      </InputWrapper>

      <InputWrapper label="Patreon Link">
        <Input icon={faPatreon} placeholder="Patreon link" />
      </InputWrapper>

      <InputWrapper label="Youtube Link">
        <Input icon={faYoutube} placeholder="Youtube link" />
      </InputWrapper>

      <InputWrapper label="Podcast Link">
        <Input icon={faPodcast} placeholder="Podcast link" />
      </InputWrapper>
    </Form>
  );
};

export default SiteBuilderSocialForm;
