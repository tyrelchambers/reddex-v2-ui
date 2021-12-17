import React from "react";
import { Link } from "react-location";
import SiteSocials from "../../components/SiteSocials/SiteSocials";

const CustomHeader = ({ website }) => {
  return (
    <header className="flex items-center p-4 justify-between">
      <h1 className="font-bold site-name text">{website.general.siteName}</h1>
      <SiteSocials socials={website.social} />
      {website.submissionForm.enabled && (
        <Link to="/submit" className="link text">
          Submit a story
        </Link>
      )}
    </header>
  );
};

export default CustomHeader;
