import React from "react";
import { useParams } from "react-router";
import { H1 } from "../../../components/headings/h1";
import Subtitle from "../../../components/Subtitle/Subtitle";
import WebsiteSaveBanner from "../../../components/WebsiteSaveBanner/WebsiteSaveBanner";
import { useWebsite } from "../../../hooks/useWebsite";
import Colour from "./Colour";
import General from "./General";
import SubmissionForms from "./SubmissionForms";
import Timelines from "./Timelines";

const SiteBuilder = () => {
  const { sub_page } = useParams();
  const { state, dispatch, isChanged } = useWebsite();

  const props = {
    state,
    dispatch,
  };

  return (
    <section className="max-w-xl">
      {isChanged && <WebsiteSaveBanner />}
      <div className="flex justify-between mt-10">
        <div className="flex flex-col">
          <H1>Site Builder</H1>
          <Subtitle className="mt-2">
            Build your website and advertise what you do.
          </Subtitle>
        </div>
        <a href="/" className="text-accent-primary underline">
          View your site
        </a>
      </div>

      <main className="mt-10 max-w-xl">
        {sub_page === "general" && <General {...props} />}
        {sub_page === "colour" && <Colour {...props} />}
        {sub_page === "submission_forms" && <SubmissionForms {...props} />}
        {sub_page === "timelines" && <Timelines {...props} />}
      </main>
    </section>
  );
};

export default SiteBuilder;
