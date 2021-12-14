import { faLink, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { H1 } from "../../../components/headings/h1";
import { H2 } from "../../../components/headings/h2";
import { H3 } from "../../../components/headings/H3";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { redditUrl } from "../../../constants";
import NotificationsForm from "../../../forms/NotificationsForm";
import ProfileForm from "../../../forms/ProfileForm";
import { useSearched } from "../../../hooks/useSearched";

const StyledLink = styled.a`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textLight};
`;

const StyledWrapper = styled.section`
  .searches {
    background-color: ${(props) => props.theme.backgroundSecondary};
    color: ${(props) => props.theme.text};
    svg path {
      fill: ${(props) => props.theme.textLight};
    }
  }
`;

const Profile = ({ user }) => {
  const { searchedQuery, deleteSearch } = useSearched();

  return (
    <StyledWrapper className="max-w-lg">
      <H1>Profile</H1>
      <ProfileForm user={user} />

      <div className="mt-10 flex flex-col gap-4">
        <H2>Recent Searches</H2>
        {searchedQuery.data && searchedQuery.data.length === 0 && (
          <p className="text-light text-sm">Nothing to show</p>
        )}
        {searchedQuery.data &&
          searchedQuery.data.map((item) => (
            <div className="p-3 searches rounded-md">
              <FontAwesomeIcon
                icon={faTimes}
                className="mr-4"
                onClick={() => deleteSearch.mutate(item)}
              />
              {item.subreddit}
            </div>
          ))}
      </div>

      <hr className="mt-10 mb-10" />
      {/* <H2>Notifications</H2>
      <H3 className="mt-8">Emails</H3>
      <NotificationsForm />

      <hr className="mt-10 mb-10" /> */}

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
    </StyledWrapper>
  );
};

export default Profile;
