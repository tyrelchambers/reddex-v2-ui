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

const SiteBuilderSocialForm = ({ state, dispatch }) => {
  return (
    <Form>
      <InputWrapper label="Twitter">
        <Input
          icon={faTwitter}
          placeholder="@username"
          value={state.social.twitter}
          onInput={(e) =>
            dispatch({
              type: "SET_SOCIAL",
              field: "twitter",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Instagram">
        <Input
          icon={faInstagram}
          placeholder="@username"
          value={state.social.instagram}
          onInput={(e) =>
            dispatch({
              type: "SET_SOCIAL",
              field: "instagram",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Facebook Link">
        <Input
          icon={faFacebook}
          placeholder="Facebook link"
          value={state.social.facebook}
          onInput={(e) =>
            dispatch({
              type: "SET_SOCIAL",
              field: "facebook",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Patreon Link">
        <Input
          icon={faPatreon}
          placeholder="Patreon link"
          value={state.social.patreon}
          onInput={(e) =>
            dispatch({
              type: "SET_SOCIAL",
              field: "patreon",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Youtube Link">
        <Input
          icon={faYoutube}
          placeholder="Youtube link"
          value={state.social.youtube}
          onInput={(e) =>
            dispatch({
              type: "SET_SOCIAL",
              field: "youtube",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>

      <InputWrapper label="Podcast Link">
        <Input
          icon={faPodcast}
          placeholder="Podcast link"
          value={state.social.podcast}
          onInput={(e) =>
            dispatch({
              type: "SET_SOCIAL",
              field: "podcast",
              payload: e.target.value,
            })
          }
        />
      </InputWrapper>
    </Form>
  );
};

export default SiteBuilderSocialForm;
