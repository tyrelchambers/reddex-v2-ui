import React, { useContext } from "react";
import { H2 } from "../../../components/headings/h2";
import { WebsiteContext } from "../../../contexts/websiteContext";
import SiteBuilderTimelinesForm from "../../../forms/SiteBuilderTimelinesForm";

const Timelines = () => {
  const [state, dispatch] = useContext(WebsiteContext);

  return (
    <div>
      <H2>Timelines</H2>
      <SiteBuilderTimelinesForm state={state} dispatch={dispatch} />
    </div>
  );
};

export default Timelines;
