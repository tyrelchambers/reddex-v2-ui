import React from "react";
import { H2 } from "../../../components/headings/h2";
import SiteBuilderTimelinesForm from "../../../forms/SiteBuilderTimelinesForm";

const Timelines = (props) => {
  return (
    <div>
      <H2>Timelines</H2>
      <SiteBuilderTimelinesForm {...props} />
    </div>
  );
};

export default Timelines;
