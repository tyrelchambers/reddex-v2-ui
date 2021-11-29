import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { H1 } from "../../../components/headings/h1";
import { H2 } from "../../../components/headings/h2";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { redditUrl } from "../../../constants";
import ProfileForm from "../../../forms/ProfileForm";

const StyledLink = styled.a`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textLight};
`;

const Profile = ({ user }) => {
  return (
    <section className="max-w-lg">
      <H1>Profile</H1>
      <ProfileForm user={user} />

      <hr className="mt-10 mb-10" />

      <section>
        <H2>Reddit Settings</H2>
        <Subtitle className="mt-2">
          (Re)Link your Reddit if something goes wrong or your Reddit profile
          has been updated.
        </Subtitle>
        <div className="flex">
          <StyledLink
            href={redditUrl}
            className="rounded-lg  p-3 flex w-44 mt-4 items-center justify-center"
          >
            <FontAwesomeIcon icon={faLink} className="mr-4" /> Link to Reddit
          </StyledLink>
        </div>
      </section>
    </section>
  );
};

export default Profile;
