import React from "react";
import { Link } from "react-location";
import SiteSocials from "../../components/SiteSocials/SiteSocials";

const CustomHeader = ({ website }) => {
  return (
    <header className="flex items-center p-4 sm:justify-between sm:flex-row mt-4 flex-col gap-4">
      <Link to="/" className="flex items-center">
        {website.general.logo && (
          <img
            src={website.general.logo}
            className="w-10 h-10 mr-2 rounded-full"
          />
        )}
        <h1 className="font-bold site-name text">{website.general.siteName}</h1>
      </Link>
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
