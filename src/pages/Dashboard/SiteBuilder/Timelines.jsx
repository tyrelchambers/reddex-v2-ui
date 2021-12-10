import React from "react";
import EnabledWarning from "../../../components/EnabledWarning/EnabledWarning";
import { H2 } from "../../../components/headings/h2";
import SiteBuilderTimelinesForm from "../../../forms/SiteBuilderTimelinesForm";

const Timelines = (props) => {
  if (!props.state.enabled) {
    return <EnabledWarning />;
  }

  return (
    <div>
      <H2>Timelines</H2>
      <SiteBuilderTimelinesForm {...props} />
    </div>
  );
};

export default Timelines;
