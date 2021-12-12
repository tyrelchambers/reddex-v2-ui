import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { H1 } from "../../../components/headings/h1";
import RToggle from "../../../components/RToggle/RToggle";
import Subtitle from "../../../components/Subtitle/Subtitle";
import WebsiteSaveBanner from "../../../components/WebsiteSaveBanner/WebsiteSaveBanner";
import { websiteReducer } from "../../../reducers/websiteReducer";
import Colour from "./Colour";
import General from "./General";
import SubmissionForms from "./SubmissionForms";
import Timelines from "./Timelines";
import { initialState } from "../../../constants/website";
import { isObjectDifferent } from "../../../utils/isObjectDifferent";
import { useWebsite } from "../../../hooks/useWebsite";

const SiteBuilder = () => {
  const { sub_page } = useParams();
  const { websiteQuery, updateWebsiteMutation } = useWebsite();
  const [state, dispatch] = useReducer(websiteReducer, initialState);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    if (websiteQuery.data?.config) {
      dispatch({
        type: "INIT_WEBSITE",
        payload: JSON.parse(JSON.stringify(websiteQuery.data.config)),
      });
    }
  }, [websiteQuery.data]);

  useEffect(() => {
    setIsChanged(isObjectDifferent(websiteQuery.data?.config, state));
  }, [state, websiteQuery.data?.config]);

  const reset = () => {
    dispatch({ type: "RESET", payload: websiteQuery.data.config });
  };

  const props = {
    state,
    dispatch,
  };

  const saveHandler = () => {
    updateWebsiteMutation.mutate(state);
  };

  return (
    <section className="max-w-2xl">
      {isChanged && <WebsiteSaveBanner reset={reset} save={saveHandler} />}
      <div className="flex justify-between mt-10">
        <div className="flex flex-col">
          <H1>Site Builder</H1>
          <Subtitle className="mt-2">
            Build your website and advertise what you do.
          </Subtitle>
        </div>
        <a href="/submit" className="text-accent-primary underline">
          View your site
        </a>
      </div>

      <hr className="mt-10 mb-10" />
      <div className="flex mb-2">
        <RToggle
          name="timelines"
          className="mr-4 flex items-center"
          checked={state.enabled}
          onChange={(e) =>
            dispatch({
              type: "SET_WEBSITE",
              payload: e.target.checked,
            })
          }
        />
        <div className="flex flex-col">
          <p className="font-bold text">Activate Website</p>
          <p className="text-light">
            Enable your website to be seen by the public.
          </p>
        </div>
      </div>
      <hr className="mt-10 mb-10" />

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
