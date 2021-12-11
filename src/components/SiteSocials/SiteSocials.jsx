import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
import { faPodcast } from "@fortawesome/pro-duotone-svg-icons";

const SiteSocials = ({ socials }) => {
  const { facebook, twitter, instagram, youtube, podcast } = socials;

  return (
    <div className="flex gap-6 socials">
      {facebook && (
        <a href={facebook} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
      )}
      {youtube && (
        <a href={youtube} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
        </a>
      )}
      {podcast && (
        <a href={podcast} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPodcast} className="social-icon" />
        </a>
      )}
    </div>
  );
};

export default SiteSocials;
