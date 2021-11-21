import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { H1 } from "../../../components/headings/h1";
import { H2 } from "../../../components/headings/h2";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { redditUrl } from "../../../constants";
import ProfileForm from "../../../forms/ProfileForm";

const Profile = ({ user }) => {
  return (
    <section className="max-w-lg">
      <H1>Profile</H1>
      <ProfileForm />

      <hr className="mt-10 mb-10" />

      <section>
        <H2>Reddit Settings</H2>
        <Subtitle className="mt-2">
          (Re)Link your Reddit if something goes wrong or your Reddit profile
          has been updated.
        </Subtitle>
        <div className="flex">
          <a
            href={redditUrl}
            className="bg-accent-primary rounded-lg text-white p-3 flex w-44 mt-4 items-center justify-center"
          >
            <FontAwesomeIcon icon={faLink} className="mr-2" /> Link to Reddit
          </a>
        </div>
      </section>
    </section>
  );
};

export default Profile;
